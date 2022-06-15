import React from "react";
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    Sidebarmenu,
    SidebarLink,
    SidebtnWrap,
    SidebarRoute,
} from "./SidebarElements";
export const Sidebar = ({ isOpen, toggle }) => {
    return ( <
        SidebarContainer isOpen = { isOpen }
        onClick = { toggle } >
        <
        Icon onClick = { toggle } >
        <
        CloseIcon / >
        <
        /Icon> <
        SidebarWrapper >
        <
        Sidebarmenu >
        <
        SidebarLink to = "personal"
        onClick = { toggle } >
        Personal <
        /SidebarLink> <
        SidebarLink to = "business"
        onClick = { toggle } >
        Business <
        /SidebarLink> <
        SidebarLink to = "products"
        onClick = { toggle } >
        Products <
        /SidebarLink> <
        SidebarLink to = "about"
        onClick = { toggle } >
        About <
        /SidebarLink> <
        SidebarLink to = "helpcenter"
        onClick = { toggle } >
        Help Center <
        /SidebarLink> <
        /Sidebarmenu> <
        SidebtnWrap >
        <
        SidebarRoute to = "/signin" > Sign In < /SidebarRoute> <
        /SidebtnWrap> <
        /SidebarWrapper> <
        /SidebarContainer>
    );
};

export default Sidebar;