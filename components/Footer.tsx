import Image from "next/image";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-primary py-10 text-center z-50 md:py-20">
      <div className=" layout mx-auto text-white">
        <div className="item-center grid items-center justify-items-center md:gap-10 lg:grid-cols-2">
          <div className="mb-6 md:mb-0 md:w-2/3">
            <div className="md:2/3 w-1/2 md:mx-0 mx-auto">
              <a
                className="cursor-pointer"
                href=""
                target={"_blank"}
                rel="noreferrer"
              >
                <Image src={logo} priority alt="logo ITS" />
              </a>
              <ul className="flex flex-row justify-around">
                <li>
                  <a
                    href="https://www.facebook.com/barunastraits"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon className="" icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/BarunastraITS"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon className="" icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/barunastra.its"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon className="" icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-1 py-3 text-left text-sm font-thin md:w-full w-max mx-auto">
              <p>
                <span className="mr-3">&copy;</span>
                2022 La Cle Guide
              </p>
              <p>Website by La Cle</p>
            </div>
          </div>
          <div className="mb-6 flex flex-col gap-3 text-left text-sm md:mb-0">
            <div>
              <h4 className="my-2">Our Address</h4>
              <p>4 Rue Victor Jara, 69100 Villeurbanne, France.</p>
            </div>
            <div>
              <h4 className="my-2">Contact</h4>
              <p>
                Mobile:{" "}
                <a
                  href="https://wa.me/33611436875"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  +33611436875
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:lacle.guide@gmail.com"
                  className=""
                  target={"_blank"}
                  rel="noreferrer"
                >
                  lacle.guide@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
