import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",
  author: {
    name: "Contabilidad",
    url: "https://puc.com.co",
  },
  repoDisplay: false,

  iconAssets: "iconfont",

  logo: "/logo.svg",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "Sitio de divulgación academica y profesional",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    articlePerPage: 20,
    description: "A FrontEnd programmer",
    intro: "/intro.html",
    medias: {
      // GitHub: "https://example.com",
      // Gmail: "https://example.com",
      // Instagram: "https://example.com",
      // Linkedin: "https://example.com",
      // Reddit: "https://example.com",
      // Twitter: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com", 
      
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    
    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
