export const Contact=()=>{
    return(
        <section id='contact' className="contact">
            <h3>Contact me</h3>
            <p>📞 0502022009</p>
            <p>📧 nadavvivsa@gmail.com</p>

            <div className="social">
               <a rel="noreferrer" target={'_blank'} href="https://www.linkedin.com/in/nadav-vazana-5b4540213/"> <img src={require('../assets/imgs/linkedin.svg').default} alt="" /></a>
                <a rel="noreferrer" target={'_blank'} href="https://github.com/NadavVazana"><img src={require('../assets/imgs/github.svg').default} alt="" /></a>
            </div>

            <img className='me' src={require('../assets/imgs/me.jpg')} alt="" />
            

        </section>
    )
}