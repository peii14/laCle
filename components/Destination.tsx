import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";
import s from "../styles/slider.module.css";
import Image from "next/image";
import { PrevButton, NextButton, DotButton } from "./CarouselBtn";
import DestinationCard from "./DestinationCard";
import paris from "../images/home/paris.png";
import lyon from "../images/home/lyon.png";
import stMichel from "../images/home/stMichel.png";

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
  console.log(selectedIndex);
  const slide = [
    {
      id: 1,
      title: "Lyon Old",
      title2: "Town",
      image: lyon,
      link: "/IRC2022",
    },
    {
      id: 2,
      title: "A Night In",
      title2: "Paris",
      image: paris,

      link: "/Theseus",
    },
    {
      id: 3,
      title: "The Wonder",
      title2: "Land",
      image: stMichel,

      link: "/Theseus",
    },
  ];

  return (
    <section className="">
      <div className="relative mx-auto max-w-5xl p-10 items-center md:grid-cols-2 md:grid-rows-1 mt-10 ">
        <div className={`${s.embla}`}>
          <div className={`${s.embla__viewport2}`} ref={viewportRef}>
            <div className={`${s.embla__container} `}>
              {slide.map((index: any) => (
                <div className={`${s.embla__slide} `} key={index.id}>
                  <div
                    className={`${
                      s.embla__slide__inner2
                    } duration-300 transform-gpu ${
                      index.id == selectedIndex + 1 ? "scale-110 " : "scale-90"
                    }`}
                  >
                    <DestinationCard
                      header1={index.title}
                      header2={index.title2}
                      image={index.image}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" mt-10">
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
