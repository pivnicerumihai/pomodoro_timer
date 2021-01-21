import React, {useContext} from 'react';

import ThemeContext from '../../context/themeContext';

import "./ButtonComponent.css"

function ButtonComponent({children, className, handleClick}) {

const themeContext = useContext(ThemeContext);

    return (
        <button className={className + " " + themeContext} onClick={handleClick}>{children}</button>
    );
}

export default ButtonComponent;