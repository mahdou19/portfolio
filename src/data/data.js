export const pages = [
  { title: "HOME", path: "/myportfolio" },
  { title: "PROJETS", path: "/projects" },
  { title: "EXPERIENCES", path: "/experiences" },
  { title: "BLOG", path: "/blog" },
];

export const skills = [
  {
    title: "Front-End",
    skill: ["React JS", "HTML", "CSS", "MaterialUI", "NPM"],
  },
  {
    title: "Back-End",
    skill: ["NodeJS", "NestJS", "ExpressJS", "MongoDB", "AWS", "CDK"],
  },
  { title: "Langage", skill: ["JavaScript", "Python", "TypeScript"] },
  {
    title: "Devops",
    skill: [
      "Docker",
      "Vagrant",
      "Ansible",
      "CloudFormation",
      "Jira",
      "Confluence",
      "Kubernetes",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Mon portfolio",
    desc: `Site web personnel pour présenter mes projets et mon parcours.`,
    langage: [
      { key: 0, label: "Material UI" },
      { key: 1, label: "React JS" },
    ],
    link: "https://mahdou19.github.io/myportfolio",
    github: "https://github.com/mahdou19/myportfolio",
    image:
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },

  {
    id: 2,
    title: "Génie Civil Website",
    desc: `Site web pour une entreprise de génie civil. Le site est en cours de développement.`,
    langage: [
      { key: 0, label: "Material UI" },
      { key: 1, label: "React JS" },
    ],
    github: "https://mahdou19.github.io/myportfolio",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 3,
    title: "Générateur de citation",
    desc: `Générateur de citation en utilisant une API.`,
    langage: [
      { key: 0, label: "Material UI" },
      { key: 1, label: "React JS" },
    ],
    link: "https://generator-quote-motivation.netlify.app",
    github: "https://github.com/mahdou19/generate-quote",
    image:
      "https://images.unsplash.com/photo-1537444532052-2afbf769b76c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },

  {
    id: 4,
    title: "Drag and Drop",
    desc: `Drag and Drop en utilisant React JS.`,
    langage: [
      { key: 0, label: "Material UI" },
      { key: 1, label: "React JS" },
      { key: 2, label: "react-beautiful-dnd" },
      { key: 3, label: "React Plotly.js" },
    ],
    link: "  https://mahdou19.github.io/DragAndDrop/",
    github: "https://github.com/mahdou19/DragAndDrop",
    image:
      "https://media.istockphoto.com/id/679714188/fr/photo/drogue-3d-et-drop-bouton-cliquez-ici-bloc-texte.jpg?s=612x612&w=0&k=20&c=6Rf56wzriixD_kRhs0fj1hytUqF2pni_V1t19-EuFtU=",
  },
  {
    id: 5,
    title: "Projet-Estiam-Plaquette Back-End",
    desc: `Projet pour créer la partie Back-End de la brochure pour l'école ESTIAM. `,
    langage: [
      { key: 0, label: "Node Js" },
      { key: 1, label: "Express Js" },
    ],
    github: "https://github.com/mahdou19/Projet-Estiam-Plaquette",
    image:
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: 6,
    title: "Automatisation CloudOps",
    desc: `Déploiement automatisé d'une application Node.js sur AWS EC2 avec AWS CDK, Ansible, Docker et GitHub Actions.`,
    langage: [
      { key: 0, label: "Node.js" },
      { key: 1, label: "Docker" },
      { key: 2, label: "AWS CDK" },
      { key: 3, label: "Ansible" },
      { key: 4, label: "GitHub Actions" },
    ],
    link: "https://github.com/mahdou19/cdk-node-app",
    github: "https://github.com/mahdou19/cdk-node-app",
    image:
      "https://img.freepik.com/vecteurs-libre/concept-design-plat-ingenieur-devops-grand-symbole-infini-au-centre-petites-icones-illustration-vectorielle-employes-activite_1284-74955.jpg?w=1060&t=st=1703474048~exp=1703474648~hmac=408d9291557aaa380797a1149c6e8a6966fa029972f2b433b8499ffe4be73d7c",
  },
];
// export const schoolProject = [
//   {
//     id: 1,
//     title: "Projet-Estiam-Plaquette Back-End",
//     desc: `Projet pour créer la partie Back-End de la brochure pour l'école ESTIAM. `,
//     langage: [
//       { key: 0, label: "Angular" },
//       { key: 1, label: "jQuery" },
//       { key: 2, label: "Polymer" },
//       { key: 3, label: "React" },
//       { key: 4, label: "Vue.js" },
//     ],
//     github: "https://github.com/mahdou19/Projet-Estiam-Plaquette",
//     image:
//       "https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
//   },
// ];
