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
 * Mocks a distance calculation based on a static seed and string
 */
export const getMockDistance = (id: string): string => {
  // simple mock hash to generate a consistent distance between 0.5 and 25.0 km
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  const distance = (Math.abs(hash) % 245) / 10 + 0.5;
  return `${distance.toFixed(1)} km away`;
};

/**
 * Calculate distance number for filtering
 */
export const getMockDistanceValue = (id: string): number => {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  return (Math.abs(hash) % 245) / 10 + 0.5;
};

/**
 * Format ISO date to human readable
 */
export const formatDate = (isoDate: string): string => {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(isoDate));
};
