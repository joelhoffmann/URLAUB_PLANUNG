const TRIP = {
  titel: 'Schweden 2026',
  personen: ['Joel', 'Luca'],
  abfahrt: '18. Juli 2026',
  rueckfahrt: '~1. August 2026',
  auto: 'Polestar 4 Dual Motor',
  startort: 'Heidelberg'
};

const TIMELINE = [
  { datum: '18. Juli',          label: 'Abfahrt',              ort: 'Heidelberg',                                    icon: '🚗' },
  { datum: '18. Juli Abend',    label: 'Übernachtung',         ort: 'Hotel, Campingplatz oder Wildcampen (SE: Allemansrätten)', icon: '🏕️' },
  { datum: '19. Juli, 13:00',   label: 'Kajaktour Start',      ort: 'Gunnerud, Värmland (Vildmark i Värmland)',        icon: '🛶' },
  { datum: '19.–25. Juli',      label: 'Klarälven — 6 Nächte', ort: 'Värmland, Schweden · Buchung #249943',           icon: '🛶' },
  { datum: '25. Juli – 1. Aug', label: 'Roadtrip',             ort: 'Norwegen',                                        icon: '⛰️' },
  { datum: '~1. August',        label: 'Rückfahrt',            ort: 'Heidelberg',                                    icon: '🏠' }
];

const TOUREN = [
  {
    id: 'klaralven',
    name: 'Klarälven',
    region: 'Värmland, Schweden',
    anbieter: 'Vildmark i Värmland',
    boot: 'Kanadier',
    bootIcon: '🛶',
    dauer: '7 Tage',
    naechte: '6 Nächte',
    strecke: '~100 km',
    portagen: 0,
    preis: '4.280 SEK',
    preisDetail: 'Bezahlt: 4.280 SEK (2 Pers. × 2.140 SEK) — Zelt & Küche nicht gebucht, selbst mitbringen',
    start: 'So. 19. Juli 2026, 13:00 Uhr',
    verfuegbar: 'booked',
    verfuegbarText: '✓ GEBUCHT',
    buchungRef: '249943',
    schwierigkeit: 'Leicht',
    beschreibung: 'Sanfter Fluss durch Nordvärmland. 2–3 km/h Strömung, Sandbänke zum Baden, kein Wildwasser. Shuttle zum Startpunkt inklusive — Auto bleibt am Endpunkt.',
    notizen: 'Buchung #249943 — vollständig bezahlt. 4.280 SEK (2 Pers.). Zelt & Schlafsäcke selbst mitbringen.',
    tags: ['Fluss', 'Anfänger', 'Shuttle inkl.', 'Gebucht ✓'],
    websiteUrl: 'https://www.vildmark.se/de/pakete/kanupakete/',
    buchungUrl: null,
    mapLat: 60.467, mapLng: 13.267, mapLabel: 'Vildmark i Värmland — Gunnerud (Start/Ende)'
  },
  {
    id: 'svartalven',
    name: 'Svartälven',
    region: 'Bergslagen, Värmland',
    anbieter: 'Värmlandsgården',
    boot: '2× Einzel-Kajak',
    bootIcon: '🚣',
    dauer: '6 Tage',
    naechte: '5 Nächte',
    strecke: '~70 km',
    portagen: 0,
    preis: '~610 €',
    preisDetail: '2× Kajak inkl. Grundausrüstung ≈ 610 € (6.700 kr) gesamt',
    start: 'Verfügbar im Juli',
    verfuegbar: 'confirmed',
    verfuegbarText: '✓ Verfügbar',
    schwierigkeit: 'Leicht',
    beschreibung: 'Waldfluss durch das historische Bergslagen-Gebiet mit angrenzenden Seen. Echte Einzel-Kajaks — jeder paddelt sein eigenes Boot, jeder hat eigenen Stauraum.',
    notizen: 'Tägliche Abfahrten möglich. Im Juli-Zeitraum bestätigt verfügbar.',
    tags: ['Kajak', 'Fluss + Seen', 'Premium'],
    websiteUrl: 'https://www.varmlandsgarden.com/en/canoe-tours/multi-day-canoe-tours/svartalven-canoe-tour.html',
    buchungUrl: 'https://www.varmlandsgarden.com/en/canoe-tours/multi-day-canoe-tours/svartalven-canoe-tour.html',
    mapLat: 59.967, mapLng: 14.167, mapLabel: 'Värmlandsgården — Lesjöfors (Start/Ende)'
  },
  {
    id: 'dalsland',
    name: 'Dalsland',
    region: 'Dalsland, Schweden',
    anbieter: 'Alcatraz Adventures',
    boot: '2-Personen-Kajak',
    bootIcon: '🚣',
    dauer: '7 Tage',
    naechte: '6 Nächte',
    strecke: 'Seengebiet',
    portagen: 0,
    preis: '~550 €',
    preisDetail: '2× Kajak inkl. Zelt ≈ 550 € (6.070 kr) gesamt — Schlafsäcke & Essen selbst',
    start: 'Verfügbar im Juli',
    verfuegbar: 'confirmed',
    verfuegbarText: '✓ Verfügbar',
    schwierigkeit: 'Leicht–Mittel',
    beschreibung: 'Tandem-Kajak durch das türkisblaue Dalsland-Seengebiet. Zelt bereits im Paket enthalten — einer der wenigen Anbieter, die das inkludieren.',
    notizen: 'Gewichtslimit 50–100 kg/Person beachten. Anfragen ob Wochenpaket mit 2p Kajak buchbar.',
    tags: ['Kajak', 'Seen', 'Zelt inkl.'],
    websiteUrl: 'https://www.alcatraz.se/en/packages/',
    buchungUrl: 'https://www.alcatraz.se/en/packages/',
    mapLat: 59.333, mapLng: 11.970, mapLabel: 'Alcatraz Adventures — Dalsland (Startpunkt)'
  },
  {
    id: 'tidan',
    name: 'Fluss Tidan',
    region: 'Zentralschweden',
    anbieter: 'Scandtrack',
    boot: 'Kajak',
    bootIcon: '🚣',
    dauer: '5 Tage',
    naechte: '4 Nächte',
    strecke: '~170 km',
    portagen: null,
    preis: 'ab 658 €',
    preisDetail: 'ab 329 €/Pers. — inkl. kompletter Ausrüstung & Proviant',
    start: 'Termin anfragen',
    verfuegbar: 'inquiry',
    verfuegbarText: '⏳ Termin anfragen',
    schwierigkeit: 'Anfänger',
    beschreibung: 'Flusspaddelstrecke auf dem Tidan. Alles inklusive: Kajak, komplette Ausrüstung und Proviant. Deutscher Anbieter mit deutschsprachigem Support.',
    notizen: 'Alles inklusive (Ausrüstung + Proviant). Deutscher Anbieter, deutschsprachiger Support.',
    tags: ['Kajak', 'Alles inkl.', 'DE-Support'],
    websiteUrl: 'https://www.scandtrack.com/Reisen/Kajaktouren/',
    buchungUrl: 'https://www.scandtrack.com/kajaktouren_auf_eigene_faust/5_tage_kajaktour_auf_eigene_faust_am_fluss_tidan/reiseverlauf.html',
    mapLat: 58.700, mapLng: 13.950, mapLabel: 'Scandtrack — Fluss Tidan (Startbereich)'
  }
];

const ROADTRIP = {
  titel: 'Roadtrip Norwegen',
  untertitel: 'Kommt nach der Kajaktour — wird noch geplant',
  highlights: ['Jotunheimen', 'Trollstigen', 'Hardangerfjord', 'Geiranger', 'Bergcamping', 'Fjorde', 'Wandern'],
  status: 'coming-soon'
};

const TODOS = [
  // Anreise & Planung
  { id: 1,  text: 'Übernachtung 18. Juli klären',             prio: 'high',   hinweis: 'Option A: Hotel/Campingplatz buchen · Option B: Wildcampen in Schweden (Allemansrätten) — funktioniert ab südlichem Schweden, Göteborg-Bereich ideal' },
  { id: 2,  text: 'Luca über Buchung informieren',           prio: 'high',   hinweis: 'Klarälven, Start 19. Juli, Buchung #249943 — Ausrüstungsliste abstimmen' },
  { id: 3,  text: 'Norwegen-Route grob planen',              prio: 'medium', hinweis: 'Jotunheimen, Fjorde, Bergcamping · ab ~25. Juli' },

  // Schlafen
  { id: 4,  text: 'Zelt organisieren (2-Personen)',          prio: 'high',   hinweis: 'Vildmark stellt KEIN Zelt — leicht & wasserdicht, passt ins Kanu' },
  { id: 5,  text: 'Isomatten / Schlafpads checken',          prio: 'high',   hinweis: 'Selbstaufblasend oder Schaumstoff — keine Luftmatratze für Wildnis' },
  { id: 6,  text: 'Schlafsäcke checken',                     prio: 'high',   hinweis: 'Bis ~5°C Komfort für Schweden Juli — bereits vorhanden, Zustand prüfen' },

  // Küche
  { id: 7,  text: 'Campingkocher besorgen',                  prio: 'high',   hinweis: 'Gaskocher (z.B. MSR, Primus) — Vildmark stellt keine Küche' },
  { id: 8,  text: 'Gaskartuschen einpacken (mind. 3–4)',     prio: 'high',   hinweis: '230g Kartuschen reichen ~1–2 Tage → mind. 4 für 7 Tage' },
  { id: 9,  text: 'Kochgeschirr, Besteck, Becher',           prio: 'high',   hinweis: 'Topf + Pfanne + Teller + Besteck für 2 Personen — leicht & stapelbar' },
  { id: 10, text: 'Proviant für 7 Tage einkaufen',           prio: 'high',   hinweis: 'Kurz vor Abfahrt kaufen: Haferflocken, Nudeln, Reis, Linsen, Nüsse, Riegel, gefriergetrocknet' },
  { id: 11, text: 'Trinkwasser-Aufbereitung',                prio: 'medium', hinweis: 'Klarälven-Wasser trinkbar, aber Filter (z.B. Sawyer Squeeze) oder Tabs als Backup empfohlen' },

  // Feuer
  { id: 12, text: 'Feuerzeug & Backup-Zünder',               prio: 'high',   hinweis: 'Mindestens 2 Feuerzeuge + wasserfeste Streichhölzer — immer separat verstauen' },
  { id: 13, text: 'Feuerstarter / Anzünder mitnehmen',       prio: 'medium', hinweis: 'Wachsblöcke oder Feuerstahlpaste — Holz am Fluss oft feucht' },
  { id: 14, text: 'Kleine Axt oder Säge einpacken',          prio: 'medium', hinweis: 'Zum Holzkleinmachen — Hultafors-Hatchet oder Bahco-Säge' },

  // Sicherheit & Komfort
  { id: 15, text: 'Mückenschutz einpacken',                  prio: 'high',   hinweis: 'Schweden Juli = Mückenhölle — DEET-Spray + Buff/Mückennetz für Kopf' },
  { id: 16, text: 'Erste-Hilfe-Set zusammenstellen',         prio: 'medium', hinweis: 'Blasenpflaster, Wundversorgung, Ibuprofen, Antihistaminika, persönliche Medikamente' },
  { id: 17, text: 'Wasserdichte Packsäcke (Dry Bags)',       prio: 'medium', hinweis: 'Alles im Kanu muss wasserdicht — prüfen ob Vildmark welche stellt, sonst selbst mitbringen' },
  { id: 18, text: 'Sonnenschutz & Sonnenbrille',             prio: 'medium', hinweis: 'Auf dem Wasser viel direktes + reflektiertes Licht' },
];
