"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 8,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 8,
  },
};

export const BrandsCarousel = () => {
  return (
    <div className="my-8 w-full">
      <Carousel
        customTransition="all 5s linear"
        responsive={responsive}
        infinite
        arrows={false}
        autoPlay
      >
        <Image src="/img/brands/3m.png" width={120} height={120} alt="brand" />
        <Image
          src="/img/brands/ansell.jpg"
          width={120}
          height={120}
          alt="brand"
        />
        <Image
          src="/img/brands/bullard.png"
          width={120}
          height={120}
          alt="brand"
        />
        <Image
          src="/img/brands/clute.png"
          width={120}
          height={120}
          alt="brand"
        />
        <Image
          src="/img/brands/deltaplus.png"
          width={120}
          height={120}
          alt="brand"
        />
        <Image
          src="/img/brands/edelbrock.png"
          width={120}
          height={120}
          alt="brand"
        />
        <Image
          src="/img/brands/forte.png"
          width={120}
          height={120}
          alt="brand"
        />
        <Image
          src="/img/brands/fullrisk.png"
          width={120}
          height={120}
          alt="brand"
        />
        <Image
          src="/img/brands/haws.png"
          width={120}
          height={120}
          alt="brand"
        />
        <Image
          src="/img/brands/howard-leight.png"
          width={120}
          height={120}
          alt="brand"
        />
        <Image
          src="/img/brands/kleenguard.png"
          width={120}
          height={120}
          alt="brand"
        />
        <Image
          src="/img/brands/libus.png"
          width={120}
          height={120}
          alt="brand"
        />
      </Carousel>
    </div>
  );
};