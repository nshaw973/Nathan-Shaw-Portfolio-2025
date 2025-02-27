import { coverDiscordBot, coverGIF, coverTCGSite, coverLinks } from "./images";
const defaultImage = "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
export const projectList = [
  {
    title: "Google Inventory Feed",
    about:
      "An inventory feed created for Aero Mobility to upload and update their Vehicle inventory on their google page. \nUses csv files to upload through an sftp.",
    links: [
      {
        site: "Github",
        link: "https://github.com/nshaw973/Google-Vehicle-Inventory-Feed",
      },
      {
        site: "Site",
        link: "https://aeromobility-google-feed-a4ffa84ce559.herokuapp.com/",
      },
    ],
    image: coverGIF || defaultImage,
  },
  {
    title: "TCG Discord Bot",
    about:
      "This bot is one part of a whole personal project. \nThis bot was created using a Pokemon Trading Card Game API to create a fake booster pack opening experience for discoord users. \nThis bot then connects to the Discord TCG Collection Website that logs all the users data, such as cards collected and their total collection worth.",
    links: [
      { site: "Github", link: "https://github.com/nshaw973/MyDiscord-Bot" },
    ],
    image: coverDiscordBot || defaultImage,
  },
  {
    title: "TCG Collection Site",
    about:
      "This is the second part of the Discord Bot Application. \nThis is where all the data is stored based on the booster packs opened in discord by the user. \nCollections can be viewed and added to a favorites collection. \nThey are also able to look at what each booster contains as well.",
    links: [
      { site: "Github", link: "https://github.com/nshaw973/tcg-prices" },
      {
        site: "Site",
        link: "https://discord-tcg-bot-app-83248ef6c529.herokuapp.com/",
      },
    ],
    image: coverTCGSite || defaultImage,
  },
  {
    title: "Aero Mobility Social Links",
    about:
      "Small application for Aero Mobility, that links their social media and any extra links into a single page. \nAble to switch between both companies depending on what the user is looking for.",
    links: [
      { site: "Github", link: "https://github.com/aeromobility/links" },
      { site: "Site", link: "https://aeromobility.github.io/links/" },
    ],
    image: coverLinks || defaultImage,
  },
  {
    title: "Connected",
    about: "About this project",
    links: [
      { site: "Github", link: "www.github.com" },
      { site: "Site", link: "www.google.com" },
    ],
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" || defaultImage,
  },
];
