import { React, useContext } from "react";
import logo from "./logo.png";
import Viewstate from "./Viewstate";
import Visualization from "./Visualization";
import DataContext from "../Context/DataContext";
function Home() {
  const context = useContext(DataContext);
  const { chosenPanel, setchosenPanel } = context;
  return (
    <div className="dashboard">
      <div className="sidemenu">
        <img className="logo" src={logo} alt="logo" />
        <nav>
          <ul className="menu">
            {chosenPanel === "home" ? (
              <li onClick={() => setchosenPanel('home')} style={{ background: "#383A3E" }}>Home</li>
            ) : (
              <li onClick={() => setchosenPanel('home')}>Home</li>
            )}

            {chosenPanel === "visualization" ? (
              <li onClick={() => setchosenPanel('visualization')} style={{ background: "#383A3E" }}>Visualization</li>
            ) : (
              <li onClick={() => setchosenPanel('visualization')}>Visualization</li>
            )}
          </ul>
        </nav>
      </div>
      <div className="displaypanel">
        {chosenPanel === 'home' ?
          <Viewstate />
          :
          <Visualization />
        }

      </div>
    </div>
  );
}

export default Home;
