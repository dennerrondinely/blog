import { format, parseISO } from 'date-fns';
import { enUS, ptBR } from 'date-fns/locale';

const locales = {
  en: enUS,
  pt: ptBR,
} as const;

export function formatDate(date: string | Date, locale: keyof typeof locales = 'en'): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, 'MMMM d, yyyy', { locale: locales[locale] });
}
