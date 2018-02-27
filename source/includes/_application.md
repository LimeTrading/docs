
# *Application - not live yet*

<aside class="warning">
Early preview documentation, not available live yet
</aside>

## *Apply for new account*

```shell
curl
    -X POST
    --header 'Content-Type: application/json'
    --header 'Authorization: Bearer token'
    -d 'json goes here' 'https://api.just2trade.com/application'
```

> Request example

```json
{
    "personal":
    {
        "first_name": "John",
        "middle_name": "A",
        "last_name": "Doe",
        "residential_address":
        {
            "street": "One Penn Plaza suite 1614",
            "city": "New York",
            "state": "NY",
            "zip": "10119",
            "country": "US"
        },
        "mobile_phone_country": "1",
        "mobile_phone": "5551234567",
        "email_address": "email@email.com",
        "marital_status": "married",
        "mothers_maiden_name": "Doe",
        "date_of_birth": "12/01/1985",
        "ssn": "111-22-3333",
        "citizenship_country": "US",
        "id_type": "us_driving_license",
        "id_number": "75 123123"
    },
    "employment":
    {
        "status": "employed",
        "job_title": "Seaport Crane Operator",
        "company": "Port Authority",
        "nature": "Logistics",
        "company_years": 8,
        "employer_address":
        {
            "street": "89 South Street",
            "city": "New York",
            "state": "NY",
            "zip": "10038",
            "country": "US"           
        }
    },
    "financial":
    {
        "number_of_dependents": 2,
        "annual_income": "$75,000 - $199,999",
        "net_worth": "$150,000 - $499,000",
        "liquid_net_worth": "$50,000 - $149,999",
        "tax_bracket": "31 - 35%",
        "funding_source":
        [
            "earnings", "home_equity_line_of_credit"
        ],
        "funding_source_other": ""
    },
    "investment":
    {
        "knowledge": "limited",
        "risk_tolerance": "moderate",
        "liquidity_needs": "Important (1 - 5 years)",
        "objectives":
        [
            "capital_appreciation", "preservation_of_capital", "income", "speculation"
        ],
        "time_horizon": "1 to 5 Years",
        "experience":
        {
            "stocks": "5 to 10 Years",
            "options": "None",
            "short_sales": "1 to 5 Years",
            "mutual_funds": "None",
            "margin": "6 to 10 Years"
        }
    },
    "affiliations":
    {
        "employee_of_exchange": false,
        "employee_of_brokerdealer": false,
        "employee_of_regulator": false,
        "employee_of_advisor": false,
        "person_to_influence_securities": false,
        "person_to_contribute_major_capital": false,
        "senior_officer_of_financial_institution": false,
        "senior_officer_of_public_company": false,
        "director_of_public_company": false,
        "major_shareholder_of_public_company": false,
        "senior_officer_foreign": false,
        "relationship_to_another_account": false,
        "relationship_to_another_entity": false
    },
    "legal_issues":
    {
        "bankruptcy": false,
        "legal_dispute": false,
        "unpaid_balance": true,
        "comment": "lannisters always pay their debts"
    },
    "documents":
    [
        {
            "type": "identity",
            "file": "scan.jpg",
            "content": " -- --- -- - -- base64 content goes here - - -- - - -- "
        }
    ]
}
```

### Request

Field | Description
---- | ----
personal | Personal information section according to the structure described below
employment | Employment information section
financial | General financial information
investment | Investment experience questionnaire
affiliatons | Affiliations information required by law to prevent market manipulation. Set to true if you or any immediate family member (spouse, brother, sister, parent, child, mother-in-law, sister-in-law, brother-in-law, daugher-in-law, son-in-law), or other person who supports you or who you support to a material extent, or an additional account holder, is a person described here.
legal_issues | Legal issues background
documents | Documents binaries encoded as base64


Personal Information | &nbsp;
---- | ----
first_name | First name as stated on the ID document
middle_name | Middle name if applicable
last_name | Last name as stated on the ID document
residential_address | Permanent address in the format of the **Address Structure** described below
mobile_phone_country | Mobile phone country code, a mandatory plus sign and digits. For example, for US it is `+1`
mobile_phone | Mobile Phone, digits only, no dashes or brackets
email_address | Email Address
marital_status | Marital status, one of the following: `single`, `married`, `divorced`
mothers_maiden_name | Mother's maiden name to be used as a security question
date_of_birth | Date of birth, US format `mm/dd/yyyy`
ssn | SSN or ITIN, required for US residents, digits only
citizenship_country | Country, two-symbol ISO code
id_type | The type of ID document, the following values are supported: `passport`, `us_state_id`, `us_driving_license`, `us_green_card`
id_number | The number of ID document


Employment | &nbsp;
---- | ----
status | Employment status, one of the following values: `employed`, `self_employed`, `retired`, `not_employed`, `student`
job_title | Job title
company | Company name
company_years | Years with this company
nature | Nature of the business
employer_address | The address in the format of the **Address Structure** described below


Address | &nbsp;
---- | ----
street | Street address including apartment number if applicable
city | City
state | State, two-symbol ISO code, required for United States
zip | Postal code
country | Country, two-symbol ISO code


Financial | &nbsp;
---- | ----
number_of_dependents | A qualifying child or relative for whom you can claim a tax exemption, including yourself.
annual_income | Annual income, one of the following values `Under $25,000`, `$25,000 - $74,999`, `$75,000 - $199,999`, `$200,000 - $499,999`, `$500,000 - $999,999`, `$1,000,000+`
net_worth | One of the following values `Under $50,000`, `$50,000 - $149,999`, `$150,000 - $499,999`, `$500,000 - $999,999`, `$1,000,000 - $4,999,999`, `Over $5,000,000`
liquid_net_worth | One of the following values `Under $50,000`, `$50,000 - $149,999`, `$150,000 - $499,999`, `$500,000 - $999,999`, `$1,000,000 - $4,999,999`, `Over $5,000,000`
tax_bracket | One of the following values `0 - 15%`, `16 - 25%`, `26 - 30%`, `31 - 35%`, `Over 35%`
funding_source | An array with the following available values `earnings`, `pension`, `gift`, `sale_of_business_or_property`, `insurance`, `inhertiance`, `social_security_benefits`, `home_equity_line_of_credit`, `other`
funding_source_other | Please explain if any other funding sources


Investment | &nbsp;
---- | ----
objectives | An array with all the following 4 values ordered by priority: `capital_appreciation`, `preservation_of_capital`, `income`, `speculation`
risk_tolerance | One of the following values `low`, `moderate`, `aggressive`, `speculative`
liquidity_needs | One of the following values `Very Important (Less Than 1 Year)`, `Important (1 - 5 Years)`, `Somewhat Important (5 - 15 Years)`, `Does Not Matter (Over 15 Years)`
time_horizon | One of the following values `Less than 1 Year`, `1 to 5 Years`, `5 to 10 Years`, `10 to 15 Years`, `Over 15 Years`
knowledge | `limited`, `good`, `excellent`
experience | An object that describes experience in different investment areas. The following properties are available: `stocks`, `option`, `margin`, `short_sales`, `mutual_funds`. Each property can have one of the following values: `None`, `Less than 1 Year`, `1 to 5 Years`, `6 to 10 Years`, `Over 10 Years`.


Affiliations | &nbsp;
---- | ----
employee_of_exchange | A member of or employee of any securities, options or commodities Exchange or other Self-Regulatory Organization including a registered securities associations, registered clearing organization or the Municipal Securities Rulemaking Board
employee_of_brokerdealer | An employee of a broker/dealer or other member of the FINRA
employee_of_regulator | An employee of a state or federal securities regulator
employee_of_advisor | An employee of an investment advisor
person_to_influence_securities | A person in a position to influence or whose activities directly or indirectly involve, or are related to, the function of buying or selling securities
person_to_contribute_major_capital | A person who has contributed to the equity or capital of a broker/dealer, directly or indirectly, in an amount that exceeds 10% of the broker/dealer's equity or capital
senior_officer_of_financial_institution | A senior officer of a bank, savings, loan institution, insurance company, investment advisory firm or any other financial institution
senior_officer_of_public_company | An executive officer of a public company, whether US or non-US
director_of_public_company | A director of a public company, whether US or non-US
major_shareholder_of_public_company | A 10% shareholder of a public company, whether US or non-US
senior_officer_foreign | A current or former senior official of a foreign government or political party, or senior executive of a foreign goverment-owned commercial enterprise, or a family member or close associate of such person
relationship_to_another_account | Have relationship with another account at Just2Trade that you control, have a beneficial interest in or with which you coordinate trading
relationship_to_another_entity | Have relationship with entity which has an account at Just2Trade


Legal Issues | &nbsp;
---- | ----
bankruptcy | Have you ever been the subject to a bankruptcy proceeding, receivership, or similar action
legal_dispute | Have you ever been in a legal dispute, arbitration, or reparations action related to a securities or commodities account
unpaid_balance | Have you ever closed an account with an unpaid balance at a securities or commodity firm
comment | Mandatory comment if any of the above is true


Documents | &nbsp;
---- | ----
type | Type of the document, only one type is supported: `identity`
file | File name of the document, should include extenstion. For example, `scan.jpg`
content | Base-64 encoded content of the file
