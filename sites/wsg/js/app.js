var prtn = new Vue({
    el: '#prtn',
    data: {
        selectedCountry: '',
        partners: [
            {
                prtnContry: 'Angola',
                prtnInst: [
                    'Jear Piaget Universite Of Angola'
                ]
            },
            {
                prtnContry: 'Austria',
                prtnInst: [
                    'Höhere Graphische Bundes-Lehr- und Versuchanstalt',
                    'University of Applied Sciences Burgenland'
                ]
            },
            {
                prtnContry: 'Azerbejdzan',
                prtnInst: [
                    'Azerbaijan Technological University',
                    'Baku Business University',
                    'Baku Slavic University',
                    'Lankaran State University',
                    'Nakhchivan State University'
                ]
            },
            {
                prtnContry: 'Białoruś',
                prtnInst: [
                    'Belarusian State University',
                    'Private Institute of Management and Entrepreneurship'
                ]
            },
            {
                prtnContry: 'Belgia',
                prtnInst: [
                    'Artesis Hogeschool Antwerpen',
                    'Vives University College / Campus Kortrijk'
                ]
            },
            {
                prtnContry: 'Bułgaria',
                prtnInst: [
                    'New Bulgarian University',
                    'American University in Bulgaria'
                ]
            },
            {
                prtnContry: 'Chiny',
                prtnInst: [
                    'Ningbo University'
                ]
            },
            {
                prtnContry: 'Chorwacja',
                prtnInst: [
                    'University of Zagreb',
                    'University College of Management and Design Aspira/Split',
                    'University of Zadar'
                ]
            },
            {
                prtnContry: 'Czarnogóra',
                prtnInst: [
                    'University of Donja Gorica'
                ]
            },
            {
                prtnContry: 'Czechy',
                prtnInst: [
                    'Vysoka Skola Polytechnicka Jihlava',
                    'VŠB-Technical University of Ostrava',
                    'Czech University of Life Sciences Prague',
                    'Tomas Bata University in Zlín'
                ]
            },
            {
                prtnContry: 'Dania',
                prtnInst: [
                    'Aalborg University'
                ]
            },
            {
                prtnContry: 'Egypt',
                prtnInst: [
                    'Tanta University'
                ]
            },
            {
                prtnContry: 'Estonia',
                prtnInst: [
                    'Estonian IT College'
                ]
            },
            {
                prtnContry: 'Finlandia',
                prtnInst: [
                    'Laurea University of Applied Sciences',
                    'Seinäjoki University of Applied Sciences'
                ]
            },
            {
                prtnContry: 'Francja',
                prtnInst: [
                    'Université de Toulouse- Le Mirail',
                    'Nancy Université',
                    'L"Institut Universitaire de Technologie de Lille'
                ]
            },
            {
                prtnContry: 'Gruzja',
                prtnInst: [
                    'Georgian Institute of Public Affairs',
                    'Georgian Technical University',
                    'Sokhumi State University',
                    'Batumi Shota Rustaveli State University'
                ]
            },
            {
                prtnContry: 'Grecja',
                prtnInst: [
                    'Technological Educational Institute of Epirus'
                ]
            },
            {
                prtnContry: 'Hiszpania',
                prtnInst: [
                    'Universidad de Cantabria',
                    'Universidad de Vigo',
                    'Universitat Rovira i Virgili',
                    'ISSA School of Management Assistants - University of Navarra',
                    'Universidad a Distancia de Madrid (UDIMA)',
                    'International School of Event Management and Communication (ISEMCO)'
                ]
            },
            {
                prtnContry: 'Holandia',
                prtnInst: [
                    'Maastricht Hotel Management School',
                    'The Hague University of Applied Science',
                    'Maastricht School of Management'
                ]
            },
            {
                prtnContry: 'Kazachstan',
                prtnInst: [
                    'The Kazakh Academy of Sport and Tourism',
                    'Almaty Academy of Economics and Statistics',
                    'Makhambet Utemisov West Kazakhstan State University',
                    'Казахская Академия Труда и Социальных Отношений',
                    'Алматинский университет непрерывного образования',
                    'Almaty Academy of Economy and Law ',
                    '„Kokshe” Academy in Kokszetau',
                    'West-Kazakhstan Humanitarian Academy in Uralsk',
                    'Suleyman Demirel University'
                ]
            },
            {
                prtnContry: 'Litwa',
                prtnInst: [
                    'Vilniaus Kolegija University od Applied Sciences',
                    'International School of Law and Business',
                    'SMK University of Applied Social Sciences',
                    'Vilnius Business College',
                    'Alytus College',
                    'Northern Lithuania College',
                    'Lithuania Business University of Applied Sciences'
                ]
            },
            {
                prtnContry: 'Łotwa',
                prtnInst: [
                    'Transport and Telecommunication Institute Riga',
                    'Daugavpils University',
                    'Rezeknes Augstskola',
                    'Riga Aeronautical Institute'
                ]
            },
            {
                prtnContry: 'Maroko',
                prtnInst: [
                    'Ecole Supérieure des Sciences Techniques et de Management'
                ]
            },
            {
                prtnContry: 'Meksyk',
                prtnInst: [
                    'Tecnológico de Monterrey'
                ]
            },
            {
                prtnContry: 'Niemcy',
                prtnInst: [
                    'Fachhochschule Eberswalde',
                    'Hochschule Heilbronn',
                    'Fachhochschule Stralsund',
                    'Johann Wolfgang Goethe-Universitat Frankfurt am Main',
                    'Hochschule Neubrandenburg',
                    'Deutsch-Polnische Gesellschaft Mannheim',
                    'Cologne Business School',
                    'Alanus Hochschule Bonn',
                    'Fachhochschule Kiel',
                    'Technische Universitat Darmstadt',
                    'European University Viadrina',
                    'University of Bamberg',
                    'University of Würzburg'
                ]
            },
            {
                prtnContry: 'Portugalia',
                prtnInst: [
                    'Instituto Piaget',
                    'Instituto Politécnico de Leiria',
                    'Universidade da Madeira',
                    'Universidade Portucalense Infante D. Henrique',
                    'Lisbon Polytechnic Institute',
                    'University Institute of Maia',
                    'INSTITUTO POLITECNICO DO PORTO'
                ]
            },
            {
                prtnContry: 'Republika Korei',
                prtnInst: [
                    'Catholic University of Daegu'
                ]
            },
            {
                prtnContry: 'Republika Zambii',
                prtnInst: [
                    'The Victoria Falls University'
                ]
            },
            {
                prtnContry: 'Rosja',
                prtnInst: [
                    'Pushkin State Russian Language Institute',
                    'Центр Инновационных Технологий в Образовании',
                    'Modern University for the Humanities',
                    'Nowoczesna Akademia Humanistyczna w Moskwie ',
                    'The International Innovative University',
                    'Moscow State University Of Mechanical Engineering (MAMI)',
                    'Rosyjski Uniwersytet Chemiczno-Technologiczny im. D. I. Mendelejewa w Moskwie',
                    'Samara State Academy of Social Sciences and Humanities',
                    'Kaliningradzka Filia Sankt-Peterburskiego Państwowego Uniwersytetu Rolnego» w Polessku (Obwód Kaliningradzki)',
                    'Immanuel Kant Baltic Federal University',
                    'Państwowy Instytut Języka Rosyjskiego im. A.S. Puszkina w Moskwie',
                    'Transbaikal State University',
                    'Russian State University of Physical Education, Sports, Youth and Tourism'
                ]
            },
            {
                prtnContry: 'Rumunia',
                prtnInst: [
                    'Universitatea “1 Decembrie 1918” Alba Iulia',
                    'University of Oradea',
                    'Agora University of Oradea'
                ]
            },
            {
                prtnContry: 'Słowacja',
                prtnInst: [
                    'Slovak University of Agriculture in Nitra'
                ]
            },
            {
                prtnContry: 'Słowenia',
                prtnInst: [
                    'University of Ljubljana',
                    'University of Maribor',
                    'Academia Higher Education Colleges'
                ]
            },
            {
                prtnContry: 'Szwecja',
                prtnInst: [
                    'West University',
                    'Uppsala University'
                ]
            },
            {
                prtnContry: 'Turcja',
                prtnInst: [
                    'Adana Science and Technology University',
                    'Alanya Alaaddin Keykubat University (ALKU)',
                    'Mersin University',
                    'Beykent University',
                    'Atilim University',
                    'Dicle University',
                    'Karamanoğlu Mehmetbey University',
                    'Mersin University',
                    'Cukurova University',
                    'Akdeniz University',
                    'Düzce University',
                    'Izmir Kâtip Çelebi University',
                    'Nevsehir University',
                    'Sakarya University',
                    'Yeditepe University',
                    'Pamukkale University',
                    'Ege University',
                    'Bilecik Seyh Edebali University',
                    'Gumushane University',
                    'Izmir University of Economics'
                ]
            },
            {
                prtnContry: 'Ukraina',
                prtnInst: [
                    'Bila Tserkva Humanitarian Pedagogical  Collegium',
                    'Burshtyn Energy College',
                    'Cherkasy State Technological University',
                    'Chernihiv National T.G. Shevchenko Pedagogical University',
                    'Dnipropetrovsk University of Economics and Law',
                    'Donbass State Pedagogical University',
                    'Donetsk National University',
                    'HNPU named after G. S. Skovoroda',
                    'International University of Finance',
                    'Kharkiv National University of Radioelectronics',
                    'Kharkiv State University of Food Technology and Trade',
                    'Kherson State University',
                    'Khmelnytskyi National University',
                    'Kirovohrad National Technical University',
                    'Kremenchug University of Economics, Information Technology and Management',
                    'Kremenchuk Mykhailo Ostohradskyi National University',
                    'Lesya Ukrainka Eastern European National University',
                    'Lutsk National Technical University',
                    'Lviv Institute of Interregional Academy of Personnel Management',
                    'Lviv Institute of Management ',
                    'Lviv National Agrarian University',
                    'Lviv Polytechnic National University',
                    'Lviv State University of Physical Culture',
                    'Lviv University of Trade and Economics',
                    'National Pedagogical Dragomanov University',
                    'National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute”',
                    'National University of Physical Education and Sport',
                    'National University of Water and Environmental Engineering',
                    'Odessa State University of Economics',
                    'Pedagogical College Kremenchuk Pedagogical College named after Anton Makarenko',
                    'Petro Mohyla Black Sea State University',
                    'Poltava National Technical Yuri Kondratyuk University',
                    'Rivne Slavonic Institute of Kyiv Slavonic University',
                    'Sumy State University',
                    'Tarashcha College of Agricultural Technology',
                    'Ternopil National Economic University',
                    'Ternopil Volodymyr Hnatiuk National Pedagogical University',
                    'The Bohdan Khmelnytsky National University of Cherkasy',
                    'The Kirovohrad Volodymyr Vynnychenko State Pedagogical University',
                    'The Kyiv Hotel Management College',
                    'The National Forestry and Wood-Technology University',
                    'The National Humanistic University in Rivne',
                    'The National Universityof Ostroh Academy',
                    'Ukrainian institute of arts and sciences',
                    'Ukrainian State University of Railway Transport',
                    'University of Emrging Technologies',
                    'University of State Fiscal Service of Ukraine',
                    'Uzhhorod National University',
                    'Vasyl Stefanyk Precarpathian National University',
                    'Volyn Institute of Economics and Management',
                    'Zaporizhzhya National Technical University',
                    'Zaporizhzhya National University',
                    'Zhytomyr Ivan Franko State University'
                ]
            },
            {
                prtnContry: 'Węgry',
                prtnInst: [
                    'Károly Robert College',
                    'University of West Hungary',
                    'University of Szeged',
                    'Kodolanyi Janos University of Applied Sciences',
                    'Eszterházy Károly University'
                ]
            },
            {
                prtnContry: 'Wielka Brytania',
                prtnInst: [
                    'Perth College',
                    'University of Wolverhampton'
                ]
            },
            {
                prtnContry: 'Włochy',
                prtnInst: [
                    'Romualdo Del Bianco Foundation',
                    'University of Cagliari',
                    'Universita Politecnica delle Marche'
                ]
            },
            {
                prtnContry: 'Zjednoczone Emiraty Arabskie',
                prtnInst: [
                    'Skyline University College'
                ]
            },
        ]
    }
})