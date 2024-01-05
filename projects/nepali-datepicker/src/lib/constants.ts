import { LanguagePreference } from './language-preference';

const monthCorrespondence: { [key: number]: LanguagePreference } = {
  1: { en: 'Baisakh', np: 'बैशाख' },
  2: { en: 'Jestha', np: 'जेठ' },
  3: { en: 'Asadh', np: 'आषाढ' },
  4: { en: 'Shrawan', np: 'श्रावण' },
  5: { en: 'Bhadra', np: 'भदौ' },
  6: { en: 'Ashwin', np: 'असोज' },
  7: { en: 'Kartik', np: 'कार्तिक' },
  8: { en: 'Mangshir', np: 'मंसिर' },
  9: { en: 'Poush', np: 'पुष' },
  10: { en: 'Magh', np: 'माघ' },
  11: { en: 'Falgun', np: 'फागुन' },
  12: { en: 'Chaitra', np: 'चैत्र' },
};
const weekCorrespondence: { [key: number]: LanguagePreference } = {
  0: { en: 'Sunday', np: 'आइतबार' },
  1: { en: 'Monday', np: 'सोमबार' },
  2: { en: 'Tuesday', np: 'मंगलबार' },
  3: { en: 'Wednesday', np: 'बुधबार' },
  4: { en: 'Thursday', np: 'बिहीबार' },
  5: { en: 'Friday', np: 'शुक्रबार' },
  6: { en: 'Saturday', np: 'शनिबार' },
};

const listOfYears = [
  1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002,
  2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015,
  2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028,
  2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041,
  2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054,
  2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067,
  2068, 2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080,
  2081, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090,
];

const listOfMonths = [
  { name: 'Baisakh', value: '1' },
  { name: 'Jestha', value: '2' },
  { name: 'Asadh', value: '3' },
  { name: 'Shrawan', value: '4' },
  { name: 'Bhadra', value: '5' },
  { name: 'Ashwin', value: '6' },
  { name: 'Kartik', value: '7' },
  { name: 'Mangshir', value: '8' },
  { name: 'Poush', value: '9' },
  { name: 'Magh', value: '10' },
  { name: 'Falgun', value: '11' },
  { name: 'Chaitra', value: '12' },
];

export { monthCorrespondence, weekCorrespondence, listOfYears, listOfMonths };
