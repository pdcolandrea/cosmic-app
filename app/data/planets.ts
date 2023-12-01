export const PlanetList = [
  {
    title: 'Mother Earth',
    name: 'Earth',
    image: require('../../assets/planets/Earth2.png'),
    description:
      'Earth is the third planet from the sun and the only known planet to support life. It has a diameter of 12,742 km.',
    subtitle: "The Blue Planet, Earth's Sister",
    information:
      "Earth, our home planet, is the only known planet to support life, with its unique atmosphere and vast oceans. It's often referred to as the \"Blue Marble\" due to its appearance from space, with blue oceans and swirling white clouds. Earth's diverse ecosystem ranges from the icy poles to the tropical equator, supporting a wide variety of life forms. The planet's surface is constantly changing due to tectonic and atmospheric processes.",
    bgColor: '#B6F3FF',
    buttonColor: '#1D99B5',
  },
  {
    title: 'Mercury',
    name: 'Mercury',
    image: require('../../assets/planets/Mercury.png'),
    description:
      'Mercury is the closest planet to the sun. It has a diameter of 4,879 km. It seems very hot and dry.',
    subtitle: 'The Swift Messenger of the Sky',
    information:
      "Mercury, named after the Roman messenger of the gods, is the smallest planet in our solar system and the closest to the Sun. It whips around its orbit faster than any other planet, leading to its nickname. Despite its proximity to the Sun, temperatures can swing dramatically, from scorching hot to freezing cold, due to its lack of atmosphere. The surface is cratered and similar in appearance to Earth's moon, offering a stark and barren landscape.",
    bgColor: '#E6D7FF',
    buttonColor: '#795dbb',
  },
  {
    title: 'Venus',
    name: 'Venus',
    image: require('../../assets/planets/Venus2.png'),
    subtitle: 'The Veiled Planet',
    information:
      "Venus, often called Earth's sister planet due to its similar size and proximity, is shrouded in thick, toxic clouds that trap heat, making it the hottest planet in our solar system. Its surface is dominated by vast plains of volcanic basalt and punctuated by numerous mountain ranges and large volcanoes. The dense atmosphere, consisting mainly of carbon dioxide with clouds of sulfuric acid, reflects sunlight, making Venus the brightest natural object in the night sky after the Moon.",
    description:
      "Venus is the second planet from the sun and is often referred to as the Earth's sister planet.",
    bgColor: '#F6E3C4',
    buttonColor: '#D6711E',
  },
  {
    title: 'Mars',
    name: 'Mars',
    image: require('../../assets/planets/Mars.png'),
    subtitle: 'The Red Warrior',
    information:
      "Mars, known as the Red Planet due to its reddish appearance, has been a subject of human fascination for centuries. This cold desert world is home to the largest volcano and the deepest canyon in our solar system. Its thin atmosphere, primarily composed of carbon dioxide, contributes to its cold temperatures and dramatic weather phenomena like dust storms. Mars' surface features include vast plains, towering volcanoes, and evidence of ancient waterways.",
    description:
      'Mars is the fourth planet from the sun and the second smallest planet in the solar system.',
    bgColor: '#FFD6D6',
    buttonColor: '#E31949',
  },
  {
    title: 'Jupiter',
    name: 'Jupiter',
    image: require('../../assets/planets/Jupiter.png'),
    subtitle: 'The Colossal Guardian',
    information:
      "Jupiter is the largest planet in our solar system, a gas giant named after the king of the Roman gods. Its most notable feature is the Great Red Spot, a gigantic storm larger than Earth that has raged for centuries. Jupiter's fast rotation causes its bands of clouds to stretch around the planet, creating a striped appearance. This giant planet has a strong magnetic field and a vast system of moons, including Ganymede, the largest moon in our solar system.",
    description:
      'Jupiter is the fifth planet from the sun and the largest planet in the solar system. It has a',
    bgColor: '#e5a161',
    buttonColor: '#CE7422',
  },
  {
    title: 'Saturn',
    name: 'Saturn',
    image: require('../../assets/planets/Saturn.png'),
    subtitle: 'The Jewel of the Solar System',
    description:
      'Saturn is the sixth planet from the sun and the second largest planet in the solar system.',
    information:
      'Saturn is often referred to as the "jewel of the solar system" due to its stunning rings that are visible from Earth. With a diameter of 116,460 km, Saturn is the second largest planet in our solar system and is known for its unique and beautiful ring system, which is composed of ice particles, dust, and small rocks. The rings are believed to be relatively young, having formed less than 100 million years ago from the debris of a destroyed moon or comet. Saturn\'s atmosphere is primarily composed of hydrogen and helium, with trace amounts of other gases.',
    bgColor: '#bbd39c',
    buttonColor: '#4e6a2a',
  },
  {
    title: 'Uranus',
    name: 'Uranus',
    image: require('../../assets/planets/Uranus.png'),
    subtitle: 'The Sideways Ice Giant',
    description:
      'Uranus is the seventh planet from the sun and the third largest planet in the solar system.',
    information:
      "Uranus stands out in the solar system due to its unique tilt, rotating on its side, which gives it extreme seasonal variations. It's an ice giant, with an atmosphere mostly of hydrogen and helium, and a hint of methane, which gives it a pale blue color. Uranus is encircled by faint rings and has numerous moons, with its interior likely composed of ice and rock.",
    bgColor: '#c8b7f6',
    buttonColor: '#331E6F',
  },
  {
    title: 'Neptune',
    name: 'Neptune',
    subtitle: 'The Distant Blue Wanderer',
    image: require('../../assets/planets/Neptune.png'),
    description:
      'Neptune is the eighth planet from the sun and the fourth largest planet in the solar system.',
    information:
      'Neptune, the farthest known planet from the Sun in our solar system, is a mysterious, deep blue world, driven by the strongest winds in the solar system. Its vibrant blue color is due to the methane in its atmosphere. Neptune has a dynamic climate with large storms and high-speed winds whipping through its upper atmosphere. It also possesses a faint ring system and a notable moon, Triton, which is geologically active and has geysers.',
    bgColor: '#80eeff',
    buttonColor: '#2c7af4',
  },
] as const;

export type PlanetType = (typeof PlanetList)[number];
