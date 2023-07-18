import { Navbar } from "./navbar";
import { NavInfo } from "./navInfo";

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  return (
    <section className="header lg:flex-wrap-reverse  md:flex-wrap-reverse lg:flex-none md:flex-none sm:flex-none ">
      <NavInfo />
      <Navbar />
    </section>
  );
};
