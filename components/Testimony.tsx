import g from "../styles/Glassmorphism.module.css";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton, DotButton } from "./CarouselBtn";
import s from "../styles/slider.module.css";

const Testimony = () => {
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
      content: "Lorem",
    },
    {
      id: 2,
      content: "Lorem",
    },
  ];

  return (
    <div className={`${g.glassHeader} md:p-10 p-0 flex flex-row`}>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <div className={`${s.embla}`}>
        <div className={`${s.embla__viewport}`} ref={viewportRef}>
          <div className={`${s.embla__container} `}>
            {slide.map((index: any) => (
              <div className={`${s.embla__slide} `} key={index.id}>
                <div className={`${s.embla__slide__inner}`}>
                  <p className="text-forth md:p-10 p-5 text-center">
                    {index.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};
export default Testimony;
