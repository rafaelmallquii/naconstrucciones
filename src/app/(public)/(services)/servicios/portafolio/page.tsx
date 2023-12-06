import { HeroRight } from "@/components/custom/HeroRight";
import { WabiSabi } from "./_sections/wabi-sabi";
import { TulumBali } from "./_sections/tulum-bali";
import { SquareCarousel } from "./_sections/square-carousel";
import { Video } from "./_sections/video";
import { SeeAlso } from "./_sections/see-also";
import { RectangleCarousel } from "./_sections/rectangle-carousel";

const Page = () => {
  return (
    <>
      <HeroRight
        top="Conectamos"
        image="/img/services/creatividad.png"
        title1="ESPACIOS Y"
        title2="PERSONAS"
        description="Ponemos máxima atención en los detalles. Desde el plano a la construcción final."
      />
      <WabiSabi />
      <TulumBali />
      <SquareCarousel />
      <Video />
      <SeeAlso />
      <RectangleCarousel />
    </>
  );
};

export default Page;
