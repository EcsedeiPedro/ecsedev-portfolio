import Link from "next/link";
import { Container } from "../container";
import { aboutCards, aboutContent } from "./mock-data";

export const About = () => {
  return (
    <section className="px-4">
      <Container>
        <h2 className="text-lightRed text-3xl">about me</h2>

        <div className="py-5 flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-7/12">
            <p className="text-white">{aboutContent.content}</p>
          </div>

          <div className="w-full lg:w-5/12 grid grid-cols-1 sm:grid-cols-2 lg:flex flex-col gap-6">
            {aboutCards.map((card) => (
              <div key={card.title} className="w-full bg-white p-4 relative">
                <p className="text-xl font-semibold text-black">{card.title}</p>

                <Link
                  className="text-orange font-bold text-base underline"
                  href={card.link.url}
                >
                  {card.link.name}
                </Link>

                {card.icon}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
