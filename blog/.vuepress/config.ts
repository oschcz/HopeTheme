import { searchPlugin } from "@vuepress/plugin-search";
import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "es-ES",
  title: "Theme Demo",
  description: "A demo for vuepress-theme-hope",

  base: "/",

  theme,
  
  plugins: [
    searchPlugin({
      // your options
    }),
  ],
});
