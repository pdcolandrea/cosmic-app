export const PlanetList = [
  {
    title: 'Mother Earth',
    name: 'Earth',
    image: require('../../assets/planets/Earth2.png'),
    description:
      'Earth is the third planet from the sun and the only known planet to support life. It has a diameter of 12,742 km.',
    bgColor: '#B6F3FF',
    buttonColor: '#1D99B5',
  },
  {
    title: 'Mercury',
    name: 'Mercury',
    image: require('../../assets/planets/Mercury.png'),
    description:
      'Mercury is the closest planet to the sun. It has a diameter of 4,879 km. It seems very hot and dry.',
    bgColor: '#E6D7FF',
    buttonColor: '#795dbb',
  },
  {
    title: 'Venus',
    image: require('../../assets/planets/Venus2.png'),
    description:
      "Venus is the second planet from the sun and is often referred to as the Earth's sister planet.",
    bgColor: '#F6E3C4',
    buttonColor: '#D6711E',
  },
  {
    title: 'Mars',
    name: 'Mars',
    image: require('../../assets/planets/Mars.png'),
    description:
      'Mars is the fourth planet from the sun and the second smallest planet in the solar system.',
    bgColor: '#FFD6D6',
    buttonColor: '#E31949',
  },
  {
    title: 'Jupiter',
    name: 'Jupiter',
    image: require('../../assets/planets/Jupiter.png'),
    description:
      'Jupiter is the fifth planet from the sun and the largest planet in the solar system. It has a',
    bgColor: '#e5a161',
    buttonColor: '#CE7422',
  },
] as const;

export type PlanetType = (typeof PlanetList)[number];
