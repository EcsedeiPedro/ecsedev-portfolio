import { Container } from "../container";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { skills } from "./mock-data";

export const Skills = () => {
  return (
    <section className="py-10 bg-black px-4 overflow-x-hidden">
      <Container>
        <h2 className="text-lightRed text-3xl">my skills</h2>

        <Carousel className="">
          <CarouselContent className="py-20 flex items-center">
            {skills.map((skill) => (
              <CarouselItem
                className="basis-[100%] sm:basis-[35%] md:basis-[33.3%] xl:basis-[19%] flex justify-center xl:justify-start"
                key={skill.name}
              >
                {skill.icon}
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </section>
  );
};
