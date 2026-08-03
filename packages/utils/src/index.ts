import type { Medicine } from "@medicycle/types";

/**
 * Formats a number as a currency string (USD)
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

/**
 * Calculate distance number for filtering
 */
export const getMockDistanceValue = (id: string): number => {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Number(((Math.abs(hash) % 180) / 10 + 0.8).toFixed(1));
};

export const getMockDistance = (id: string): string => {
  return `${getMockDistanceValue(id)} km away`;
};

/**
 * Format ISO date to human readable
 */
export const formatDate = (isoDate: string): string => {
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(isoDate));
  } catch {
    return isoDate;
  }
};

/**
 * Calculate days remaining until expiry
 */
export const getDaysUntilExpiry = (expiryDate: string): number => {
  const diff = new Date(expiryDate).getTime() - new Date().getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
};

/**
 * Comprehensive Mock Medicines for the platform
 */
export const MOCK_MEDICINES: Medicine[] = [
  {
    id: "med-1",
    name: "Amoxicillin & Clavulanate Potassium",
    manufacturer: "Sandoz Pharmaceuticals",
    expiryDate: "2026-11-15",
    price: 18.50,
    discountPercentage: 45,
    sellerId: "seller-101",
    sellerName: "St. Jude Metro Pharmacy",
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    description: "500mg/125mg film-coated tablets in unopened blister packs (100 count). Stored in temperature-controlled room (20-25°C). Full Certificate of Analysis available.",
    stock: 45,
    requiresPrescription: true,
    category: "Antibiotics",
    createdAt: "2026-06-01",
  },
  {
    id: "med-2",
    name: "Lipitor (Atorvastatin Calcium)",
    manufacturer: "Pfizer Inc.",
    expiryDate: "2026-09-30",
    price: 32.00,
    discountPercentage: 50,
    sellerId: "seller-102",
    sellerName: "Apex Health Regional Center",
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80",
    description: "20mg tablets (90 count bottle). Sealed manufacturer tamper-evident cap. Hospital pharmacy overstock.",
    stock: 120,
    requiresPrescription: true,
    category: "Cardiovascular",
    createdAt: "2026-06-10",
  },
  {
    id: "med-3",
    name: "Metformin Hydrochloride ER",
    manufacturer: "Teva Pharmaceuticals",
    expiryDate: "2027-01-20",
    price: 14.20,
    discountPercentage: 35,
    sellerId: "seller-103",
    sellerName: "CareFirst Clinical Supply",
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80",
    description: "750mg Extended-Release tablets (100 count). Clean batch with validated stability testing.",
    stock: 80,
    requiresPrescription: true,
    category: "Diabetes",
    createdAt: "2026-06-15",
  },
  {
    id: "med-4",
    name: "Lantus SoloStar (Insulin Glargine)",
    manufacturer: "Sanofi-Aventis",
    expiryDate: "2026-10-15",
    price: 68.00,
    discountPercentage: 60,
    sellerId: "seller-101",
    sellerName: "St. Jude Metro Pharmacy",
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=600&q=80",
    description: "100 units/mL prefilled pens (5-pack). Maintained continuously in validated cold-chain (2°C - 8°C) with Bluetooth loggers.",
    stock: 25,
    requiresPrescription: true,
    category: "Diabetes",
    createdAt: "2026-06-20",
  },
  {
    id: "med-5",
    name: "Ventolin HFA (Albuterol Sulfate)",
    manufacturer: "GlaxoSmithKline",
    expiryDate: "2026-12-31",
    price: 24.50,
    discountPercentage: 40,
    sellerId: "seller-104",
    sellerName: "Northwest Medical Alliance",
    rating: 5.0,
    imageUrl: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=600&q=80",
    description: "90mcg Inhalation Aerosol (200 actuations). Factory sealed foil wrap with dose counter.",
    stock: 60,
    requiresPrescription: true,
    category: "Respiratory",
    createdAt: "2026-06-22",
  },
  {
    id: "med-6",
    name: "Januvia (Sitagliptin)",
    manufacturer: "Merck & Co.",
    expiryDate: "2026-08-25",
    price: 45.00,
    discountPercentage: 55,
    sellerId: "seller-102",
    sellerName: "Apex Health Regional Center",
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=600&q=80",
    description: "100mg tablets (30 count). Near-expiry hospital reserve priced to clear immediately.",
    stock: 35,
    requiresPrescription: true,
    category: "Diabetes",
    createdAt: "2026-06-25",
  },
  {
    id: "med-7",
    name: "Azithromycin (Zithromax)",
    manufacturer: "Pfizer Inc.",
    expiryDate: "2027-03-10",
    price: 16.00,
    discountPercentage: 30,
    sellerId: "seller-103",
    sellerName: "CareFirst Clinical Supply",
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    description: "250mg Z-Pak (6 tablets). Perfect condition surplus direct from licensed hospital distributor.",
    stock: 95,
    requiresPrescription: true,
    category: "Antibiotics",
    createdAt: "2026-06-28",
  },
  {
    id: "med-8",
    name: "Eliquis (Apixaban)",
    manufacturer: "Bristol Myers Squibb",
    expiryDate: "2026-11-30",
    price: 54.00,
    discountPercentage: 50,
    sellerId: "seller-104",
    sellerName: "Northwest Medical Alliance",
    rating: 5.0,
    imageUrl: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80",
    description: "5mg film-coated tablets (60 count). Tamper-evident seal intact. Cold room stored.",
    stock: 40,
    requiresPrescription: true,
    category: "Cardiovascular",
    createdAt: "2026-07-01",
  },
];
