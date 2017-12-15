
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
            "street": "One Penn Plaza",
            "apartment": "1614",
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
            "apartment": "",
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
affiliatons | Affiliations information required by law to prevent market manipulation
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
id_number | The number of ID document


Employment | &nbsp;
---- | ----
status | Employment status, one of the following values: `employed`, `self-employed`, `retired`, `unemployed`, `student`
job_title | Job title
company | Company name
company_years | Years with this company
employer_address | The address in the format of the **Address Structure** described below

Address | &nbsp;
---- | ----
street | Street address
apartment | Apartment or Suite number
city | City
state | State, two-symbol ISO code, required for United States
zip | Postal code
country | Country, two-symbol ISO code

Financial | &nbsp;
---- | ----
number_of_dependents | A qualifying child or relative for whom you can claim a tax exemption, including yourself.
