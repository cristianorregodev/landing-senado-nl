import { useState } from 'react'

import { Link } from 'react-router-dom'
import { NavBar } from './ui/NavBar'

export const Header = () => {
    const [isMobile, setisMobile] = useState(true)

    return (
        <header className="header__main">
            <div className="menu__responsive">
                <Link className="navbar__item" to="/">
                    <div className="header__logo">
                        <img src="/img/logo.webp" alt="Nuevo liberlalismo" />
                    </div>
                </Link>

                <div className="burguer">
                    <button
                        onClick={() => {
                            setisMobile(!isMobile)
                        }}
                    >
                        <img src="https://img.icons8.com/ios-filled/35/ffffff/menu--v4.png" />
                    </button>
                </div>
            </div>

            <div
                onClick={() => {
                    setisMobile(!isMobile)
                }}
                className={isMobile ? 'header__nav display_none' : 'header__nav'}
            >
                <NavBar />
            </div>

            <div className={isMobile ? 'header__redes display_none' : 'header__redes'}>
                <a href="" target="_blank">
                    <img src="https://img.icons8.com/material-sharp/20/ffffff/youtube-play.png" />
                </a>

                <a href="https://www.facebook.com/nvliberalismo" target="_blank">
                    <img src="https://img.icons8.com/material-sharp/20/ffffff/facebook-new.png" />
                </a>

                <a href="https://twitter.com/NvLiberalismo" target="_blank">
                    <img src="https://img.icons8.com/ios-filled/20/ffffff/twitter-circled--v1.png" />
                </a>
            </div>
        </header>
    )
}
