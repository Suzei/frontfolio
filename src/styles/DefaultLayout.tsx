import { Header } from "@components/Header";
import { Nav } from "@components/Nav";
import { Outlet, useLocation } from "react-router-dom";
import { List } from 'phosphor-react';
import { useState } from 'react'
import { DefaultLayoutContainer, DefaultLayoutSpacing, OpenMenu } from "./DefaulLayoutStyle";

export function DefaultLayout() {
    const location = useLocation()
    const [menu, showMenu] = useState(false)

    return (
        <>
            <OpenMenu>
                <List size={30} onClick={() => showMenu(true)} />
            </OpenMenu>
            <Nav isShowing={menu} />
            <DefaultLayoutContainer>
                <Header variant={location.pathname === '/' ? 'home' : 'blog'} />
                <DefaultLayoutSpacing>
                    <Outlet />
                </DefaultLayoutSpacing>
            </DefaultLayoutContainer>
        </>
    )
}