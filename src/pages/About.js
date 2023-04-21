import React from "react";
import "./About.css";
import ResumeButton from "../components/ResumeButton";
import "../components/Modal.css";

class About extends React.Component {
  render() {
    return (
      <main>
        <article>
          <section className="homeArticles">
            <div>
              <h3>Self Introduction</h3>
              <p>
                Hi there! My name is Max Dahlberg and I am a student at Campus
                Varberg. I am currently living in Varberg, a lovely town located
                on the west coast of Sweden. I am a dedicated student who takes
                my education seriously. I am pursuing a degree in computer
                science, and I love learning about all the latest advancements
                in technology. My dream is to one day create innovative software
                that can make a positive impact on society. When I'm not
                studying, I enjoy playing sports, particularly rock climbing. I
                also love spending time outdoors and exploring the beautiful
                nature that surrounds Varberg. I am lucky enough to live close
                to the coast, and I often take long walks along the beach to
                clear my mind and relax. One of my favourite things about Campus
                Varberg is the supportive community. My classNamemates and
                teachers are always there to lend a helping hand, and I feel
                like I am part of a family here. I also appreciate the modern
                facilities and cutting-edge technology that we have access to on
                campus. Overall, I am grateful for the opportunity to study at
                Campus Varberg and live in such a wonderful town. I am excited
                to see where my education takes me and to make a positive impact
                on the world.
              </p>
            </div>
            <hr />
            <div>
              <h3>My Skills</h3>
              <h4>HTML</h4>
              <div className="container">
                <div className="skills html">25%</div>
              </div>

              <h4>CSS</h4>
              <div className="container">
                <div className="skills css">20%</div>
              </div>

              <h4>JavaScript</h4>
              <div className="container">
                <div className="skills js">35%</div>
              </div>

              <h4>C#</h4>
              <div className="container">
                <div className="skills csharp">45%</div>
              </div>
            </div>
            <div>
              <ResumeButton />
            </div>
          </section>
        </article>
      </main>
    );
  }
}

export default About;
