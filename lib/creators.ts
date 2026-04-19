export type CreatorMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
};

export type CreatorService = {
  name: string;
  fee: string;
  delivery: string;
};

export type CreatorProfile = {
  slug: string;
  name: string;
  handle: string;
  category: string;
  discoveryTags: string[];
  location: string;
  intro: string;
  bio: string;
  accent: string;
  rating: string;
  turnaround: string;
  startingAt: string;
  services: CreatorService[];
  highlights: string[];
  media: CreatorMedia[];
};

export const creators: CreatorProfile[] = [
  {
    slug: "clara-woodworks",
    name: "Clara Woodworks",
    handle: "@clarawoodworks",
    category: "Cabinets, wardrobes, and custom wood interiors",
    discoveryTags: ["woodwork", "cabinetry", "wardrobes", "interior-styling"],
    location: "Accra, Ghana",
    intro: "Handcrafted cabinetry and built-in wardrobe solutions for homes, studios, and retail spaces.",
    bio: "Clara Woodworks designs and fabricates bespoke cabinets, wardrobes, shelving systems, and fitted storage with a focus on warm finishes and clean detailing.",
    accent: "from-[#181818] via-[#2f241c] to-[#715234]",
    rating: "4.9",
    turnaround: "3-5 weeks",
    startingAt: "$450",
    services: [
      { name: "Custom wardrobe build", fee: "$1,450+", delivery: "4-5 weeks" },
      { name: "Kitchen cabinet install", fee: "$2,200+", delivery: "5-6 weeks" },
      { name: "Storage consultation", fee: "$120", delivery: "2 days" },
    ],
    highlights: ["Site measurement visits", "3D concept previews", "Installation support"],
    media: [
      { type: "image", src: "/cl1.jpg", alt: "Built-in wooden cabinet installation by Clara Woodworks" },
      { type: "image", src: "/cl2.jpg", alt: "Wardrobe craftsmanship detail by Clara Woodworks" },
    ],
  },
  {
    slug: "dune-studio",
    name: "Dune Studio",
    handle: "@dunestudio",
    category: "Contemporary fine art",
    discoveryTags: ["fine-art", "murals", "mixed-media"],
    location: "Kumasi, Ghana",
    intro: "A minimalist artist showcasing a single statement piece for collectors and curated spaces.",
    bio: "Dune Studio creates expressive, gallery-style works that center texture, restraint, and mood. The studio accepts commissions for homes, hospitality spaces, and private collectors.",
    accent: "from-[#1d2130] via-[#2b3856] to-[#5e88b7]",
    rating: "4.8",
    turnaround: "7-10 days",
    startingAt: "$180",
    services: [
      { name: "Original canvas piece", fee: "$420", delivery: "7 days" },
      { name: "Commissioned artwork", fee: "$650+", delivery: "2-3 weeks" },
      { name: "Print licensing", fee: "$180", delivery: "3 days" },
    ],
    highlights: ["Signed original works", "Collector framing guidance", "Commission slots available"],
    media: [{ type: "image", src: "/ds1.jpg", alt: "Featured art piece by Dune Studio" }],
  },
  {
    slug: "palette-thread",
    name: "Palette Thread",
    handle: "@palettethread",
    category: "Mixed-media artist",
    discoveryTags: ["mixed-media", "fine-art", "beadwork"],
    location: "Lagos, Nigeria",
    intro: "Bold visual storytelling through layered paint, texture, and expressive portrait work.",
    bio: "Palette Thread develops vibrant mixed-media artwork for editorial styling, collector showcases, and creative brand spaces. Each piece is built around color, movement, and handmade texture.",
    accent: "from-[#271520] via-[#6d214f] to-[#c86f8d]",
    rating: "4.7",
    turnaround: "1-2 weeks",
    startingAt: "$240",
    services: [
      { name: "Portrait artwork", fee: "$390", delivery: "10 days" },
      { name: "Creative wall piece", fee: "$560", delivery: "2 weeks" },
      { name: "Studio styling consult", fee: "$95", delivery: "2 days" },
    ],
    highlights: ["Custom palette direction", "Collector-ready finishing", "Editorial friendly visuals"],
    media: [{ type: "image", src: "/pt1.jpg", alt: "Mixed-media portrait work by Palette Thread" }],
  },
  {
    slug: "studio-forma",
    name: "Studio Forma",
    handle: "@studioforma",
    category: "Interior design and space styling",
    discoveryTags: ["interior-styling", "event-decor", "upholstery"],
    location: "Abuja, Nigeria",
    intro: "Creative interior styling for residential rooms, hospitality spaces, and branded environments.",
    bio: "Studio Forma plans layered interior experiences with furniture curation, lighting direction, color balance, and finishing recommendations for clients who want polished, story-led spaces.",
    accent: "from-[#182223] via-[#304a4b] to-[#83b0a8]",
    rating: "5.0",
    turnaround: "2-4 weeks",
    startingAt: "$320",
    services: [
      { name: "Room refresh concept", fee: "$320", delivery: "1 week" },
      { name: "Interior styling package", fee: "$900+", delivery: "2-4 weeks" },
      { name: "Virtual design consult", fee: "$140", delivery: "2 days" },
    ],
    highlights: ["Moodboard development", "Furniture sourcing", "Layout recommendations"],
    media: [
      { type: "image", src: "/sf1.jpg", alt: "Interior styling showcase by Studio Forma" },
      { type: "image", src: "/sf2.jpg", alt: "Finished room concept by Studio Forma" },
    ],
  },
  {
    slug: "fold-studio",
    name: "Fold Studio",
    handle: "@foldstudio",
    category: "Fashion design and custom garments",
    discoveryTags: ["fashion-design", "tailoring", "textile-work"],
    location: "Tema, Ghana",
    intro: "Tailored fashion pieces for editorials, events, and private clients who want standout looks.",
    bio: "Fold Studio creates fashion-forward silhouettes, made-to-measure pieces, and campaign garments with an eye for structure, fabric movement, and contemporary styling.",
    accent: "from-[#24171f] via-[#5d2c46] to-[#d1799f]",
    rating: "4.9",
    turnaround: "10-14 days",
    startingAt: "$210",
    services: [
      { name: "Custom event outfit", fee: "$380+", delivery: "10-14 days" },
      { name: "Editorial sample look", fee: "$520", delivery: "1 week" },
      { name: "Measurement session", fee: "$60", delivery: "Same day" },
    ],
    highlights: ["Made-to-measure fittings", "Styling direction", "Rush production available"],
    media: [
      { type: "image", src: "/fs1.jpg", alt: "Fashion design showcase by Fold Studio" },
      { type: "image", src: "/fs2.jpg", alt: "Custom garment detail by Fold Studio" },
    ],
  },
];

export function getCreatorBySlug(slug: string) {
  return creators.find((creator) => creator.slug === slug);
}

export function getCreatorsByTags(tags: string[]) {
  if (tags.length === 0) {
    return creators;
  }

  return creators.filter((creator) => tags.some((tag) => creator.discoveryTags.includes(tag)));
}
