export const COMPANY = {
  name: "Cater Choice",
  tagline: "The UK's #1 Wholesale Catering Supplier",
  phone: "+44 7700 900000",
  whatsapp: "447700900000",
  email: "trade@caterchoice.co.uk",
  address: "Birmingham, West Midlands, UK",
  catalogUrl: "/catalog/cater-choice-catalog-2024.pdf",
} as const;

export const WHATSAPP_URL = `https://wa.me/${COMPANY.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20wholesale%20catering%20supplies.%20Please%20send%20me%20more%20information.`;

export const GA_EVENTS = {
  QUOTE_REQUEST: "quote_request",
  CATALOG_DOWNLOAD: "catalog_download",
  WHATSAPP_CLICK: "whatsapp_click",
  PHONE_CLICK: "phone_click",
  FORM_SUBMIT: "form_submit",
} as const;

export const BUSINESS_TYPES = [
  "Restaurant",
  "Hotel",
  "Café / Coffee Shop",
  "Pub / Bar",
  "Catering Company",
  "School / University",
  "Hospital / Healthcare",
  "Corporate Canteen",
  "Takeaway",
  "Other",
] as const;

export const MONTHLY_SPEND_OPTIONS = [
  "Under £500/month",
  "£500 – £1,000/month",
  "£1,000 – £2,500/month",
  "£2,500 – £5,000/month",
  "£5,000+/month",
] as const;
