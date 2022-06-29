export const numberFormatter = (
  num: number,
  locale: string = 'en',
  options: Intl.NumberFormatOptions = {
    notation: 'compact',
    minimumFractionDigits: 2,
  },
): string => {
  if (!num) {
    return num.toString();
  }

  const formatter = Intl.NumberFormat(locale, options);

  return formatter.format(num);
};

export const dateFormatter = (
  date: Date | string,
  locale: string = 'en',
  options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: '2-digit',
  },
) => {
  return new Date(date).toLocaleString(locale, options);
};
