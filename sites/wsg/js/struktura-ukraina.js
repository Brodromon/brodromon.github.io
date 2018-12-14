var structura = new Vue ({
    el: '#app',
    data: {
        selectedCity: '',
        strPl: [
            {
                city: 'Browary',
                text: [
                    'Kampus Wyższej Szkoły Gospodarki zajmuje 6 hektarów w samym centrum Bydgoszczy. Otwarty dla wszystkich: mieszkańców, studentów, turystów i przypadkowych przechodniów. Kampus WSG ma swoją niepowtarzalną historię. Z obszaru przemysłowego, otoczony opieką nowych właścicieli, zyskał wyjątkowy  - w skali regionu i kraju - wymiar i stał się nowoczesną, przyjazną rekreacjno – naukową przestrzenią.',
                    'Do dyspozycji studentów oraz gości są także inne jednostki przyuczelniane znajdujące się na terenie Kampusu: Centrum Fitness i Odnowy Biologicznej – Rewital a także Akademickie Centrum Medyczne, Akademicka Przestrzeń Kulturalna, Przedszkole Akademickie, Muzeum Fotografii, Hala Widowiskowo – Sportowa, Mensa Studencka, akademiki a także boiska sportowe, wypożyczalnia rowerów oraz przystań kajakowa.'
                ]
            },
            {
                city: 'Krzemieńczuk',
                text: [
                    'Toruń, ośrodek o bogatych tradycjach akademickich, przez lata kojarzony był z dużym potencjałem myśli technicznej. Wiele toruńskich budowli i konstrukcji ma unikatowy charakter. Pomimo tak rozległej infrastruktury technicznej miasto przez wiele lat nie decydowało się na stworzenie warunków do kształcenia kadry technicznej na wyższym poziomie.',
                    'Uczelnia od kilku lat intensywnie rozwija obszary tzw. kierunków zamawianych, włączając się w kampanie przygotowania kadr inżynierskich dla potrzeb gospodarki. Wśród 20 kierunków WSG realizuje m.in.: architekturę, budownictwo, mechatronikę, informatykę, zarządzanie i inżynierię produkcji. Dzięki projektom oraz licznym partnerstwom branżowym uczelnia od kilku lat prowadzi w Toruniu studia inżynierskie a także studia podyplomowe oraz specjalistyczne szkolenia. Władzę Wydziału wierzą, że innowacyjne studia inżynierskie zachęcą do pozostania w naszym regionie absolwentów reprezentujących poszukiwane przez pracodawców zawody.',
                    'Wyższa Szkoła Gospodarki dysponuje potencjałem, który pozwala na elastyczne podejście do oferty, stąd w pierwszych latach funkcjonowania Wydziału uczelnia konfrontuje swoje założenia z zainteresowaniem konkretnymi kompetencjami ze strony kandydatów.'
                   ]
            },
            {
                city: 'Połtawa',
                text: [
                    'Malbork jest kolejnym z Wydziałów Wyższej Szkoły Gospodarki, w którym duży nacisk kładziemy na rozwój przedsiębiorczości akademickiej i stosowanie wiedzy i wyników badań naukowych w praktyce gospodarczej i społecznej, stąd nazwa Wydziału - Zarządzania i Inżynierii Społecznej.',
                    'Przedmiotem działalności edukacyjnej i naukowo-badawczej Uczelni jest funkcjonowanie gospodarki wolnorynkowej i rozwój przedsiębiorczości w Polsce i na świecie we wszystkich ich aspektach: ekonomicznym (ekonomia, zarządzanie, logistyka), społeczno-kulturowym (socjologia, kulturoznawstwo) przestrzennym (geografia, urbanistyka) i technologicznym (informatyka, architektura, inżynieria produkcji).',
                    'Nowoczesne kształcenie - uniwersalna wiedza połączona ze specjalistycznymi umiejętnościami - dostosowane jest do zmieniającej się rzeczywistości i dynamicznego rynku pracy. Składa się na nie kilka filarów: wiedza ekonomiczna, znakomite opanowanie narzędzi informatycznych, znajomość języków obcych, filozofia, wiedza prawnicza. Dużą rolę przykładamy do nowoczesnych technologii w dydaktyce, w szczególności do metod e-learningowych, czyli kształcenia przy pomocy narzędzi elektronicznych.'
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
        ]
    }
})