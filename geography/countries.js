const countries = {
    "AF": {
      "names": [
        "Afghanistan"
      ]
    },
    "AL": {
      "names": [
        "Albania"
      ]
    },
    "DZ": {
      "names": [
        "Algeria"
      ]
    },
    "AS": {
      "names": [
        "American Samoa"
      ]
    },
    "AD": {
      "names": [
        "Andorra"
      ]
    },
    "AO": {
      "names": [
        "Angola"
      ]
    },
    "AI": {
      "names": [
        "Anguilla"
      ]
    },
    "AQ": {
      "names": [
        "Antarctica"
      ]
    },
    "AG": {
      "names": [
        "Antigua and Barbuda"
      ]
    },
    "AR": {
      "names": [
        "Argentina"
      ]
    },
    "AM": {
      "names": [
        "Armenia"
      ]
    },
    "AW": {
      "names": [
        "Aruba"
      ]
    },
    "AU": {
      "names": [
        "Australia"
      ]
    },
    "AT": {
      "names": [
        "Austria"
      ]
    },
    "AZ": {
      "names": [
        "Azerbaijan"
      ]
    },
    "BS": {
      "names": [
        "The Bahamas",
        "Bahamas (the)"
      ]
    },
    "BH": {
      "names": [
        "Bahrain"
      ]
    },
    "BD": {
      "names": [
        "Bangladesh"
      ]
    },
    "BB": {
      "names": [
        "Barbados"
      ]
    },
    "BY": {
      "names": [
        "Belarus"
      ]
    },
    "BE": {
      "names": [
        "Belgium"
      ]
    },
    "BZ": {
      "names": [
        "Belize"
      ]
    },
    "BJ": {
      "names": [
        "Benin"
      ]
    },
    "BM": {
      "names": [
        "Bermuda"
      ]
    },
    "BT": {
      "names": [
        "Bhutan"
      ]
    },
    "BO": {
      "names": [
        "Bolivia",
        "Bolivia (Plurinational State of)"
      ]
    },
    "BQ": {
      "names": [
        "Bonaire, Sint Eustatius and Saba"
      ]
    },
    "BA": {
      "names": [
        "Bosnia and Herzegovina"
      ]
    },
    "BW": {
      "names": [
        "Botswana"
      ]
    },
    "BV": {
      "names": [
        "Bouvet Island"
      ]
    },
    "BR": {
      "names": [
        "Brazil"
      ]
    },
    "IO": {
      "names": [
        "British Indian Ocean Territory",
        "British Indian Ocean Territory (the)"
      ]
    },
    "BN": {
      "names": [
        "Brunei",
        "Brunei Darussalam"
      ]
    },
    "BG": {
      "names": [
        "Bulgaria"
      ]
    },
    "BF": {
      "names": [
        "Burkina Faso"
      ]
    },
    "BI": {
      "names": [
        "Burundi"
      ]
    },
    "CV": {
      "names": [
        "Cabo Verde"
      ]
    },
    "KH": {
      "names": [
        "Cambodia"
      ]
    },
    "CM": {
      "names": [
        "Cameroon"
      ]
    },
    "CA": {
      "names": [
        "Canada"
      ]
    },
    "KY": {
      "names": [
        "Cayman Islands",
        "The Cayman Islands",
        "Cayman Islands (the)"
      ]
    },
    "CF": {
      "names": [
        "Central African Republic",
        "Central African Republic (the)"
      ]
    },
    "TD": {
      "names": [
        "Chad"
      ]
    },
    "CL": {
      "names": [
        "Chile"
      ]
    },
    "CN": {
      "names": [
        "China"
      ]
    },
    "CX": {
      "names": [
        "Christmas Island"
      ]
    },
    "CC": {
      "names": [
        "Cocos Islands",
        "Keeling Islands",
        "Cocos (Keeling) Islands (the)"
      ]
    },
    "CO": {
      "names": [
        "Colombia"
      ]
    },
    "KM": {
      "names": [
        "Comoros",
        "Comoros (the)"
      ]
    },
    "CD": {
      "names": [
          "Democratic Republic of the Congo",
        "Congo (the Democratic Republic of the)"
      ]
    },
    "CG": {
      "names": [
        "Congo",
        "Republic of the Congo",
        "Congo (the)"
      ]
    },
    "CK": {
      "names": [
        "Cook Islands",
        "Cook Islands (the)"
      ]
    },
    "CR": {
      "names": [
        "Costa Rica"
      ]
    },
    "HR": {
      "names": [
        "Croatia"
      ]
    },
    "CU": {
      "names": [
        "Cuba"
      ]
    },
    "CW": {
      "names": [
        "Curacao",
        "Curaçao"
      ]
    },
    "CY": {
      "names": [
        "Cyprus"
      ]
    },
    "CZ": {
      "names": [
        "Czech Republic",
        "Czechia"
      ]
    },
    "CI": {
      "names": [
        "Ivory Coast",
        "Côte d'Ivoire"
      ]
    },
    "DK": {
      "names": [
        "Denmark"
      ]
    },
    "DJ": {
      "names": [
        "Djibouti"
      ]
    },
    "DM": {
      "names": [
        "Dominica"
      ]
    },
    "DO": {
      "names": [
        "Dominican Republic",
        "Dominican Republic (the)"
      ]
    },
    "EC": {
      "names": [
        "Ecuador"
      ]
    },
    "EG": {
      "names": [
        "Egypt"
      ]
    },
    "SV": {
      "names": [
        "El Salvador"
      ]
    },
    "GQ": {
      "names": [
        "Equatorial Guinea"
      ]
    },
    "ER": {
      "names": [
        "Eritrea"
      ]
    },
    "EE": {
      "names": [
        "Estonia"
      ]
    },
    "SZ": {
      "names": [
        "Swaziland",
        "Eswatini"
      ]
    },
    "ET": {
      "names": [
        "Ethiopia"
      ]
    },
    "FK": {
      "names": [
        "Falkland Islands",
        "Falkland Islands (the) [Malvinas]"
      ]
    },
    "FO": {
      "names": [
        "Faroe Islands",
        "Faroe Islands (the)"
      ]
    },
    "FJ": {
      "names": [
        "Fiji"
      ]
    },
    "FI": {
      "names": [
        "Finland"
      ]
    },
    "FR": {
      "names": [
        "France"
      ]
    },
    "GF": {
      "names": [
        "French Guiana"
      ]
    },
    "PF": {
      "names": [
        "French Polynesia"
      ]
    },
    "TF": {
      "names": [
        "French Southern Territories",
        "French Southern Territories (the)"
      ]
    },
    "GA": {
      "names": [
        "Gabon"
      ]
    },
    "GM": {
      "names": [
        "Gambia",
        "The Gambia",
        "Gambia (the)"
      ]
    },
    "GE": {
      "names": [
        "Georgia"
      ]
    },
    "DE": {
      "names": [
        "Germany"
      ]
    },
    "GH": {
      "names": [
        "Ghana"
      ]
    },
    "GI": {
      "names": [
        "Gibraltar"
      ]
    },
    "GR": {
      "names": [
        "Greece"
      ]
    },
    "GL": {
      "names": [
        "Greenland"
      ]
    },
    "GD": {
      "names": [
        "Grenada"
      ]
    },
    "GP": {
      "names": [
        "Guadeloupe"
      ]
    },
    "GU": {
      "names": [
        "Guam"
      ]
    },
    "GT": {
      "names": [
        "Guatemala"
      ]
    },
    "GG": {
      "names": [
        "Guernsey"
      ]
    },
    "GN": {
      "names": [
        "Guinea"
      ]
    },
    "GW": {
      "names": [
        "Guinea-Bissau"
      ]
    },
    "GY": {
      "names": [
        "Guyana"
      ]
    },
    "HT": {
      "names": [
        "Haiti"
      ]
    },
    "HM": {
      "names": [
        "Heard Island and McDonald Islands"
      ]
    },
    "VA": {
      "names": [
        "The Vatican",
        "Vatican City",
        "Holy See (the)"
      ]
    },
    "HN": {
      "names": [
        "Honduras"
      ]
    },
    "HK": {
      "names": [
        "Hong Kong"
      ]
    },
    "HU": {
      "names": [
        "Hungary"
      ]
    },
    "IS": {
      "names": [
        "Iceland"
      ]
    },
    "IN": {
      "names": [
        "India"
      ]
    },
    "ID": {
      "names": [
        "Indonesia"
      ]
    },
    "IR": {
      "names": [
        "Iran",
        "Iran (Islamic Republic of)"
      ]
    },
    "IQ": {
      "names": [
        "Iraq"
      ]
    },
    "IE": {
      "names": [
        "Ireland"
      ]
    },
    "IM": {
      "names": [
        "Isle of Man"
      ]
    },
    "IL": {
      "names": [
        "Israel"
      ]
    },
    "IT": {
      "names": [
        "Italy"
      ]
    },
    "JM": {
      "names": [
        "Jamaica"
      ]
    },
    "JP": {
      "names": [
        "Japan"
      ]
    },
    "JE": {
      "names": [
        "Jersey"
      ]
    },
    "JO": {
      "names": [
        "Jordan"
      ]
    },
    "KZ": {
      "names": [
        "Kazakhstan"
      ]
    },
    "KE": {
      "names": [
        "Kenya"
      ]
    },
    "KI": {
      "names": [
        "Kiribati"
      ]
    },
    "KP": {
      "names": [
        "North Korea",
        "Korea (the Democratic People's Republic of)"
      ]
    },
    "KR": {
      "names": [
        "South Korea",
        "Korea (the Republic of)"
      ]
    },
    "KW": {
      "names": [
        "Kuwait"
      ]
    },
    "KG": {
      "names": [
        "Kyrgyzstan"
      ]
    },
    "LA": {
      "names": [
        "Laos",
        "Lao People's Democratic Republic (the)"
      ]
    },
    "LV": {
      "names": [
        "Latvia"
      ]
    },
    "LB": {
      "names": [
        "Lebanon"
      ]
    },
    "LS": {
      "names": [
        "Lesotho"
      ]
    },
    "LR": {
      "names": [
        "Liberia"
      ]
    },
    "LY": {
      "names": [
        "Libya"
      ]
    },
    "LI": {
      "names": [
        "Liechtenstein"
      ]
    },
    "LT": {
      "names": [
        "Lithuania"
      ]
    },
    "LU": {
      "names": [
        "Luxembourg"
      ]
    },
    "MO": {
      "names": [
        "Macao"
      ]
    },
    "MG": {
      "names": [
        "Madagascar"
      ]
    },
    "MW": {
      "names": [
        "Malawi"
      ]
    },
    "MY": {
      "names": [
        "Malaysia"
      ]
    },
    "MV": {
      "names": [
        "Maldives"
      ]
    },
    "ML": {
      "names": [
        "Mali"
      ]
    },
    "MT": {
      "names": [
        "Malta"
      ]
    },
    "MH": {
      "names": [
        "Marshell Islands",
        "Marshall Islands (the)"
      ]
    },
    "MQ": {
      "names": [
        "Martinique"
      ]
    },
    "MR": {
      "names": [
        "Mauritania"
      ]
    },
    "MU": {
      "names": [
        "Mauritius"
      ]
    },
    "YT": {
      "names": [
        "Mayotte"
      ]
    },
    "MX": {
      "names": [
        "Mexico"
      ]
    },
    "FM": {
      "names": [
        "Micronesia",
        "Micronesia (Federated States of)"
      ]
    },
    "MD": {
      "names": [
        "Moldova",
        "Moldova (the Republic of)"
      ]
    },
    "MC": {
      "names": [
        "Monaco"
      ]
    },
    "MN": {
      "names": [
        "Mongolia"
      ]
    },
    "ME": {
      "names": [
        "Montenegro"
      ]
    },
    "MS": {
      "names": [
        "Montserrat"
      ]
    },
    "MA": {
      "names": [
        "Morocco"
      ]
    },
    "MZ": {
      "names": [
        "Mozambique"
      ]
    },
    "MM": {
      "names": [
        "Burma",
        "Myanmar"
      ]
    },
    "NA": {
      "names": [
        "Namibia"
      ]
    },
    "NR": {
      "names": [
        "Nauru"
      ]
    },
    "NP": {
      "names": [
        "Nepal"
      ]
    },
    "NL": {
      "names": [
        "Netherlands",
        "The Netherlands",
        "Netherlands (the)"
      ]
    },
    "NC": {
      "names": [
        "New Caledonia"
      ]
    },
    "NZ": {
      "names": [
        "New Zealand"
      ]
    },
    "NI": {
      "names": [
        "Nicaragua"
      ]
    },
    "NE": {
      "names": [
        "Niger",
        "Niger (the)"
      ]
    },
    "NG": {
      "names": [
        "Nigeria"
      ]
    },
    "NU": {
      "names": [
        "Niue"
      ]
    },
    "NF": {
      "names": [
        "Norfolk Island"
      ]
    },
    "MP": {
      "names": [
        "Northern Mariana Islands",
        "Northern Mariana Islands (the)"
      ]
    },
    "NO": {
      "names": [
        "Norway"
      ]
    },
    "OM": {
      "names": [
        "Oman"
      ]
    },
    "PK": {
      "names": [
        "Pakistan"
      ]
    },
    "PW": {
      "names": [
        "Palau"
      ]
    },
    "PS": {
      "names": [
        "Palestine",
        "Palestine, State of"
      ]
    },
    "PA": {
      "names": [
        "Panama"
      ]
    },
    "PG": {
      "names": [
        "Papua New Guinea"
      ]
    },
    "PY": {
      "names": [
        "Paraguay"
      ]
    },
    "PE": {
      "names": [
        "Peru"
      ]
    },
    "PH": {
      "names": [
        "Philippines",
        "Philippines (the)"
      ]
    },
    "PN": {
      "names": [
        "Pitcairn"
      ]
    },
    "PL": {
      "names": [
        "Poland"
      ]
    },
    "PT": {
      "names": [
        "Portugal"
      ]
    },
    "PR": {
      "names": [
        "Puerto Rico"
      ]
    },
    "QA": {
      "names": [
        "Qatar"
      ]
    },
    "MK": {
      "names": [
        "North Macedonia",
        "Republic of North Macedonia"
      ]
    },
    "RO": {
      "names": [
        "Romania"
      ]
    },
    "RU": {
      "names": [
        "Russia",
        "Russian Federation (the)"
      ]
    },
    "RW": {
      "names": [
        "Rwanda"
      ]
    },
    "RE": {
      "names": [
        "Reunion",
        "Réunion"
      ]
    },
    "BL": {
      "names": [
        "St Barthelemy",
        "Saint Barthelemy",
        "Saint Barthélemy"
      ]
    },
    "SH": {
      "names": [
        "St Helena, Ascension and Tristan da Cunha",
        "Saint Helena, Ascension and Tristan da Cunha"
      ]
    },
    "KN": {
      "names": [
        "St Kitts and Nevis",
        "Saint Kitts and Nevis"
      ]
    },
    "XK": {
        "names": [
            "Kosovo",
            "Republic of Kosovo"
        ]
    },
    "LC": {
      "names": [
        "St Lucia",
        "Saint Lucia"
      ]
    },
    "MF": {
      "names": [
        "St Martin",
        "Saint Martin",
        "Saint Martin (French part)"
      ]
    },
    "PM": {
      "names": [
        "St Pierre and Miquelon",
        "Saint Pierre and Miquelon"
      ]
    },
    "VC": {
      "names": [
        "St Vincent and the Grenadines",
        "Saint Vincent and the Grenadines"
      ]
    },
    "WS": {
      "names": [
        "Samoa"
      ]
    },
    "SM": {
      "names": [
        "San Marino"
      ]
    },
    "ST": {
      "names": [
        "Sao Tome and Principe"
      ]
    },
    "SA": {
      "names": [
        "Saudi Arabia"
      ]
    },
    "SN": {
      "names": [
        "Senegal"
      ]
    },
    "RS": {
      "names": [
        "Serbia"
      ]
    },
    "SC": {
      "names": [
        "Seychelles"
      ]
    },
    "SL": {
      "names": [
        "Sierra Leone"
      ]
    },
    "SG": {
      "names": [
        "Singapore"
      ]
    },
    "SX": {
      "names": [
        "Sint Maarten",
        "Sint Maarten (Dutch part)"
      ]
    },
    "SK": {
      "names": [
        "Slovakia"
      ]
    },
    "SI": {
      "names": [
        "Slovenia"
      ]
    },
    "SB": {
      "names": [
        "Solomon Islands"
      ]
    },
    "SO": {
      "names": [
        "Somalia"
      ]
    },
    "ZA": {
      "names": [
        "South Africa"
      ]
    },
    "GS": {
      "names": [
        "South Georgia and the South Sandwich Islands"
      ]
    },
    "SS": {
      "names": [
        "South Sudan"
      ]
    },
    "ES": {
      "names": [
        "Spain"
      ]
    },
    "LK": {
      "names": [
        "Sri Lanka"
      ]
    },
    "SD": {
      "names": [
        "Sudan",
        "Sudan (the)"
      ]
    },
    "SR": {
      "names": [
        "Suriname"
      ]
    },
    "SJ": {
      "names": [
        "Svalbard and Jan Mayen"
      ]
    },
    "SE": {
      "names": [
        "Sweden"
      ]
    },
    "CH": {
      "names": [
        "Switzerland"
      ]
    },
    "SY": {
      "names": [
        "Syria",
        "Syrian Arab Republic"
      ]
    },
    "TW": {
      "names": [
        "Taiwan",
        "Taiwan (Province of China)"
      ]
    },
    "TJ": {
      "names": [
        "Tajikistan"
      ]
    },
    "TZ": {
      "names": [
        "Tanzania",
        "Tanzania, United Republic of"
      ]
    },
    "TH": {
      "names": [
        "Thailand"
      ]
    },
    "TL": {
      "names": [
        "East Timor",
        "Timor-Leste"
      ]
    },
    "TG": {
      "names": [
        "Togo"
      ]
    },
    "TK": {
      "names": [
        "Tokelau"
      ]
    },
    "TO": {
      "names": [
        "Tonga"
      ]
    },
    "TT": {
      "names": [
        "Trinidad and Tobago"
      ]
    },
    "TN": {
      "names": [
        "Tunisia"
      ]
    },
    "TR": {
      "names": [
        "Turkey"
      ]
    },
    "TM": {
      "names": [
        "Turkmenistan"
      ]
    },
    "TC": {
      "names": [
        "Turks and Caicos Islands",
        "Turks and Caicos Islands (the)"
      ]
    },
    "TV": {
      "names": [
        "Tuvalu"
      ]
    },
    "UG": {
      "names": [
        "Uganda"
      ]
    },
    "UA": {
      "names": [
        "Ukraine"
      ]
    },
    "AE": {
      "names": [
        "United Arab Emirates",
        "United Arab Emirates (the)"
      ]
    },
    "GB": {
      "names": [
        "United Kingdom",
        "United Kingdom of Great Britain and Northern Ireland (the)"
      ]
    },
    "UM": {
      "names": [
        "United States Minor Outlying Islands",
        "United States Minor Outlying Islands (the)"
      ]
    },
    "US": {
      "names": [
        "United States of America",
        "United States",
        "United States of America (the)"
      ]
    },
    "UY": {
      "names": [
        "Uruguay"
      ]
    },
    "UZ": {
      "names": [
        "Uzbekistan"
      ]
    },
    "VU": {
      "names": [
        "Vanuatu"
      ]
    },
    "VE": {
      "names": [
        "Venezuela",
        "Venezuela (Bolivarian Republic of)"
      ]
    },
    "VN": {
      "names": [
        "Vietnam",
        "Viet Nam"
      ]
    },
    "VG": {
      "names": [
        "British Virgin Islands",
        "Virgin Islands (British)"
      ]
    },
    "VI": {
      "names": [
        "US Virgin Islands",
        "Virgin Islands (U.S.)"
      ]
    },
    "WF": {
      "names": [
        "Wallis and Futuna"
      ]
    },
    "EH": {
      "names": [
        "Western Sahara"
      ]
    },
    "YE": {
      "names": [
        "Yemen"
      ]
    },
    "ZM": {
      "names": [
        "Zambia"
      ]
    },
    "ZW": {
      "names": [
        "Zimbabwe"
      ]
    },
    "AX": {
      "names": [
        "Aland Islands",
        "Åland Islands"
      ]
    }
  }