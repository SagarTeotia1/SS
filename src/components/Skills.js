import EM from "../assets/icons/Event.png";
import meter2 from "../assets/img/meter2.svg";
import Tech from "../assets/icons/tech.png";
import SM from "../assets/icons/social-media.png";
import photo from "../assets/icons/photo.png";
// import Tech from "../assets/icons/tech.png";
import meter3 from "../assets/img/meter3.svg";
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
                                <img src={meter2} alt="Image" />
                                <h5>Startup
                                Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Content
                                Creation</h5>
                            </div>
                            <div className="item">
                                <img src={SM} alt="Image" />
                                <h5>Social Media
                                Management</h5>
                            </div>
                            <div className="item">
                                <img src={EM} alt="Image" />
                                <h5>Monitization
                                Strategies</h5>
                            </div>
                            <div className="item">
                                <img src={EM} alt="Image" />
                                <h5>Public
                                Relations</h5>
                            </div>
                            <div className="item">
                                <img src={EM} alt="Image" />
                                <h5>Research &
                                Development</h5>
                            </div>
                            <div className="item">
                                <img src={EM} alt="Image" />
                                <h5>Marketing</h5>
                            </div>
                            <div className="item">
                                <img src={Tech} alt="Image" />
                                <h5>Tech &
                                Development</h5>
                            </div>
                            <div className="item">
                                <img src={EM} alt="Image" />
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
