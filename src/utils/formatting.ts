
/**
 * Format a number with thousands separators using Turkish locale
 */
export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('tr-TR').format(num);
};

/**
 * Format a date string to a localized format
 */
export const getFormattedDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'short' }).format(date);
};
