export const creatorOverviewStats = [
  { label: "New leads", value: "12", detail: "4 high intent this week" },
  { label: "Booked", value: "5", detail: "2 site visits confirmed" },
  { label: "Projected", value: "$2.4k", detail: "Across open opportunities" },
] as const;

export const creatorLeadPreview = [
  {
    title: "Custom wardrobe for a two-bedroom apartment",
    client: "Ama Residence",
    budget: "$1,400 - $2,200",
    status: "Needs quote",
    image: "/cl2.jpg",
  },
  {
    title: "Restaurant wall mural with brand colors",
    client: "Sage Kitchen",
    budget: "$600 - $900",
    status: "Meeting booked",
    image: "/pt1.jpg",
  },
  {
    title: "Event outfit for a campaign shoot",
    client: "Kora Creative",
    budget: "$250 - $480",
    status: "New brief",
    image: "/fs2.jpg",
  },
] as const;

export const creatorOpportunities = [
  {
    client: "Nhyira Homes",
    category: "Woodwork",
    title: "Built-in storage and wardrobe install",
    budget: "$1,800 - $2,600",
    timeline: "Starts next week",
    summary: "Looking for a clean, warm wardrobe system with site measurement and installation support.",
    urgency: "High fit",
  },
  {
    client: "Kite Studio",
    category: "Interior styling",
    title: "Small studio refresh for a branded content set",
    budget: "$700 - $1,100",
    timeline: "14 day turnaround",
    summary: "Need furniture styling, light decor sourcing, and a moodboard-led room setup.",
    urgency: "Fresh brief",
  },
  {
    client: "Aster Events",
    category: "Fashion design",
    title: "Two custom looks for a launch event",
    budget: "$320 - $540",
    timeline: "Fittings this weekend",
    summary: "Seeking a creator for elegant eventwear with fast revisions and measurement support.",
    urgency: "Fast response",
  },
] as const;

export const creatorInboxItems = [
  {
    client: "Ama Residence",
    message: "Can you share a revised quote with walnut and matte black handles included?",
    time: "9m",
    state: "Awaiting quote",
  },
  {
    client: "Sage Kitchen",
    message: "The team loved your sketch direction. Can we lock a mural start date for Thursday?",
    time: "24m",
    state: "Ready to book",
  },
  {
    client: "Kora Creative",
    message: "We need one more look for the shoot. Are you open to a rush fitting tomorrow morning?",
    time: "1h",
    state: "Rush request",
  },
  {
    client: "Studio Forma",
    message: "Would you like to collaborate on a joint install for a hospitality client in Abuja?",
    time: "3h",
    state: "Collab",
  },
] as const;

export const creatorServicePackages = [
  {
    title: "Signature wardrobe package",
    price: "$1,450+",
    turnaround: "4-5 weeks",
    description: "Measurement, material planning, fabrication, and installation for fitted wardrobes.",
  },
  {
    title: "Room styling concept",
    price: "$320",
    turnaround: "7 days",
    description: "Moodboard, layout guidance, and item sourcing recommendations for a polished space refresh.",
  },
  {
    title: "Custom occasion look",
    price: "$380+",
    turnaround: "10-14 days",
    description: "Made-to-measure outfit design with one fitting session and finishing details included.",
  },
] as const;

export const creatorPortfolioItems = [
  {
    title: "Walnut wardrobe install",
    category: "Woodwork",
    result: "Completed last week",
    image: "/cl1.jpg",
  },
  {
    title: "Editorial look development",
    category: "Fashion",
    result: "Booked from app lead",
    image: "/fs1.jpg",
  },
  {
    title: "Studio apartment styling",
    category: "Interior",
    result: "Client rated 5.0",
    image: "/sf1.jpg",
  },
] as const;

export const creatorProfileStats = [
  { label: "Response rate", value: "96%" },
  { label: "Jobs completed", value: "38" },
  { label: "Average rating", value: "4.9" },
] as const;
