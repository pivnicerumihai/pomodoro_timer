import React, { useContext } from "react";

import ThemeContext from "../../context/themeContext";
import TextComponent from "../TextComponent/TextComponent";

import "./AboutSectionComponent.css";

function AboutSectionComponent({
  section_name,
  section_details,
  imgSrc,
}) {
  const themeContext = useContext(ThemeContext);

  return (
    <div className={"section " + themeContext}>
      <img src={imgSrc} />
      <TextComponent>
        {section_name}
      </TextComponent>
      <TextComponent>
        {section_details}
      </TextComponent>
    </div>
  );
}

export default AboutSectionComponent;
