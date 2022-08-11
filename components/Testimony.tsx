import g from "../styles/Glassmorphism.module.css";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton, DotButton } from "./CarouselBtn";
import s from "../styles/slider.module.css";
import Image from "next/image";
import org1 from "../images/home/org1.jpg";
import org2 from "../images/home/org2.jpg";
import org3 from "../images/home/org3.jpg";

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
      image: org1,
    },
    {
      id: 2,
      content:
        " I travelled with my family, they are family friendly, they know how to play with kids, also great explanation about places from La clé’s tourguide, I like the way they took a photo of my family, it’s awesome",
      author: "Benoit Turcan, dental technician at 3D Drôme Dental Design",
      image: org2,
    },
    {
      id: 3,
      content:
        " I had beautiful time in Lyon with tour guide from La Clé, they brought me to see and feel local experience, that was incredible",
      author: "Katy Briggs, American, Strategy lead for DNV Energy system",
      image: org3,
    },
  ];

  return (
    <div className={`${g.glassHeader} `}>
      <div className="md:p-8 px-0 py-5">
        <h2 className="text-center font-sec text-forth">Testimony</h2>
        <div className="flex flex-row mt-3">
          <div className=" m-auto">
            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          </div>
          <div className={`${s.embla} md:w-full w-2/3 mx-auto`}>
            <div className={`${s.embla__viewport}`} ref={viewportRef}>
              <div className={`${s.embla__container} `}>
                {slide.map((index: any) => (
                  <div className={`${s.embla__slide}`} key={index.id}>
                    <div className={`${s.embla__slide__inner}  `}>
                      <div className="flex md:flex-row flex-col gap-5">
                        <div className="basis-1/2 px-2 m-auto">
                          <Image
                            alt="testimony"
                            src={index.image}
                            // width={600}
                            // height={200}
                          />
                        </div>
                        <div className="basis-1/2 m-auto">
                          <p className="text-forth text-center italic ">
                            {index.content}
                          </p>
                          <div className="text-forth mt-5 w-11/12 mx-auto">
                            <p className="text-center text-sm">
                              {index.author}
                            </p>
                          </div>
                        </div>
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
    </div>
  );
};
export default Testimony;
