
# *Application - not live yet*

<aside class="warning">
Early preview documentation, not available live yet
</aside>

## *Apply for new account*

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
        "funding_source":
        [
            "income", "funds_from_another_account"
        ],
        "funding_source_other": ""
    },
    "investment":
    {
        "knowledge": "limited",
        "risk_tolerance": "moderate",
        "objectives":
        [
            "capital_appreciation", "preservation_of_capital", "income", "speculation"
        ],
        "time_horizon": "5_to_10_years",
        "experience":
        {
            "stocks": "5_to_10_years",
            "options": "none",
            "bonds": "none",
            "short_sales": "1_to_5_years",
            "mutual_funds": "none",
            "margin": "1_to_5_years"
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
        "realtionship_to_another_entity": false
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
mobile_phone_country | Mobile phone country code, digits only
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
realtionship_to_another_entity | Have relationship with entity which has an account at Just2Trade

Legal Issues | &nbsp;
---- | ----
bankruptcy | Have you ever been the subject to a bankruptcy proceeding, receivership, or similar action
legal_dispute | Have you ever been in a legal dispute, arbitration, or reparations action related to a securities or commodities account
unpaid_balance | Have you ever closed an account with an unpaid balance at a securities or commodity firm
comment | Mandatory comment if any of the above is true