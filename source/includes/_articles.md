
# Appendix

## CMS symbols

The CMS convention is used to code stocks and ETFs. There is a space between the root and the suffix.

> As an example, the **Bank of America warrant class A** will be coded as `BAC WSA`, **Berkshire Hathaway class B** is coded as `BRK B`

Security Categorization | CMS Suffix
---- | ----
Preferred | PR
Preferred Class class A | PRA
Class “A” | A
Preferred when distributed | PRWD
When distributed | WD
Warrants | WS
Warrants Class “A” | WSA
Called | CL
Class “A” Called | ACL
Preferred called | PRCL
Preferred “A” called | PRACL
Preferred “A” when issued | PRAWI
Emerging Company Marketplace | EC
Partial Paid | PP	 
Convertible | CV
Convertible called | CVCL
Class Convertible | ACV
Preferred (class A) Convertible | PRACV
Preferred (class A) when Distributed | PRAWD
Rights | RT
Units | U
When issued | WI
Rights when issued | RTWI
Preferred when issued | PRWI
Class "A" when issued | AWI
Warrrant when issued | WSWI

## OCC symbols

> For example, symbol `AAPL  171103C00155000` is translated to a call on AAPL expiring on November 3rd 2017, with its strike price of $155.00

Option symbols are coded according to the OCC standard. The OCC option symbol consists of 4 parts:

* Root symbol of the underlying stock or ETF, padded with spaces to 6 characters
* Expiration date, 6 digits in the format yymmdd
* Option type, either P or C, for put or call
* Strike price, as the price x 1000, front padded with 0s to 8 digits
