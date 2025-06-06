import portafolioLink from "../../public/img/portafolio_proyect.png";
import chatLink from "../../public/img/chat_ia_proyect.png";
import examGeneratorLink from "../../public/img/generador_examenes.png";

import { i18n } from "src/boot/i18n";

export function proyectTranslate(id_name) {
  return {
    title: i18n.global.t(`myProyects.proyects.${id_name}.title`),
    description: i18n.global.t(`myProyects.proyects.${id_name}.description`),
  };
}

export const proyects = [
  {
    id_name: "chat_ai",
    srcImage: chatLink,
    technologies: [
      "Express",
      "MongoDB",
      "Vuejs",
      "Quasar",
      "SocketIo",
      "Cloudflare",
      "Hugginface",
    ],
    linkSite: "https://chat-front-gk8r.onrender.com/",
    linkGitHub: "https://github.com/cetobebop/chat-front",
  },
  {
    id_name: "exam_pdf_generator",
    srcImage: examGeneratorLink,
    technologies: ["Vuejs", "Quasar", "pdf-lib"],
    linkSite: "https://laboratorio-pdf.onrender.com/#/",
    linkGitHub: "https://github.com/cetobebop/laboratorio-pdf",
  },
  // {
  //   title: "Portfolio",
  //   srcImage: portafolioLink,
  //   technologies: ["Express", "MongoDB", "Vuejs", "Quasar"],
  //   description: "this portfolio",
  //   linkSite: "https://portafolio-61jh.onrender.com/",
  //   linkGitHub: "https://github.com/cetobebop/portafolio",
  // },
];
