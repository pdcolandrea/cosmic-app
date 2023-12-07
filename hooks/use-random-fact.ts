import facts from '../assets/facts.json';
import { markFactAsSeen } from '../lib/storage';

function getRandomFact(dayOfMonth: number) {
  // Use the day of the month to seed the random number generator
  const seed = dayOfMonth;
  const randomIndex = Math.floor((Math.sin(seed) + 1) * 1000) % facts.random.length;

  return facts.random[randomIndex];
}

export const useDailyFact = () => {
  const today = new Date();
  const factOfTheDay = getRandomFact(today.getDate());

  markFactAsSeen(factOfTheDay.id);

  return {
    fact: factOfTheDay.title,
    hasSeen: false,
  };
};
