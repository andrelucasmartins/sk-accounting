import { Navbar } from "./navbar";
import { NavInfo } from "./navInfo";

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  return (
    <section className="header">
      <NavInfo />
      <Navbar />
    </section>
  );
};
