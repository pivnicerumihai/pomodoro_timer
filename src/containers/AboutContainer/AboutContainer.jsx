import React, { useContext } from "react";

import AboutSectionComponent from "../../components/AboutSectionComponent/AboutSectionComponent";
import TextComponent from "../../components/TextComponent/TextComponent";
import "./AboutContainer.css";

import themeContext from "../../context/themeContext";

function AboutContainer(props) {
  const ThemeContext = useContext(themeContext);

  return (
    <>
      <TextComponent className={"about_text"}>{"About App"}</TextComponent>
      <div
        className={`about_container ${
          ThemeContext === "light" ? "light" : "dark"
        }`}
      >
        <AboutSectionComponent
          section_style={"author"}
          section_name={"Author name"}
          section_name_style={"author_text"}
          section_details={"John Doe"}
          section_details_style={"author_details"}
        />
        <AboutSectionComponent
          section_style={"git"}
          section_name={"Github"}
          section_name_style={"git_text"}
          section_details={"Johndoe309"}
          section_details_style={"git_details"}
        />
        <AboutSectionComponent
          section_style={"description"}
          section_name={"App Description"}
          section_name_style={"description_text"}
          section_details={
            "Velit odio auctor malesuada nulla odio nunc amet ac tempus."
          }
          section_details_style={"description_details"}
        />
        <AboutSectionComponent
          section_style={"stack"}
          section_name={"Stack"}
          section_name_style={"stack_text"}
          section_details={[
            <ul>
              <li>HTML</li>
              <li> CSS</li>
              <li>JavaScript</li> <li>React JS</li>
            </ul>,
          ]}
          section_details_style={"stack_details"}
        />
      </div>
    </>
  );
}

export default AboutContainer;
