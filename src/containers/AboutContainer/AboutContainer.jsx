import React, { useContext } from "react";

import AboutSectionComponent from "../../components/AboutSectionComponent/AboutSectionComponent";
import "./AboutContainer.css";

import themeContext from "../../context/themeContext";

function AboutContainer(props) {
  const ThemeContext = useContext(themeContext);

  return (
    <>
   
      
      <div
        className={`about_container ${
          ThemeContext === "light" ? "light" : "dark"
        }`}
      >
           <p className={"about_text"}>About App</p>
           <div className="sections_container">
        <AboutSectionComponent
          section_name={"Author name"}
          section_details={"John Doe"}
        />
        <AboutSectionComponent
          section_name={"Github"}
          section_details={"Johndoe309"}
        />
        <AboutSectionComponent
          section_name={"App Description"}
          section_details={
            "Velit odio auctor malesuada nulla odio nunc amet ac tempus."
          }
        />
        <AboutSectionComponent
          section_name={"Stack"}
          section_details={[
            <ul>
              <li>HTML</li>
              <li> CSS</li>
              <li>JavaScript</li> <li>React JS</li>
            </ul>,
          ]}
        />

</div>      </div>
    </>
  );
}

export default AboutContainer;
