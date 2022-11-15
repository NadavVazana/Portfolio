export const About=()=>{
    return(
        <section id="about" className="about">
            <h1>About me</h1>

            <div className="skills">
            <div>
                <img src={require('../assets/imgs/social.svg').default} alt="" />
                <h3>Sociable and Communicative</h3>
                <p>Fits in any team and group of people, helpful and a good listener.</p>
            </div>

            <div>
                <img src={require('../assets/imgs/learn.svg').default} alt="" />
                <h3>Fast Learner </h3>
                <p>Excellent capacity to retain new things.</p>
            </div>
            <div>
                <img src={require('../assets/imgs/work.svg').default} alt="" />
                <h3>Work ethic</h3>
                <p>I have encouraged discipline and respect in diverse workplaces.</p>
            </div>
            </div>


            <div className="summary">
                <h3>Summary</h3>
                <p>My name is Nadav Vazana i'm 27 years old from Tel-Aviv. 
                Graduated from Coding Academy after 4 months of an intensive course.
                Studied Full-Stack Development with different frameworks such as: Angular, React, Vue.
                Built a lot of projects during this time which can be found on my Github.
                I have the eager to learn and the motivation to succeed!
                </p>
            </div>

        </section>
    )
}