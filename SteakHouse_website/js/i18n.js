/**
 * SKUISITO STEAKHOUSE & WINEBAR - Internationalization (i18n) Engine
 * Full translation support for Italian (IT), English (EN), and Spanish (ES)
 * Handles static and dynamic translations, local storage persistence, and UI events.
 */

(function () {
  "use strict";

  const translations = {
    it: {
      meta: {
        title: "SKUISITO STEAKHOUSE & WINEBAR | Ristorante di Carne e Wine Bar Milano",
        description: "Skuisito SteakHouse & WineBar a Milano: carni argentine e scozzesi, eccellenze DOP, IGT e DOC e la passione dello Chef Gianfranco Riggio."
      },
      nav: {
        home: "Home",
        about: "Su di Noi",
        menu: "Menù",
        takeaway: "Asporto",
        reviews: "Recensioni",
        events: "Eventi",
        contact: "Contatti",
        bookTable: "Prenota un Tavolo"
      },
      hero: {
        preloader: "Accensione Brace & Carni Pregiate...",
        stage0Tagline: "SKUISITO STEAKHOUSE & WINEBAR",
        stage0Title: "Incontra, Gusta, Vivi<br>il Vero Sapore",
        stage0Desc: "Un equilibrio perfetto tra prodotti genuini e innovativi, ricette tradizionali e internazionali, tra mangiare e buon bere, tra sapori e colori.",
        stage0BtnBook: "Prenota un Tavolo",
        stage0BtnMenu: "Scopri il Menù",
        stage1Tagline: "Selezione da Pascoli Naturali",
        stage1Title: "Carni Argentine & Scozzesi",
        stage1Desc: "Bestiame allevato in ampi pascoli naturali dell'Argentina e della Scozia, dal sapore naturale e unico, cotte alla perfezione per esaltarne ogni sfumatura.",
        stage1Btn: "La Nostra Filosofia",
        stage2Tagline: "Esperienza Gusto-Olfattiva",
        stage2Title: "L'Armonia tra<br>Essere e Fare",
        stage2Desc: "Un'atmosfera serena, piacevole e informale a Milano dove abbandonarsi all'armonia tra il mangiare e l'essere.",
        stage2BtnBook: "Riserva il Tuo Tavolo",
        stage2BtnFind: "Dove Trovarci",
        scrollPrompt: "Scorri per Esplorare"
      },
      about: {
        sideLabel: "SKUISITO • MILANO PACINI",
        sectionLabel: "BENVENUTI DA SKUISITO",
        heading: "Passione per un Prodotto di Alta Qualità",
        text1: "Il nostro intento è quello di creare un equilibrio perfetto tra prodotti genuini e innovativi, ricette tradizionali e internazionali, tra mangiare e buon bere, tra sapori e colori. Il rispetto per la materia prima (stagionalità e luogo) e la costante ricerca dei migliori prodotti italiani <strong>DOP, IGT e DOC</strong>, direttamente dai produttori nazionali e internazionali, ci consente di realizzare piatti in grado di soddisfare le richieste e i gusti più differenti.",
        text2: "Oltre alla tradizionale cucina italiana, sono una nostra specialità la <strong>carne argentina e quella scozzese</strong>, dal sapore naturale e unico, fornite dai mercati più esigenti e prodotte da bestiame allevato in ampi pascoli naturali dell'Argentina e della Scozia.",
        chefBadge: "Lo Chef & Fondatore",
        chefQuote: "\"Gianfranco Riggio è lo Chef, cuoco, direttore della società, team leader e portavoce del suo ristorante. Attento fino in fondo ai piccoli dettagli, cerca di amalgamare nel migliore dei modi la tradizione culinaria della sua terra, la Sicilia, volendone conservare i sapori e i profumi, con la modernità e la sperimentazione.\"",
        chefAuthor: "Gianfranco Riggio — Chef & Direttore",
        menuLink: "Scopri il Nostro Menù",
        f1Title: "Prodotti DOP, IGT e DOC",
        f1Desc: "Costante ricerca delle migliori eccellenze agroalimentari italiane e internazionali.",
        f2Title: "Argentina & Scozia",
        f2Desc: "Carni speciali da bestiame allevato in ampi pascoli naturali incontaminati.",
        f3Title: "Tradizione & Innovazione",
        f3Desc: "I sapori e i profumi della Sicilia si fondono con la modernità e la griglia a fuoco vivo.",
        f4Title: "Armonia & Wine Bar",
        f4Desc: "Un'atmosfera informale per serate romantiche, pranzi di lavoro e ritrovi tra amici."
      },
      menu: {
        sectionLabel: "ECCELLENZA CULINARIA",
        sectionTitle: "Esplora il Nostro Menù",
        catAll: "Tutte le Specialità",
        catStarters: "Antipasti & Tartare",
        catPrimi: "Primi Piatti",
        catSteaks: "Carni & Brace",
        catBurgers: "Hamburger Artigianali",
        catSides: "Insalate & Contorni",
        catDesserts: "Dessert Fatti in Casa",
        catDrinks: "Wine Bar & Birre",
        catEvents: "★ Eventi & Feste Private",
        items: {
          tagliere: {
            title: "Tagliere Salumi & Gnocco Fritto",
            desc: "Selezione di salumi nostrani serviti con caldo e soffice gnocco fritto della tradizione."
          },
          tartareMed: {
            title: "Tartare Mediterranea",
            desc: "Fassona piemontese battuta al coltello, pomodori secchi, cipolla e carciofi sott'olio."
          },
          tartareTrad: {
            title: "Tartare Tradizionale",
            desc: "Fassona piemontese, capperi, senape, cetriolini, cipolla, tuorlo d'uovo, tabasco e worcester."
          },
          frittoSkuisito: {
            title: "Fritto Skuisito",
            desc: "Chicken stick, teezers cheese, onion rings, broccolo cheddar, jalapenos, patate, salsa SK."
          },
          fioriZucca: {
            title: "Fiori di Zucca Ripieni",
            desc: "Fiori di zucca ripieni di crema di patate, pomodorini secchi, pecorino e mentuccia."
          },
          vitelTonne: {
            title: "Vitel Tonnè al Punto Rosa",
            desc: "Tenero magatello cotto a bassa temperatura con classica crema tonnata e capperi."
          },
          paccheri: {
            title: "Paccheri al Ragù di Vitello",
            desc: "Paccheri di Gragnano con ragù bianco di vitello e scaglie di Pecorino Romano DOP."
          },
          orecchiette: {
            title: "Orecchiette con Polpettine",
            desc: "Pasta fresca pugliese con polpettine al sugo tradizionale e ricotta salata siciliana."
          },
          risottoLimoni: {
            title: "Risotto Limoni di Sicilia",
            desc: "Risotto Carnaroli mantecato al rosmarino e profumato ai freschi limoni di Sicilia."
          },
          rigatoni: {
            title: "Rigatoni Cacio e Pepe",
            desc: "Crema vellutata di Pecorino Romano DOP e tostatura di pepe nero macinato al momento."
          },
          costataFiorentina: {
            title: "Costata Fiorentina alla Brace",
            desc: "Min. 1 kg con verdure alla griglia, patate steakhouse e salsa chimichurri (prezzo per etto)."
          },
          costataFassona: {
            title: "Costata Fassona (500g)",
            desc: "Pregiata carne piemontese cotta alla brace a fuoco vivo con patate steakhouse."
          },
          tagliataScottona: {
            title: "Tagliata di Scottona (200g)",
            desc: "Con fonduta al Grana Padano, gocce di rucola, pomodorino confit e purea di patate."
          },
          ribeyeScozzese: {
            title: "Ribeye Scozzese (320g)",
            desc: "Costata scozzese senz'osso da pascoli naturali, tenera e gustosa, con patate steakhouse."
          },
          controfiletto: {
            title: "Controfiletto Argentino (300g)",
            desc: "Carne argentina selezionata da pascoli naturali, cotta a puntino con patate steakhouse."
          },
          filettoGrana: {
            title: "Filetto al Grana Padano (230g)",
            desc: "Tenero filetto di manzo con vellutata calda al Grana Padano e morbida purea di patate."
          },
          cotoletta: {
            title: "Cotoletta alla Milanese",
            desc: "Cotoletta di vitello dorata e croccante secondo tradizione milanese con patate steakhouse."
          },
          ribs: {
            title: "Ribs in Salsa BBQ",
            desc: "Costine di maiale glassate con salsa BBQ e servite con patate dorate steakhouse."
          },
          burgerBacon: {
            title: "Bacon Cheese Hamburger",
            desc: "Manzo 200g, bacon croccante, formaggio cheese, jalapenos, insalata, salsa SK, patate."
          },
          burgerToro: {
            title: "Toro Seduto (300g)",
            desc: "Manzo 300g ripieno di formaggio, bacon, cipolla caramellata, salsa tartara e patate."
          },
          burgerMister: {
            title: "Mister Hamburger Classico",
            desc: "Manzo 200g, ketchup artigianale, cetriolini in salamoia e patate steakhouse."
          },
          caesarSalad: {
            title: "Caesar Salad di Pollo",
            desc: "Insalata mista, pollo grigliato, pomodorini, olive, crostini, formaggio grana e salsa Caesar."
          },
          insalataGreca: {
            title: "Insalata Greca",
            desc: "Pomodoro, formaggio feta, cetrioli, peperoni, acciughe, olive greche e cipolla."
          },
          patateSteak: {
            title: "Patate Steak House & Tartara",
            desc: "Spicchi di patate dorate e croccanti serviti con gustosa salsa tartara artigianale."
          },
          cannolo: {
            title: "Cannolo Siciliano",
            desc: "Cialda croccante con pura ricotta siciliana, granella di pistacchio e scaglie di cioccolato."
          },
          tortino: {
            title: "Tortino al Cioccolato Fondente",
            desc: "Cuore caldo morbido al cioccolato fondente accompagnato da quenelle di gelato alla crema."
          },
          tiramisu: {
            title: "Tiramisù della Casa",
            desc: "Autentico tiramisù artigianale fatto in casa con crema al mascarpone e caffè espresso."
          },
          vinoNeroDavola: {
            title: "Nero D'Avola D.O.C. Skuisito",
            desc: "Il vino della casa firmato Skuisito: rosso intenso, armonico, ideale in abbinamento alle carni."
          },
          vinoSelection: {
            title: "Selezione Wine List D.O.C.",
            desc: "Ampia carta di etichette selezionate italiane e internazionali (-20% su asporto)."
          },
          birraSpina: {
            title: "Birra Spina Hacker-Pschorr (40cl)",
            desc: "Lager bavarese 5,8° dorata e profumata, spillata fresca al banco."
          }
        }
      },
      eventsPackages: {
        sectionLabel: "OCCASIONI SPECIALI & GRUPPI",
        sectionTitle: "Eventi e Feste Private",
        subtitle: "Proposte di menù complete a prezzo fisso per persona per festeggiare lauree, cene aziendali, compleanni ed eventi speciali da Skuisito SteakHouse & WineBar.",
        p1Badge: "Min. 8 Pax",
        p1Title: "Menù Gruppi",
        p1Tag1: "Antipasti da condividere",
        p1Item1: "Bruschette al pomodoro fresco e basilico",
        p1Item2: "Macco di fave con cicoria ripassata con olio, aglio e peperoncino",
        p1Item3: "Polpette al sugo della tradizione",
        p1Tag2: "Primo Piatto",
        p1Item4: "Risotto ai funghi porcini profumato",
        p1Tag3: "Dessert",
        p1Item5: "Dessert artigianale della casa",
        p1Note: "Include coperto, acqua minerale e pane",
        p1Price: "€ 30,-",
        p1PerPerson: "/ persona",
        p1SubPrice: "<strong>€ 35,- / persona</strong> con <strong>vino incluso</strong> proposto dalla casa (1 bt. ogni 4 pax)",
        p1Btn: "Prenota Menù Gruppi",

        p2Badge: "Formula All In",
        p2Title: "Feste di Laurea",
        p2Desc: "Per i <strong>Pranzi di Laurea</strong> proponiamo una speciale formula con piatti a scelta libera dal menù del giorno.",
        p2Tag1: "Scelta Portate",
        p2Item1: "<strong>1 Primo Piatto</strong> a scelta libera dal menù del pranzo",
        p2Item2: "<strong>1 Secondo Piatto</strong> a scelta libera dal menù del pranzo",
        p2Tag2: "Inclusioni",
        p2Item3: "Coperto, acqua minerale e pane fresco",
        p2Note: "Atmosfera ideale per festeggiare con amici e colleghi",
        p2Price: "€ 25,-",
        p2PerPerson: "/ persona",
        p2SubPrice: "<strong>€ 30,- / persona</strong> con <strong>vino incluso</strong> proposto dalla casa (1 bt. 0.75cl ogni 4 pax)",
        p2Btn: "Prenota Pranzo Laurea",

        p3Badge: "Premium All-Inclusive",
        p3Title: "Eventi Privati & Aziendali",
        p3Tag1: "Aperitivo di Benvenuto",
        p3Item1: "Calice di bollicine di Valdobbiadene",
        p3Tag2: "Antipasti",
        p3Item2: "Vitel Tonnè al punto rosa",
        p3Item3: "Flan di Zucca Mantovana",
        p3Tag3: "Primo & Secondo",
        p3Item4: "Risotto ai funghi Porcini",
        p3Item5: "Tagliata di Angus Argentino con patate al forno e verdurine croccanti",
        p3Tag4: "Dessert & Bevande",
        p3Item6: "Dessert della casa",
        p3Item7: "Vino Sommelier (1 bt. ogni 3 pax a scelta tra bianco / rosso / rosé)",
        p3Item8: "Acqua minerale e Caffè inclusi",
        p3Price: "€ 50,-",
        p3PerPerson: "/ persona",
        p3SubPrice: "Pacchetto completo All-Inclusive",
        p3Btn: "Richiedi per Evento"
      },
      takeaway: {
        sectionLabel: "SEMPLICE & DIRETTO",
        heading: "Come Ordinare da Asporto",
        step1Title: "1. Scegli i Tuoi Piatti",
        step1Desc: "Esplora le nostre carni alla brace, gli antipasti e le bottiglie selezionate dal wine bar.",
        step2Title: "2. Conferma l'Ordine",
        step2Desc: "Seleziona l'orario di ritiro desiderato e inserisci i tuoi recapiti per la conferma.",
        step3Title: "3. Preparazione Espressa",
        step3Desc: "La nostra cucina prepara i tagli alla griglia con la massima cura per preservarne la morbidezza.",
        step4Title: "4. Gusta la Qualità",
        step4Desc: "Assapora l'esperienza Skuisito SteakHouse comodamente con la tua famiglia e i tuoi ospiti.",
        boxTitle: "Desideri Gustare le Nostre Carni?",
        boxDesc: "Ordina per l'asporto oppure riserva un tavolo per vivere l'esperienza completa della nostra steakhouse & wine bar a Milano.",
        btnBook: "Prenota un Tavolo",
        btnMenu: "Sfoglia il Menù"
      },
      testimonials: {
        sectionLabel: "L'ESPERIENZA DEI NOSTRI OSPITI",
        heading: "Recensioni & Esperienze",
        guestRole: "Ospite Skuisito SteakHouse",
        badge: "Recensione Verificata",
        badgeScore: "4.9 / 5",
        badgeRating: "Valutazione Clienti",
        reviews: [
          "Carne eccezionale con una cottura alla brace impeccabile e una selezione di vini davvero ricercata. Il servizio è caloroso, attento e l'ambiente elegante.",
          "La migliore tagliata e cotoletta di Milano! L'attenzione dello Chef Gianfranco Riggio per le materie prime fa davvero la differenza.",
          "Abbiamo organizzato qui una festa di laurea: menù perfetto, porzioni generose e grande disponibilità di tutto lo staff. Consigliatissimo!"
        ]
      },
      events: {
        sectionLabel: "SERATE A TEMA & DEGUSTAZIONI",
        heading: "I Nostri Eventi & Atmosfera",
        subtitle: "Dalle serate con degustazione di vini e carni pregiate agli eventi privati e momenti speciali: scopri l'esperienza autentica e conviviale di Skuisito SteakHouse & WineBar a Milano.",
        exclusiveBadge: "Esperienze Esclusive",
        cardTitle: "Degustazioni di Carne & Wine Pairing",
        cardDesc: "Periodicamente organizziamo percorsi guidati di degustazione per esplorare le migliori selezioni di carne e le etichette più prestigiose della nostra cantina, in un clima caldo e accogliente.",
        bullet1: "Serate frollatura & tagli dal mondo",
        bullet2: "Percorsi enogastronomici con sommelier",
        bullet3: "Eventi privati e cene aziendali su misura",
        btnBook: "Prenota per un Evento",
        newsletterTitle: "Resta aggiornato su serate a tema, degustazioni ed eventi speciali",
        newsletterPlaceholder: "Inserisci la tua email"
      },
      contact: {
        sectionLabel: "VIENI A TROVARCI A MILANO",
        heading: "Posizione & Contatti",
        phoneTitle: "Prenotazioni Telefoniche",
        phoneReferent: "Referente: Gianfranco Riggio",
        emailTitle: "Email & Richieste",
        addressTitle: "Via Pacini 18, 20131 Milano",
        mapsLink: "Apri su Google Maps",
        hoursTitle: "Orari di Apertura",
        hoursMonFri: "<strong>Lun - Ven:</strong> 12:00 - 14:30 | 18:00 - 23:00",
        hoursSat: "<strong>Sabato:</strong> 12:00 - 15:00 | 18:00 - 24:00",
        hoursSun: "Domenica Chiuso"
      },
      ctaBanner: {
        heading: "Vivi il Vero Gusto della Nostra Cucina",
        btnBook: "Prenota un Tavolo",
        btnMenu: "Esplora il Menù"
      },
      footer: {
        home: "Home",
        about: "Su di Noi",
        menu: "Menù",
        takeaway: "Asporto",
        contact: "Contatti",
        events: "Eventi",
        reservations: "Prenotazioni",
        legal: "<strong>Ragione Sociale:</strong> ZG srl — \"SKUISITO STEAK HOUSE\" • Via Pacini 18, 20131 Milano • <strong>P.IVA:</strong> 07526540963 - Milano",
        copyright: "Copyright © 2026 Skuisito SteakHouse & WineBar (ZG srl). Tutti i diritti riservati."
      },
      modalReservation: {
        label: "PRENOTAZIONE ONLINE",
        heading: "Riserva il Tuo Tavolo",
        subtext: "Unisciti a noi per un'esperienza indimenticabile di carni pregiate alla brace e wine bar.",
        guestsLabel: "Numero Ospiti",
        opt2: "2 Ospiti (Tavolo per 2)",
        opt4: "4 Ospiti (Tavolo da 4)",
        opt6: "6 Ospiti (Tavolata)",
        opt8: "8+ Ospiti (Gruppi & Eventi)",
        dateLabel: "Data",
        timeLabel: "Orario",
        lunch: "Pranzo",
        dinner: "Cena",
        phoneLabel: "Telefono di Contatto",
        nameLabel: "Nome e Cognome",
        namePlaceholder: "Mario Rossi",
        notesLabel: "Note / Richieste Particolari / Allergie",
        notesPlaceholder: "Segnala eventuali allergie, intolleranze o ricorrenze speciali...",
        submitBtn: "Conferma Prenotazione"
      },
      cart: {
        title: "Il Tuo Ordine da Asporto",
        empty: "Il tuo carrello è attualmente vuoto.<br>Aggiungi le nostre specialità dal menù!",
        subtotal: "Subtotale Stimato:",
        checkoutBtn: "Procedi all'Ordine",
        itemAdded: "Aggiunto \"{name}\" al tuo ordine!",
        confirmedToast: "Tavolo confermato per {guests} persone il {date} alle ore {time}!",
        newsletterToast: "Grazie! Ti sei iscritto alle novità e serate Skuisito.",
        orderToast: "Ordine inviato! La nostra cucina sta preparando le tue selezioni Skuisito."
      }
    },

    en: {
      meta: {
        title: "SKUISITO STEAKHOUSE & WINEBAR | Premium Steakhouse & Wine Bar Milan",
        description: "Skuisito SteakHouse & WineBar in Milan: Argentine and Scottish steaks, DOP/IGT/DOC Italian excellences and Chef Gianfranco Riggio's culinary passion."
      },
      nav: {
        home: "Home",
        about: "About Us",
        menu: "Menu",
        takeaway: "Takeaway",
        reviews: "Reviews",
        events: "Events",
        contact: "Contact",
        bookTable: "Book a Table"
      },
      hero: {
        preloader: "Firing Charcoal & Prime Cuts...",
        stage0Tagline: "SKUISITO STEAKHOUSE & WINEBAR",
        stage0Title: "Meet, Taste, Experience<br>True Flavor",
        stage0Desc: "A perfect balance of authentic and innovative produce, traditional and international recipes, fine dining and exceptional wine, vibrant flavors and colors.",
        stage0BtnBook: "Book a Table",
        stage0BtnMenu: "Explore Menu",
        stage1Tagline: "Pasture-Raised Heritage Cuts",
        stage1Title: "Argentine & Scottish Steaks",
        stage1Desc: "Cattle raised across vast natural pastures in Argentina and Scotland, offering a clean, robust flavor, flame-grilled to perfection to enhance every nuance.",
        stage1Btn: "Our Philosophy",
        stage2Tagline: "Sensory & Aromatic Journey",
        stage2Title: "The Harmony between<br>Being and Doing",
        stage2Desc: "A serene, welcoming, and relaxed atmosphere in Milan where you can surrender to the harmony between fine food and hospitality.",
        stage2BtnBook: "Reserve Your Table",
        stage2BtnFind: "Find Us",
        scrollPrompt: "Scroll to Explore"
      },
      about: {
        sideLabel: "SKUISITO • MILAN PACINI",
        sectionLabel: "WELCOME TO SKUISITO",
        heading: "Passion for High-Quality Ingredients",
        text1: "Our mission is to create a seamless harmony between genuine and forward-thinking ingredients, classic Italian tradition and global recipes, great food and fine wines, flavors and colors. Deep respect for raw materials (seasonality and origin) and continuous sourcing of Italy's finest <strong>DOP, IGT, and DOC</strong> certified goods directly from select producers allows us to delight every palate.",
        text2: "Alongside authentic Italian cuisine, our signature pride lies in <strong>Argentine and Scottish prime beef</strong>, prized for its natural tenderness and distinctive taste, selected from pristine open grasslands.",
        chefBadge: "The Chef & Founder",
        chefQuote: "\"Gianfranco Riggio is the Executive Chef, managing director, team leader, and spirit of his restaurant. Meticulous with every detail, he masterfully weaves the culinary roots of his homeland, Sicily, preserving authentic fragrances and tastes, with contemporary mastery and grill craft.\"",
        chefAuthor: "Gianfranco Riggio — Chef & Founder",
        menuLink: "Discover Our Menu",
        f1Title: "DOP, IGT & DOC Excellences",
        f1Desc: "Constant pursuit of the highest certified Italian and international gastronomic treasures.",
        f2Title: "Argentina & Scotland",
        f2Desc: "Premium cuts sourced from cattle freely grazing on pristine natural pastures.",
        f3Title: "Heritage & Innovation",
        f3Desc: "Sicilian heritage flavors meet modern culinary finesse and open-fire grilling.",
        f4Title: "Harmony & Wine Bar",
        f4Desc: "An inviting, intimate ambiance for romantic dinners, business luncheons, and celebrations.",
      },
      menu: {
        sectionLabel: "CULINARY EXCELLENCE",
        sectionTitle: "Explore Our Menu",
        catAll: "All Specialties",
        catStarters: "Starters & Tartare",
        catPrimi: "First Courses & Pasta",
        catSteaks: "Steaks & Grill",
        catBurgers: "Artisan Burgers",
        catSides: "Salads & Sides",
        catDesserts: "Homemade Desserts",
        catDrinks: "Wine Bar & Beers",
        catEvents: "★ Private Events & Menus",
        items: {
          tagliere: {
            title: "Artisan Charcuterie & Gnocco Fritto",
            desc: "Selection of artisanal Italian cured meats served with hot, fluffy traditional fried dough cushions."
          },
          tartareMed: {
            title: "Mediterranean Fassona Tartare",
            desc: "Hand-chopped Piedmontese Fassona beef, sun-dried tomatoes, sweet red onion, and marinated artichokes."
          },
          tartareTrad: {
            title: "Classic Piedmontese Tartare",
            desc: "Hand-cut Fassona beef, capers, Dijon mustard, cornichons, shallots, egg yolk, Tabasco, and Worcestershire."
          },
          frittoSkuisito: {
            title: "Skuisito Fried Platter",
            desc: "Crispy chicken sticks, cheese teezers, onion rings, cheddar broccoli bites, jalapeños, steakhouse fries, and SK dip."
          },
          fioriZucca: {
            title: "Stuffed Zucchini Blossoms",
            desc: "Delicate zucchini flowers stuffed with potato cream, sundried cherry tomatoes, aged pecorino, and fresh mint."
          },
          vitelTonne: {
            title: "Slow-Cooked Vitello Tonnato",
            desc: "Tender veal eye of round cooked at low temperature, draped in velvety tuna-caper sauce and Pantelleria capers."
          },
          paccheri: {
            title: "Paccheri with White Veal Ragù",
            desc: "Bronze-die Gragnano paccheri pasta tossed with slow-braised white veal ragù and shaved Pecorino Romano DOP."
          },
          orecchiette: {
            title: "Pugliese Orecchiette with Meatballs",
            desc: "Fresh handmade orecchiette with traditional savory meatballs in rich tomato sauce and salted Sicilian ricotta."
          },
          risottoLimoni: {
            title: "Sicilian Lemon & Rosemary Risotto",
            desc: "Creamy Carnaroli risotto infused with fragrant fresh Sicilian lemons, garden rosemary, and aged butter."
          },
          rigatoni: {
            title: "Roman Rigatoni Cacio e Pepe",
            desc: "Velvety sauce of aged Pecorino Romano DOP and toasted freshly cracked black peppercorns."
          },
          costataFiorentina: {
            title: "Charcoal-Grilled T-Bone / Rib Steak",
            desc: "Min. 1 kg dry-aged steak served with grilled garden vegetables, steakhouse potatoes, and chimichurri (price per 100g)."
          },
          costataFassona: {
            title: "Piedmontese Fassona Ribeye (500g)",
            desc: "Prime lean Fassona beef grilled over flaming coals, served with crisp golden steakhouse potatoes."
          },
          tagliataScottona: {
            title: "Scottona Beef Tagliata (200g)",
            desc: "Sliced tender beef steak with warm Grana Padano fondue, wild baby arugula drops, confit cherry tomatoes, and potato purée."
          },
          ribeyeScozzese: {
            title: "Boneless Scottish Ribeye (320g)",
            desc: "Pasture-raised Scottish ribeye steak, richly marbled and tender, accompanied by steakhouse potatoes."
          },
          controfiletto: {
            title: "Argentine Sirloin Steak (300g)",
            desc: "Grass-fed Argentine beef steak grilled to your preferred temperature, served with steakhouse fries."
          },
          filettoGrana: {
            title: "Beef Tenderloin with Grana Cream (230g)",
            desc: "Prime beef tenderloin medallion in warm Grana Padano cream with velvety whipped potatoes."
          },
          cotoletta: {
            title: "Traditional Veal Milanese Cutlet",
            desc: "Crisp, golden-crusted tender veal cutlet prepared according to authentic Milanese tradition, served with steak fries."
          },
          ribs: {
            title: "Smoky BBQ Pork Ribs",
            desc: "Slow-roasted pork ribs glazed with rich house-made BBQ sauce and served with roasted steakhouse wedges."
          },
          burgerBacon: {
            title: "Bacon Cheese Gourmet Burger",
            desc: "200g prime beef patty, crispy bacon, melted cheddar, jalapeños, fresh lettuce, house SK sauce, and steak fries."
          },
          burgerToro: {
            title: "Toro Seduto Mega Burger (300g)",
            desc: "300g cheese-stuffed beef patty, smoked bacon, caramelized onions, tartare sauce, and golden fries."
          },
          burgerMister: {
            title: "Mister Classic Burger",
            desc: "200g beef patty, artisan ketchup, crunchy pickled cucumbers, and rustic steakhouse potatoes."
          },
          caesarSalad: {
            title: "Grilled Chicken Caesar Salad",
            desc: "Mixed salad greens, char-grilled chicken breast, cherry tomatoes, olives, herb croutons, Grana cheese, and Caesar dressing."
          },
          insalataGreca: {
            title: "Authentic Greek Salad",
            desc: "Vine-ripened tomatoes, Greek feta, crisp cucumbers, bell peppers, anchovy fillets, Kalamata olives, and red onion."
          },
          patateSteak: {
            title: "Steakhouse Potatoes & Tartar Sauce",
            desc: "Golden, crispy potato wedges served with homemade creamy herb tartar dipping sauce."
          },
          cannolo: {
            title: "Traditional Sicilian Cannolo",
            desc: "Crisp pastry shell filled with sweet sheep's milk ricotta, Bronte pistachio crumble, and dark chocolate drops."
          },
          tortino: {
            title: "Warm Lava Chocolate Cake",
            desc: "Warm dark chocolate molten lava cake paired with a quenelle of artisanal vanilla cream gelato."
          },
          tiramisu: {
            title: "Signature House Tiramisù",
            desc: "Classic homemade Italian tiramisù with rich mascarpone zabaglione and espresso-soaked savoiardi."
          },
          vinoNeroDavola: {
            title: "Skuisito House Nero D'Avola D.O.C.",
            desc: "Skuisito's signature house red: intense, ruby-red, harmonious, perfectly matched with grilled steaks."
          },
          vinoSelection: {
            title: "Sommelier Wine Selection D.O.C.",
            desc: "Extensive cellar selection of renowned Italian and international labels (20% discount on takeaway bottles)."
          },
          birraSpina: {
            title: "Hacker-Pschorr Draft Beer (40cl)",
            desc: "Bavarian premium lager (5.8% ABV), crisp, aromatic, and freshly tapped."
          }
        }
      },
      eventsPackages: {
        sectionLabel: "SPECIAL OCCASIONS & GROUPS",
        sectionTitle: "Private Events & Group Menus",
        subtitle: "Complete fixed-price menu packages per person for graduation luncheons, corporate dinners, birthday milestones, and private celebrations at Skuisito SteakHouse & WineBar.",
        p1Badge: "Min. 8 Pax",
        p1Title: "Group Tasting Menu",
        p1Tag1: "Shared Starters",
        p1Item1: "Toasted bruschetta with fresh tomato & basil",
        p1Item2: "Fava bean purée with sautéed chicory, garlic & chili",
        p1Item3: "Traditional homestyle meatballs in savory tomato sauce",
        p1Tag2: "First Course",
        p1Item4: "Fragrant risotto with wild Porcini mushrooms",
        p1Tag3: "Dessert",
        p1Item5: "Artisanal house dessert",
        p1Note: "Includes cover charge, mineral water, and artisan bread",
        p1Price: "€ 30,-",
        p1PerPerson: "/ person",
        p1SubPrice: "<strong>€ 35,- / person</strong> with <strong>house wine included</strong> (1 bottle per 4 guests)",
        p1Btn: "Book Group Menu",

        p2Badge: "All-In Formula",
        p2Title: "Graduation Celebrations",
        p2Desc: "For <strong>Graduation Luncheons</strong>, we offer an exclusive flexible formula allowing guests to choose their favorite dishes from the daily lunch menu.",
        p2Tag1: "Course Selection",
        p2Item1: "<strong>1 First Course</strong> of choice from daily lunch specials",
        p2Item2: "<strong>1 Second Course</strong> of choice from daily lunch specials",
        p2Tag2: "Included",
        p2Item3: "Cover charge, chilled mineral water, and fresh bread",
        p2Note: "Vibrant setting ideal for celebrating with friends and university colleagues",
        p2Price: "€ 25,-",
        p2PerPerson: "/ person",
        p2SubPrice: "<strong>€ 30,- / person</strong> with <strong>house wine included</strong> (1 bottle 0.75L per 4 guests)",
        p2Btn: "Book Graduation Lunch",

        p3Badge: "Premium All-Inclusive",
        p3Title: "Private & Corporate Events",
        p3Tag1: "Welcome Aperitif",
        p3Item1: "Glass of Valdobbiadene Prosecco DOCG sparkling wine",
        p3Tag2: "Starters",
        p3Item2: "Slow-cooked Vitello Tonnato with caper berries",
        p3Item3: "Mantua pumpkin flan with fondue",
        p3Tag3: "Main Courses",
        p3Item4: "Risotto with wild Porcini mushrooms",
        p3Item5: "Sliced Argentine Angus Tagliata with roast potatoes & crunchy greens",
        p3Tag4: "Dessert & Drinks",
        p3Item6: "Signature house dessert",
        p3Item7: "Sommelier wine (1 bottle per 3 guests, choice of White / Red / Rosé)",
        p3Item8: "Mineral water and Italian espresso included",
        p3Price: "€ 50,-",
        p3PerPerson: "/ person",
        p3SubPrice: "Complete All-Inclusive Premium Package",
        p3Btn: "Inquire for Event"
      },
      takeaway: {
        sectionLabel: "SIMPLE & FAST",
        heading: "How to Order Takeaway",
        step1Title: "1. Select Your Dishes",
        step1Desc: "Explore our flame-grilled steaks, tasty starters, pasta, and sommelier-curated wine bottles.",
        step2Title: "2. Confirm Your Order",
        step2Desc: "Select your preferred pickup time slot and enter your contact information for instant confirmation.",
        step3Title: "3. Freshly Prepared",
        step3Desc: "Our kitchen grills your chosen cuts to perfection, preserving tenderness and aroma.",
        step4Title: "4. Savor the Quality",
        step4Desc: "Enjoy the authentic Skuisito SteakHouse culinary experience in the comfort of your home.",
        boxTitle: "Craving Prime Grilled Steaks?",
        boxDesc: "Order for takeaway or reserve an intimate table to experience the complete steakhouse & wine bar atmosphere in Milan.",
        btnBook: "Book a Table",
        btnMenu: "Browse Menu"
      },
      testimonials: {
        sectionLabel: "GUEST EXPERIENCES",
        heading: "Reviews & Feedback",
        guestRole: "Skuisito SteakHouse Guest",
        badge: "Verified Review",
        badgeScore: "4.9 / 5",
        badgeRating: "Guest Rating",
        reviews: [
          "Sensational steak cooked to charcoal perfection and an outstanding wine list. Attentive, warm staff in a very stylish setting.",
          "The best sliced steak (tagliata) and veal Milanese cutlet in Milan! Chef Gianfranco Riggio's attention to ingredient quality is evident in every bite.",
          "We celebrated a graduation lunch here: exquisite food, generous portions, and lovely hospitality. Highly recommended!"
        ]
      },
      events: {
        sectionLabel: "THEMED NIGHTS & TASTINGS",
        heading: "Our Events & Atmosphere",
        subtitle: "From wine pairing evenings and prime dry-aged tastings to private milestones and celebrations: discover the warm, convivial spirit of Skuisito SteakHouse & WineBar in Milan.",
        exclusiveBadge: "Exclusive Experiences",
        cardTitle: "Meat Tastings & Wine Pairing",
        cardDesc: "We periodically host guided tasting masterclasses pairing international steak varieties with prestigious labels from our curated cellar in an intimate, cozy atmosphere.",
        bullet1: "Dry-aging masterclasses & global prime cuts",
        bullet2: "Sommelier-guided food & wine pairings",
        bullet3: "Customized private events and corporate dinners",
        btnBook: "Book for an Event",
        newsletterTitle: "Stay updated on themed dinners, tastings, and special events",
        newsletterPlaceholder: "Enter your email address"
      },
      contact: {
        sectionLabel: "VISIT US IN MILAN",
        heading: "Location & Contact",
        phoneTitle: "Phone Reservations",
        phoneReferent: "Manager: Gianfranco Riggio",
        emailTitle: "Email & Inquiries",
        addressTitle: "Via Pacini 18, 20131 Milan, Italy",
        mapsLink: "Open on Google Maps",
        hoursTitle: "Opening Hours",
        hoursMonFri: "<strong>Mon - Fri:</strong> 12:00 - 14:30 | 18:00 - 23:00",
        hoursSat: "<strong>Saturday:</strong> 12:00 - 15:00 | 18:00 - 24:00",
        hoursSun: "Sunday Closed"
      },
      ctaBanner: {
        heading: "Taste the Authentic Excellence of Our Kitchen",
        btnBook: "Book a Table",
        btnMenu: "Explore Menu"
      },
      footer: {
        home: "Home",
        about: "About Us",
        menu: "Menu",
        takeaway: "Takeaway",
        contact: "Contact",
        events: "Events",
        reservations: "Reservations",
        legal: "<strong>Company Name:</strong> ZG srl — \"SKUISITO STEAK HOUSE\" • Via Pacini 18, 20131 Milan • <strong>VAT:</strong> 07526540963 - Milan",
        copyright: "Copyright © 2026 Skuisito SteakHouse & WineBar (ZG srl). All rights reserved."
      },
      modalReservation: {
        label: "ONLINE RESERVATION",
        heading: "Reserve Your Table",
        subtext: "Join us for an unforgettable dining experience of flame-grilled prime meats and fine wines.",
        guestsLabel: "Number of Guests",
        opt2: "2 Guests (Table for 2)",
        opt4: "4 Guests (Table for 4)",
        opt6: "6 Guests (Table for 6)",
        opt8: "8+ Guests (Groups & Events)",
        dateLabel: "Date",
        timeLabel: "Time Slot",
        lunch: "Lunch",
        dinner: "Dinner",
        phoneLabel: "Phone Number",
        nameLabel: "Full Name",
        namePlaceholder: "John Doe",
        notesLabel: "Special Notes / Dietary Requirements",
        notesPlaceholder: "Let us know about allergies, special occasions, or seating preferences...",
        submitBtn: "Confirm Reservation"
      },
      cart: {
        title: "Your Takeaway Order",
        empty: "Your cart is currently empty.<br>Add delicious specialties from our menu!",
        subtotal: "Estimated Subtotal:",
        checkoutBtn: "Proceed to Order",
        itemAdded: "Added \"{name}\" to your order!",
        confirmedToast: "Table confirmed for {guests} guests on {date} at {time}!",
        newsletterToast: "Thank you! You have subscribed to Skuisito news and special events.",
        orderToast: "Order placed! Our kitchen is preparing your Skuisito selections."
      }
    },

    es: {
      meta: {
        title: "SKUISITO STEAKHOUSE & WINEBAR | Restaurante de Carnes y Wine Bar Milán",
        description: "Skuisito SteakHouse & WineBar en Milán: carnes argentinas y escocesas, productos selectos DOP/IGT/DOC y la pasión del Chef Gianfranco Riggio."
      },
      nav: {
        home: "Inicio",
        about: "Sobre Nosotros",
        menu: "Menú",
        takeaway: "Para Llevar",
        reviews: "Reseñas",
        events: "Eventos",
        contact: "Contacto",
        bookTable: "Reservar Mesa"
      },
      hero: {
        preloader: "Encendido de Brasas & Carnes Selectas...",
        stage0Tagline: "SKUISITO STEAKHOUSE & WINEBAR",
        stage0Title: "Encuentra, Saborea, Vive<br>el Auténtico Sabor",
        stage0Desc: "Un equilibrio perfecto entre productos genuinos e innovadores, recetas tradicionales e internacionales, buena comida y buen vino, sabores y colores.",
        stage0BtnBook: "Reservar Mesa",
        stage0BtnMenu: "Descubrir el Menú",
        stage1Tagline: "Selección de Pastos Naturales",
        stage1Title: "Carnes Argentinas & Escocesas",
        stage1Desc: "Ganado criado en amplios pastos naturales de Argentina y Escocia, con un sabor natural y único, asadas a la brasa para resaltar cada matiz.",
        stage1Btn: "Nuestra Filosofía",
        stage2Tagline: "Experiencia Gusto-Olfativa",
        stage2Title: "La Armonía entre<br>Ser y Hacer",
        stage2Desc: "Una atmósfera serena, agradable e informal en Milán donde abandonarse a la armonía entre el comer y el ser.",
        stage2BtnBook: "Reserva Tu Mesa",
        stage2BtnFind: "Dónde Encontrarnos",
        scrollPrompt: "Desplázate para Explorar"
      },
      about: {
        sideLabel: "SKUISITO • MILÁN PACINI",
        sectionLabel: "BIENVENIDOS A SKUISITO",
        heading: "Pasión por un Producto de Alta Calidad",
        text1: "Nuestro propósito es crear una armonía perfecta entre productos genuinos e innovadores, recetas tradicionales e internacionales, entre el buen comer y el buen beber. El respeto por la materia prima y la búsqueda constante de los mejores productos italianos <strong>DOP, IGT y DOC</strong> directamente de productores selectos nos permite satisfacer los paladares más exigentes.",
        text2: "Junto a la cocina italiana tradicional, nuestra gran especialidad son las <strong>carnes argentinas y escocesas</strong>, de sabor natural y textura tierna, procedentes de ganado criado en amplios pastizales vírgenes.",
        chefBadge: "El Chef & Fundador",
        chefQuote: "\"Gianfranco Riggio es el Chef, cocinero, director de la sociedad y portavoz de su restaurante. Atento hasta el más mínimo detalle, amalgama la tradición culinaria de su tierra natal, Sicilia, conservando sus aromas y sabores, con la innovación y el arte de la brasa.\"",
        chefAuthor: "Gianfranco Riggio — Chef y Fundador",
        menuLink: "Descubre Nuestro Menú",
        f1Title: "Excelencias DOP, IGT y DOC",
        f1Desc: "Selección constante de los productos agroalimentarios más prestigiosos de Italia y el mundo.",
        f2Title: "Argentina & Escocia",
        f2Desc: "Carnes especiales de ganado criado en extensos pastos naturales incontaminados.",
        f3Title: "Tradición e Innovación",
        f3Desc: "Los aromas y sabores de Sicilia se funden con la modernidad y la parrilla al fuego vivo.",
        f4Title: "Armonía & Wine Bar",
        f4Desc: "Un ambiente acogedor e informal para veladas románticas, comidas de trabajo y reuniones de amigos."
      },
      menu: {
        sectionLabel: "EXCELENCIA CULINARIA",
        sectionTitle: "Explora Nuestro Menú",
        catAll: "Todas las Especialidades",
        catStarters: "Entrantes y Tartar",
        catPrimi: "Primeros Platos y Pasta",
        catSteaks: "Carnes y Brasas",
        catBurgers: "Hamburguesas Artesanales",
        catSides: "Ensaladas y Guarniciones",
        catDesserts: "Postres Caseros",
        catDrinks: "Wine Bar y Cervezas",
        catEvents: "★ Eventos y Menús para Grupos",
        items: {
          tagliere: {
            title: "Tabla de Embutidos & Gnocco Fritto",
            desc: "Selección de embutidos italianos tradicionales servidos con torta frita caliente y esponjosa."
          },
          tartareMed: {
            title: "Tartar Mediterráneo de Fassona",
            desc: "Carne de Fassona piamontesa cortada a cuchillo con tomates secos, cebolla dulce y alcachofas en aceite."
          },
          tartareTrad: {
            title: "Tartar Tradicional Piamontés",
            desc: "Fassona piamontesa, alcaparras, mostaza, pepinillos, cebolla, yema de huevo, Tabasco y salsa Perrins."
          },
          frittoSkuisito: {
            title: "Frito Especial Skuisito",
            desc: "Tiras de pollo crujientes, bocaditos de queso, aros de cebolla, brócoli cheddar, jalapeños y patatas con salsa SK."
          },
          fioriZucca: {
            title: "Flores de Calabacín Rellenas",
            desc: "Flores de calabacín rellenas de crema de patata, tomates secos, queso pecorino y menta fresca."
          },
          vitelTonne: {
            title: "Vitel Tonnè al Punto Rosa",
            desc: "Tierno redondo de ternera cocinado a baja temperatura con crema tradicional de atún y alcaparras."
          },
          paccheri: {
            title: "Paccheri con Ragú de Ternera",
            desc: "Paccheri de Gragnano con ragú blanco de ternera estofada y lascas de Pecorino Romano DOP."
          },
          orecchiette: {
            title: "Orecchiette Pugliesas con Albóndigas",
            desc: "Pasta fresca artesanal con albóndigas en salsa de tomate tradicional y ricotta salada siciliana."
          },
          risottoLimoni: {
            title: "Risotto con Limones de Sicilia",
            desc: "Risotto Carnaroli mantecado al romero fresco con aroma de limones sicilianos recién exprimidos."
          },
          rigatoni: {
            title: "Rigatoni Cacio e Pepe",
            desc: "Crema aterciopelada de queso Pecorino Romano DOP y pimienta negra tostada y recién molida."
          },
          costataFiorentina: {
            title: "Chuletón a la Brasa (Fiorentina)",
            desc: "Mín. 1 kg con verduras asadas a la parrilla, patatas steakhouse y salsa chimichurri (precio por 100g)."
          },
          costataFassona: {
            title: "Chuletón de Fassona (500g)",
            desc: "Selecta carne piamontesa asada a fuego vivo a la brasa con patatas rústicas steakhouse."
          },
          tagliataScottona: {
            title: "Tagliata de Scottona (200g)",
            desc: "Tiras de ternera con fondue tibia de Grana Padano, gotas de rúcula, tomate confitado y puré de patata."
          },
          ribeyeScozzese: {
            title: "Ojo de Bife Escocés Deshuesado (320g)",
            desc: "Ribeye escocés de pastos naturales, tierno y sabroso, servido con patatas rústicas doradas."
          },
          controfiletto: {
            title: "Bife de Chorizo Argentino (300g)",
            desc: "Carne argentina de pasto seleccionada, asada a su punto ideal con patatas doradas."
          },
          filettoGrana: {
            title: "Solomillo con Crema de Grana (230g)",
            desc: "Tierno solomillo de ternera con crema suave de Grana Padano y puré cremoso de patata."
          },
          cotoletta: {
            title: "Milanesa de Ternera Tradicional",
            desc: "Milanesa de ternera dorada y crujiente según la auténtica receta tradicional milanesa con patatas."
          },
          ribs: {
            title: "Costillas de Cerdo en Salsa BBQ",
            desc: "Costillas de cerdo glaseadas lentamente con salsa barbacoa artesanal y patatas steakhouse."
          },
          burgerBacon: {
            title: "Bacon Cheese Burger Gourmet",
            desc: "200g de ternera, bacon crujiente, queso fundido, jalapeños, lechuga fresca, salsa SK y patatas."
          },
          burgerToro: {
            title: "Toro Seduto Maxi Burger (300g)",
            desc: "300g de carne rellena de queso fundido, bacon ahumado, cebolla caramelizada, salsa tártara y patatas."
          },
          burgerMister: {
            title: "Mister Hamburguesa Clásica",
            desc: "200g de ternera de calidad, ketchup artesanal, pepinillos encurtidos y patatas doradas."
          },
          caesarSalad: {
            title: "Ensalada César con Pollo",
            desc: "Hojas mixtas, pechuga de pollo a la plancha, tomates cherry, aceitunas, picatostes, queso Grana y salsa César."
          },
          insalataGreca: {
            title: "Ensalada Griega Tradicional",
            desc: "Tomate maduro, auténtico queso feta, pepinos frescos, pimientos, anchoas, aceitunas griegas y cebolla."
          },
          patateSteak: {
            title: "Patatas Steakhouse con Tártara",
            desc: "Gajos de patata dorados y crujientes acompañados de salsa tártara artesanal."
          },
          cannolo: {
            title: "Cannolo Siciliano Tradicional",
            desc: "Oblea crujiente rellena de ricotta dulce siciliana pura, crocanti de pistacho y virutas de chocolate."
          },
          tortino: {
            title: "Coulant de Chocolate Negro",
            desc: "Pastel tibio de corazón líquido de chocolate negro acompañado de una quenelle de helado de vainilla."
          },
          tiramisu: {
            title: "Tiramisú Artesanal de la Casa",
            desc: "Auténtico tiramisú casero con crema suave de mascarpone y bizcochos empapados en café espresso."
          },
          vinoNeroDavola: {
            title: "Nero D'Avola D.O.C. Skuisito",
            desc: "El vino de la casa Skuisito: tinto intenso, redondo y armonioso, ideal para acompañar carnes rojas."
          },
          vinoSelection: {
            title: "Selección Carta de Vinos D.O.C.",
            desc: "Amplia selección de vinos italianos e internacionales de prestigiosas bodegas (-20% para llevar)."
          },
          birraSpina: {
            title: "Cerveza de Barril Hacker-Pschorr (40cl)",
            desc: "Lager bávara rubia de 5,8° aromática y refrescante, tirada fresca en barra."
          }
        }
      },
      eventsPackages: {
        sectionLabel: "OCASIONES ESPECIALES Y GRUPOS",
        sectionTitle: "Eventos y Fiestas Privadas",
        subtitle: "Propuestas de menú completo a precio cerrado por persona para graduaciones, cenas de empresa, cumpleaños y eventos especiales en Skuisito SteakHouse & WineBar.",
        p1Badge: "Mín. 8 Pax",
        p1Title: "Menú Degustación Grupos",
        p1Tag1: "Entrantes para compartir",
        p1Item1: "Bruschettas con tomate fresco y albahaca",
        p1Item2: "Puré de habas (Macco) con achicoria salteada al ajo y guindilla",
        p1Item3: "Albóndigas tradicionales en salsa de tomate casera",
        p1Tag2: "Primer Plato",
        p1Item4: "Risotto aromático con setas boletus (funghi porcini)",
        p1Tag3: "Postre",
        p1Item5: "Postre artesanal de la casa",
        p1Note: "Incluye servicio de mesa, agua mineral y pan recién horneado",
        p1Price: "€ 30,-",
        p1PerPerson: "/ persona",
        p1SubPrice: "<strong>€ 35,- / persona</strong> con <strong>vino incluido</strong> de la casa (1 bot. cada 4 personas)",
        p1Btn: "Reservar Menú Grupos",

        p2Badge: "Fórmula Todo Incluido",
        p2Title: "Fiestas de Graduación",
        p2Desc: "Para las <strong>Comidas de Graduación</strong> ofrecemos una fórmula especial con platos a libre elección del menú del día.",
        p2Tag1: "Elección de Platos",
        p2Item1: "<strong>1 Primer Plato</strong> a libre elección del menú del almuerzo",
        p2Item2: "<strong>1 Segundo Plato</strong> a libre elección del menú del almuerzo",
        p2Tag2: "Incluye",
        p2Item3: "Servicio de mesa, agua mineral y pan recién horneado",
        p2Note: "Ambiente idóneo para festejar con amigos y compañeros de universidad",
        p2Price: "€ 25,-",
        p2PerPerson: "/ persona",
        p2SubPrice: "<strong>€ 30,- / persona</strong> con <strong>vino incluido</strong> de la casa (1 bot. 0.75L cada 4 personas)",
        p2Btn: "Reservar Comida Graduación",

        p3Badge: "Premium All-Inclusive",
        p3Title: "Eventos Privados y de Empresa",
        p3Tag1: "Aperitivo de Bienvenida",
        p3Item1: "Copa de espumoso Valdobbiadene Prosecco DOCG",
        p3Tag2: "Entrantes",
        p3Item2: "Vitel Tonnè al punto rosa con alcaparras",
        p3Item3: "Flan de calabaza mantovana con fondue",
        p3Tag3: "Principal",
        p3Item4: "Risotto con setas boletus",
        p3Item5: "Tagliata de Angus Argentino con patatas asadas y verduritas crujientes",
        p3Tag4: "Postre y Bebidas",
        p3Item6: "Postre selecto de la casa",
        p3Item7: "Vino de Sumiller (1 bot. cada 3 pax a elegir blanco / tinto / rosado)",
        p3Item8: "Agua mineral y café espresso incluidos",
        p3Price: "€ 50,-",
        p3PerPerson: "/ persona",
        p3SubPrice: "Paquete completo todo incluido Premium",
        p3Btn: "Solicitar para Evento"
      },
      takeaway: {
        sectionLabel: "FÁCIL Y DIRECTO",
        heading: "Cómo Pedir para Llevar",
        step1Title: "1. Elige Tus Platos",
        step1Desc: "Explora nuestras carnes a la brasa, entrantes caseros y vinos seleccionados de la bodega.",
        step2Title: "2. Confirma Tu Pedido",
        step2Desc: "Indica la hora de recogida deseada e introduce tus datos de contacto para la confirmación.",
        step3Title: "3. Preparación al Momento",
        step3Desc: "Nuestra cocina asa los cortes a la parrilla con máxima dedicación para conservar su ternura y aroma.",
        step4Title: "4. Disfruta de la Calidad",
        step4Desc: "Saborea la experiencia culinaria de Skuisito SteakHouse cómodamente con tu familia y amigos.",
        boxTitle: "¿Deseas Saborear Nuestras Carnes?",
        boxDesc: "Pide para llevar o reserva una mesa para disfrutar de la experiencia completa de nuestra steakhouse & wine bar en Milán.",
        btnBook: "Reservar Mesa",
        btnMenu: "Ver el Menú"
      },
      testimonials: {
        sectionLabel: "LA EXPERIENCIA DE NUESTROS CLIENTES",
        heading: "Reseñas y Opiniones",
        guestRole: "Cliente Skuisito SteakHouse",
        badge: "Reseña Verificada",
        badgeScore: "4.9 / 5",
        badgeRating: "Valoración de Clientes",
        reviews: [
          "¡Carne sensacional con un punto de brasa impecable y una carta de vinos magnífica! El servicio es sumamente atento y el local muy elegante.",
          "¡La mejor tagliata y milanesa de ternera de todo Milán! La pasión del Chef Gianfranco Riggio por la calidad se nota en cada plato.",
          "Celebramos aquí un almuerzo de graduación: menú riquísimo, platos generosos y un trato inmejorable por parte de todo el equipo. ¡Recomendadísimo!"
        ]
      },
      events: {
        sectionLabel: "NOCHES TEMÁTICAS Y CATAS",
        heading: "Nuestros Eventos y Ambiente",
        subtitle: "Desde veladas con cata de vinos y cortes selectos hasta celebraciones privadas y aniversarios: descubre el ambiente auténtico y cercano de Skuisito SteakHouse & WineBar en Milán.",
        exclusiveBadge: "Experiencias Exclusivas",
        cardTitle: "Degustaciones de Carne y Maridaje",
        cardDesc: "Organizamos periódicamente jornadas de cata guiada para descubrir las mejores selecciones de carne y etiquetas destacadas de nuestra bodega en un ambiente cálido.",
        bullet1: "Cursos de maduración y cortes internacionales",
        bullet2: "Maridajes enogastronómicos con sumiller",
        bullet3: "Eventos privados y cenas de empresa a medida",
        btnBook: "Reservar para un Evento",
        newsletterTitle: "Recibe novedades sobre cenas temáticas, catas y eventos especiales",
        newsletterPlaceholder: "Introduce tu correo electrónico"
      },
      contact: {
        sectionLabel: "VEN A VISITARNOS EN MILÁN",
        heading: "Ubicación y Contacto",
        phoneTitle: "Reservas Telefónicas",
        phoneReferent: "Responsable: Gianfranco Riggio",
        emailTitle: "Email y Consultas",
        addressTitle: "Via Pacini 18, 20131 Milán, Italia",
        mapsLink: "Abrir en Google Maps",
        hoursTitle: "Horarios de Apertura",
        hoursMonFri: "<strong>Lun - Vie:</strong> 12:00 - 14:30 | 18:00 - 23:00",
        hoursSat: "<strong>Sábado:</strong> 12:00 - 15:00 | 18:00 - 24:00",
        hoursSun: "Domingo Cerrado"
      },
      ctaBanner: {
        heading: "Vive el Auténtico Sabor de Nuestra Cocina",
        btnBook: "Reservar Mesa",
        btnMenu: "Descubrir el Menú"
      },
      footer: {
        home: "Inicio",
        about: "Sobre Nosotros",
        menu: "Menú",
        takeaway: "Para Llevar",
        contact: "Contacto",
        events: "Eventos",
        reservations: "Reservas",
        legal: "<strong>Razón Social:</strong> ZG srl — \"SKUISITO STEAK HOUSE\" • Via Pacini 18, 20131 Milán • <strong>NIF/IVA:</strong> 07526540963 - Milán",
        copyright: "Copyright © 2026 Skuisito SteakHouse & WineBar (ZG srl). Todos los derechos reservados."
      },
      modalReservation: {
        label: "RESERVA ONLINE",
        heading: "Reserva Tu Mesa",
        subtext: "Únete a nosotros para una velada inolvidable de carnes selectas a la brasa y selectos vinos.",
        guestsLabel: "Número de Comensales",
        opt2: "2 Comensales (Mesa para 2)",
        opt4: "4 Comensales (Mesa de 4)",
        opt6: "6 Comensales (Mesa de 6)",
        opt8: "8+ Comensales (Grupos y Eventos)",
        dateLabel: "Fecha",
        timeLabel: "Horario",
        lunch: "Almuerzo",
        dinner: "Cena",
        phoneLabel: "Teléfono de Contacto",
        nameLabel: "Nombre y Apellidos",
        namePlaceholder: "Juan Pérez",
        notesLabel: "Notas / Peticiones Especiales / Alergias",
        notesPlaceholder: "Indícanos cualquier alergia, intolerancia o motivo de celebración especial...",
        submitBtn: "Confirmar Reserva"
      },
      cart: {
        title: "Tu Pedido para Llevar",
        empty: "Tu carrito está actualmente vacío.<br>¡Añade nuestras especialidades desde el menú!",
        subtotal: "Subtotal Estimado:",
        checkoutBtn: "Tramitar Pedido",
        itemAdded: "¡Añadido \"{name}\" a tu pedido!",
        confirmedToast: "¡Mesa confirmada para {guests} personas el {date} a las {time}!",
        newsletterToast: "¡Gracias! Te has suscrito a las novedades y eventos de Skuisito.",
        orderToast: "¡Pedido enviado! Nuestra cocina está preparando tus selecciones Skuisito."
      }
    }
  };

  let currentLang = localStorage.getItem("skuisito_lang") || "it";
  if (!["it", "en", "es"].includes(currentLang)) {
    currentLang = "it";
  }

  function getNestedTranslation(obj, path) {
    return path.split(".").reduce((prev, curr) => (prev ? prev[curr] : null), obj);
  }

  function applyTranslations(lang) {
    if (!translations[lang]) return;
    const t = translations[lang];
    currentLang = lang;
    localStorage.setItem("skuisito_lang", lang);
    document.documentElement.lang = lang;

    // 1. Meta Title & Description
    if (t.meta) {
      if (t.meta.title) document.title = t.meta.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && t.meta.description) metaDesc.setAttribute("content", t.meta.description);
    }

    // 2. Elements with data-i18n (Plain Text)
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = getNestedTranslation(t, key);
      if (val !== undefined && val !== null) {
        el.textContent = val;
      }
    });

    // 3. Elements with data-i18n-html (Rich HTML with <strong>, <br>, etc.)
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      const val = getNestedTranslation(t, key);
      if (val !== undefined && val !== null) {
        el.innerHTML = val;
      }
    });

    // 4. Elements with data-i18n-placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = getNestedTranslation(t, key);
      if (val !== undefined && val !== null) {
        el.setAttribute("placeholder", val);
      }
    });

    // 5. Elements with data-i18n-aria
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      const val = getNestedTranslation(t, key);
      if (val !== undefined && val !== null) {
        el.setAttribute("aria-label", val);
      }
    });

    // 6. Update Testimonial Quotes if they exist
    if (t.testimonials && t.testimonials.reviews) {
      const testimonialElements = document.querySelectorAll(".testimonial-quote-text");
      testimonialElements.forEach((el, idx) => {
        if (t.testimonials.reviews[idx]) {
          el.textContent = t.testimonials.reviews[idx];
        }
      });
    }

    // 7. Update Language Selector Active State & Labels
    updateSelectorUI(lang);

    // 8. Dispatch custom event for dynamic components (cart, toasts, etc.)
    window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang, t } }));
  }

  function updateSelectorUI(lang) {
    // Mark active state on all flag buttons (desktop and mobile)
    document.querySelectorAll(".flag-btn, .lang-opt, .mobile-lang-btn").forEach((btn) => {
      const btnLang = btn.getAttribute("data-lang");
      if (btnLang === lang) {
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
      } else {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      }
    });
  }

  // Setup UI Click Handlers
  function initLanguageSwitcher() {
    // Delegate click handler for flag buttons
    document.querySelectorAll(".flag-btn, .lang-opt, .mobile-lang-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const selectedLang = btn.getAttribute("data-lang");
        if (selectedLang) {
          applyTranslations(selectedLang);
        }
      });
    });

    // Initial Translation Load
    applyTranslations(currentLang);
  }

  // Expose global helper
  window.skuisitoI18n = {
    getLang: () => currentLang,
    setLang: (lang) => applyTranslations(lang),
    t: (key) => getNestedTranslation(translations[currentLang] || translations.it, key) || key,
    translations: translations
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLanguageSwitcher);
  } else {
    initLanguageSwitcher();
  }
})();
