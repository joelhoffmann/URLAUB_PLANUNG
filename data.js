const TRIP = {
  titel: 'Schweden 2026',
  personen: ['Joel', 'Luca'],
  abfahrt: '18. Juli 2026',
  rueckfahrt: '~1. August 2026',
  auto: 'Polestar 4 Dual Motor',
  startort: 'Schwetzingen'
};

const TIMELINE = [
  { datum: '18. Juli',        label: 'Abfahrt',    ort: 'Schwetzingen',           icon: '🚗' },
  { datum: '19. Juli',        label: 'Anreise',    ort: 'Übernachtung unterwegs', icon: '🏨' },
  { datum: '20. Juli',        label: 'Ankunft',    ort: 'Schweden',               icon: '🇸🇪' },
  { datum: '21.–27. Juli',    label: 'Kajaktour',  ort: 'Värmland / Dalsland',    icon: '🛶' },
  { datum: '27. Juli – 1. Aug', label: 'Roadtrip', ort: 'Norwegen',               icon: '⛰️' },
  { datum: '~1. August',      label: 'Rückfahrt',  ort: 'Schwetzingen',           icon: '🏠' }
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
    preis: '~540 €',
    preisDetail: 'Grundpreis + Zelt + 2× Küche ≈ 540 € (5.880 kr) gesamt · Basis allein 395 € (4.280 kr)',
    start: 'So. 19. Juli 2026',
    verfuegbar: 'confirmed',
    verfuegbarText: '✓ Verfügbar',
    schwierigkeit: 'Leicht',
    beschreibung: 'Sanfter Fluss durch Nordvärmland. 2–3 km/h Strömung, Sandbänke zum Baden, kein Wildwasser. Shuttle zum Startpunkt inklusive — Auto bleibt am Endpunkt.',
    notizen: 'Abfahrten Do/So. Zelt & Küche extra mietbar. Schlafsäcke selbst mitbringen.',
    tags: ['Fluss', 'Anfänger', 'Shuttle inkl.'],
    websiteUrl: 'https://www.vildmark.se/de/pakete/kanupakete/',
    buchungUrl: 'https://www.vildmark.se/de/pakete/kanupakete/',
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
  { id: 1, text: 'Kajaktour Option auswählen & buchen', prio: 'high',   hinweis: 'Zeitdruck: nur 6 Wochen bis Abreise!' },
  { id: 2, text: 'Campingausrüstung checken',           prio: 'medium', hinweis: 'Zelt & Schlafsäcke bereits vorhanden' },
  { id: 3, text: 'Norwegen-Route grob planen',          prio: 'medium', hinweis: 'Jotunheimen, Fjorde, Bergcamping' },
  { id: 4, text: 'Übernachtung Anreise buchen',         prio: 'medium', hinweis: 'Hamburg oder Kopenhagen, ~19. Juli' },
  { id: 5, text: 'Luca informieren & abstimmen',        prio: 'low',    hinweis: 'Tour-Optionen besprechen' }
];
