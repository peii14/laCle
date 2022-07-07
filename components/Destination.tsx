import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";
import s from "../styles/slider.module.css";
import Image from "next/image";
import { PrevButton, NextButton, DotButton } from "./CarouselBtn";
import DestinationCard from "./DestinationCard";

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
      title: "Paris",
      subtitle: "World Trade Organization",
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
    <section className="">
      <div className="relative mx-auto  grid h-screen max-w-7xl grid-cols-1 grid-rows-2 items-center md:grid-cols-2 md:grid-rows-1  ">
        <div className={`${s.embla} `}>
          <div className={`${s.embla__viewport}`} ref={viewportRef}>
            <div className={`${s.embla__container} `}>
              {slide.map((index: any) => (
                <div className={`${s.embla__slide} `} key={index.id}>
                  <div className={`${s.embla__slide__inner}`}>
                    <DestinationCard />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <div className={`${s.embla__dots}`}>
              {scrollSnaps.map((_: any, index: any) => (
                <DotButton
                  key={index}
                  selected={index === selectedIndex}
                  onClick={() => scrollTo(index)}
                />
              ))}
            </div>
            {/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
              <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Destination;
