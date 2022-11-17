import { useEffect, useState } from 'react'

export const Contact=()=>{
    const [classMsg,setClass] = useState('user-msg')




    const classChange = ()=>{
        setClass(prevState=> prevState + ' open')
        setTimeout(() => {
            setClass('user-msg')
        }, 4500);

    }

    return(
        <section id='contact' className="contact">
            <div className={classMsg}>
                <h1>Copied to clipboard!</h1>
            </div>
            <h3>Contact me</h3>
            <p>📞 0502022009</p>
            <p onClick={()=>(navigator.clipboard.writeText('nadavvivsa@gmail.com'),classChange())}>📧 nadavvivsa@gmail.com</p>

            <div className="social">
               <a rel="noreferrer" target={'_blank'} href="https://www.linkedin.com/in/nadav-vazana-5b4540213/"> <img src={require('../assets/imgs/linkedin.svg').default} alt="" /></a>
                <a rel="noreferrer" target={'_blank'} href="https://github.com/NadavVazana"><img src={require('../assets/imgs/github.svg').default} alt="" /></a>
            </div>

            <img className='me' src={require('../assets/imgs/me.jpg')} alt="" />
            

        </section>
    )
}