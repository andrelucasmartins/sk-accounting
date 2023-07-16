import { BsChatLeft, BsPerson } from "react-icons/bs";
import { Navbar } from "./navbar";

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  return (
    <section className="header">
      <div className="h-16 w-full bg-gray-900">
        <div className="w-full max-w-7xl text-gray-50 lg:mx-auto md:px-4 px-2">
          <div className="columns-3 items-center">
            <div className="flex justify-start self-end items-center gap-2 text-xs h-16">
              <div className="h-8 w-8 flex justify-center items-center rounded-full bg-gray-500">
                <BsChatLeft size={16} />
              </div>
              <div className="flex flex-col">
                <h2 className="font-bold">Fale Conosco</h2>
                <a href="tel+473087-5500">(47) 3087-5500</a>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 text-xs bg-slate-800 h-16">
              <div className="h-8 w-8 flex justify-center items-center rounded-full bg-gray-500">
                <BsPerson size={16} />
              </div>
              <div className="flex flex-col">
                <h2 className="font-bold">Atendimento</h2>
                <a href="tel+473087-5500 text-gray-700">
                  Seg a sex das 7h30 às 17h
                </a>
              </div>
            </div>
            <div className="flex justify-end items-center gap-2 text-xs h-16">
              <div className="h-8 w-8 flex justify-center items-center rounded-full bg-gray-500">
                <BsPerson size={16} />
              </div>

              <a
                href="#"
                className="bg-gray-200 hover:bg-gray-300 transition-all text-gray-800 rounded py-2 px-4"
              >
                Área do Cliente
              </a>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </section>
  );
};
