import type { Testimonial, ProductCategory, Stat, Feature, CoverageRegion } from "@/types";

export const heroContent = {
  badge: "Trusted by 5,000+ UK Catering Businesses",
  headline: "Wholesale Catering Supplies",
  headlineAccent: "Delivered Next Day",
  subheadline:
    "Trade prices on 10,000+ products. No minimum order. Dedicated account manager. UK-wide delivery.",
  primaryCta: "Get a Free Trade Quote",
  secondaryCta: "Download Product Catalog",
  trustBadges: [
    { label: "No Minimum Order", icon: "check" },
    { label: "Next Day Delivery", icon: "truck" },
    { label: "Trade Prices", icon: "tag" },
    { label: "Dedicated Account Manager", icon: "user" },
  ],
};

export const problemSolutionContent = {
  problemHeadline: "Sound familiar?",
  problems: [
    {
      icon: "x-circle",
      title: "Unreliable Suppliers",
      description:
        "Stock outs at the worst times, delayed deliveries, and no communication when things go wrong.",
    },
    {
      icon: "x-circle",
      title: "Overpriced & No Trade Discounts",
      description:
        "Paying retail prices on bulk orders with no loyalty rewards or volume-based pricing.",
    },
    {
      icon: "x-circle",
      title: "High Minimum Orders",
      description:
        "Forced to order more than you need, tying up cash flow and wasting storage space.",
    },
    {
      icon: "x-circle",
      title: "Poor Product Range",
      description:
        "Having to deal with 5+ suppliers to get everything you need for your kitchen.",
    },
  ],
  solutionHeadline: "Cater Choice Solves All of This",
  solutions: [
    {
      icon: "check-circle",
      title: "Reliable Stock, Always",
      description:
        "10,000+ products in stock. Real-time inventory. Proactive communication if anything changes.",
    },
    {
      icon: "check-circle",
      title: "Genuine Trade Prices",
      description:
        "Volume discounts from day one. The more you buy, the more you save. Transparent pricing.",
    },
    {
      icon: "check-circle",
      title: "No Minimum Order",
      description:
        "Order exactly what you need, when you need it. No forced bulk buying, no wasted stock.",
    },
    {
      icon: "check-circle",
      title: "Everything Under One Roof",
      description:
        "From disposables to equipment, cleaning to dry goods — one supplier, one invoice.",
    },
  ],
};

export const categories: ProductCategory[] = [
  {
    id: 1,
    name: "Disposables & Packaging",
    description: "Cups, containers, cutlery, bags, and packaging solutions",
    icon: "package",
    itemCount: "2,500+",
    color: "bg-green-50 border-green-200",
  },
  {
    id: 2,
    name: "Cleaning & Hygiene",
    description: "Detergents, sanitisers, mops, cloths and janitorial supplies",
    icon: "sparkles",
    itemCount: "1,200+",
    color: "bg-blue-50 border-blue-200",
  },
  {
    id: 3,
    name: "Kitchen Equipment",
    description: "Small appliances, utensils, cookware and food prep tools",
    icon: "chef-hat",
    itemCount: "800+",
    color: "bg-orange-50 border-orange-200",
  },
  {
    id: 4,
    name: "Dry & Ambient Goods",
    description: "Flour, sugar, oils, condiments, spices and pantry essentials",
    icon: "wheat",
    itemCount: "1,800+",
    color: "bg-yellow-50 border-yellow-200",
  },
  {
    id: 5,
    name: "Beverages",
    description: "Coffee, tea, soft drinks, juices and hot chocolate",
    icon: "coffee",
    itemCount: "600+",
    color: "bg-amber-50 border-amber-200",
  },
  {
    id: 6,
    name: "Paper & Catering Consumables",
    description: "Napkins, greaseproof, foil, cling film and roll products",
    icon: "scroll",
    itemCount: "400+",
    color: "bg-purple-50 border-purple-200",
  },
  {
    id: 7,
    name: "PPE & Safety",
    description: "Gloves, aprons, hairnets, face masks and safety equipment",
    icon: "shield",
    itemCount: "300+",
    color: "bg-red-50 border-red-200",
  },
  {
    id: 8,
    name: "Chilled & Frozen",
    description: "Dairy, meats, ready-to-cook and frozen convenience products",
    icon: "thermometer",
    itemCount: "1,400+",
    color: "bg-cyan-50 border-cyan-200",
  },
];

export const stats: Stat[] = [
  { value: "10,000", label: "Products in Stock", suffix: "+" },
  { value: "5,000", label: "Happy Trade Customers", suffix: "+" },
  { value: "15", label: "Years of Experience", suffix: "+" },
  { value: "48", label: "Hour UK Delivery", suffix: "hr" },
];

export const features: Feature[] = [
  {
    icon: "zap",
    title: "Next Day Delivery",
    description:
      "Order before 2pm for next day delivery across mainland UK. Same-day dispatch guaranteed.",
  },
  {
    icon: "tag",
    title: "Genuine Trade Pricing",
    description:
      "Wholesale prices available from your first order. Volume discounts unlock automatically.",
  },
  {
    icon: "user-check",
    title: "Dedicated Account Manager",
    description:
      "Your own account manager who knows your business and helps you find the best products.",
  },
  {
    icon: "refresh-cw",
    title: "Easy Reordering",
    description:
      "Save your favourite orders and reorder with one click. Set up standing orders for regulars.",
  },
  {
    icon: "headphones",
    title: "UK-Based Support",
    description:
      "Phone and WhatsApp support Mon–Fri 8am–6pm. Real people, fast answers.",
  },
  {
    icon: "award",
    title: "Quality Guaranteed",
    description:
      "All products meet UK food safety standards. Trusted brands and own-label options available.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marco Rossi",
    role: "Head Chef & Owner",
    company: "Bella Notte Restaurant",
    location: "Manchester",
    content:
      "Switched to Cater Choice 2 years ago and never looked back. Prices are genuinely better than my previous supplier, and the next-day delivery has never let me down during a busy Friday service.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Thompson",
    role: "Procurement Manager",
    company: "The Grand Hotel",
    location: "Birmingham",
    content:
      "We supply 3 hotels through Cater Choice. Having one account manager who knows all our properties saves us hours every week. The online ordering system is the easiest we've ever used.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ahmed Patel",
    role: "Operations Director",
    company: "City Catering Co.",
    location: "London",
    content:
      "The no minimum order policy was a game changer for us. We can order exactly what each event needs without tying up thousands in stock. Highly recommend to any catering business.",
    rating: 5,
  },
];

export const coverageRegions: CoverageRegion[] = [
  { name: "London & South East", deliveryTime: "Next Day" },
  { name: "Midlands", deliveryTime: "Next Day" },
  { name: "North West", deliveryTime: "Next Day" },
  { name: "Yorkshire & Humber", deliveryTime: "Next Day" },
  { name: "South West", deliveryTime: "1–2 Days" },
  { name: "Scotland", deliveryTime: "1–2 Days" },
  { name: "Wales", deliveryTime: "1–2 Days" },
  { name: "Northern Ireland", deliveryTime: "2–3 Days" },
];

export const finalCtaContent = {
  headline: "Ready to Cut Your Supply Costs?",
  subheadline:
    "Join 5,000+ UK catering businesses already saving with Cater Choice. Get your free trade account today.",
  primaryCta: "Get a Free Quote Now",
  secondaryCta: "Chat on WhatsApp",
};
