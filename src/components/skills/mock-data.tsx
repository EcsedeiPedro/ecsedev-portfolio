interface SkillsProps {
  name: string;
  icon: React.ReactNode;
}

const skills: SkillsProps[] = [
  {
    name: "Javascript",
    icon: <i className="devicon-javascript-plain text-white text-6xl" />,
  },
  {
    name: "Node.Js",
    icon: <i className="devicon-nodejs-plain-wordmark text-white text-8xl" />,
  },
  {
    name: "React.Js",
    icon: <i className="devicon-react-original text-white text-6xl" />,
  },
  {
    name: "Next.Js",
    icon: <i className="devicon-nextjs-original-wordmark text-white text-8xl" />,
  },
  {
    name: "Typescript",
    icon: <i className="devicon-typescript-plain text-white text-6xl" />,
  },
  {
    name: "Wordpress",
    icon: <i className="devicon-wordpress-plain text-white text-6xl" />,
  },
  {
    name: "Webflow",
    icon: <i className="devicon-webflow-original text-white text-6xl" />,
  },
  {
    name: "MongoDB",
    icon: <i className="devicon-mongodb-plain text-white text-6xl"></i>,
  },
];

export { skills };
