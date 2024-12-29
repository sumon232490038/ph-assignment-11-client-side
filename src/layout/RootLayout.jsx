import { useContext } from "react";
import NavBar from "../components/NavBar";
import { GlobalContext } from "../provider/Contexts";

const RootLayout = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <body className={`${theme && "dark"} h-lvh mx-auto`}>
      <div className="dark:bg-black  h-lvh dark:text-white">
        <nav className="p-2">
          <NavBar></NavBar>
        </nav>
      </div>
    </body>
  );
};

export default RootLayout;
