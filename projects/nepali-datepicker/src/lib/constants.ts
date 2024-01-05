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

function listOfYears(): number[] {
  let arr = [];
  for (let i = 1988; i < 2089; i++) {
    arr.push(i);
  }
  return arr;
}

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
