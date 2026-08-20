import appRecipes from '../assets/app-recipes-blue.png'
import appLog from '../assets/app-log-blue.png'
import appDetail from '../assets/app-detail-blue.png'
import appBeans from '../assets/app-beans-blue.png'
import appGear from '../assets/app-gear-blue.png'

/*
 * Outbound destinations. The prototype left every button pointing at #get;
 * swap these for the real App Store listing and waitlist when they exist.
 */
export const links = {
  appStore: '#get',
  login: 'https://dialinyour.coffee',
  androidWaitlist: '#get',
  contact: '#get',
  changelog: '#get',
  privacy: '#get',
  terms: '#get',
} as const

export const nav = [
  { label: 'FEATURES', href: '#features' },
  { label: 'AI', href: '#ai' },
  { label: 'SHARING', href: '#sharing' },
  { label: 'PRICING', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export const hero = {
  eyebrow: 'COFFEE RECIPES · BREW LOG · BEANS · GEAR',
  heading: 'Every cup you dialed in, written down.',
  lede: 'Dialed keeps your recipes, beans, gear and every brew you log in one place: dose, grind, water, time and how it actually tasted. Espresso or pour over, the next cup starts from what already worked.',
  fine: ['Recipes, logging and gear are free, forever.', 'Photos and cloud sync from $19.99 a year.'],
  images: {
    front: { src: appRecipes, alt: 'Recipe list in Dialed' },
    back: { src: appLog, alt: 'Logging a brew in Dialed' },
  },
}

export const methods = ['ESPRESSO', 'POUR OVER', 'AEROPRESS', 'CHEMEX', 'FRENCH PRESS']

/** Which supporting element sits under a feature row's copy. */
export type FeatureExtra = 'facets' | 'suggest' | 'maintenance' | null

export type Feature = {
  eyebrow: string
  heading: string
  body: string
  image: { src: string; alt: string }
  /** Which side the screenshot sits on at the desktop breakpoint. */
  imageSide: 'left' | 'right'
  extra: FeatureExtra
}

export const features: Feature[] = [
  {
    eyebrow: 'RECIPES',
    heading: 'A recipe holds every variable, not just the ratio.',
    body: 'Dose and yield, grinder and clicks, filter, water build, TDS, temperature, time. Tasting notes and the last few brews sit right underneath, so you can see what you changed and whether it helped.',
    image: { src: appDetail, alt: 'Recipe detail screen' },
    imageSide: 'right',
    extra: 'facets',
  },
  {
    eyebrow: 'LOGGING',
    heading: 'Log a brew before the cup cools.',
    body: "Method, beans, dose, yield. Tap a ratio and the water figure follows your dose. Everything else (grinder, filter, water, temperature) hides behind one line until the day you're actually chasing something.",
    image: { src: appLog, alt: 'Log a brew screen' },
    imageSide: 'left',
    extra: 'suggest',
  },
  {
    eyebrow: 'BEANS',
    heading: 'The shelf, with roast dates you can trust.',
    body: 'Roaster, origin, process, roast level, your rating and how much of the bag is left. Days off roast are counted for you, so a flat cup usually explains itself. Photograph the bag and Dialed reads the label — roaster, origin, process, tasting notes — instead of you typing it.',
    image: { src: appBeans, alt: 'Beans shelf screen' },
    imageSide: 'right',
    extra: null,
  },
  {
    eyebrow: 'GEAR & UPKEEP',
    heading: 'It tells you when the machine is due.',
    body: 'Backflush, descale, burr clean, filter cartridge. Set an interval once and Dialed nags you on schedule. Each piece of gear also shows how many of your recipes depend on it, which is a quick answer to whether it earns its counter space.',
    image: { src: appGear, alt: 'Gear and maintenance screen' },
    imageSide: 'left',
    extra: 'maintenance',
  },
]

export const recipeFacets = [
  { label: 'GEAR', value: 'Grinder, brewer, basket' },
  { label: 'WATER', value: 'Build and TDS in ppm' },
  { label: 'TASTING', value: 'Flavour tags and notes' },
  { label: 'HISTORY', value: 'Recent brews per recipe' },
]

export const suggestCard = {
  label: '✦ SUGGEST A RECIPE',
  pill: 'DIALED+',
  body: 'New bag, no idea where to start? Dialed reads the roast level, process and origin, then fills the form with a starting point for that method, and tells you why.',
}

export const maintenanceStatus = {
  text: '2 maintenance tasks due',
  link: 'GEAR ›',
}

export const ai = {
  eyebrow: '✦ DIALED+ AI',
  heading: 'Help with the part that takes six cups.',
  lede: 'Six AI features, all behind Dialed+. Every one of them reads your actual bean, gear and recent brews, so a suggestion comes back as a setting on your grinder rather than generic advice. The free app makes no API calls at all.',
}

/*
 * Six AI features exist; only three are described here. The other three are
 * unnamed on purpose — do not backfill them without a content decision.
 */
export const aiCards = [
  {
    eyebrow: '✦ GENERATE',
    heading: 'A starting recipe for a new bag',
    body: 'Generate in the recipe editor, or suggest straight into the Log form. It reads the method, roast level, days off roast and tasting notes, then fills in dose, ratio, temperature, time and grind, with a rationale card and one adjustment rule to try next.',
    footer: { kind: 'grind' as const, primary: 'med-fine · 24 clicks', secondary: 'Comandante C40 · 400–600 µm' },
  },
  {
    eyebrow: '✦ DIAL IN',
    heading: "The feedback loop it's named for",
    body: 'Log a cup, get one change to make. Bitter reads as over-extracted and goes coarser, shorter, cooler. Ask AI to dial this in looks at your last three brews and returns a single adjustment with its expected effect. A good cup gets left alone.',
    footer: {
      kind: 'dialing' as const,
      label: '✦ DIALING IN',
      value: 'grind 12.4 → 12.1',
      note: 'The basic version of this one is free.',
    },
  },
  {
    eyebrow: '✦ SHOT PROFILES',
    heading: 'A pressure profile for your machine',
    body: "Tick a box while generating and Dialed also builds a shot profile: phases, pump mode, targets and exit conditions. One plan, translated into each machine's own format. Export it, copy the JSON, or save it to the machine.",
    footer: { kind: 'chips' as const, chips: ['GaggiMate', 'Gaggiuino', 'Decent DE1', 'Meticulous'] },
  },
]

export const sharing = {
  eyebrow: 'SHARING',
  heading: "Hand a recipe over in the format they'll use.",
  lede: 'Same recipe, three ways out of the app. Nothing to sign up for on the other end.',
  formats: [
    {
      title: 'Social card',
      body: 'Square image with the cup, the beans and the numbers. 1080 × 1080, saved to Photos.',
    },
    {
      title: 'Recipe card',
      body: 'Printable card with the full parameter table. Tape it to the cupboard door.',
    },
    {
      title: 'Plain text',
      body: 'Monospaced table that survives any chat window. Copy, paste, done.',
    },
  ],
  card: {
    brand: 'DIALED',
    method: 'V60 · POUR OVER',
    name: 'Kenya V60',
    origin: 'Kiamugumo AA · Kenya — Kirinyaga',
    params: [
      { label: 'Dose', value: '15 g' },
      { label: 'Water', value: '250 g' },
      { label: 'Ratio', value: '1:16.7' },
      { label: 'Temp', value: '96 °C' },
      { label: 'Grind', value: '24 clicks' },
      { label: 'Time', value: '2:45' },
    ],
    url: 'dialed.app/r/kenya-v60',
  },
  metrics: [
    { value: '21', label: 'day streak' },
    { value: '12', label: 'brews this week' },
    { value: '4', label: 'bags open' },
  ],
  caption: 'Activity keeps the count: what you brewed, when, and the note you left about it.',
}

export const pricing = {
  eyebrow: 'PRICING',
  heading: 'Free where it counts.',
  lede: 'Recipes, logging, beans, gear and sharing cost nothing. Membership buys three things: the AI features, photos and cloud sync.',
  free: {
    label: 'FREE',
    price: '$0',
    per: 'forever',
    blurb: 'The whole brewing side of the app, with no cap on anything.',
    perks: [
      'Unlimited recipes and brew logs',
      'Bean shelf with roast-date tracking',
      'Gear list and maintenance reminders',
      'Activity, streaks and history',
      'Heuristic dial-in advice after every brew',
      'Sharing as card, image or text',
    ],
    cta: 'Download Dialed',
  },
  plus: {
    label: 'DIALED+',
    perks: [
      'Everything in Free',
      'Six AI features, including recipe generation and AI dial-in',
      'Machine shot profiles for GaggiMate, Gaggiuino, Decent and Meticulous',
      'Photos on bags, cups and share cards',
      'Identify beans from a photo of the label',
      'Cloud backup of every recipe and brew',
      'Sync across your iPhone and iPad',
    ],
    cta: 'Start 3-day free trial',
  },
}

export type Billing = 'annual' | 'monthly'

export const billingPlans: Record<Billing, {
  label: string
  price: string
  per: string
  badge: string
  blurb: string
  fine: string
}> = {
  annual: {
    label: 'Annual',
    price: '$19.99',
    per: 'per year',
    badge: '2 MONTHS FREE',
    blurb: 'Works out to $1.67 a month, billed once a year.',
    fine: '$19.99/year',
  },
  monthly: {
    label: 'Monthly',
    price: '$2.49',
    per: 'per month',
    badge: 'MOST FLEXIBLE',
    blurb: 'Month to month, cancel whenever you like.',
    fine: '$2.49/month',
  },
}

export const faqs = [
  {
    q: 'Do I need an account to use it?',
    a: 'No. Everything works on the device out of the box, stored locally. An account only comes into it if you want Dialed+ cloud backup and sync.',
  },
  {
    q: 'What exactly does Dialed+ unlock?',
    a: 'Three things. The six AI features (recipe generation, AI dial-in, machine shot profiles and more), photos on bags, cups and share cards, including identifying beans from a photo of the label, and cloud backup with sync across your devices. Recipes, logging, beans, gear, activity and sharing are free and uncapped.',
  },
  {
    q: 'Which brew methods are covered?',
    a: 'Espresso, pour over, AeroPress, Chemex and French press. Espresso recipes track yield and shot time; filter methods track water in and total brew time, with ratio presets for each.',
  },
  {
    q: 'How does the recipe suggestion work?',
    a: 'It takes the roast level, process and origin of the bag you selected plus the method you are brewing, and fills the form with a dose, ratio, temperature, time and grind to start from. It is a starting point, not a verdict, so you adjust from the first cup.',
  },
  {
    q: 'Can I get my recipes out of the app?',
    a: 'Yes. Any recipe exports as a printable card, a square image or a plain-text table you can paste anywhere. Nothing is locked in.',
  },
  {
    q: 'Is there an Android version?',
    a: 'Not yet. iPhone first; Android is next, and the waitlist on this page is where it gets announced.',
  },
]

export const closing = {
  heading: 'Stop rebuilding the same recipe from memory.',
  lede: 'Dialed is a one-tap log and a permanent record of what worked. Free to start, no account needed.',
  primary: 'Download for iPhone',
  secondary: 'Android waitlist',
  fine: 'iOS 17 OR LATER · 24 MB',
}

export const footer = {
  description: ['Recipes, beans and brews for people', 'who keep changing one variable.'],
  columns: [
    {
      heading: 'APP',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'AI features', href: '#ai' },
        { label: 'Sharing', href: '#sharing' },
      ],
    },
    {
      heading: 'SUPPORT',
      links: [
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: links.contact },
        { label: 'Changelog', href: links.changelog },
      ],
    },
    {
      heading: 'LEGAL',
      links: [
        { label: 'Privacy', href: links.privacy },
        { label: 'Terms', href: links.terms },
      ],
    },
  ],
  copyright: '© 2026 DIALED',
}
