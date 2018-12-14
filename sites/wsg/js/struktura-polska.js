var structura = new Vue ({
    el: '#app',
    data: {
        selectedCity: '',
        strPl: [
            {
                city: 'Bydgoszcz',
                text: [
                    'Kampus Wyższej Szkoły Gospodarki zajmuje 6 hektarów w samym centrum Bydgoszczy. Otwarty dla wszystkich: mieszkańców, studentów, turystów i przypadkowych przechodniów. Kampus WSG ma swoją niepowtarzalną historię. Z obszaru przemysłowego, otoczony opieką nowych właścicieli, zyskał wyjątkowy  - w skali regionu i kraju - wymiar i stał się nowoczesną, przyjazną rekreacjno – naukową przestrzenią.',
                    'Do dyspozycji studentów oraz gości są także inne jednostki przyuczelniane znajdujące się na terenie Kampusu: Centrum Fitness i Odnowy Biologicznej – Rewital a także Akademickie Centrum Medyczne, Akademicka Przestrzeń Kulturalna, Przedszkole Akademickie, Muzeum Fotografii, Hala Widowiskowo – Sportowa, Mensa Studencka, akademiki a także boiska sportowe, wypożyczalnia rowerów oraz przystań kajakowa.'
                ]
            },
            {
                city: 'Toruń',
                text: [
                    'Toruń, ośrodek o bogatych tradycjach akademickich, przez lata kojarzony był z dużym potencjałem myśli technicznej. Wiele toruńskich budowli i konstrukcji ma unikatowy charakter. Pomimo tak rozległej infrastruktury technicznej miasto przez wiele lat nie decydowało się na stworzenie warunków do kształcenia kadry technicznej na wyższym poziomie.',
                    'Uczelnia od kilku lat intensywnie rozwija obszary tzw. kierunków zamawianych, włączając się w kampanie przygotowania kadr inżynierskich dla potrzeb gospodarki. Wśród 20 kierunków WSG realizuje m.in.: architekturę, budownictwo, mechatronikę, informatykę, zarządzanie i inżynierię produkcji. Dzięki projektom oraz licznym partnerstwom branżowym uczelnia od kilku lat prowadzi w Toruniu studia inżynierskie a także studia podyplomowe oraz specjalistyczne szkolenia. Władzę Wydziału wierzą, że innowacyjne studia inżynierskie zachęcą do pozostania w naszym regionie absolwentów reprezentujących poszukiwane przez pracodawców zawody.',
                    'Wyższa Szkoła Gospodarki dysponuje potencjałem, który pozwala na elastyczne podejście do oferty, stąd w pierwszych latach funkcjonowania Wydziału uczelnia konfrontuje swoje założenia z zainteresowaniem konkretnymi kompetencjami ze strony kandydatów.'
                   ]
            },
            {
                city: 'Malbork',
                text: [
                    'Malbork jest kolejnym z Wydziałów Wyższej Szkoły Gospodarki, w którym duży nacisk kładziemy na rozwój przedsiębiorczości akademickiej i stosowanie wiedzy i wyników badań naukowych w praktyce gospodarczej i społecznej, stąd nazwa Wydziału - Zarządzania i Inżynierii Społecznej.',
                    'Przedmiotem działalności edukacyjnej i naukowo-badawczej Uczelni jest funkcjonowanie gospodarki wolnorynkowej i rozwój przedsiębiorczości w Polsce i na świecie we wszystkich ich aspektach: ekonomicznym (ekonomia, zarządzanie, logistyka), społeczno-kulturowym (socjologia, kulturoznawstwo) przestrzennym (geografia, urbanistyka) i technologicznym (informatyka, architektura, inżynieria produkcji).',
                    'Nowoczesne kształcenie - uniwersalna wiedza połączona ze specjalistycznymi umiejętnościami - dostosowane jest do zmieniającej się rzeczywistości i dynamicznego rynku pracy. Składa się na nie kilka filarów: wiedza ekonomiczna, znakomite opanowanie narzędzi informatycznych, znajomość języków obcych, filozofia, wiedza prawnicza. Dużą rolę przykładamy do nowoczesnych technologii w dydaktyce, w szczególności do metod e-learningowych, czyli kształcenia przy pomocy narzędzi elektronicznych.'
                ]
            },
            {
                city: 'Ełk',
                text: [
                    'Ełk wraz z Gołdapią i Oleckiem tworzą ekologiczny, etnicznie zróżnicowany subregion EGO, nazwany "zielonymi płucami Polski". Pełen walorów, które należy zagospodarować tak, by przynosiły korzyści jego mieszkańcom, przyciągały turystów i zachęcały inwestorów. Potrzeba edukacji w tym zakresie przyczyniła się do powstania w 2001 roku Wydziału Gospodarki Turystycznej w Ełku. W porozumieniu z samorządem lokalnym nasza uczelnia podjęła się przygotowania profesjonalnych, nowoczesnych kadr, które świadomie i odpowiedzialnie włączają się w realizację strategii rozwoju tego wyjątkowego obszaru.',
                    'Lokalni przedsiębiorcy cenią sobie współpracę z wydziałem, współtworząc ofertę studiów podyplomowych i innych form edukacyjnych służących specyficznym potrzebom rozwojowym regionu.'
                ]
            },
            {
                city: 'Inowrocław',
                text: [
                    'Znany z wyjątkowych walorów uzdrowiskowych Inowrocław pozostawał jednym z nielicznych tej wielkości miast, w którym nie funkcjonowała dotąd żadna uczelnia. WSG, w porozumieniu z lokalnymi władzami, podjęła się stworzenia kompleksowego programu rozwoju dla mieszkańców Inowrocławia, w oparciu o zasoby miasta oraz potencjał, jakim dysponuje uczelnia. We wrześniu 2006 r. Władze Inowrocławia i WSG podpisały list intencyjny, dzięki czemu utworzony został Wydział Zarządzania i Inżynierii Społecznej Rozpoczął się intensywny rozwój wydziału - uczelnia szybko zyskała lokalnych partnerów w sferze przedsiębiorczości, kultury i sportu.'
                ]
            },
            {
                city: 'Piła',
                text: [
                    'Wydział Gospodarki i Techniki kształci na skorelowanych z potrzebami szkolnictwa wyższego w regionie, obszarach studiów opartych na kierunkach ekonomicznych – ekonomii i zarządzaniu.',
                    'Studia licencjackie zapewniają zdobycie wiedzy i umiejętności w określonym obszarze, przygotowują do pracy w wybranym zawodzie, a ich absolwent uzyskuje tytuł licencjata w ciągu 6 lub 7 semestrów nauki. Po ich ukończeniu można kontynuować naukę na studiach drugiego stopnia oraz studiach podyplomowych.'   
                ]
            },
            {
                city: 'Słupsk',
                text: [
                    'W Słupsku coraz więcej zwolenników zyskuje, tak promowana przez Unię Europejską, idea kształcenia ustawicznego. Ciągłe doskonalenie stało się modne nie tylko wśród osób dorosłych. Coraz częściej rodzice przyprowadzają swoje dzieci, aby te mogły poznawać nowe rzeczy i nabywać nowe umiejętności. Nikogo już nie dziwi, że niemowlęta chodzą na basen, czy uczą się języków obcych.',
                    'Pomorski Uniwersytet Trzeciego Wieku - program zajęć obejmuje zarówno cykl wykładów jak i różne propozycje warsztatów, z których korzysta w chwili obecnej blisko 70 uczestników i cały czas prowadzony jest nabór dla wszystkich chętnych.'
                ]
            }
        ],
        strRu: [
            {
                city: 'Быдгощ',
                text: [
                    'Кампус Университета Экономики занимает 6 гектаров в самом центре Быдгоща. Открыто для всех: жителей, студентов, туристов и случайных прохожих. Кампус WSG имеет свою уникальную историю. Из промышленного района, окруженного заботой о новых владельцах, он приобрел уникальное измерение - в региональном и национальном масштабе - и стал современным, дружелюбным местом отдыха и научным пространством.',
                    'Студентам и гостям также доступны в кампусе: Центр фитнеса и биологического обновления - Центр реабилитации и Академический Медицинский Центр, Академическое Культурное Пространство, Академический Детский Сад, Музей Фотографии, Зал спорта и развлечений, Студенческий менса, общежития спортивные площадки, прокат велосипедов и каноэ.'
                ]
            },
            {
                city: 'Торунь',
                text: [
                    'Торунь, центр с богатыми академическими традициями, на протяжении многих лет ассоциируется с огромным потенциалом технической мысли. Многие из зданий и сооружений в Торуни имеют уникальный характер. Несмотря на такую разветвленную техническую инфраструктуру, город долгие годы не решал создавать условия для подготовки технического персонала на более высоком уровне.',
                    'В течение нескольких лет в университете интенсивно развивались так называемые заказанные валюты, в том числе в рамках кампании по подготовке инженерных кадров для нужд экономики. Среди 20 направлений WSG реализует, в частности: архитектуру, строительство, мехатронику, информационные технологии, управление и производство. Благодаря проектам и многочисленным отраслевым партнерствам, в течение нескольких лет университет проводит инженерные исследования в Торуни, а также аспирантуру и специализированные тренинги. Руководство факультета считает, что инновационные инженерные исследования будут стимулировать выпускников, представляющих профессии, которые ищут работодатели, остаться в нашем регионе.',
                    'У Экономического университета есть потенциал, который позволяет гибко подходить к предложению, поэтому в первые годы работы факультета университет с интересом сталкивает свои предположения с конкретными компетенциями кандидатов.'
                   ]
            },
            {
                city: 'Мальборк',
                text: [
                    'Мальборк - это еще один факультет Университета Экономики, в котором мы уделяем большое внимание развитию академического предпринимательства и применению знаний и результатов научных исследований в экономической и социальной практике, отсюда и название факультета - менеджмент и социальная инженерия.',
                    'Предметом образовательной и исследовательской деятельности университета является функционирование экономики свободного рынка и развитие предпринимательства в Польше и мире во всех их аспектах: экономическом (экономика, управление, логистика), социокультурном (социология, культурология), пространственном (география, городское планирование) и технология (IT, архитектура, технология производства).',
                    'Современное образование - универсальные знания в сочетании со специальными навыками - адаптируется к меняющейся реальности и динамичному рынку труда. Он состоит из нескольких столпов: экономические знания, отличное владение инструментами ИТ, знание иностранных языков, философия, юридические знания. Мы придаем большое значение современным технологиям в дидактике, в частности, методам электронного обучения, то есть обучению с помощью электронных инструментов.'
                ]
            },
            {
                city: 'Елк',
                text: [
                    'Элк вместе с Голдапом и Олецко образует экологический, этнически разнообразный субрегион ЭГО, называемый «зелеными легкими Польши». Полно активов, которыми нужно управлять, чтобы приносить пользу своим жителям, привлекать туристов и поощрять инвесторов. Необходимость образования в этой области способствовала созданию в 2001 году Департамента туристической экономики в Элке. По согласованию с местными органами власти наш университет провел подготовку профессиональных, современных сотрудников, которые сознательно и ответственно участвуют в реализации стратегии развития этого уникального направления.',
                    'Местные предприниматели высоко ценят сотрудничество с преподавателями, совместное создание предложений для аспирантов и других образовательных форм, отвечающих конкретным потребностям развития региона.'
                ]
            },
            {
                city: 'Иновроцлав',
                text: [
                    'Иновроцлав, известный своими исключительными курортными ценностями, был одним из немногих городов такого размера, где никогда не было университетов. WSG в консультации с местными властями обязался создать комплексную программу развития для жителей Иновроцлава, основанную на ресурсах города и потенциале университета. В сентябре 2006 года власти Иновроцлава и WSG подписали письмо о намерениях, благодаря которому был создан факультет менеджмента и социальной инженерии, началось интенсивное развитие факультета - университет быстро приобрел местных партнеров в сфере предпринимательства, культуры и спорта.'
                ]
            },
            {
                city: 'Пила',
                text: [
                    'Экономико-технологический факультет осуществляет обучение в областях высшего образования региона, соотнесенных с потребностями высшего образования, направлениями обучения на основе экономических исследований - экономика и управление.',
                    'Бакалаврат дает знания и навыки в определенной области, подготавливает их для работы в данной профессии, а их выпускник получает степень бакалавра в течение 6 или 7 семестров обучения. После завершения обучения вы можете продолжить обучение на втором уровне и в аспирантуре.'   
                ]
            },
            {
                city: 'Слупск',
                text: [
                    'В Слупске идея обучения в течение всей жизни, которую продвигает Европейский Союз, получает все больше сторонников. Постоянное улучшение стало модным не только среди взрослых. Все чаще родители приводят своих детей, чтобы они могли учиться новому и приобретать новые навыки. Никто не удивляется, что дети ходят в бассейн или изучают иностранные языки.',
                    'Поморский университет третьего возраста - программа занятий включает в себя как серию лекций, так и различные предложения семинаров, которые в настоящее время используются почти 70 участниками, и набор всегда проводится для всех заинтересованных сторон.'
                ]
            }
        ],
        strEn: [
            {
                city: 'Bydgoszcz',
                text: [
                    'The campus of the University of Economy occupies 6 hectares in the very center of Bydgoszcz. Open to all: residents, students, tourists and random passers-by. The WSG campus has its own unique history. From the industrial area, surrounded by the care of new owners, it has gained a unique dimension - on the regional and national scale - and has become a modern, friendly recreation and scientific space.',
                    'Students and guests are also available at the Campus: Fitness and Biological Renewal Center - Rewital and Academic Medical Center, Academic Cultural Space, Academic Kindergarten, Museum of Photography, Sports and Entertainment Hall, Mensa Student, dorms and sports fields, bike rental and canoe marina.'
                ]
            },
            {
                city: 'Toruń',
                text: [
                    'Toruń, a center with rich academic traditions, has for years been associated with a great potential of technical thought. Many of the buildings and structures in Toruń have a unique character. Despite such extensive technical infrastructure, the city for many years did not decide to create conditions for the training of technical staff at a higher level.',
                    'For several years, the university has been intensively developing the so-called ordered currencies, including in the campaign of preparing engineering staff for the needs of the economy. Among 20 directions, WSG implements, among others: architecture, construction, mechatronics, IT, management and production engineering. Thanks to projects and numerous industry partnerships, the university has been conducting engineering studies in Toruń, as well as post-graduate studies and specialized trainings for several years. The Faculty authorities believe that innovative engineering studies will encourage graduates representing the occupations sought by employers to stay in our region.',
                    "The University of Economy has a potential that allows a flexible approach to the offer, hence in the first years of the Faculty's operation the university confronts its assumptions with interest with specific competences from the candidates."
                   ]
            },
            {
                city: 'Malbork',
                text: [
                    'Malbork is another of the faculties of the University of Economy, in which we place great emphasis on the development of academic entrepreneurship and the application of knowledge and results of scientific research in economic and social practice, hence the name of the Faculty - Management and Social Engineering.',
                    "The subject of the University's educational and research activity is the functioning of a free market economy and the development of entrepreneurship in Poland and the world in all their aspects: economic (economics, management, logistics), socio-cultural (sociology, cultural studies) spatial (geography, urban planning) and technology (IT, architecture, production engineering).",
                    'Modern education - universal knowledge combined with specialist skills - is adapted to the changing reality and dynamic labor market. It consists of several pillars: economic knowledge, excellent mastery of IT tools, knowledge of foreign languages, philosophy, legal knowledge. We attach great importance to modern technologies in didactics, in particular to e-learning methods, ie education with the help of electronic tools.'
                ]
            },
            {
                city: 'Ełk',
                text: [
                    'Ełk together with Gołdap and Olecko form an ecological, ethnically diverse EGO subregion, called the "green lungs of Poland". Full of assets that should be managed to benefit its residents, attract tourists and encourage investors. The need for education in this area contributed to the establishment in 2001 of the Tourist Economy Department in Ełk. In agreement with the local government, our university undertook the preparation of professional, modern staff that consciously and responsibly involve in the implementation of the development strategy of this unique area.',
                    'Local entrepreneurs value cooperation with the faculty, co-creating the offer of postgraduate studies and other educational forms serving the specific development needs of the region.'
                ]
            },
            {
                city: 'Inowrocław',
                text: [
                    "Known for its exceptional spa values, Inowrocław was one of the few cities of this size where no university has ever existed. WSG, in consultation with local authorities, undertook to create a comprehensive development program for Inowrocław residents, based on the city's resources and the potential of the university. In September 2006, the authorities of Inowrocław and WSG signed a letter of intent, thanks to which the Faculty of Management and Social Engineering was established. The intensive development of the faculty began - the university quickly gained local partners in the sphere of entrepreneurship, culture and sport."
                ]
            },
            {
                city: 'Piła',
                text: [
                    'The Faculty of Economics and Technology educates in areas of higher education in the region, correlated with the needs of higher education, areas of study based on economic studies - economy and management.',
                    "Bachelor studies provide knowledge and skills in a specific area, prepare them for work in a given profession, and their graduate obtains a bachelor's degree during 6 or 7 semesters of study. After completing their studies, you can continue your studies at the second level and postgraduate studies."   
                ]
            },
            {
                city: 'Słupsk',
                text: [
                    'In Słupsk, the idea of lifelong learning, so promoted by the European Union, is gaining more and more supporters. Continuous improvement has become fashionable not only among adults. Increasingly, parents bring their children so that they can learn new things and acquire new skills. Nobody is surprised that babies go to the pool or learn foreign languages.',
                    'Pomeranian University of the Third Age - the program of classes includes both a series of lectures and various proposals for workshops, which are currently used by nearly 70 participants and recruitment is always conducted for all interested parties.'
                ]
            }
        ],
        nSelectedPl: [
            'Uczelnia działa w oparciu o koncepcję uniwersytetu przedsiębiorczości, w modelu organizacji uczącej się.',
            'Misja Wyższej Szkoły Gospodarki została wypracowana w wyniku wieloletniego gromadzenia i rozwijania doświadczeń łączenia edukacji z nauką i przedsiębiorczością.',
            'Filarami działalności Wyższej Szkoły Gospodarki, najstarszej niepublicznej Uczelni w Bydgoszczy, są umiejętności, kompetencje i praktyczne ich zastosowanie.  ',
            'Nazwa Wyższa Szkoła Gospodarki obowiązuje od stycznia 2005 r. Wcześniej uczelnia znana była, jako Wyższa Pomorska Szkoła Turystyki i Hotelarstwa w Bydgoszczy. WSG jest organizacją non profit. Wszystkie fundusze przeznaczane są na rozwój Uczelni, rozbudowę nowoczesnej bazy dydaktycznej oraz na utrzymanie wysokiego poziomu kształcenia i prowadzenie działalności naukowej.',
            'Wyższa Szkoła Gospodarki to nie tylko Bydgoszcz. Nasze Wydziały w Ełku, Pile, Malborku, Słupsku, Toruniu oraz Inowrocławiu, służą już mieszkańcom prawie całej północnej Polski.  ',
            'Wydziały realizują nie tylko zadania edukacyjne, ale także misję WSG związaną z otoczeniem społecznym. Dzięki konsultacjom ze środowiskiem biznesowym i administracją samorządową, nasza oferta edukacyjna realizowana w Wydziałach, odpowiada na potrzeby lokalnego rynku pracy.'
        ],
        nSelectedEn: [
            'The university operates based on the concept of the University of Entrepreneurship, in the model of a learning organization.',
            'The mission of the University of Economy was developed as a result of many years of collecting and developing experiences of combining education with science and entrepreneurship.',
            'The pillars of activity of the University of Economy, the oldest non-public University in Bydgoszcz, are skills, competences and their practical application.',
            'The name "Wyższa Szkoła Gospodarki" has been in force since January 2005. Earlier, the university was known as the University of Tourism and Hotel Management in Bydgoszcz. WSG is a non-profit organization. All funds are earmarked for the development of the University, the development of a modern didactic base, and for maintaining a high level of education and conducting scientific activities.',
            'The University of Economy is not just Bydgoszcz. Our Departments in Ełk, Pila, Malbork, Słupsk, Toruń and Inowrocław, serve already residents of almost the whole of northern Poland.',
            'The faculties carry out not only educational tasks but also the WSG mission related to the social environment. Thanks to consultations with the business environment and local government administration, our educational offer implemented in the Faculties responds to the needs of the local job market.'
        ],
        nSelectedRu: [
            'Университет функционирует на основе концепции Университета Предпринимательства, в модели обучающейся организации.',
            'Миссия Университета Экономики была разработана в результате многолетнего сбора и развития опыта совмещения образования с наукой и предпринимательством.',
            'Столпами деятельности Университета Экономики, старейшего частного университета в Быдгоще, являются навыки, компетенции и их практическое применение.',
            'Название «Wyższa Szkoła Gospodarki» действует с января 2005 года. Ранее университет был известен как Университет туризма и гостиничного менеджмента в Быдгоще. WSG - некоммерческая организация. Все средства предназначены для развития университета, развития современной дидактической базы, поддержания высокого уровня образования и ведения научной деятельности.',
            'Экономический университет - это не только Быдгощ. Наши отделения в Элке, Пиле, Мальборке, Слупске, Торуни и Иновроцлаве уже обслуживают жителей почти всей северной Польши.',
            'Факультеты выполняют не только образовательные задачи, но и миссию WSG, связанную с социальной средой. Благодаря консультациям с бизнес-средой и администрацией местного самоуправления наше образовательное предложение, реализуемое на факультетах, отвечает потребностям местного рынка труда.'
        ],
    }
})