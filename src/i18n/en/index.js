export default {
  buttons: {
    aboutMe: "About me",
    contactMe: "Contact me",
    myProyects: "My proyects",
  },
  myPresentation: {
    title: "Frontend & Backend Developer",
    subtitle:
      "With experience in personal projects, I seek to learn how to create useful solutions for people in the real world.",
  },
  myGreeting: {
    title: "Hi, I’m Carlos. Nice to meet you.",
    p: "I am a backend and frontend developer, I have developed several personal projects, I have knowledge in the management and configuration of noSql databases in the cloud such as MongoDB Atlas, I have detached from projects, development of real-time applications, consumption of APIs, user authentication, management of roles and creation of simple scrapers using Playwright.",
  },
  mySkill: {
    title: "Technologies",
    subtitleFrontend: "A description to the frontend skills",
    subtitleBackend: "A description to the Backend skills",
  },
  myProyects: {
    title: "My proyects",
    subtitle: "Practice sites, deployed and maintained",
    cardProyect: {
      title: "Technologies",
      buttonSite: "See site",
      buttonCode: "See code",
    },
    proyects: {
      chat_ai: {
        title: "Login-Free Chat with Bots and AI",
        description:
          "Real-time multi-chat application using sockets, with message persistence (MongoDB Atlas), image storage via a bucket (Cloudflare), and leveraging an AI library (Hugginface) to add variety to the bots.",
      },
      exam_pdf_generator: {
        title: "Dynamic PDF Lab Exam Generator",
        description:
          "A web app that generates lab exams, faithfully emulating their format. Using the pdf-lib library, a coordinate structure was created that allows for the generation of dynamic and mutable exams.",
      },
    },
  },
  myContact: {
    title: "Contact me",
    subtitle: "I would appreciate any comments",
    labelEmail: "Your email (optional)",
    labelText: "A message",
    buttonSend: "Send",
    notifyResult: {
      success: "Sent successfully",
      failed: "There was an error, try again",
    },
  },
  footerComponents: {
    title: "Thanks for getting here",
  },
  inputValidations: {
    email: {
      format: "Incorrect format",
    },
    message: {
      required: "Required",
      maxLength: "Maximum length of 200 characters reached",
    },
  },
};
