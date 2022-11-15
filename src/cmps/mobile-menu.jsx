export const MobileMenu = ({setMenu})=>{
    return(
        <section className="mobile-menu">

            <button onClick={()=>setMenu(false)}>X</button>
                     <nav>
            <h2>Navigate</h2>
                <a onClick={()=>setMenu(false)} href="#home">Home</a>
                <a onClick={()=>setMenu(false)} href="#about">About</a>
                <a onClick={()=>setMenu(false)} href="#gallery">Gallery</a>
                <a onClick={()=>setMenu(false)} href="#contact">Contact</a>
            </nav>
        </section>
    )
}