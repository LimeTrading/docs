# Unique header generation
require 'middleman-core/renderers/redcarpet'
require 'digest'
require 'nokogiri'

class UniqueHeadCounter < Middleman::Renderers::MiddlemanRedcarpetHTML

  def initialize
    super
    @head_count = {}
  end

  def postprocess(full_document)
    @doc = Nokogiri::HTML.fragment(full_document)

    @sections = Array.new
    @section = nil?

    @doc.children.each { |el|
      if el.name[ /h([1-2])/i, 1 ].to_i > 0
        if @section != nil?
          @sections.push(@section)
        end

        @section = @doc.document.create_element "section", :class => "method"
        @section.add_child '<div class="left"></div>'
        @section.add_child '<div class="right"></div>'
      end

      next if el.text?

      if el.matches?('div.highlight,blockquote')
        right = @section.at_css '>.right'
        el.parent = right
      else
        left = @section.at_css '>.left'
        el.parent = left
      end

    }

    if @section != nil?
      @sections.push(@section)
    end

    @sections.each do |el|
      @doc.add_child el
    end

    @doc.to_html
  end

  def header(text, header_level)
    friendly_text = text.gsub(/<[^>]*>/, "").parameterize
    if friendly_text.strip.length == 0
      # Looks like parameterize removed the whole thing! It removes many unicode
      # characters like Chinese and Russian. To get a unique URL, let's just
      # URI escape the whole header
      friendly_text = Digest::SHA1.hexdigest(text)[0, 10]
    end
    @head_count[friendly_text] ||= 0
    @head_count[friendly_text] += 1
    if @head_count[friendly_text] > 1
      friendly_text += "-#{@head_count[friendly_text]}"
    end
    return "<h#{header_level} data-id='#{friendly_text}'><span class='title'>#{text}</span><div id='#{friendly_text}' class='content-anchor'></div></h#{header_level}>"
  end
end
