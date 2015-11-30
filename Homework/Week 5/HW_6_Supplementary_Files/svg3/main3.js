
window.onload = function() {
	var country_list = [["Afghanistan", "AFG", "..", "34.7794650037404"], ["Albania", "ALB", "36.5624679366516", "49.8916267826031"], ["Algeria", "DZA", "56.9482869589098", "60.4970016860731"], ["American Samoa", "ASM", "..", ".."], ["Andorra", "ADO", "..", ".."], ["Angola", "AGO", "120.060092714068", "81.5581910527555"], ["Antigua and Barbuda", "ATG", "58.5580304678862", "48.1661116140176"], ["Argentina", "ARG", "18.1190431160743", "27.0025880507605"], ["Armenia", "ARM", "61.5203156082188", "51.772812955582"], ["Aruba", "ABW", "272.496033970682", "67.2237327350648"], ["Australia", "AUS", "32.6272772494491", "36.2993883163494"], ["Austria", "AUT", "71.3284926229693", "79.9551365398967"], ["Azerbaijan", "AZE", "55.3235687617897", "62.7983522199458"], ["Bahamas, The", "BHS", "41.8803353966905", "41.6330576339072"], ["Bahrain", "BHR", "119.472837169747", "105.903487374576"], ["Bangladesh", "BGD", "28.6154409962779", "40.7841570506861"], ["Barbados", "BRB", "45.7765667574932", "44.9532785963334"], ["Belarus", "BLR", "125.399858424063", "108.95850024958"], ["Belgium", "BEL", "154.161933440077", "164.908100423839"], ["Belize", "BLZ", "89.2094980462879", "84.7363506423834"], ["Benin", "BEN", "42.6005891619279", "50.832058137158"], ["Bermuda", "BMU", "22.1537782536099", "17.1763386134774"], ["Bhutan", "BTN", "63.3484650789675", "94.3008451952495"], ["Bolivia", "BOL", "36.4378622818471", "61.0298473896405"], ["Bosnia and Herzegovina", "BIH", "75.8447473545036", "83.2532350718746"], ["Botswana", "BWA", "82.1655827877918", "80.9440132454566"], ["Brazil", "BRA", "17.3670100642311", "17.8080949539386"], ["Brunei Darussalam", "BRN", "83.4839529056881", "92.5203793000623"], ["Bulgaria", "BGR", "85.3358334524153", "94.8096778286435"], ["Burkina Faso", "BFA", "31.1467272009475", "40.5262619940637"], ["Burundi", "BDI", "22.7459126297585", "30.0952543072913"], ["Cabo Verde", "CPV", "44.6936033203914", "47.2782535105343"], ["Cambodia", "KHM", "91.0774798473362", "106.152418338635"], ["Cameroon", "CMR", "35.769016089748", "38.1488924120529"], ["Canada", "CAN", "70.5141414959123", "48.9569063761812"], ["Cayman Islands", "CYM", "..", ".."], ["Central African Republic", "CAF", "30.3991141694794", "22.1549199880234"], ["Chad", "TCD", "36.0995670652526", "56.2972981453662"], ["Channel Islands", "CHI", "..", ".."], ["Chile", "CHL", "47.5452495776816", "59.9048491653589"], ["China", "CHN", "39.352235791513", "49.2412111681744"], ["Colombia", "COL", "24.6069097536262", "27.9420943977857"], ["Comoros", "COM", "28.231814192318", "47.7717487540399"], ["Congo, Dem. Rep.", "COD", "7.80278911806529", "47.750639438683"], ["Congo, Rep.", "COG", "91.7416756670107", "111.593381521872"], ["Costa Rica", "CRI", "76.7381159594308", "63.4125633578601"], ["Cote d'Ivoire", "CIV", "59.4399297136839", "77.3956017114111"], ["Croatia", "HRV", "56.5759395467754", "53.4191555010104"], ["Cuba", "CUB", "21.3281771426328", "25.5094406496684"], ["Curacao", "CUW", "..", ".."], ["Cyprus", "CYP", "48.3099453838224", "39.4937214017904"], ["Czech Republic", "CZE", "99.3394141424095", "125.417330309705"], ["Denmark", "DNK", "58.9975062606951", "56.1245153802505"], ["Djibouti", "DJI", "43.1942433698463", "40.6713841308618"], ["Dominica", "DMA", "59.8488933562025", "52.8638091660406"], ["Dominican Republic", "DOM", "63.4088331785139", "41.9335257602737"], ["Ecuador", "ECU", "47.1862152285537", "54.7488635923666"], ["Egypt, Arab Rep.", "EGY", "19.8864565350398", "36.2562252598707"], ["El Salvador", "SLV", "60.057407816295", "60.3007708361541"], ["Equatorial Guinea", "GNQ", "147.992559231718", "131.438149399042"], ["Eritrea", "ERI", "71.9169013161443", "31.7896759412324"], ["Estonia", "EST", "156.221288388299", "122.560569951476"], ["Ethiopia", "ETH", "21.1882785803249", "36.5191373295272"], ["Faeroe Islands", "FRO", "94.7907499708862", "70.3546925670298"], ["Fiji", "FJI", "84.0206527791261", "84.3758654907991"], ["Finland", "FIN", "64.1592067539399", "55.8162855643076"], ["France", "FRA", "48.7088473973949", "42.8726526105502"], ["French Polynesia", "PYF", "34.5753469153611", ".."], ["Gabon", "GAB", "70.0216443991129", "80.6054457398072"], ["Gambia, The", "GMB", "25.8010502528522", "37.1200747865151"], ["Georgia", "GEO", "33.7535797645725", "59.5779357718648"], ["Germany", "DEU", "53.8723657403939", "67.8075590070304"], ["Ghana", "GHA", "93.1996932849646", "58.686350408243"], ["Greece", "GRC", "34.6380222234184", "31.6617564692548"], ["Greenland", "GRL", "59.7364297270165", ".."], ["Grenada", "GRD", "55.1875996396623", "44.4789337175793"], ["Guam", "GUM", "..", ".."], ["Guatemala", "GTM", "38.8117164563988", "53.9475120281723"], ["Guinea", "GIN", "42.6659762598678", "60.7288095701823"], ["Guinea-Bissau", "GNB", "32.6873438963518", "38.1185854344743"], ["Guyana", "GUY", "150.280370691494", "100.778015050427"], ["Haiti", "HTI", "34.2451930050695", "56.2497155215165"], ["Honduras", "HND", "103.175967652127", "95.7830035952233"], ["Hong Kong SAR, China", "HKG", "242.750309719395", "368.293422070839"], ["Hungary", "HUN", "128.133015107913", "141.731908820118"], ["Iceland", "ISL", "50.1795932873217", "64.2777197979703"], ["India", "IND", "19.702097696089", "33.7487900832512"], ["Indonesia", "IDN", "66.0509825423539", "38.8616948094007"], ["Iran, Islamic Rep.", "IRN", "42.0954359121646", "39.4539944983058"], ["Iraq", "IRQ", "..", "69.5929691058839"], ["Ireland", "IRL", "129.337062503155", "80.9220343071712"], ["Isle of Man", "IMY", "..", ".."], ["Israel", "ISR", "52.5594267173664", "51.3598630454973"], ["Italy", "ITA", "41.9601304047508", "43.9332628820212"], ["Jamaica", "JAM", "51.395163733855", "49.5269158956745"], ["Japan", "JPN", "18.1510023888911", "26.637493595245"], ["Jordan", "JOR", "76.8037172483119", "85.4931602938221"], ["Kazakhstan", "KAZ", "75.727132647379", "61.5191701049304"], ["Kenya", "KEN", "38.086296676032", "43.1554626481234"], ["Kiribati", "KIR", "64.5537830013766", "51.1756760101402"], ["Korea, Dem. Rep.", "PRK", "..", ".."], ["Korea, Rep.", "KOR", "59.2465146866777", "81.4615376295619"], ["Kosovo", "KSV", "..", ".."], ["Kuwait", "KWT", "70.5047774416595", "80.2768604255539"], ["Kyrgyz Republic", "KGZ", "77.3166547497823", "103.844982223023"], ["Lao PDR", "LAO", "49.9653990346743", "53.0088587998176"], ["Latvia", "LVA", "51.3576769664101", "88.9182077562288"], ["Lebanon", "LBN", "40.2366929285165", "61.7759293193717"], ["Lesotho", "LSO", "133.417747770067", "145.269803291332"], ["Liberia", "LBR", "188.445780348878", "72.0818523180092"], ["Libya", "LBY", "44.7127603305785", "88.7306945510594"], ["Liechtenstein", "LIE", "..", ".."], ["Lithuania", "LTU", "..", "119.018580300744"], ["Luxembourg", "LUX", "92.2682871847325", "85.9893808554856"], ["Macao SAR, China", "MAC", "84.6344858639804", "22.9171768370848"], ["Macedonia, FYR", "MKD", "90.5681031308004", "93.8211346858275"], ["Madagascar", "MDG", "49.5426274111533", "42.7638851591284"], ["Malawi", "MWI", "52.2510303849027", "60.0013477393314"], ["Malaysia", "MYS", "192.123905723906", "146.741390972339"], ["Maldives", "MDV", "79.7149430814522", "55.2359534403049"], ["Mali", "MLI", "55.7692409240544", "57.5633321609299"], ["Malta", "MLT", "148.239730962426", "105.936756467043"], ["Marshall Islands", "MHL", "57.5530077441339", "111.214822135593"], ["Mauritania", "MRT", "62.5184380370136", "92.4156906010384"], ["Mauritius", "MUS", "79.6497610515525", "68.3987652601531"], ["Mexico", "MEX", "50.5861543837532", "57.8911218402325"], ["Micronesia, Fed. Sts.", "FSM", "55.0378546501831", "67.3021567581996"], ["Moldova", "MDA", "96.9404219022833", "92.8620592824637"], ["Monaco", "MCO", "..", ".."], ["Mongolia", "MNG", "101.240556375632", "85.9199588297773"], ["Montenegro", "MNE", "..", "63.6943035354422"], ["Morocco", "MAR", "51.2309226932668", "58.5568490012578"], ["Mozambique", "MOZ", "35.312481192147", "75.1049795139212"], ["Myanmar", "MMR", "..", ".."], ["Namibia", "NAM", "73.4269699357848", "85.1175913952367"], ["Nepal", "NPL", "43.2633943629311", "37.4261612409392"], ["Netherlands", "NLD", "109.192088088837", "130.39312817939"], ["New Caledonia", "NCL", "56.9650370863617", ".."], ["New Zealand", "NZL", "51.6465140614126", "42.6830628494456"], ["Nicaragua", "NIC", "47.9702795061343", "92.0124913583445"], ["Niger", "NER", "37.7139459869458", "63.4049849226738"], ["Nigeria", "NGA", "64.0193216536033", "34.7462235557535"], ["Northern Mariana Islands", "MNP", "..", ".."], ["Norway", "NOR", "55.1321525632574", "48.5355818081695"], ["Oman", "OMN", "84.3269205130256", "96.4745690184321"], ["Pakistan", "PAK", "26.8983923885115", "33.378858535047"], ["Palau", "PLW", "90.1018195448723", "61.4078647933417"], ["Panama", "PAN", "36.4700314100082", "96.2157624218698"], ["Papua New Guinea", "PNG", "92.2090022702539", "99.7481274325853"], ["Paraguay", "PRY", "37.3597185087293", "82.4954279534254"], ["Peru", "PER", "28.3302307679079", "44.3255493715137"], ["Philippines", "PHL", "94.7963871436439", "55.0945888157201"], ["Poland", "POL", "46.9938370648644", "70.8582742830426"], ["Portugal", "PRT", "54.3397933914539", "53.3552292285849"], ["Puerto Rico", "PRI", "..", ".."], ["Qatar", "QAT", "83.5928618701853", "78.4866550895357"], ["Romania", "ROM", "63.154392987476", "67.774875654956"], ["Russian Federation", "RUS", "57.8433136224266", "42.576992751178"], ["Rwanda", "RWA", "15.159041484978", "30.3291241976527"], ["Samoa", "WSM", "63.5641157266341", "57.8721497202111"], ["San Marino", "SMR", "..", ".."], ["Sao Tome and Principe", "STP", "43.0195531045931", "61.2232767295182"], ["Saudi Arabia", "SAU", "57.2171152341235", "67.9571384930624"], ["Senegal", "SEN", "52.1197844871731", "53.6895921290743"], ["Serbia", "SRB", "..", "67.2295603125766"], ["Seychelles", "SYC", "87.171513961233", "142.736745199941"], ["Sierra Leone", "SLE", "25.4767453048608", "43.1051848161737"], ["Singapore", "SGP", "284.182438662546", "280.288108082491"], ["Sint Maarten (Dutch part)", "SXM", "..", ".."], ["Slovak Republic", "SVK", "84.4782423005023", "145.699156873786"], ["Slovenia", "SVN", "92.9935529934123", "123.597954850856"], ["Solomon Islands", "SLB", "37.0028842755849", "93.5237957098094"], ["Somalia", "SOM", "..", ".."], ["South Africa", "ZAF", "43.7644589156593", "50.1353453899181"], ["South Sudan", "SSD", "..", ".."], ["Spain", "ESP", "45.5814979053967", "40.6121519724896"], ["Sri Lanka", "LKA", "77.19763909708", "44.6148518100149"], ["St. Kitts and Nevis", "KNA", "54.512592077433", "43.5889625515141"], ["St. Lucia", "LCA", "50.9671362041968", "70.4820242153612"], ["St. Martin (French part)", "MAF", "..", ".."], ["St. Vincent and the Grenadines", "VCT", "52.9953256640825", "55.6939150105278"], ["Sudan", "SDN", "27.4122378806581", "32.6793169085026"], ["Suriname", "SUR", "103.680443456796", "78.3602534221446"], ["Swaziland", "SWZ", "128.304666483927", "106.58270467671"], ["Sweden", "SWE", "61.5900701461674", "62.9623287315471"], ["Switzerland", "CHE", "60.0092691272419", "63.9852733373181"], ["Syrian Arab Republic", "SYR", "43.7185446675578", ".."], ["Tajikistan", "TJK", "169.658881034098", "68.2745259190055"], ["Tanzania", "TZA", "22.1652012143801", "38.3365409940549"], ["Thailand", "THA", "106.727020265108", "117.973412978217"], ["Timor-Leste", "TLS", "..", "28.1269807280514"], ["Togo", "TGO", "71.4699478554705", "83.7996151004"], ["Tonga", "TON", "41.8824277798212", "45.1654028036679"], ["Trinidad and Tobago", "TTO", "92.9814380149819", "84.8523021689736"], ["Tunisia", "TUN", "67.139538889625", "86.9803823419519"], ["Turkey", "TUR", "30.8657243959901", "40.9519467182186"], ["Turkmenistan", "TKM", "147.762428341146", "55.0838059630557"], ["Turks and Caicos Islands", "TCA", "..", ".."], ["Tuvalu", "TUV", "36.4579876214545", "51.2180769819114"], ["Uganda", "UGA", "31.305453359079", "33.4130519876361"], ["Ukraine", "UKR", "91.2591367293029", "82.3849702328443"], ["United Arab Emirates", "ARE", "81.317084922605", "132.494626716432"], ["United Kingdom", "GBR", "40.9051185467466", "41.8236600755685"], ["United States", "USA", "19.8469796968899", "21.7027410171306"], ["Uruguay", "URY", "25.2417974410731", "38.09387727166"], ["Uzbekistan", "UZB", "40.0715838439203", "51.8257308564048"], ["Vanuatu", "VUT", "41.5418736144868", "47.6349990117906"], ["Venezuela, RB", "VEN", "42.460958496224", "26.5984286072018"], ["Vietnam", "VNM", "89.5390108217411", "135.489388479802"], ["Virgin Islands (U.S.)", "VIR", "..", ".."], ["West Bank and Gaza", "WBG", "..", ".."], ["Yemen, Rep.", "YEM", "66.4463737109929", "56.153966487368"], ["Zambia", "ZMB", "49.4446264489613", "61.7851462200414"], ["Zimbabwe", "ZWE", "56.6221824784061", "74.0126149135606"]]
	var country_codes = [
    ["af", "AFG", "Afghanistan"],
    ["ax", "ALA", "Åland Islands"],
    ["al", "ALB", "Albania"],
    ["dz", "DZA", "Algeria"],
    ["as", "ASM", "American Samoa"],
    ["ad", "AND", "Andorra"],
    ["ao", "AGO", "Angola"],
    ["ai", "AIA", "Anguilla"],
    ["aq", "ATA", "Antarctica"],
    ["ag", "ATG", "Antigua and Barbuda"],
    ["ar", "ARG", "Argentina"],
    ["am", "ARM", "Armenia"],
    ["aw", "ABW", "Aruba"],
    ["au", "AUS", "Australia"],
    ["at", "AUT", "Austria"],
    ["az", "AZE", "Azerbaijan"],
    ["bs", "BHS", "Bahamas"],
    ["bh", "BHR", "Bahrain"],
    ["bd", "BGD", "Bangladesh"],
    ["bb", "BRB", "Barbados"],
    ["by", "BLR", "Belarus"],
    ["be", "BEL", "Belgium"],
    ["bz", "BLZ", "Belize"],
    ["bj", "BEN", "Benin"],
    ["bm", "BMU", "Bermuda"],
    ["bt", "BTN", "Bhutan"],
    ["bo", "BOL", "Bolivia, Plurinational State of"],
    ["bq", "BES", "Bonaire, Sint Eustatius and Saba"],
    ["ba", "BIH", "Bosnia and Herzegovina"],
    ["bw", "BWA", "Botswana"],
    ["bv", "BVT", "Bouvet Island"],
    ["br", "BRA", "Brazil"],
    ["io", "IOT", "British Indian Ocean Territory"],
    ["bn", "BRN", "Brunei Darussalam"],
    ["bg", "BGR", "Bulgaria"],
    ["bf", "BFA", "Burkina Faso"],
    ["bi", "BDI", "Burundi"],
    ["kh", "KHM", "Cambodia"],
    ["cm", "CMR", "Cameroon"],
    ["ca", "CAN", "Canada"],
    ["cv", "CPV", "Cape Verde"],
    ["ky", "CYM", "Cayman Islands"],
    ["cf", "CAF", "Central African Republic"],
    ["td", "TCD", "Chad"],
    ["cl", "CHL", "Chile"],
    ["cn", "CHN", "China"],
    ["cx", "CXR", "Christmas Island"],
    ["cc", "CCK", "Cocos (Keeling) Islands"],
    ["co", "COL", "Colombia"],
    ["km", "COM", "Comoros"],
    ["cg", "COG", "Congo"],
    ["cd", "COD", "Congo, the Democratic Republic of the"],
    ["ck", "COK", "Cook Islands"],
    ["cr", "CRI", "Costa Rica"],
    ["ci", "CIV", "Côte d'Ivoire"],
    ["hr", "HRV", "Croatia"],
    ["cu", "CUB", "Cuba"],
    ["cw", "CUW", "Curaçao"],
    ["cy", "CYP", "Cyprus"],
    ["cz", "CZE", "Czech Republic"],
    ["dk", "DNK", "Denmark"],
    ["dj", "DJI", "Djibouti"],
    ["dm", "DMA", "Dominica"],
    ["do", "DOM", "Dominican Republic"],
    ["ec", "ECU", "Ecuador"],
    ["eg", "EGY", "Egypt"],
    ["sv", "SLV", "El Salvador"],
    ["gq", "GNQ", "Equatorial Guinea"],
    ["er", "ERI", "Eritrea"],
    ["ee", "EST", "Estonia"],
    ["et", "ETH", "Ethiopia"],
    ["fk", "FLK", "Falkland Islands (Malvinas)"],
    ["fo", "FRO", "Faroe Islands"],
    ["fj", "FJI", "Fiji"],
    ["fi", "FIN", "Finland"],
    ["fr", "FRA", "France"],
    ["gf", "GUF", "French Guiana"],
    ["pf", "PYF", "French Polynesia"],
    ["tf", "ATF", "French Southern Territories"],
    ["ga", "GAB", "Gabon"],
    ["gm", "GMB", "Gambia"],
    ["ge", "GEO", "Georgia"],
    ["de", "DEU", "Germany"],
    ["gh", "GHA", "Ghana"],
    ["gi", "GIB", "Gibraltar"],
    ["gr", "GRC", "Greece"],
    ["gl", "GRL", "Greenland"],
    ["gd", "GRD", "Grenada"],
    ["gp", "GLP", "Guadeloupe"],
    ["gu", "GUM", "Guam"],
    ["gt", "GTM", "Guatemala"],
    ["gg", "GGY", "Guernsey"],
    ["gn", "GIN", "Guinea"],
    ["gw", "GNB", "Guinea-Bissau"],
    ["gy", "GUY", "Guyana"],
    ["ht", "HTI", "Haiti"],
    ["hm", "HMD", "Heard Island and McDonald Islands"],
    ["va", "VAT", "Holy See (Vatican City State)"],
    ["hn", "HND", "Honduras"],
    ["hk", "HKG", "Hong Kong"],
    ["hu", "HUN", "Hungary"],
    ["is", "ISL", "Iceland"],
    ["in", "IND", "India"],
    ["id", "IDN", "Indonesia"],
    ["ir", "IRN", "Iran, Islamic Republic of"],
    ["iq", "IRQ", "Iraq"],
    ["ie", "IRL", "Ireland"],
    ["im", "IMN", "Isle of Man"],
    ["il", "ISR", "Israel"],
    ["it", "ITA", "Italy"],
    ["jm", "JAM", "Jamaica"],
    ["jp", "JPN", "Japan"],
    ["je", "JEY", "Jersey"],
    ["jo", "JOR", "Jordan"],
    ["kz", "KAZ", "Kazakhstan"],
    ["ke", "KEN", "Kenya"],
    ["ki", "KIR", "Kiribati"],
    ["kp", "PRK", "Korea, Democratic People's Republic of"],
    ["kr", "KOR", "Korea, Republic of"],
    ["kw", "KWT", "Kuwait"],
    ["kg", "KGZ", "Kyrgyzstan"],
    ["la", "LAO", "Lao People's Democratic Republic"],
    ["lv", "LVA", "Latvia"],
    ["lb", "LBN", "Lebanon"],
    ["ls", "LSO", "Lesotho"],
    ["lr", "LBR", "Liberia"],
    ["ly", "LBY", "Libya"],
    ["li", "LIE", "Liechtenstein"],
    ["lt", "LTU", "Lithuania"],
    ["lu", "LUX", "Luxembourg"],
    ["mo", "MAC", "Macao"],
    ["mk", "MKD", "Macedonia, the former Yugoslav Republic of"],
    ["mg", "MDG", "Madagascar"],
    ["mw", "MWI", "Malawi"],
    ["my", "MYS", "Malaysia"],
    ["mv", "MDV", "Maldives"],
    ["ml", "MLI", "Mali"],
    ["mt", "MLT", "Malta"],
    ["mh", "MHL", "Marshall Islands"],
    ["mq", "MTQ", "Martinique"],
    ["mr", "MRT", "Mauritania"],
    ["mu", "MUS", "Mauritius"],
    ["yt", "MYT", "Mayotte"],
    ["mx", "MEX", "Mexico"],
    ["fm", "FSM", "Micronesia, Federated States of"],
    ["md", "MDA", "Moldova, Republic of"],
    ["mc", "MCO", "Monaco"],
    ["mn", "MNG", "Mongolia"],
    ["me", "MNE", "Montenegro"],
    ["ms", "MSR", "Montserrat"],
    ["ma", "MAR", "Morocco"],
    ["mz", "MOZ", "Mozambique"],
    ["mm", "MMR", "Myanmar"],
    ["na", "NAM", "Namibia"],
    ["nr", "NRU", "Nauru"],
    ["np", "NPL", "Nepal"],
    ["nl", "NLD", "Netherlands"],
    ["nc", "NCL", "New Caledonia"],
    ["nz", "NZL", "New Zealand"],
    ["ni", "NIC", "Nicaragua"],
    ["ne", "NER", "Niger"],
    ["ng", "NGA", "Nigeria"],
    ["nu", "NIU", "Niue"],
    ["nf", "NFK", "Norfolk Island"],
    ["mp", "MNP", "Northern Mariana Islands"],
    ["no", "NOR", "Norway"],
    ["om", "OMN", "Oman"],
    ["pk", "PAK", "Pakistan"],
    ["pw", "PLW", "Palau"],
    ["ps", "PSE", "Palestine, State of"],
    ["pa", "PAN", "Panama"],
    ["pg", "PNG", "Papua New Guinea"],
    ["py", "PRY", "Paraguay"],
    ["pe", "PER", "Peru"],
    ["ph", "PHL", "Philippines"],
    ["pn", "PCN", "Pitcairn"],
    ["pl", "POL", "Poland"],
    ["pt", "PRT", "Portugal"],
    ["pr", "PRI", "Puerto Rico"],
    ["qa", "QAT", "Qatar"],
    ["re", "REU", "Réunion"],
    ["ro", "ROM", "Romania"],
    ["ru", "RUS", "Russian Federation"],
    ["rw", "RWA", "Rwanda"],
    ["bl", "BLM", "Saint Barthélemy"],
    ["sh", "SHN", "Saint Helena, Ascension and Tristan da Cunha"],
    ["kn", "KNA", "Saint Kitts and Nevis"],
    ["lc", "LCA", "Saint Lucia"],
    ["mf", "MAF", "Saint Martin (French part)"],
    ["pm", "SPM", "Saint Pierre and Miquelon"],
    ["vc", "VCT", "Saint Vincent and the Grenadines"],
    ["ws", "WSM", "Samoa"],
    ["sm", "SMR", "San Marino"],
    ["st", "STP", "Sao Tome and Principe"],
    ["sa", "SAU", "Saudi Arabia"],
    ["sn", "SEN", "Senegal"],
    ["rs", "SRB", "Serbia"],
    ["sc", "SYC", "Seychelles"],
    ["sl", "SLE", "Sierra Leone"],
    ["sg", "SGP", "Singapore"],
    ["sx", "SXM", "Sint Maarten (Dutch part)"],
    ["sk", "SVK", "Slovakia"],
    ["si", "SVN", "Slovenia"],
    ["sb", "SLB", "Solomon Islands"],
    ["so", "SOM", "Somalia"],
    ["za", "ZAF", "South Africa"],
    ["gs", "SGS", "South Georgia and the South Sandwich Islands"],
    ["ss", "SSD", "South Sudan"],
    ["es", "ESP", "Spain"],
    ["lk", "LKA", "Sri Lanka"],
    ["sd", "SDN", "Sudan"],
    ["sr", "SUR", "Suriname"],
    ["sj", "SJM", "Svalbard and Jan Mayen"],
    ["sz", "SWZ", "Swaziland"],
    ["se", "SWE", "Sweden"],
    ["ch", "CHE", "Switzerland"],
    ["sy", "SYR", "Syrian Arab Republic"],
    ["tw", "TWN", "Taiwan, Province of China"],
    ["tj", "TJK", "Tajikistan"],
    ["tz", "TZA", "Tanzania, United Republic of"],
    ["th", "THA", "Thailand"],
    ["tl", "TLS", "Timor-Leste"],
    ["tg", "TGO", "Togo"],
    ["tk", "TKL", "Tokelau"],
    ["to", "TON", "Tonga"],
    ["tt", "TTO", "Trinidad and Tobago"],
    ["tn", "TUN", "Tunisia"],
    ["tr", "TUR", "Turkey"],
    ["tm", "TKM", "Turkmenistan"],
    ["tc", "TCA", "Turks and Caicos Islands"],
    ["tv", "TUV", "Tuvalu"],
    ["ug", "UGA", "Uganda"],
    ["ua", "UKR", "Ukraine"],
    ["ae", "ARE", "United Arab Emirates"],
    ["gb", "GBR", "United Kingdom"],
    ["us", "USA", "United States"],
    ["um", "UMI", "United States Minor Outlying Islands"],
    ["uy", "URY", "Uruguay"],
    ["uz", "UZB", "Uzbekistan"],
    ["vu", "VUT", "Vanuatu"],
    ["ve", "VEN", "Venezuela, Bolivarian Republic of"],
    ["vn", "VNM", "Viet Nam"],
    ["vg", "VGB", "Virgin Islands, British"],
    ["vi", "VIR", "Virgin Islands, U.S."],
    ["wf", "WLF", "Wallis and Futuna"],
    ["eh", "ESH", "Western Sahara"],
    ["ye", "YEM", "Yemen"],
    ["zm", "ZMB", "Zambia"],
    ["zw", "ZWE", "Zimbabwe"] ];
	var c_code = "None";

	for (var i = 0; i < country_list.length; i++){
		for (var j = 0; j < country_codes.length; j++){
			if (country_list[i][1] == country_codes[j][1]){
				var c_code = country_codes[j][0];
				changeColor(c_code, country_list[i][3])
			}


		}
	}
}

/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, value) {
	// console.log(id)
		var c_list = ['#006837','#238443','#41ab5d','#78c679','#addd8e','#fd8d3c','#fc4e2a','#e31a1c','#bd0026','#800026']
		checklist = [];
		var element = document.getElementById(id).getElementsByTagName("path");
		if (element.length != 0){
			// console.log(id, value)
			for (var piece = 0; piece < element.length; piece++){
				if (value == ".."){
				element[piece].style.fill = "grey";
				}
				else if (value > 99){
				element[piece].style.fill = "black";
				}
				else {
				value = Math.round((value * 0.1));
				element[piece].style.fill = c_list[value];
			}
			};
		} else {
			element = document.getElementById(id);
			if (value == ".."){
			element.style.fill = "grey";
			}
			else if (value > 99){
			element.style.fill = "black";
			}
			else {
			value = Math.round((value * 0.1));
			element.style.fill = c_list[value];
			};
		};
}