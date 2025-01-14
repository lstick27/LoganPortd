 import meter1 from "./meter1.png";
 import meter2 from "./meter2.png";
 import meter3 from "./meter3-copy.png";
 import arrow1 from "./arrow1.png";
 import arrow2 from "./arrow2.png";
 import colorSharp from "./color-sharp.png";
 import Carousel from 'react-multi-carousel';
 import 'react-multi-carousel/lib/styles.css'
 import React from 'react';

 export const Skills = () =>{

    const responsive = {
        superLargeDesktop : {
            breakpoint : {max: 4000, min: 3000},
            items: 5
        },

        desktop: {
            breakpoint : {max: 4000, min: 1024},
            item: 3
        },

        tablet: {
            breakpoint: { max: 1024, min: 464},
            items: 2
        },

        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }

    };

    return (
        <section className="skill" id="skills">
            <div className="container">
              <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomin">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum  fgfgfhgfs</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="image" />
                                <h5>Game Win Rate</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="image" />
                                <h5>Good Student</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="image" />
                                <h5>3D Print Designing</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="image" />
                                <h5>Hot Sauce Lvl</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
             </div>
            </div>
            <img className="background-image-left" 
            src={colorSharp} alt= "Background Design" 
        />
       </section>
    );
 }