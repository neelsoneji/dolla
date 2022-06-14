import React from "react";
import { FaBars } from "react-icons/fa";
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItems,
    NavLinks,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";
export const Navbar = ({ toggle }) => {
    return ( <
        >
        <
        Nav >
        <
        NavbarContainer >
        <
        NavLogo to = "/" > DOLLA < /NavLogo> <
        MobileIcon onClick = { toggle } >
        <
        FaBars / >
        <
        /MobileIcon> <
        NavMenu >
        <
        NavItems >
        <
        NavLinks to = "personal" > Personal < /NavLinks> <
        /NavItems> <
        NavItems >
        <
        NavLinks to = "business" > Business < /NavLinks> <
        /NavItems> <
        NavItems >
        <
        NavLinks to = "Products" > Products < /NavLinks> <
        /NavItems> <
        NavItems >
        <
        NavLinks to = "about" > Services < /NavLinks> <
        /NavItems> <
        NavItems >
        <
        NavLinks to = "helpcenter" > Help Center < /NavLinks> <
        /NavItems> <
        /NavMenu> <
        NavBtn >
        <
        NavBtnLink to = "/signin" > Sign In < /NavBtnLink> <
        /NavBtn> <
        /NavbarContainer> <
        /Nav> <
        />
    );
};

export default Navbar;