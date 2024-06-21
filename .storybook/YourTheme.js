import { create } from "@storybook/theming/create";

import imageFile from "./static/SoxLogo.png";

export default create({
  base: "light",
  brandTitle: "SOX Storybook",
  brandUrl: "https://www.soxcorp.co.kr/SOXHome/",
  brandImage: imageFile,
  brandTarget: "_self",
});
