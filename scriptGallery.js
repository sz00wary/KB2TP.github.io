let i = 0;
let infoset = 
[   
    '<h2 style="color: black; text-align: center;">Dungeons and Dragons</h2><p style="color: black">Dungeongs and Dragons</h2><p style="color: black">Uważana za prekursora gatunku fabularna gra fantasy zaprojektowana przez Gary’ego Gygaxa i Dave’a Arnesona, po raz pierwszy opublikowana w 1974 przez Tactical Studies Rules (TSR). Aktualnie grę wydaje Wizards of the Coast, przedsiębiorstwo zależne od Hasbro. Wywodzi się ona z miniaturowych gier figurkowych, jako wariant gry Chainmail zawierającej zbliżony system rozgrywki. Publikacja D&D jest szeroko uznawana za początek nowoczesnych gier RPG i, co więcej, całego przemysłu gier fabularnych.</p>', 
    '<h2 style="color: black; text-align: center;">Warhammer Fantasy</h2><p style="color: black">Warhammer Fantasy Roleplay (WFRP lub WHFRP, z ang. Warhammer, Fabularna Gra Fantasy) – gra fabularna osadzona w świecie Warhammera. Została stworzona przez brytyjską firmę Games Workshop, a obecnie prawa do niej posiada Fantasy Flight Games. Dotychczas ukazały się jej cztery edycje.</p>', 
    '<h2 style="color: black; text-align: center;">Wiedźmin RPG</h2><p style="color: black">To gra bez prądu, która pozwoli grupie znajomych stworzyć własną opowieść w wiedźmińskim świecie. Z pomocą tego podręcznika i odrobiny wyobraźni będziecie mogli przemierzyć cały Kontynent, napotkać jego żywe legendy i wpłynąć na jego dzieje. Weźmiecie udział w politycznych intrygach i brutalnej wojnie z Cesarstwem Nilfgaardu. Będziecie walczyć o życie i próbować na zgliszczach starego świata zbudować lepszą przyszłość.</p>', 
    '<h2 style="color: black; text-align: center;">Zew Cthulhu</h2><p style="color: black">Gra fabularna utrzymana w konwencji grozy amerykańskiego wydawnictwa Chaosium Publishing. Jest oparta na motywach zaczerpniętych z tzw. mitologii Cthulhu, opowiadania o tym samym tytule autorstwa H.P. Lovecrafta oraz jego innych utworów. Zew Cthulhu to gra popularna zarówno na Zachodzie, jak i w Polsce.</p>', 
    '<h2 style="color: black; text-align: center;">Tales from the Loop</h2><p style="color: black">Gra fabularna przedstawiająca alternatywną wizję lat 80. XX wieku. To czasy w których na każdym kroku spotkasz latające statki i niesamowite roboty, a spokój codzienności nieustannie burzą tajne rządowe eksperymenty oraz zagadkowe zjawiska.</p>', 
    '<h2 style="color: black; text-align: center;">Słowianie RPG</h2><p style="color: black">To gra fabularna fantasy inspirowana mitologią słowiańską, wydana przez Hengal. Wkrocz do nietuzinkowego świata Slavii, pełnego nieujarzmionej magii, gdzie słowiańskie plemiona zabiegają o przychylność Bogów.</p>', 
    '<h2 style="color: black; text-align: center;">Pathfinder</h2><p style="color: black">Gra fabularna osadzona w świecie fantasy, która została opracowana jako rozwinięcie systemu gry Dungeons & Dragons 3.5. Gracze wcielają się w role poszukiwaczy przygód, którzy walczą z mrocznymi siłami i rozwiązują tajemnicze zagadki.</p>', 
    '<h2 style="color: black; text-align: center;">Monsterhearts</h2><p style="color: black">Gry oparte o filozofię PbtA dzięki niestrudzonej pracy ekipy z GRamel Books przeżywają w naszym kraju w ostatnich miesiącach rozkwit. Po “Potworze Tygodnia”, “Dungeon Worldzie”, “Lecie w Woodlake” i “Strzelaj i łup” na nasz rynek wchodzi (dzięki zbiórce na wspieram.to, która trwa jeszcze, gdy ten materiał ląduje na blogu) kolejna z gier, jakby nie patrzeć już klasyk gatunku (zwłaszcza jeżeli chodzi o nurt PbtA), czyli właśnie “Monsterhearts”.</p>', 
    '<h2 style="color: black; text-align: center;">The Lord Of The Rings</h2><p style="color: black">Gdy nad Śródziemiem narasta złowrogi Cień, tylko Wasza Drużyna Bohaterów może powstrzymać zło. Ruszcie w podróż po Eriadorze jako elfy, krasnoludowie czy hobbici i napiszcie swoją własną, epicką opowieść na kanwie Władcy Pierścieni – wszystko to na mechanice 5. Edycji, doskonale znanej graczom na całym świecie z systemu Dungeons & Dragons®! Jeśli zawsze marzyliście o tym, aby Gandalf stanął u Waszych drzwi — dziś jest właśnie ten dzień!</p>', 
    '<h2 style="color: black; text-align: center;">Dungeon World</h2><p style="color: black">Gra fabularna fantasy, w której możesz wykorzystać nowoczesne zasady, by rozegrać klasyczne podróże do lochów. Wspólnie z przyjaciółmi będziesz odkrywać krainę pełną magii i niebezpieczeństw wcielając się w poszukiwaczy przygód szukających sławy, złota i chwały.</p>', 
    '<h2 style="color: black; text-align: center;">Dune RPG</h2><p style="color: black">Gra fabularna, która zabierze cię w daleką przyszłość, poza wszystko co jesteś sobie w stanie wyobrazić. Zabierz swoich bohaterów w podróż przez świat opisany przez Franka Herberta i jego arcydzieło literatury SF. Zjednocz pod swoim sztandarem niesławnych mentatów, Mistrzów Miecza z Ginaza, szpiegów, przebiegłych doradców, siostry Bene Gesserit lub zamieszkujących niegościnną pustynie Fremenów, wszystko dla chwały rodu.</p>', 
    '<h2 style="color: black; text-align: center;">Cyberpunk RED</h2><p style="color: black">Aura neonowych świateł gargantuicznej metropolii, megakorporacje związane krwiożerczą walką o wpływy, nowoczesne wszczepy, drony i legendarni Krawędziarze niewahający się podjąć ryzyka w imię swoich przekonań… witaj w Czasie Czerwieni, gdzie nawet niebo codziennie przypomina mieszkańcom Night City, co wyrządziły im korporacje. Pierwszy raz w Night City, Choomba? W takim razie wskakuj do fury i zapnij pasy, pokażę Ci, gdzie rodzą się legendy Night City!</p>', 
    '<h2 style="color: black; text-align: center;">7th Sea</h2><p style="color: black">Gra fabularna wydana w 1999 roku przez wydawnictwo AEG, sprowadzona do Polski w 2004 roku przez wydawnictwo Wolf Fang. Obecnie zarówno w Polsce, jak i w USA linia wydawnicza została zawieszona.</p>',
    '<h2 style="color: black; text-align: center;">Dark Heresy</h2><p style="color: black">Dark Heresy II edycja, to gra fabularna, osadzona w dalekiej, mrocznej przyszłości świataWarhammer 40.000, pełnego tajemnic i brutalnej przemocy. Gracze wcielają się w role Akolitów i rozpoczynają służbę na pierwszych liniach wielkiej, tajemnej wojny, mającej na celu wykorzenienie niebezpieczeństw, które zagrażają istnieniu całej ludzkości.</p>'
]
let picsset = 
[
    '<img src="pics/dnd.jpg" id="obrazek">',
    '<img src="pics/wh.webp" id="obrazek">',
    '<img src="pics/wit.jpg" id="obrazek">',
    '<img src="pics/zc.png" id="obrazek">',
    '<img src="pics/tftl.jpg" id="obrazek">',
    '<img src="pics/slow.jpg" id="obrazek">',
    '<img src="pics/pf.jpg" id="obrazek">',
    '<img src="pics/mh.jpg" id="obrazek">',
    '<img src="pics/lor.jpg" id="obrazek">',
    '<img src="pics/dw.jpg" id="obrazek">',
    '<img src="pics/dune.jpg" id="obrazek">',
    '<img src="pics/cbr.jpg" id="obrazek">',
    '<img src="pics/7s.jpg" id="obrazek">',
    '<img src="pics/dh.jpg" id="obrazek">',
]
let prevbutton = document.querySelector("#p");
let nextbutton = document.querySelector("#n");


prevbutton.addEventListener("click", function() {
    if (i == 0) {
        i = 13;
        document.getElementById("galinfo").innerHTML = infoset[i];
        document.getElementById("obrazek").outerHTML = picsset[i];
    }
    else {
        i = i -= 1;
        document.getElementById("galinfo").innerHTML = infoset[i];
        document.getElementById("obrazek").outerHTML = picsset[i];
    }
});
nextbutton.addEventListener("click", function() {
    if (i == 13) {
        i = 0;
        document.getElementById("galinfo").innerHTML = infoset[i];
        document.getElementById("obrazek").outerHTML = picsset[i];
    }
    else {
        i += 1;
        document.getElementById("galinfo").innerHTML = infoset[i];
        document.getElementById("obrazek").outerHTML = picsset[i];
    }
});