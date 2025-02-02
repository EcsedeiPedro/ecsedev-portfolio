import { Container } from "../container";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { skills } from "./mock-data";

export const Skills = () => {
  return (
    <section className="py-10 bg-black px-4">
      <Container>
        <h2 className="text-lightRed text-3xl">my skills</h2>

        <Carousel className="overflow-hidden">
          <CarouselContent className="py-20 flex items-center justify-between">
            {skills.map((skill) => (
              <CarouselItem
                className="basis-[19%] flex"
                key={skill.name}
              >
                {skill.icon}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </section>
  );
};
