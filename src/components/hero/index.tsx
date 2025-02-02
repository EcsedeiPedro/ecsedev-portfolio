import { Container } from "../container";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="h-screen">
      <Container className="px-4 flex flex-col h-full justify-center">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <div className="w-1/2">
            <div className="text-white">
              <h1 className="text-3xl sm:text-4xl flex flex-col tracking-widest text-left w-max">
                hello, i am
                <span className="text-5xl sm:text-6xl tracking-widest text-lightRed leading-none font-medium self-start w-max text-left -ml-[1px]">
                  Pedro
                  <br />
                  Ecsedei
                </span>
              </h1>

              <p className="text-xl sm:text-2xl tracking-widest text-orange text-left w-max ml-[2px]">
                Fullstack Developer
              </p>
            </div>
          </div>

          <div className="hidden sm:flex justify-end w-1/2">
            <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full bg-wine overflow-hidden">
              <Image
                className="absolute bottom-0 w-full grayscale"
                src="/images/pedro-ecsedei.png"
                alt="Foto do Desenvolver Pedro Ecsedei"
                width={800}
                height={800}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
