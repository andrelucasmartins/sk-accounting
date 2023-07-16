interface NavbarProps {}

export const Navbar = (props: NavbarProps) => {
  return (
    <div className="h-30 w-full bg-white">
      <div className="w-full max-w-7xl lg:mx-auto md:px-4 px-2">
        <nav className="w-full flex justify-between items-center flex-wrap py-1 text-gray-500 uppercase text-xs">
          <h1 className="text-6xl">SK</h1>
          <ul className="flex justify-between items-center gap-4 flex-wrap">
            <li>
              <a className=" hover:text-gray-700 active:text-gray-800" href="/">
                início
              </a>
            </li>
            <li>
              <a className=" hover:text-gray-700 active:text-gray-800" href="#">
                sobre a sk
              </a>
            </li>
            <li>
              <a className=" hover:text-gray-700 active:text-gray-800" href="#">
                serviços
              </a>
            </li>
            <li>
              <a className=" hover:text-gray-700 active:text-gray-800" href="#">
                contato
              </a>
            </li>

            <li>
              <a
                className="inline-block py-2 px-4 text-gray-200 rounded-2xl bg-gray-800"
                href="#"
              >
                abra sua empresa
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
