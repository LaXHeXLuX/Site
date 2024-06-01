const regionRules = {
    "BY": "[0-7]",
    "BG": "(A|B|BH|BP|BT|E|EB|EH|K|KH|M|H|OP|P|PA|PB|PK|PP|C|CA|CB|CH|CM|CO|CC|CT|T|TX|Y|X)",
    "CZ": "[ABCEHJKLMPSTUV]",
    "MNE": "(AN|BA|BD|BP|BR|CT|DG|GS|HN|KL|KO|MK|NK|PG|PL||PT|PZ|PV|RO|SN|TV|TZ|UL|ZT|ZB)",
    "NMK": "(BE|BT|DB|DE|DH|DK|GE|GV|KA|KI|KO|KR|KP|KS|KU|MB|MK|NE|OH|PE|PP|PS|RA|RE|SK|SN|SU|SR|ST|TE|VA|VE|VI|VV)",
    "PL": "[BCDEFGKLNOPRSTWZ]",
    "RO": "(B|AB|AG|AR|BC|BH|BN|BR|BT|BV|BZ|CJ|CL|CS|CT|CV|DB|DJ|GJ|GL|GR|HD|HR|IF|IL|IS|MH|MM|MS|NT|OT|PH|SB|SJ|SM|SV|TL|TM|TR|VL|VN|VS)",
    "SRB": "(AL|AR|AC|BB|BC|BG|BO|BP|BT|BU|CA|CU|VA|VB|VL|VP|VR|VS|GM|DE|ZA|ZR|IN|IC|JA|KA|KV|KC|KG|KZ|KI|KL|KO|KS|LB|LE|LO|LU|NV|NG|NI|NP|NS|PA|PB|PZ|PI|PK|PN|PO|PP|PT|RA|RU|SA|SI|SM|SV|SD|SJ|SO|SP|ST|SU|SC|TO|TS|TT|UB|UE)",
    "SK": "(BA|BD|BE|BI|BL|BT|BB|BC|BK|BJ|BN|BR|BS|BY|CA|DK|DS|DT|GA|GL|HC|HE|IL|KA|KE|KC|KI|KK|KM|KN|KS|LC|LL|LM|LE|LV|MA|MI|ML|MT|MY|NR|NI|NT|NM|NO|NZ|NC|PB|PD|PE|PK|PN|PO|PV|PS|PP|PT|PU|RA|RK|RS|RV|SA|SB|SC|SE|SI|SK|SL|SN|SO|SP|SV|TA|TB|TC|TE|TN|TT|TO|TR|TS|TV|VK|VT|ZA|ZI|ZL|ZC|ZH|ZM|ZV)",
    "SLO": "(CE|GO|KK|KP|KR|LJ|MB|MS|NM|PO|SG)",
    "CH": "(AG|AI|AR|BE|BL|BS|FR|GE|GL|GR|JU|LU|NE|NW|OW|SG|SH|SO|SZ|TG|TI|UR|VD|VS|ZG|ZH)",
    "UA": "(KA|KB|KC|KE|KH|KI|KK|KM|KO|KP|KT|KX|HA|HB|HC|HE|HH|HI|HK|HM|HO|HP|HT|HX|IA|IB|IC|IE|IH)"
}

export const regexes = {
    "AL": "[A-Z]{2}\\d{3}[A-Z]{2}",
    "AND": "[A-Z]\\d{4}",
    "A": "[A-Z^Q]{1,2}(\\d[A-Z^Q]{3,5}|\\d{2}[A-Z^Q]{2,4}|\\d{3}[A-Z^Q]{1,3}|\\d{4}[A-Z^Q]{1,2}|\\d{5}[A-Z^Q])",
    "BY": "[0-9E]\\d{3}[A-Z]{2}" + regionRules["BY"],
    "B": "([12][A-Z]{3}\\d{3}|[A-Z]{3}\\d{3})",
    "BIH": "([AEOJKMT]|\\d)\\d{2}[AEOJKMT]\\d{3}|[AEOJKMT]{2}\\d{6}",
    "BG": regionRules["BG"] + "\\d{4}[ABEKMHOPCTYX]{2}",
    "HR": "[A-Z]{2}\\d{3,4}[A-Z]{1,2}",
    "CY": "[A-Z]{3}\\d{3}",
    "CZ": "[1-9]" + regionRules["CZ"] + "(\\d[A-Z]){2}\\d{3}",
    "DK": "[A-Z]{2}\\d{5}",
    "EST": "\\d{3}[A-Z]{3}",
    "FIN": "[A-Z]{3}\\d{3}",
    "F": "[A-Z]{2}\\d{3}[A-Z]{2}",
    "D": "[A-Z]{3,5}\\d{2,4}",
    "GR": "[A-Z]{3}\\d{4}",
    "H": "[A-Z]{4}\\d{3}",
    "IS": "[A-Z]{2}[A-Z0-9]\\d{2}",
    "IRL": "\\d{2,3}[A-Z]\\d{1,6}",
    "I": "[A-Z^QUIO]{2}\\d{3}[A-Z^QUIO]{2}",
    "LV": "[A-Z]{2}\\d{4}",
    "FL": "FL\\d{4,5}",
    "LT": "[A-Z]{3}\\d{3}",
    "L": "[A-Z]{2}\\d{3,4}",
    "M": "[A-Z]{3}\\d{3}",
    "MD": "[A-Z]{3}\\d{3}",
    "MC": "[0-9A-Z]{4}",
    "MNE": regionRules["MNE"] + "[A-Z]{2}\\d{3}",
    "NL": "((\\d{2}[A-Z]{4})|(\\d{2}[A-Z]{3}\\d)|(\\d[A-Z]{3}\\d{2})|([A-Z]{2}\\d{3}[A-Z])|([A-Z]\\d{3}[A-Z]{2}))",
    "NMK": regionRules["NMK"] + "\\d{4}[A-Z]{2}",
    "N": "[A-Z]{2}\\d{4,5}",
    //"PL": regionRules["PL"] + "[A-Z]{1,2}",   TODO
    "P": "(\\d{2}[A-Z]{2}\\d{2}|[A-Z]{2}\\d{2}[A-Z]{2})",
    "RO": "(" + regionRules["RO"] + "\\d{2}[A-Z]{3}|B\\d{3}[A-Z]{3})",
    "RSM": "[A-Z]\\d{1,4}",
    "SRB": regionRules["SRB"] + "\\d{3,4}[A-Z]{2}",
    "SK": regionRules["SK"] + "\\d{3}[A-Z]{2}",
    "SLO": regionRules["SLO"] + "\\d{3}[A-Z]{2}",
    "E": "\\d{4}[BCDFGHJKLMNPRSTVWXYZ]{3}",
    "S": "[A-Z]{3}\\d{2}[A-Z0-9]",
    "CH": regionRules["CH"] + "\\d{1,6}",
    "UA": regionRules["UA"] + "\\d{4}[ABEIKMHOPCTX]{2}",
    "UK": "[A-Z]{2}\\d{2}[A-Z]{3}",
    "V": "CV\\d{1,5}"
}

export const country = {
    "AL": "Albania",
    "AND": "Andorra",
    "A": "Austria",
    "BY": "Belarus",
    "B": "Belgium",
    "BIH": "Bosnia and Herzegovina",
    "BG": "Bulgaria",
    "HR": "Croatia",
    "CY": "Cyprus",
    "CZ": "Czech",
    "DK": "Denmark",
    "EST": "Estonia",
    "FIN": "Finland",
    "F": "France",
    "D": "Germany",
    "GR": "Greece",
    "H": "Hungary",
    "IS": "Iceland",
    "IRL": "Ireland",
    "I": "Italy",
    "LV": "Latvia",
    "FL": "Liechtenstein",
    "LT": "Lithuania",
    "L": "Luxembourg",
    "M": "Malta",
    "MD": "Moldova",
    "MC": "Monaco",
    "MNE": "Montenegro",
    "NL": "Netherlands",
    "NMK": "North Macedonia",
    "N": "Norway",
    "PL": "Poland",
    "P": "Portugal",
    "RO": "Romania",
    "RSM": "San Marino",
    "SRB": "Serbia",
    "SK": "Slovakia",
    "SLO": "Slovenia",
    "E": "Spain",
    "S": "Sweden",
    "CH": "Switzerland",
    "UA": "Ukraine",
    "UK": "United Kingdom",
    "V": "Vatican City"
}

export const countryDescriptions = {
    "AL": "Two letters, security hologram, three digits, two letters",
    "AND": "One letter, four digits",
    "A": "One or two letters, regional coat of arms or a dash (-), one to five digits, one to five letter sequence (Q excluded). The last two must add up to between 4 and 6 characters (included)",
    "BY": "E (for electric) or a digit, three digits, two letter, dash (-), one digit",
    "B": `Two standard variants - 
    Three letters, a dot, and three digits
    [1-2], dash (-), three letters, dash (-), three digits`,
    "BIH": `Three standard variants - 
    Three digits, dash (-), letter, dash (-), three digits
    Letter, two digits, dash (-), letter, dash (-), three digits
    Two letters, dash (-), six digits`,
    "BG": "Usable letters: АВЕКМНОРСТYХ. One or two letters, four digits, two letters",
    "HR": "Two letters, Croatian coat of arms, three or four digits, one or two letters",
    "CY": "Three letters, four tiny digits indicating the month and year of the cars first registration, 3 digits",
    "CZ": "One digit (not zero), one letter, one letter or digit, two weird decorative hexagons (red and green), one letter or digit, three digits",
    "DK": "Two letters, five digits",
    "EST": "Three digits, three letters",
    "FIN": "Three letters, dash (-), three digits",
    "F": "Two letters, dash (-), three digits, dash (-), two letters",
    "D": "One to three letters, two weird decorative circles (orange and grey), two letters, two to four digits",
    "GR": "Three letters, dash (-), four digits",
    "H": "Two letters, coat of arms, two letters, dash (-), three digits",
    "IS": "Two letters, decorative square with number indicating year, a letter or a digit, two digits",
    "IRL": "Two or three digits, dash (-), one or two letters, dash (-), one to six digits",
    "I": "Two letters (not IOQU), three digits, two letters (not IOQU)",
    "LV": "Two letters, dash (-), four digits",
    "FL": "White characters on black background. Letters FL, coat of arms, four to five digits",
    "LT": "Either coat of arms at the start or two weird decorative circles in the middle. Three letters, three digits",
    "L": "Yellow background. Two letters, three to four digits",
    "M": "Three letters, square dot, three digits",
    "MD": "Three letters, two decorative circles in the middle on cars after 2015, three digits",
    "MC": "Blue text on white background. Four digits or letters",
    "MNE": "Two letters indicating region, coat of arms, two letters, three digits",
    "NL": `A lot of variants:
    Two digits, dash (-), two letters, dash (-), two letters
    Two digits, dash (-), three letters, dash (-), one digit
    One digit, dash (-), three letters, dash (-), two digits
    Two letters, dash (-), three digits, dash (-), one letter
    One letter, dash (-), three digits, dash (-), two letters`,
    "NMK": "Two letters indicating region, four digits, two letters",
    "N": "Two letters, four to five digits",
    "PL": `Two to three letters indicating region (too many regions, but first letter indicates larger district). Single digits can't be zero. Two variants:
    Two letter region code, then two variants:
        Three digits, two digits or digit and letter or two letters
        One digit, one letter, one digit or letter, two digits
    Three letter region code, then four variants:
        One letter, one digit or letter, two digits
        Two digits, one letter, one digit or letter
        One digit, one letter, one digit or letter, one digit
        Three digits, two digits or digit and letter or two letters`,
    "P": `Two variants:
    (old) Two digits, two letters, two digits
    (new) Two letters, two digits, two letters`,
    "RO": "Two letter country code, two digits, three letters (Can also be B, three digits, three letters)",
    "RSM": "Blue characters, white background. One letter, one to four numbers",
    "SRB": "Two letters indicating region, coat of arms, three or four digits, dash (-), two letters",
    "SK": "Two letters indicating region, coat of arms, three digits, two letters",
    "SLO": "Two letters indicating region, coat of arms, three digits, dash (-), two letters",
    "E": "Four digits, three letters (consonants)",
    "S": "Three letters, two digits, one digit or letter",
    "CH": "Two letters indicating region, one to six digits",
    "UA": "Two letters indicating region, four digits, two letters",
    "UK": "Two letters indicating region (all letter combinations possible), two digits, three letters",
    "V": "Letters CV, one to five digits"
}