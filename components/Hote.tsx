import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton, DotButton } from "./CarouselBtn";
import s from "../styles/slider2.module.css";
import paris from "../images/package/paris2.png";
import lyon from "../images/package/lyon.png";
import mar from "../images/package/mar.png";
import HoteCard from "./HoteCard";

const Hote = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  const [slide, setSlide] = useState([
    {
      id: 1,
      img: paris,
      city: "Paris",
      content: "asdasdasd",
    },
    {
      id: 2,
      img: lyon,
      city: "Lyon",
      content: "asdasdasd",
    },
    {
      id: 3,
      img: mar,
      city: "Marseille",
      content: "asdasdasd",
    },
  ]);

  return (
    <div className="md:p-5 py-5 flex flex-row">
      <div className=" m-auto">
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      </div>
      <div className={`${s.embla}`}>
        <div className={`${s.embla__viewport}`} ref={viewportRef}>
          <div className={`${s.embla__container} relative `}>
            {slide.map((index: any) => (
              <div className={`${s.embla__slide} `} key={index.id}>
                <div className={`${s.embla__slide__inner}`}>
                  <HoteCard
                    img={index.img}
                    city={index.city}
                    content={index.content}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" m-auto">
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </div>
  );
};
export default Hote;
