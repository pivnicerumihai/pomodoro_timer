import React, {useContext} from 'react';

import ThemeContext from "../../context/themeContext"

import ButtonComponent from '../ButtonComponent/ButtonComponent';
import TextComponent from '../TextComponent/TextComponent';
import "./NavbarComponent.css"

function NavbarComponent({showTimer,showAbout}) {

  const themeContext = useContext(ThemeContext);

    return (
      <nav className={"navbar " + themeContext}>
          <TextComponent className={"navbar_title"} handleClick={showTimer}>Pomotime</TextComponent>
          <ButtonComponent className={"navbar_button"} handleClick={showAbout}>{"About"}</ButtonComponent>
      </nav>
    );
}

export default NavbarComponent;