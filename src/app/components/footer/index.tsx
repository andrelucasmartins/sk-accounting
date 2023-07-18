interface FooterProps {}

export const Footer = (props: FooterProps) => {
  return (
    <footer className="footer bg-gray-300 w-full mx-0">
      <div className="w-full max-w-7xl mx-auto px-4 py-10">
        <div className="flex justify-between flex-col md:flex-row lg:flex-row items-center">
          <div
            className="col-span-2
           w-full  flex justify-center items-center text-center "
          >
            <h1 className="text-gray-800 font-bold text-7xl">SK</h1>
          </div>
          <div className="col-span-11 w-full space-y-2">
            <span>
              <span className="font-semibold">CRC</span>: SP-098894/9-0
            </span>
            <p>
              Escritório contábil em Jaguariuna - São Paulo, baseado em
              confiança, credibilidade, qualidade em seus serviços.{" "}
            </p>
            <p>
              <span className="font-semibold">Sk Accounting</span> ©{" "}
              {new Date().getFullYear()} - Todos os direitos reservados | AE
              Digi Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
