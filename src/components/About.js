import React from 'react'

const About = ({tl}) => {
  return (
    <>
     <section className="about">
                <div className="main">
                    <img src={tl} alt="todo-logo"></img>
                    <div className="about-text">
                        <h2>About Company</h2>
                        <h5>Developing & Designing</h5>
                        <p>Our Company works field in Web Development. We can provide clean code and pixel perfect design.
                            We also deliver the projects more interactive along with support.We also make the websites user-friendly with
                            web animations.
                        </p>
                        <button type="button">Let's Talk</button>
                    </div>
                </div>
            </section>
    
    </>
  )
}

export default About
