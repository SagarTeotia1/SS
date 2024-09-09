import EM from "../assets/icons/Event.png";
import Tech from "../assets/icons/tech.png";
import SM from "../assets/icons/social-media.png";
import photo from "../assets/icons/photo.png";
import content from "../assets/icons/Content.png";
import Marketing from "../assets/icons/marketing.png";
import skill from "../assets/icons/skill.png";
import Monitization from "../assets/icons/pricing.png";
import rnd from "../assets/icons/r7d.png";
import pr from "../assets/icons/pr.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Departments</h2>
                        <p>Departments in Startupsphere organize events, offer mentorship, promote brands, develop tech, and create revenue strategies, working together to drive startup growth and success.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={EM} alt="Image" />
                                <h5>Event
                                Management</h5>
                            </div>
                            <div className="item">
                                <img src={skill} alt="Image" />
                                <h5>Startup
                                Development</h5>
                            </div>
                            <div className="item">
                                <img src={content} alt="Image" />
                                <h5>Content
                                Creation</h5>
                            </div>
                            <div className="item">
                                <img src={SM} alt="Image" />
                                <h5>Social Media
                                Management</h5>
                            </div>
                            <div className="item">
                                <img src={Monitization} alt="Image" />
                                <h5>Monitization
                                Strategies</h5>
                            </div>
                            <div className="item">
                                <img src={pr} alt="Image" />
                                <h5>Public
                                Relations</h5>
                            </div>
                            <div className="item">
                                <img src={rnd} alt="Image" />
                                <h5>Research &
                                Development</h5>
                            </div>
                            <div className="item">
                                <img src={Marketing} alt="Image" />
                                <h5>Marketing</h5>
                            </div>
                            <div className="item">
                                <img src={Tech} alt="Image" />
                                <h5>Tech &
                                Development</h5>
                            </div>
                            <div className="item">
                                <img src={photo} alt="Image" />
                                <h5>Photography &
                                Videography</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
