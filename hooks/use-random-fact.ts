import facts from '../assets/facts.json';

function getRandomFact(dayOfMonth: number): string {
  // Use the day of the month to seed the random number generator
  let seed = dayOfMonth;
  let randomIndex = Math.floor((Math.sin(seed) + 1) * 1000) % facts.random.length;

  return facts[randomIndex];
}

export const useDailyFact = () => {
  const today = new Date();
  const factOfTheDay = getRandomFact(today.getDate());
  return factOfTheDay;
};
