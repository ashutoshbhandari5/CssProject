// import { FcIdea, IoCreateOutline, GiGrowth } from "react-icons/all";

import { FcIdea } from "react-icons/fc";
import { IoMdCreate } from "react-icons/io";
import { GiGrowth } from "react-icons/gi";

export const benefits = {
  header: "Benefits",
  css: "bullets bg-green",
  list: [
    "Streamline analytics processes",
    "Embed BI and predictive planning",
    "Turn insights into action",
    "Visualize your decisions",
  ],
};

export const company = {
  header: "Our Company",
  css: "bullets bg-black",
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
