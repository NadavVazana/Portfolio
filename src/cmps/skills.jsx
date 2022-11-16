export const Skills=()=>{
    return(
        <section id='skills' className="skills-list">
            <h1>My Skills</h1>
            <div className="skills-grid">
                <img src={require('../assets/imgs/angula.png')} alt="" />
                 <img src={require('../assets/imgs/babel.svg').default} alt="" />
                <img src={require('../assets/imgs/css.svg').default} alt="" />
                <img src={require('../assets/imgs/express.svg').default} alt="" />
                <img src={require('../assets/imgs/git.svg').default} alt="" />
                <img src={require('../assets/imgs/html.svg').default} alt="" />
                <img src={require('../assets/imgs/js.svg').default} alt="" />
                <img src={require('../assets/imgs/mongo.svg').default} alt="" />
                <img src={require('../assets/imgs/nodejs.svg').default} alt="" />
                <img src={require('../assets/imgs/react.svg').default} alt="" />
                <img src={require('../assets/imgs/redux.svg').default} alt="" />
                <img src={require('../assets/imgs/sass.svg').default} alt="" />
                <img src={require('../assets/imgs/ts.svg').default} alt="" />
                <img src={require('../assets/imgs/vue.png')} alt="" /> 
                <img src={require('../assets/imgs/post.png')} alt="" />
            </div>
        </section>
    )
}