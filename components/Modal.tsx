import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Modal = (props: any) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-full shadow-md shadow-black hover:shadow-inner bg-third duration-300 px-8 py-2 font-medium hover:text-forth hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          {props.btn}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-50">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-forth p-10 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {props.title}
                  </Dialog.Title>
                  <ul className="mt-2 text-sm list-decimal">
                    {props.content &&
                      props.content.map((index: any) => {
                        return (
                          <li key={index.id}>
                            <p>{index.list}</p>
                          </li>
                        );
                      })}
                  </ul>
                  {(() => {
                    if (props.which === 1) {
                      return (
                        <>
                          <p>
                            Our booking system is under maintenance. For now,
                            you can contact us through Gmail or WhatsApp. Please
                            declare your name, and packages that you are
                            interested in us, feel free to ask!
                          </p>
                          <div className="flex md:flex-row flex-col w-10/12 mx-auto md:w-full justify-center md:gap-10 gap-5 my-10 text-lg text-primary">
                            <a
                              href="https://wa.me/33611436875"
                              target={"_blank"}
                              className="basis-1/2 cursor-pointer py-3 px-5 bg-third duration-500 hover:shadow-inner rounded-lg shadow-md shadow-black"
                              rel="noreferrer"
                            >
                              <div className="">
                                <div className="flex flex-row gap-3 ">
                                  <FontAwesomeIcon
                                    icon={faWhatsapp}
                                    size="2x"
                                  />
                                  <p className="m-auto">Whatsapp</p>
                                </div>
                              </div>
                            </a>
                            <a
                              className="basis-1/2 cursor-pointer group py-3 px-5 bg-third duration-500 hover:shadow-inner rounded-lg shadow-md shadow-black"
                              href="mailto:lacle.guide@gmail.com"
                              target={"_blank"}
                              rel="noreferrer"
                            >
                              <div>
                                <div className="flex flex-row gap-3 ">
                                  <FontAwesomeIcon icon={faGoogle} size="2x" />
                                  <p className="m-auto">Gmail</p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </>
                      );
                    } else {
                      return <div></div>;
                    }
                  })()}
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-sec bg-opacity-20 duration-300 px-4 py-2 text-sm font-medium  hover:bg-sec focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default Modal;
