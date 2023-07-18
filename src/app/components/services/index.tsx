"use client";

interface ServicesProps {}

import { BsArrowRightCircle } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import { GiCoins, GiHumanPyramid } from "react-icons/gi";

export const Services = (props: ServicesProps) => {
  return (
    <div className="h-30 w-full bg-transparent mb-20">
      <div className="w-full max-w-7xl lg:mx-auto md:px-4 px-2">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Serviços</h1>
          <p className="text-gray-400">Conheça nosso portfólio de serviços</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 gap-y-10 mx-2 md:mx-0">
          <div className=" rounded flex flex-row gap-6 justify-start items-start">
            <div className="bg-gray-200 flex justify-center items-center p-2 rounded">
              <FaRegHandshake size={30} />
            </div>
            <div className="space-y-2">
              <h1 className="uppercase text-md font-bold">
                Assessoria Empresarial
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                atque itaque dicta tempore! Nulla, velit molestias fuga dolorem
                natus sunt vero cum repellat necessitatibus expedita, eos
                voluptate totam enim voluptatum.
              </p>
              <a
                href="http://google.com"
                className="text-blue-500 inline-flex gap-2 items-center
              "
              >
                saiba mais <BsArrowRightCircle />
              </a>
            </div>
          </div>
          <div className=" rounded flex flex-row gap-6 justify-start items-start">
            <div className="bg-gray-200 flex justify-center items-center p-2 rounded">
              <GiCoins size={30} />
            </div>
            <div className="space-y-2">
              <h1 className="uppercase text-md font-bold">Contábil</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                atque itaque dicta tempore! Nulla, velit molestias fuga dolorem
                natus sunt vero cum repellat necessitatibus expedita, eos
                voluptate totam enim voluptatum.
              </p>
              <a
                href="http://google.com"
                className="text-blue-500 inline-flex gap-2 items-center
              "
              >
                saiba mais <BsArrowRightCircle />
              </a>
            </div>
          </div>
          <div className=" rounded flex flex-row gap-6 justify-start items-start">
            <div className="bg-gray-200 flex justify-center items-center p-2 rounded">
              <GiHumanPyramid size={30} />
            </div>
            <div className="space-y-2">
              <h1 className="uppercase text-md font-bold">Recursos Humanos</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                atque itaque dicta tempore! Nulla, velit molestias fuga dolorem
                natus sunt vero cum repellat necessitatibus expedita, eos
                voluptate totam enim voluptatum.
              </p>
              <a
                href="http://google.com"
                className="text-blue-500 inline-flex gap-2 items-center
              "
              >
                saiba mais <BsArrowRightCircle />
              </a>
            </div>
          </div>
          <div className=" rounded flex flex-row gap-6 justify-start items-start">
            <div className="bg-gray-200 flex justify-center items-center p-2 rounded">
              <FaRegHandshake size={30} />
            </div>
            <div className="space-y-2">
              <h1 className="uppercase text-md font-bold">Fiscal</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                atque itaque dicta tempore! Nulla, velit molestias fuga dolorem
                natus sunt vero cum repellat necessitatibus expedita, eos
                voluptate totam enim voluptatum.
              </p>
              <a
                href="http://google.com"
                className="text-blue-500 inline-flex gap-2 items-center
              "
              >
                saiba mais <BsArrowRightCircle />
              </a>
            </div>
          </div>
          <div className=" rounded flex flex-row gap-6 justify-start items-start">
            <div className="bg-gray-200 flex justify-center items-center p-2 rounded">
              <FaRegHandshake size={30} />
            </div>
            <div className="space-y-2">
              <h1 className="uppercase text-md font-bold">Societário</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                atque itaque dicta tempore! Nulla, velit molestias fuga dolorem
                natus sunt vero cum repellat necessitatibus expedita, eos
                voluptate totam enim voluptatum.
              </p>
              <a
                href="http://google.com"
                className="text-blue-500 inline-flex gap-2 items-center
              "
              >
                saiba mais <BsArrowRightCircle />
              </a>
            </div>
          </div>
          <div className=" rounded flex flex-row gap-6 justify-start items-start">
            <div className="bg-gray-200 flex justify-center items-center p-2 rounded">
              <FaRegHandshake size={30} />
            </div>
            <div className="space-y-2">
              <h1 className="uppercase text-md font-bold">
                Planejamento Tribuário
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                atque itaque dicta tempore! Nulla, velit molestias fuga dolorem
                natus sunt vero cum repellat necessitatibus expedita, eos
                voluptate totam enim voluptatum.
              </p>
              <a
                href="http://google.com"
                className="text-blue-500 inline-flex gap-2 items-center
              "
              >
                saiba mais <BsArrowRightCircle />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
