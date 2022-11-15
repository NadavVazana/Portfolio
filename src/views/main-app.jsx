import { useState } from "react"
import { About } from "../cmps/about"
import { Contact } from "../cmps/contact"
import { Gallery } from "../cmps/gallery"
import { Home } from "../cmps/home"
import { MobileMenu } from "../cmps/mobile-menu"

export const MainApp = ()=>{
    const [isMenu,setMenu] = useState(false)

    return(
        <section className="main-app">
            <img onClick={()=>{setMenu(true)}} className='hamburger' src={require('../assets/imgs/menu.svg').default} alt="" />

            {isMenu && <MobileMenu setMenu={setMenu} />}
            <Home />
            <About />
            <Gallery />
            <Contact />
        </section>
    )
}