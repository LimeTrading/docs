//= require ./lib/_energize
//= require ./app/_copy
//= require ./app/_toc
//= require ./app/_lang

function adjustLanguageSelectorWidth() {
  const elem = $('.dark-box > .lang-selector');
  elem.width(elem.parent().width());
}

$(function () {
  function show(e) {
    
    var dropdown = e.find('.menu-dropdown-content');
    e.addClass('active');
    dropdown.show();
  }
  function hide(e) {
    var dropdown = e.find('.menu-dropdown-content');
    e.removeClass('active'),
    dropdown.hide()
  }
  function hideAfter(e) {
    setTimeout(function () {
      0 === e.find('.menu-dropdown-content:hover').length && hide(e)
    }, 1000)
  }
  $('.dropdown-trigger').on({
    mouseenter: function () {
      show($(this).closest('.dropdown'))
    },
    mouseleave: function () {
      hideAfter($(this).closest('.dropdown'))
    },
    click: function () {
      if ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) return show($(this).closest('.dropdown')), !1
    }
  }),
  $('.menu-dropdown-content').on('mouseleave', function () {
    hideAfter($(this).closest('.dropdown'))
  }),
  $(document).on('click', function () {
    $('.dropdown').each(function () {
      hide($(this))
    })
  })
});


$(function() {
  loadToc($('#toc'), '.toc-link', '.toc-list-h2', 10);
  setupLanguages($('body').data('languages'));
  $('.content').imagesLoaded( function() {
    window.recacheHeights();
    window.refreshToc();
  });

  $(window).resize(function() {
    adjustLanguageSelectorWidth();
  });
  adjustLanguageSelectorWidth();
});

window.onpopstate = function() {
  activateLanguage(getLanguageFromQueryString());
};
