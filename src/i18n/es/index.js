export default {
  buttons: {
    aboutMe: "Sobre mí",
    contactMe: "Contáctame",
    myProyects: "Mis proyectos",
  },
  myPresentation: {
    title: "Desarrollador Frontend y Backend",
    subtitle:
      "Con experiencia en proyectos personales, busco aprender cómo crear productos útiles para las personas en el mundo real.",
  },
  myGreeting: {
    title: "Hola, soy Carlos. Encantado de conocerlo.",
    p: "Soy desarrollador backend y frontend, he desarrollado varios proyectos personales, tengo conocimiento en el manejo y la configuración de bases de datos noSql en la nube como MongoDB atlas, desligué de proyectos, desarrollo de aplicaciones en tiempo real, consumo y creación de apis, autenticación de usuarios, manejo de roles y creación de scrappers sencillos usando playwright.",
  },
  mySkill: {
    title: "Tecnologías",
    subtitleFrontend: "Una descripción de las habilidades frontend.",
    subtitleBackend: "Una descripción de las habilidades backend.",
  },
  myProyects: {
    title: "Mis proyectos",
    subtitle: "Sitios de práctica, desplegados y mantenidos",
    cardProyect: {
      title: "Tecnologías",
      buttonSite: "Ver sitio",
      buttonCode: "Ver código",
    },
    proyects: {
      // chat_ai: {
      //   title: "Chat sin Login con Bots e IA",
      //   description:
      //     "Habla con desconocidos, pero como seguramente no haya nadie, integre un par de bots.",
      // },

      chat_ai: {
        title: "Chat sin Login con Bots e IA",
        description:
          "Aplicación multi chat en tiempo real por medio de sockets, con permanencia de mensajes (mongoDB Atlas), almacenamiento de imágenes por medio de un bucket (cloudflare), y aprovechando una biblioteca de AI (hugginface) para agregar variedad en los bots.",
      },
      exam_pdf_generator: {
        title: "Generador Dinámico de Exámenes de Laboratorio en PDF",
        description:
          "App web que genera examenes de laboratorio emulando fielmente su formato, con el uso de la biblioteca pdf-lib se realizo una estructura de coordenadas que permite generar examenes dinamicos y mutables.",
      },
      // exam_pdf_generator: {
      //   title: "Generador Dinámico de Exámenes de Laboratorio en PDF",
      //   description:
      //     "Lo hice para mi mamá, la estructura de los exámenes es variada. P. D. Creo que no le gusto, pero la experiencia queda.",
      // },
    },
  },
  myContact: {
    title: "Contáctame",
    subtitle: "Agradecería cualquier comentario",
    labelEmail: "Tu email (opcional)",
    labelText: "Mensaje",
    buttonSend: "Enviar",
    notifyResult: {
      success: "Enviado exitosamente",
      failed: "Hubo un error, inténtelo de nuevo",
    },
  },
  footerComponents: {
    title: "Gracias por llegar hasta aquí",
  },

  inputValidations: {
    email: {
      format: "Formato incorrecto",
    },
    message: {
      required: "Requerido",
      maxLength: "Longitud máxima de 200 caracteres alcanzada",
    },
  },
};
