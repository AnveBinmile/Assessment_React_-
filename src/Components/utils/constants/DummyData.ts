// export const menuItems = ['Home','Favourite','Trending','Coming Soon']

import { NavItemProps } from "../types/type";
import {
  heart,
  trendingUp,
  calender,
  film,
  users,
  messageCircle,
  sliders,
  logOut,
} from "../../ComponentImages";
import { card1, card2, card3, card4 } from "../../ComponentImages";
import { Bcard1, Bcard2, Bcard3 } from "../../ComponentImages";

export const menuItems_1: NavItemProps[] = [
  {
    text: "Home",
    img: film,
    path: "/",
  },
  {
    text: "Favorites",
    img: heart,
    path: "favourite",
  },
  {
    text: "Trending",
    img: trendingUp,
    path: "trending",
  },
  {
    text: "Coming Soon",
    img: calender,
    path: "comingsoon",
  },
];

export const menuItems_2: NavItemProps[] = [
  {
    text: "Community",
    img: users,
    path: "community",
  },
  {
    text: "Social",
    img: messageCircle,
    path: "social",
  },
];

export const menuItems_3: NavItemProps[] = [
  {
    text: "Settings",
    img: sliders,
    path: "settings",
  },
  {
    text: "Logout",
    img: logOut,
    path: "logout",
  },
];

export const trendingCards = [
  {
    key: 1,
    title: "Tokyo Train",
    year: "2022",
    type: "Action Comedy",
    img: card1,
    description:
      "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
    time: "2h 38m",
    favourite: false,
  },
  {
    key: 2,
    title: "Moonfall",
    year: "2022",
    type: "Sci-fi",
    img: card2,
    description:
      "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
    time: "2h 38m",

    favourite: false,
  },
  {
    key: 3,
    title: "Star Wars",
    year: "2023",
    type: "Documentry",
    img: card3,
    description:
      "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
    time: "2h 38m",
    favourite: false,
  },
  {
    key: 4,
    title: "House of Gucci",
    year: "2021",
    type: "Drama",
    img: card4,
    description:
      "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
    time: "2h 38m",
    favourite: false,
  },
  {
    key: 5,
    title: "Tokyo Train",
    year: "2022",
    type: "Action Comedy",
    img: card1,
    description:
      "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
    time: "2h 38m",
    favourite: false,
  },
  {
    key: 6,
    title: "Moonfall",
    year: "2022",
    type: "Sci-fi",
    img: card2,
    description:
      "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
    time: "2h 38m",
    favourite: false,
  },
  {
    key: 7,
    title: "Star Wars",
    year: "2023",
    type: "Documentry",
    img: card3,
    description:
      "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
    time: "2h 38m",
    favourite: false,
  },
  {
    key: 8,
    title: "House of Gucci",
    year: "2021",
    type: "Drama",
    img: card4,
    description:
      "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
    time: "2h 38m",
    favourite: false,
  },
  {
    key: 9,
    title: "Tokyo Train",
    year: "2022",
    type: "Action Comedy",
    img: card1,
    description:
      "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
    time: "2h 38m",
    favourite: false,
  },
  {
    key: 10,
    title: "Moonfall",
    year: "2022",
    type: "Sci-fi",
    img: card2,
    description:
      "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
    time: "2h 38m",
    favourite: false,
  },
  {
    key: 11,
    title: "Star Wars",
    year: "2023",
    type: "Documentry",
    img: card3,
    description:
      "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
    time: "2h 38m",

    favourite: false,
  },
  {
    key: 12,
    title: "House of Gucci",
    year: "2021",
    type: "Drama",
    img: card4,
    description:
      "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
    time: "2h 38m",

    favourite: false,
  },
];

export const comingSoonCards = [
  {
    key: 1,
    title: "Tokyo Train",
    year: "2022",
    type: "Action Comedy",
    img: Bcard1,
    description:
      "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
    time: "2h 38m",
    favourite: false,
  },
  {
    key: 2,
    title: "Moonfall",
    year: "2022",
    type: "Sci-fi",
    img: Bcard2,
    description:
      "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
    time: "2h 38m",
    favourite: false,
  },
  {
    key: 4,
    title: "Moonfall",
    year: "2022",
    type: "Sci-fi",
    img: Bcard3,
    description:
      "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
    time: "2h 38m",
    favourite: false,
  },
];
