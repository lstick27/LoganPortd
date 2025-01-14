 import react from 'react';

 import {Container,Row ,Col, Tab, Nav} from "react-bootstrap"
 import projectImg1 from './travel.png';
 import projectImg2 from './website.png';
 import projectImg3 from './Boost.png';
 import colorSharp2 from './color-sharp-2.png';
 import {ProjectCard} from './ProjectCard.jsx';

 import 'animate.css';
 import TrackVisibility from 'react-on-screen';

export const Projects = () =>{
const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projectImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projectImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projectImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projectImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projectImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projectImg3,
    },
  ];

  return (
    <section className="project" id="projects">
        <Container>
            <Row>
                <Col size={12}>
                    <TrackVisibility>
                        {(isVisible) =>
                            <div className={isVisible? "animate__animated animate__fadeIn" : ""}>
                                <h2>Projects</h2>
                                <p></p>
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInUp" className={isVisible? "animate__animated animate__slideInUp" : ""}>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {projects.map((project, index)=>{
                                                return(
                                                    <ProjectCard key={index} {...project}/>
                                                )
                                            })}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="section">
                                    </Tab.Pane>
                                </Tab.Content>
                                </Tab.Container>
                            </div>
                        }
                    </TrackVisibility>
                </Col>
            </Row>
        </Container>
    </section>
  )}