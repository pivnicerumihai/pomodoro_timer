import React, { useContext } from "react";

import ThemeContext from "../../context/themeContext";
import TextComponent from "../TextComponent/TextComponent";

import "./AboutSectionComponent.css";

function AboutSectionComponent({
  section_style,
  section_name_style,
  section_name,
  section_details_style,
  section_details,
  imgSrc,
}) {
  const themeContext = useContext(ThemeContext);

  return (
    <div className={section_style + " " + themeContext}>
      <img src={imgSrc} />
      <TextComponent className={section_name_style}>
        {section_name}
      </TextComponent>
      <TextComponent className={section_details_style}>
        {section_details}
      </TextComponent>
    </div>
  );
}

export default AboutSectionComponent;
