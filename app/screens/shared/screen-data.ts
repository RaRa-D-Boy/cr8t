export const discoverCategories = [
  {
    id: "woodwork",
    label: "Woodwork",
    description: "Cabinets, shelving, fitted storage, and handcrafted furniture pieces.",
  },
  {
    id: "cabinetry",
    label: "Cabinetry",
    description: "Custom cabinets, kitchens, wardrobes, and built-in storage systems.",
  },
  {
    id: "wardrobes",
    label: "Wardrobes",
    description: "Walk-in closets, wardrobe fitting, and custom closet builds.",
  },
  {
    id: "fine-art",
    label: "Fine Art",
    description: "Original paintings, collector commissions, and gallery-ready works.",
  },
  {
    id: "mixed-media",
    label: "Mixed Media",
    description: "Layered textures, portrait pieces, and expressive handcrafted art.",
  },
  {
    id: "interior-styling",
    label: "Interior Styling",
    description: "Room planning, moodboards, sourcing, and creative space refreshes.",
  },
  {
    id: "event-decor",
    label: "Event Decor",
    description: "Decor styling, installations, and visual setup for special events.",
  },
  {
    id: "upholstery",
    label: "Upholstery",
    description: "Soft furnishing updates, seating refreshes, and textile finishing.",
  },
  {
    id: "fashion-design",
    label: "Fashion Design",
    description: "Custom outfits, editorial looks, and design-led garment production.",
  },
  {
    id: "tailoring",
    label: "Tailoring",
    description: "Made-to-measure fittings, alterations, and structured garment work.",
  },
  {
    id: "textile-work",
    label: "Textile Work",
    description: "Fabric construction, embellishment, and handcrafted surface detail.",
  },
  {
    id: "beadwork",
    label: "Beadwork",
    description: "Accessory accents, art embellishments, and handmade beaded finishes.",
  },
  {
    id: "leatherwork",
    label: "Leatherwork",
    description: "Handcrafted bags, belts, wallets, and stitched leather accessories.",
  },
  {
    id: "pottery",
    label: "Pottery",
    description: "Ceramic vessels, tableware, sculpted clay forms, and studio pottery.",
  },
  {
    id: "jewelry-design",
    label: "Jewelry Design",
    description: "Custom rings, statement pieces, handcrafted metalwork, and wearable art.",
  },
  {
    id: "metal-fabrication",
    label: "Metal Fabrication",
    description: "Decor frames, welded pieces, functional fittings, and custom metal details.",
  },
  {
    id: "weaving",
    label: "Weaving",
    description: "Handwoven pieces, wall hangings, textiles, and crafted fiber surfaces.",
  },
  {
    id: "embroidery",
    label: "Embroidery",
    description: "Detailed stitched finishes, personalized monograms, and textile embellishment.",
  },
  {
    id: "shoemaking",
    label: "Shoemaking",
    description: "Custom footwear, handmade sandals, leather shoe builds, and repairs.",
  },
  {
    id: "carving",
    label: "Carving",
    description: "Decorative wood carving, sculpted forms, and handcrafted relief detailing.",
  },
  {
    id: "glasswork",
    label: "Glasswork",
    description: "Stained glass, decorative glass objects, and handmade fused glass pieces.",
  },
  {
    id: "printmaking",
    label: "Printmaking",
    description: "Art prints, lino cuts, screen prints, and handcrafted printed editions.",
  },
] as const;

export const categoryPills = discoverCategories.slice(0, 4).map((category) => category.label);

export function getDiscoverCategoryById(id: string) {
  return discoverCategories.find((category) => category.id === id);
}

export const inboxItems = [
  {
    creator: "Clara Woodworks",
    update: "Shared a revised wardrobe quote and asked for final measurements.",
    time: "2m",
    href: "/app/creator/clara-woodworks",
  },
  {
    creator: "Studio Forma",
    update: "Sent a moodboard for your bedroom refresh project.",
    time: "16m",
    href: "/app/creator/studio-forma",
  },
  {
    creator: "Fold Studio",
    update: "Confirmed your fitting slot for the weekend collection preview.",
    time: "1h",
    href: "/app/creator/fold-studio",
  },
  {
    creator: "Dune Studio",
    update: "Sent a preview of the commissioned canvas concept for your review.",
    time: "2h",
    href: "/app/creator/dune-studio",
  },
  {
    creator: "Palette Thread",
    update: "Asked which color direction you prefer for the portrait revision.",
    time: "3h",
    href: "/app/creator/palette-thread",
  },
  {
    creator: "Studio Forma",
    update: "Uploaded furniture sourcing options and a revised room layout.",
    time: "5h",
    href: "/app/creator/studio-forma",
  },
  {
    creator: "Clara Woodworks",
    update: "Requested approval to begin material sourcing for your cabinet build.",
    time: "7h",
    href: "/app/creator/clara-woodworks",
  },
  {
    creator: "Fold Studio",
    update: "Sent your updated measurement chart and next fitting reminder.",
    time: "9h",
    href: "/app/creator/fold-studio",
  },
  {
    creator: "Dune Studio",
    update: "Shared final framing recommendations for the artwork delivery.",
    time: "12h",
    href: "/app/creator/dune-studio",
  },
  {
    creator: "Palette Thread",
    update: "Confirmed the textured finish and estimated delivery timeline.",
    time: "1d",
    href: "/app/creator/palette-thread",
  },
  {
    creator: "Studio Forma",
    update: "Followed up on your design brief and preferred finish selections.",
    time: "1d",
    href: "/app/creator/studio-forma",
  },
  {
    creator: "Clara Woodworks",
    update: "Sent installation photos from a similar wardrobe project for reference.",
    time: "2d",
    href: "/app/creator/clara-woodworks",
  },
  {
    creator: "Fold Studio",
    update: "Checked in to confirm your event date before final garment production.",
    time: "2d",
    href: "/app/creator/fold-studio",
  },
];

export const profileStats = [
  { label: "Saved creators", value: "24" },
  { label: "Live bookings", value: "08" },
  { label: "Response rate", value: "97%" },
];
