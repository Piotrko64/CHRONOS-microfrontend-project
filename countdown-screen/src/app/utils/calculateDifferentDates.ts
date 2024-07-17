interface ObjectDate {
  end: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function calculateDifferentDates(dateToSubstract: Date): ObjectDate {
  const actualDate = new Date();

  const substractionDate = +new Date(dateToSubstract) - +actualDate;

  const seconds = Math.floor(substractionDate / 1000) % 60;
  const minutes = Math.floor(substractionDate / (1000 * 60)) % 60;
  const hours = Math.floor(substractionDate / (1000 * 60 * 60)) % 24;
  const days = Math.floor(substractionDate / (24 * 60 * 60 * 1000));

  return {
    end: substractionDate <= 0,
    days,
    hours,
    minutes,
    seconds,
  };
}
