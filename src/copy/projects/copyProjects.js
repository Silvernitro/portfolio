const copy = [
  {
    projectTitle: 'LOX',
    date: 'AUGUST 2020 - PRESENT',
    content: [
      "Lox is a programming language introduced in Bob Nystrom's Crafting Interpreters",
      'Inspired by the book, I am writing two interpreters for Lox: jlox & clox',
      'jlox is a tree-walk interpreter written in Java and uses a recursive descent parser',
      'clox is a bytecode interpreter written in C and compiles Lox source code into bytecode before executing it on its own virtual machine',
    ],
    buttons: [
      { text: "View jlox's code", url: 'https://github.com/Silvernitro/jlox' },
      { text: "View clox's code", url: 'https://github.com/Silvernitro/clox' },
    ],
  },
  {
    projectTitle: 'FoodCross',
    date: 'JANUARY 2021',
    content: [
      'Built during the Hack & Roll 2021 Hackathon',
      'FoodCross is a web platform that allows diners to make convenient digital donations to eateries and fund suspended meals. The needy can then claim free meals from eateries that are paid for using the donated funds.',
      'Tools used: ReactJS, Redux, NextJS, Apollo GraphQL, MongoDB',
    ],
    buttons: [
      { text: 'View hackathon submission', url: 'https://devpost.com/software/foodcross' },
      { text: 'View code', url: 'https://github.com/Silvernitro/hacknroll2021' },
    ],
  },
  {
    projectTitle: 'LifeMap',
    date: 'MAY 2020 - AUGUST 2020',
    content: [
      'LifeMap is a location-based social media platform that allows users to share their activities with friends and followers',
      'Built under the National University of Singapore Orbital Programme (Advanced): Independent Software Development Project',
      'Tools used: ReactJS, NodeJS, ExpressJS, SQL',
    ],
    buttons: [
      { text: 'View code', url: 'https://github.com/TanLeYang/life-map' },
    ],
  },
]

export default copy
