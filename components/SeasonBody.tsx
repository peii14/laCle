import Image from "next/image";
import marsille1 from "../images/summer/marsille1.png";
import marsille2 from "../images/summer/marsille2.png";
import dot from "../images/dot.png";

const SeasonBody = (props: any) => {
  return (
    <div className=" border-forth border-x-2 border-opacity-60  grid grid-cols-3 ">
      <div className=" p-5 border-forth border-opacity-60 border-b-2 -mt-20 h-full ">
        <div className="w-10/12 mx-auto ">
          <Image alt="mar" src={marsille1} />
        </div>
      </div>
      <div className="border-x-2 border-b-2 h-full relative border-forth text-forth  border-opacity-60">
        <h2 className="font-sec text-center font-thin">Marseille</h2>
        <div className="absolute -top-5 -left-5">
          <Image alt="number" src={dot} height={50} width={50} />
          <h1 className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-numerical">
            1
          </h1>
        </div>
        <div className=" ">
          <p className="px-5 py-2 ">
            Le lorem ipsum est, en imprimerie, une suite de mots sans
            signification utilisée à titre provisoire pour calibrer une mise en
            page, le texte définitif venant remplacer le faux-texte dès qu'il
            est prêt ou que la mise en page est achevée. Généralement, on
            utilise un texte en faux latin, le Lorem ipsum ou Lipsum. une mise
            en page, le texte définitif venant remplacer le faux-texte dès qu'il
            est prêt ou que la mise en page est achevée. Généralement, on
            utilise un texte en faux latin, le Lorem ipsum ou Lipsum. le texte
            définitif venant remplacer le faux-texte dès qu'il est prêt ou que
            la mise en page est achevée. Généralement, on utilise un texte en
            faux latin, le Lorem ipsum ou
          </p>
        </div>
      </div>
      <div className=" border-opacity-60 p-5 -mt-20 border-b-2 border-forth h-full">
        <div className="w-10/12 mx-auto  ">
          <Image alt="mar" src={marsille2} />
        </div>
      </div>
      
    </div>
  );
};
export default SeasonBody;
