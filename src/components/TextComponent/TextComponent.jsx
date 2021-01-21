import React, {useContext} from 'react';

import ThemeContext from '../../context/themeContext';

import "./TextComponent.css"



function TextComponent({children,className, handleClick}) {

    const themeContext = useContext(ThemeContext);

    return (
    <p onClick={handleClick} className={className + " " + themeContext}>{children}</p>
    );
}

export default TextComponent;