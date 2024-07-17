export type TypesDate = 'days' | 'hours' | 'minutes' | 'seconds';

export type ObjectCountdown = Record<TypesDate, number> & { end?: boolean };
