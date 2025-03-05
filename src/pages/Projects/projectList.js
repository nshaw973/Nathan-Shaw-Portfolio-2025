import {
  coverDiscordBot,
  coverGIF,
  coverTCGSite,
  coverLinks,
  coverVehicleCSVFeed,
  coverPortfolio,
} from "./images";
const defaultImage =
  "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
export const projectList = [
  // Google Feed
  {
    title: "Google Inventory Feed",
    language: "Javascript",
    technology: "NodeJS, React, TailwindCSS, DaisyUI, Papaparse, Json2CSV",
    deployment: "Heroku",
    about:
      "An inventory management system developed for Aero Mobility to seamlessly upload and update their vehicle inventory on their Google page. The system utilizes CSV files, which are transferred and processed via SFTP for efficient data handling.",
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
    title: "Vehicle CSV Feed",
    language: "Python",
    technology: "Paramiko",
    deployment: "Local Program",
    about:
      "This tool simplifies the Google Inventory Feed process by enabling users to add vehicles via an interactive command prompt. It prompts for essential vehicle details and automates SFTP uploads, streamlining inventory management with ease",
    links: [
      {
        site: "Github",
        link: "https://github.com/nshaw973/Vehicle-CSV-Generator",
      },
    ],
    image: coverVehicleCSVFeed || defaultImage,
  },
  {
    title: "TCG Discord Bot",
    language: "Javascript",
    technology: "PokemonTCGSDK API, Mongoose, Discord.js",
    deployment: "Locally Hosted and installed in multiple Discord Servers",
    about:
      "This bot is part of a personal project that simulates a Pokémon TCG booster pack opening experience for Discord users, utilizing a Pokémon TCG API. It integrates with a Discord TCG Collection Website to log user data, including collected cards and total collection value.",
    links: [
      { site: "Github", link: "https://github.com/nshaw973/MyDiscord-Bot" },
    ],
    image: coverDiscordBot || defaultImage,
  },
  {
    title: "TCG Collection Site",
    language: "Javascript",
    technology:
      "MongoDB, Mongoose, Express, React, NodeJS, TailwindCSS, DaisyUI, GraphQL, bcrypt",
    deployment: "Heroku",
    about:
      "This website is the backend component of the Discord Bot Application, designed to store and manage data from user-opened booster packs. Users can view their collections, add cards to a favorites list, and explore detailed information about the contents of each booster pack.",
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
    language: "Javascript",
    technology: "React, TailwindCSS, Github Pages",
    about:
      "Welcome to my portfolio! You're currently viewing it, and through this platform, you'll have access to my code. This will give you insight into how I designed and structured this portfolio.",
    links: [
      { site: "Github", link: "https://github.com/aeromobility/links" },
      { site: "Site", link: "https://aeromobility.github.io/links/" },
    ],
    image: coverLinks || defaultImage,
  },
  {
    title: "My Portfolio",
    language: "Javascript",
    technology: "React, TailwindCSS, Github Pages",
    about:
      "This is my portfolio, which is what is being currently viewed! You'll be able to access my code this way to get a view on how i structured this portfolio.",
    links: [
      {
        site: "Github",
        link: "https://github.com/nshaw973/Nathan-Shaw-Portfolio-2025",
      },
    ],
    image: coverPortfolio || defaultImage,
  },
];
