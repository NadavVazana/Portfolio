import { useState } from 'react'

export const Gallery=()=>{
    const [Hovered,setHover] = useState('')
    const [project,setProject] = useState('')


    return(
        <section id="gallery" className="gallery">
            <h1>My Projects</h1>
            <div className="projects">
                    <div onClick={()=>setProject('weebo')} onMouseLeave={()=>setHover('')}  onMouseEnter={()=>setHover('weebo')}  className={Hovered === 'weebo' ? 'hover' : ''}>
                        <img  src={require('../assets/imgs/weebo.jpg')}alt="" />
                    </div>
                    <div  onClick={()=>setProject('buzz')} onMouseLeave={()=>setHover('')}  onMouseEnter={()=>setHover('buzz')} className={Hovered === 'buzz' ? 'hover' : ''}>
                        <img src={require('../assets/imgs/buzz.jpg')} alt="" />

                    </div>
                    <div  onClick={()=>setProject('tok')} onMouseLeave={()=>setHover('')}  onMouseEnter={()=>setHover('tok')} className={Hovered === 'tok' ? 'hover' : ''}>
                        <img src={require('../assets/imgs/tok.jpg')} alt="" />
                    </div>
                    <div  onClick={()=>setProject('pokemon')} onMouseLeave={()=>setHover('')}  onMouseEnter={()=>setHover('pokemon')} className={Hovered === 'pokemon' ? 'hover' : ''}>
                        <img src={require('../assets/imgs/pokemon.jpg')} alt="" />
                    </div>
            </div>

            <div className="modal">
                {project !== '' &&<div onClick={()=>{setProject('')}} className='black-screen'></div>}
                {project === 'weebo' && 
                <section className='weebo'>
                <h1>Weebo</h1>
                <img src={require('../assets/imgs/weebo.jpg')} alt="weebo"/>
                <div className='links'>
                <a rel="noreferrer"  target={'_blank'} href="https://github.com/NadavVazana/Weebo"><img src={require('../assets/imgs/github.svg').default} alt="" /></a>
                <a rel="noreferrer" target={'_blank'} href="https://weebo.onrender.com/"><img src={require('../assets/imgs/weebo.png')} alt="" /></a>
                </div>
                </section>}
                {project ==='buzz' &&
                <section className='buzz'>
                    <h1>Buzz</h1>
                    <img src={require('../assets/imgs/buzz.svg').default} alt="" />
                    <div className='links'>
                <a  rel="noreferrer" target={'_blank'} href="https://github.com/NadavVazana/Buzz"><img src={require('../assets/imgs/github.svg').default} alt="" /></a>
                </div></section>} 
                {project === 'tok' && 
                <section className='tok'>
                <h1>Tok</h1>
                <img src={require('../assets/imgs/tok.svg').default} alt="weebo"/>
                <div className='links'>
                <a rel="noreferrer" target={'_blank'} href="https://github.com/NadavVazana/Tok"><img src={require('../assets/imgs/github.svg').default} alt="" /></a>
                </div>
                </section>}
                {project ==='pokemon' &&
                <section className='pokemon'>
                    <h1>Pokemon Discord's Bot</h1>
                    <img src={require('../assets/imgs/pokemon.svg').default} alt="" />
                    <div className='links'>
                <a  target={'_blank'} href="https://github.com/NadavVazana/Pokemon-Discord-Bot"><img src={require('../assets/imgs/github.svg').default} alt="" /></a>
                </div></section>} 

                
            </div>
        </section>
    )
}