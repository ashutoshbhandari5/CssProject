import { FcIdea } from "react-icons/fc";
import { IoMdCreate } from "react-icons/io";
import { GiGrowth } from "react-icons/gi";

export const benefits = {
  header: "Benefits",
  css: "bullet bg-green",
  list: [
    "Streamline analytics processes",
    "Embed BI and predictive planning",
    "Turn insights into action",
    "Visualize your decisions",
  ],
};

export const company = {
  header: "Our Company",
  css: "bullet bg-black",
  list: [
    "Streamline analytics processes",
    "Embed BI and predictive planning",
    "Turn insights into action",
    "Visualize your decisions",
  ],
};

export const socialMedia = ["facebook", "twitter", "linkedin", "instagram"];

const iconStyle = {
  height: 50,
  width: 50,
};

export const showCaseList = [
  {
    icon: <FcIdea style={iconStyle} />,
    header: "Visualize it",
    text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
  },
  {
    icon: <IoMdCreate style={iconStyle} />,
    header: "Create it",
    text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
  },
  {
    icon: <GiGrowth style={iconStyle} />,
    header: "Grow it",
    text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
  },
];

export const footerList = [
  {
    header: "Discover",
    items: ["Buy & Sell", "Merchant", "Giving back", "Help & Support"],
  },
  {
    header: "About",
    items: ["Staff", "Team", "Careers", "Blog"],
  },
  {
    header: "Resources",
    items: ["Security", "Global", "Charts", "Privacy"],
  },
];

export const navBarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
];

export const clientMemberList = [
  {
    header: "CROLLA",
    paragraph: "Sample text. Click to select the Text Element.",
  },
  {
    header: "BINANCE",
    paragraph: "Sample text. Click to select the Text Element.",
  },
  {
    header: "EVGA",
    paragraph: "Sample text. Click to select the Text Element.",
  },
  {
    header: "TESLA",
    paragraph: "Sample text. Click to select the Text Element.",
  },
];
