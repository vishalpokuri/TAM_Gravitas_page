import bg from "../images/bluegrid.png";
import { Button } from "./Button";
import Modal from "./Modal";
import React, { useState } from "react";

export default function TeamForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className="w-full min-h-screen bg-black bg-cover bg-center flex flex-col items-center text-white"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="w-11/12 md:w-4/5 lg:w-4/6 bg-cardbg bg-opacity-70 mt-8 md:mt-16 p-4 flex flex-col items-center rounded-lg">
          <form className=" w-full max-w-3xl">
            <div className="flex flex-col  md:flex-row mb-4 md:mb-6 p-3">
              <input
                type="text"
                placeholder="Participant Name"
                className="bg-transparent border-b border-solid border-phcolor placeholder:text-phcolor font-extralight p-2 md:p-4 h-10 flex-1 mb-4 md:mb-0 md:mr-2"
                required
              />
              <input
                type="text"
                placeholder="Reg. No."
                className="bg-transparent border-b border-solid border-phcolor placeholder:text-phcolor font-extralight p-2 md:p-4 h-10 flex-1 md:ml-2"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row mb-4 md:mb-6 p-3">
              <input
                type="email"
                placeholder="VIT Email ID"
                className="bg-transparent border-b border-solid border-phcolor placeholder:text-phcolor font-extralight p-2 md:p-4 h-10 flex-1 mb-4 md:mb-0 md:mr-2"
                required
              />
              <input
                type="text"
                placeholder="Team Name"
                className="bg-transparent border-b border-solid border-phcolor placeholder:text-phcolor font-extralight p-2 md:p-4 h-10 flex-1 md:ml-2"
                required
              />
            </div>
            <div className="flex flex-col  md:flex-row mb-4 md:mb-6 p-3">
              <input
                type="text"
                placeholder="Team ID"
                className="bg-transparent border-b border-solid border-phcolor placeholder:text-phcolor font-extralight p-2 md:p-4 h-10 flex-1 mb-4 md:mb-0 md:mr-2"
                required
              />
              <input
                type="number"
                placeholder="No. of Team Members"
                className="bg-transparent border-b border-solid border-phcolor placeholder:text-phcolor font-extralight p-2 md:p-4 h-10 flex-1 md:ml-2"
                required
              />
            </div>

            <div className="flex m-4 justify-around p-6">
              <button
                type="button"
                onClick={handleOpenModal}
                className="bg-gradient-to-r from-start to-end font-light px-4 py-2 rounded-md  transform transition-transform duration-300 hover:-translate-y-2 text-white mx-3"
              >
                How to Fill?
              </button>
              <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
              <Button what="Proceed to Payment" extras="mx-3" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
