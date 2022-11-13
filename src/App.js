import React from 'react'
import './App.css'
import myimg from './img/myimg.jpg'



const App = () => {
  return (
    <>
      <section className="header" id="home">
        <nav>
          <div className="nav">
            <div className="logo"><a href="/">Portfolio.</a></div>
            <ul className="menu">
              <i id="c-btn" className="fas fa-times"></i>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="media-icons">
              <a href="https://www.facebook.com/sandipmrj"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com/sandipmrj"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/sandipmrj/"><i className="fab fa-instagram"></i></a>
            </div>

            <div id="nav-bar"><i className="fas fa-bars"></i></div>

            <div className="scroll-button">
              <a href="#home"><i className="fas fa-arrow-up"></i></a>
            </div>
          </div>
        </nav>
      </section>
      <section className="home">
        <div className="text1">Hello,</div>
        <div className="text2">I'm Sandip Yadav</div>
        <div className="text3">UI/UX Designer</div>
        <div className="text4">From Gorakhpur</div>
        <div className="hirebtn"><a href="mailto:mrsandipmrj@gmail.com" ><button>Hire Me</button></a></div>
      </section>


      <section className="about" id="about">
        <h1>About Me</h1>
        <div className="des">
          <div className="img"><img src={myimg} alt="me" /></div>
          <div className="description">
            <h2>Desining Is My Passion</h2>
            <p>
              Graphic Design is My Passion is an expression often used by visual artists or graphic design firms in self-advertisement. On Tumblr, the clichéd phrase has been parodied as the sarcastic slogan for images featuring clip art cartoon characters superimposed over a dark, cloudy background.
            </p>
            <div className="cvdl"><a href="https://drive.google.com/file/d/1jpXfIFBrqRhC6f-H4GAyekfr1oDtrkN8/view?usp=drivesdk" download><button>Download CV</button></a></div>
          </div>
        </div>

      </section>

      <section className="skills" id="skills">
        <div className="content">
          <h1>My Skills</h1>
          <div className="skills-details">
            <div className="text">
              <h3>Skills Reflects Our Knowledge</h3>
              <p>School wise, I believe knowledge is the lesson that we can gain from school which I think is valuable, and only meaningful when we know how to apply it in our life.

Throughout my English class, I was immersed by a vast treasure of knowledge which I can and will be able to use them now and in the future. My English class has not only taught me new skills, concepts, and ideas, but it has also associated with the current events happening in my life. Therefore, I would like to share with you all a reflection of the knowledge that I have collected in this amazing class.</p>
              <div className="experience">
                <span className="t1">2</span>
                <span className="t2">Years Of </span>
                <span className="t3"> Experience</span>
              </div>
            </div>
            <div className="skills">
              <div className="skill">
                <div className="lang">HTML</div>
                <div className="percent">90%</div>
              </div>
              <div className="skill">
                <div className="lang">CSS</div>
                <div className="percent">80%</div>
              </div>
              <div className="skill">
                <div className="lang">JavaScript</div>
                <div className="percent">70%</div>
              </div>
              <div className="skill">
                <div className="lang">React</div>
                <div className="percent">60%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <h1>My Services</h1>
        <div className="boxes">
          <div className="box">
            <div className="content">
              <div className="icon">
                <i className="fas fa-desktop"></i>
              </div>

              <div className="topic">Web Devlopment</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui
                voluptatem
                eligendi?</p>
            </div>
          </div>

          <div className="box">
            <div className="content">
              <div className="icon">
                <i className="fas fa-chart-line"></i>
              </div>

              <div className="topic">Web Devlopment</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui
                voluptatem
                eligendi?</p>
            </div>
          </div>

          <div className="box">
            <div className="content">
              <div className="icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <div className=" topic">Web Devlopment
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui
                voluptatem
                eligendi?</p>
            </div>
          </div>

          <div className="box">
            <div className="content">
              <div className="icon">
                <i className="fab fa-android"></i>
              </div>

              <div className="topic">Web Devlopment</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui
                voluptatem
                eligendi?</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <h1>Contact Me</h1>
        <h3>Have Any Project</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi omnis quae ut aliquid eligendi nihil impedit
          sint voluptatibus ex ipsa aperiam, unde error dolorum placeat expedita! Animi voluptatibus, provident
          debitis, quidem eaque perspiciatis qui atque doloribus illum aperiam, quos dolorem! Quo ut molestias
        </p>
        <div className="chatbtn"><a href="https//:www.chatapp.com"><button>Let's Chat</button></a></div>
      </section>

      <section>
        <footer>
          <div className="footer">
            <span>Created By <a href="#home">Sandip Yadav</a> | &#169; 2022 All Rights Reserved</span>
          </div>
        </footer>

      </section>
    </>
  );
}

export default App;
