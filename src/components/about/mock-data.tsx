import { Code } from "lucide-react";
import { Briefcase } from "lucide-react";

interface aboutCardsProps {
  title: string;
  icon: React.ReactNode;
  link: {
    name: string;
    url: string;
  };
}

interface aboutTextProps {
  content: string;
}

const aboutContent: aboutTextProps = {
  content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
      velit turpis, finibus eu condimentum ut, posuere at ipsum.
      Maecenas vel consequat mauris. Quisque sodales ipsum aliquet
      aliquam placerat. Proin varius condimentum sapien. Mauris quis
      elit nibh. Morbi ut facilisis nisl. Duis et leo ut odio rhoncus
      porta a a dui. Nullam arcu nibh, bibendum in enim sed, ullamcorper
      feugiat nunc.
  `,
};

const aboutCards: aboutCardsProps[] = [
  {
    title: "Fullstack Developer",
    icon: (
      <Code
        color="#DC2626"
        className="absolute right-4 top-1/2 -translate-y-1/2"
      />
    ),
    link: {
      name: "My projects",
      url: "#",
    },
  },
  {
    title: "Freelancer",
    icon: (
      <Briefcase
        color="#DC2626"
        className="absolute right-4 top-1/2 -translate-y-1/2"
      />
    ),
    link: {
      name: "Hire me!",
      url: "#",
    },
  },
];

export { aboutContent, aboutCards };
