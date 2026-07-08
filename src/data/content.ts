import type { Testimonial, ProductCategory, Stat, Feature } from "@/types";

export const heroContent = {
  badge: "Trusted by 5,000+ UK Catering Businesses",
  headline: "UK's Trusted Catering &",
  headlineAccent: "Food Supply Partner",
  subheadline:
    "Bulk food supplies, frozen products, packaging, sauces, bakery items & restaurant essentials delivered fast across the UK.",
  primaryCta: "Get Wholesale Prices",
  secondaryCta: "Request Product Catalog",
  whatsappCta: "WhatsApp Us",
  trustBadges: [
    { label: "Fast Delivery", icon: "truck" },
    { label: "Bulk Pricing", icon: "tag" },
    { label: "Best Quality", icon: "award" },
    { label: "Restaurant Supplier", icon: "chef" },
    { label: "1000+ Products", icon: "check" },
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
  solutionHeadline: "Why Restaurants Choose Cater Choice",
  solutions: [
    {
      icon: "check-circle",
      title: "Competitive Wholesale Pricing",
      description:
        "Volume discounts from day one. The more you buy, the more you save. Transparent, honest pricing every time.",
    },
    {
      icon: "check-circle",
      title: "Huge Range of Catering Products",
      description:
        "10,000+ products — from frozen chicken to packaging, sauces to bakery items. Everything in one place.",
    },
    {
      icon: "check-circle",
      title: "Fast UK-Wide Delivery",
      description:
        "Order before 2pm for next day delivery across mainland UK. Tracked and reliable, every time.",
    },
    {
      icon: "check-circle",
      title: "Consistent Stock Availability",
      description:
        "Real-time inventory management means no nasty surprises. If stock is low, we tell you in advance.",
    },
    {
      icon: "check-circle",
      title: "Trusted by Restaurants & Food Businesses",
      description:
        "5,000+ UK catering businesses rely on us. From independent restaurants to hotel chains.",
    },
    {
      icon: "check-circle",
      title: "One-Stop Supply Solution",
      description:
        "One supplier, one account manager, one invoice. Stop juggling 5 different reps every week.",
    },
  ],
};

export const categories: ProductCategory[] = [
  {
    id: 1,
    name: "Frozen Chicken",
    description: "Whole birds, portions, fillets, wings and marinated chicken products",
    icon: "snowflake",
    itemCount: "200+",
    color: "bg-blue-50 border-blue-200",
  },
  {
    id: 2,
    name: "Sauces & Condiments",
    description: "Ketchup, mayo, hot sauce, marinades, dressings and cooking sauces",
    icon: "flask",
    itemCount: "400+",
    color: "bg-green-50 border-green-200",
  },
  {
    id: 3,
    name: "Burger Supplies",
    description: "Patties, buns, cheese slices, lettuce, gherkins and burger boxes",
    icon: "sandwich",
    itemCount: "150+",
    color: "bg-amber-50 border-amber-200",
  },
  {
    id: 4,
    name: "Packaging",
    description: "Cups, containers, takeaway boxes, bags and food-safe packaging",
    icon: "package",
    itemCount: "2,500+",
    color: "bg-green-50 border-green-200",
  },
  {
    id: 5,
    name: "Oils",
    description: "Vegetable, sunflower, rapeseed, olive and frying oils in bulk",
    icon: "droplets",
    itemCount: "80+",
    color: "bg-yellow-50 border-yellow-200",
  },
  {
    id: 6,
    name: "Bakery Products",
    description: "Flour, bread, rolls, pastries, cakes and bakery ingredients",
    icon: "wheat",
    itemCount: "350+",
    color: "bg-orange-50 border-orange-200",
  },
  {
    id: 7,
    name: "Beverages",
    description: "Coffee, tea, soft drinks, juices, syrups and hot chocolate",
    icon: "coffee",
    itemCount: "600+",
    color: "bg-cyan-50 border-cyan-200",
  },
  {
    id: 8,
    name: "Cleaning & Hygiene",
    description: "Detergents, sanitisers, mops, cloths and janitorial supplies",
    icon: "sparkles",
    itemCount: "1,200+",
    color: "bg-purple-50 border-purple-200",
  },
  {
    id: 9,
    name: "Dairy & Cheese",
    description: "Butter, milk, cream, cheddar, mozzarella and dairy essentials",
    icon: "milk",
    itemCount: "300+",
    color: "bg-lime-50 border-lime-200",
  },
  {
    id: 10,
    name: "Pizza Supplies",
    description: "Pizza bases, mozzarella, tomato sauce, toppings and pizza boxes",
    icon: "pizza",
    itemCount: "200+",
    color: "bg-teal-50 border-teal-200",
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

export const finalCtaContent = {
  headline: "Ready to Source Better Catering Supplies?",
  subheadline:
    "Get competitive wholesale pricing for your restaurant, cafe, catering business, or cloud kitchen today.",
  primaryCta: "Call Now",
  secondaryCta: "WhatsApp Us",
  tertiaryCta: "Request a Quote",
};
