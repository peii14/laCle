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
      content1:
        "1st day : Eiffel, Musée du Louvre, Arch de triomphe, Champs-Elysées, sacré cœur",
      content2: "2nd day : Disneyland & Jardin du Luxembourg",
      content3:
        "3rd day : Shopping (la vale village) / Chateau de Versailles, Galerie Lafayette",
    },
    {
      id: 2,
      img: lyon,
      city: "Lyon",
      content1:
        "1st day : Vieux Lyon, placé bellecour, cathédrale & Gallo Romain, Hall Paul bocuse ",
    },
    {
      id: 3,
      img: mar,
      city: "Marseille",
      content1:
        "1st day : vieux port, basilique notre dam de la garde, Mucem (musée de civilisation de l’Europe et méditerranéen)",
      content2: "2nd day: George de verdon & lavender",
    },
  ]);

  return (
    <div className="flex flex-row">
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
                    content1={index.content1}
                    content2={index.content2}
                    content3={index.content3}
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
