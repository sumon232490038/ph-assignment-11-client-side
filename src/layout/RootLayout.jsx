import { useContext } from "react";
import NavBar from "../components/NavBar";
import { GlobalContext } from "../provider/Contexts";
import FooterLayout from "../components/FooterLayout";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className={`${theme && "dark "} mx-auto bg-white`}>
      <div className="dark:bg-black   dark:text-white">
        <nav className="p-2">
          <NavBar></NavBar>
        </nav>
        <main className="mx-auto">
          <Outlet></Outlet>
        </main>
        <footer className="px-2">
          <FooterLayout></FooterLayout>
        </footer>
      </div>
    </div>
  );
};

export default RootLayout;
