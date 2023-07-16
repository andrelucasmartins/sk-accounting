"use client";

import { FaRegHandshake } from "react-icons/fa";
import { VscLaw } from "react-icons/vsc";

interface VisionBusinessProps {}

export const VisionBusiness = (props: VisionBusinessProps) => {
  return (
    <div className="h-30 w-full bg-transparent -mt-20 mb-20">
      <div className="w-full max-w-7xl lg:mx-auto md:px-4 px-2">
        <div className="flex lg:flex-row md:flex-row flex-col gap-4">
          <div className="bg-gray-800 text-white rounded px-2 flex flex-col gap-6 justify-center items-center text-center px-8 py-12">
            <FaRegHandshake size={30} />
            <h1 className="uppercase text-lg">confiança</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
              atque itaque dicta tempore! Nulla, velit molestias fuga dolorem
              natus sunt vero cum repellat necessitatibus expedita, eos
              voluptate totam enim voluptatum.
            </p>
          </div>
          <div className="bg-gray-800 text-white rounded px-2 flex flex-col gap-6 justify-center items-center text-center px-8 py-12">
            <FaRegHandshake size={30} />
            <h1 className="uppercase text-sm">credibilidade</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
              atque itaque dicta tempore! Nulla, velit molestias fuga dolorem
              natus sunt vero cum repellat necessitatibus expedita, eos
              voluptate totam enim voluptatum.
            </p>
          </div>
          <div className="bg-gray-800 text-white rounded px-2 flex flex-col gap-6 justify-center items-center text-center px-8 py-12">
            <VscLaw size={30} />
            <h1 className="uppercase text-sm">ética</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
              atque itaque dicta tempore! Nulla, velit molestias fuga dolorem
              natus sunt vero cum repellat necessitatibus expedita, eos
              voluptate totam enim voluptatum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
