import {
  format as formatUsingFns,
  parseISO,
  isSameYear,
  isSameDay,
  subDays,
  startOfDay,
} from 'date-fns';
import {ptBR} from 'date-fns/locale';

export function formatDate(date) {
  const parsedDate = parseISO(date);

  let format = "d 'de' MMM, kk:mm";

  if (isSameDay(parsedDate, startOfDay(new Date()))) {
    format = "'Hoje', kk:mm";
  }

  if (isSameDay(parsedDate, subDays(startOfDay(new Date()), 1))) {
    format = "'Ontem', kk:mm";
  }

  if (!isSameYear) {
    format = "d 'de' MMM 'de' yy, kk:mm";
  }

  return formatUsingFns(
    parsedDate,
    format,
    {
      locale: ptBR,
    },
    true,
  );
}
