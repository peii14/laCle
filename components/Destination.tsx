import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";
import s from "../styles/slider.module.css";
import Image from "next/image";
import { PrevButton, NextButton, DotButton } from "./CarouselBtn";

const Destination = () => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps]: any = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index: any) => embla && embla.scrollTo(index),
    [embla]
  );
  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);
  const slide = [
    {
      id: 1,
      title: "Roboboat 2022",
      subtitle:
        "An ongoing project that is asking to be conquered for the sake of our extraordinary dreams",
      btn: "Explore",
      link: "/IRC2022",
    },
    {
      id: 2,
      title: "NALA THESEUS",
      subtitle:
        "Presenting the teams hardwork in developing maritime technology advancement. Here is the Theseus.",
      btn: "Explore",
      link: "/Theseus",
    },
    {
      id: 3,
      title: "TEAMS",
      subtitle:
        "Perspectives, ideas, and innovations came different from each of us. But, the way to assemble all of them, that is how a team works.",
      btn: "Explore",
      link: "/Team",
    },
  ];

  return (
    <div>
      <section className="flex h-screen flex-col justify-center gap-20 bg-primary text-secondary ">
        <div className="absolute z-0 h-screen w-screen">
          {/* <Image src={bg} priority /> */}
        </div>
        <div className="relative mx-auto grid h-screen max-w-7xl grid-cols-1 grid-rows-2 items-center md:grid-cols-2 md:grid-rows-1  ">
          <div
            className={`${s.embla} layout absolute -top-14 flex-col justify-around md:top-0 md:flex md:h-screen`}
          >
            <div className={`${s.embla__viewport}`} ref={viewportRef}>
              <div className={`${s.embla__container} `}>
                {slide.map((index: any) => (
                  <div className={`${s.embla__slide} `} key={index.id}>
                    <div className={`${s.embla__slide__inner}`}>
                      <div>
                        
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-20 ml-16 flex flex-row gap-10 py-5 md:bottom-10">
              <div className={`${s.embla__dots}`}>
                {scrollSnaps.map((_: any, index: any) => (
                  <DotButton
                    key={index}
                    selected={index === selectedIndex}
                    onClick={() => scrollTo(index)}
                  />
                ))}
              </div>
              <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
              <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Destination;
