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
      content:
        " I went to Paris with tour guide from la clé, they know so well about Paris, that was magnificent, especially they took beautiful photos, recommended",
      author:
        "Siti Briliani Putri, ministry of public works and public housing of Republic Of Indonesia",
    },
    {
      id: 2,
      content: "Lorem",
    },
  ];

  return (
    <div className={`${g.glassHeader} `}>
      <div className="md:p-5 py-5 flex flex-row">
        <div className=" m-auto">
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        </div>
        <div className={`${s.embla}`}>
          <div className={`${s.embla__viewport}`} ref={viewportRef}>
            <div className={`${s.embla__container} `}>
              {slide.map((index: any) => (
                <div className={`${s.embla__slide} `} key={index.id}>
                  <div className={`${s.embla__slide__inner} `}>
                    <p className="text-forth  text-center italic ">
                      {index.content}
                    </p>
                    <div className="text-forth mt-5 w-11/12 mx-auto">
                      <p className="text-center text-sm ">{index.author}</p>
                    </div>
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
    </div>
  );
};
export default Testimony;
