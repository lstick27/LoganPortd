 import {Col} from 'react-bootstrap';

 export const ProjectCard = ({title, descipition, imgUrl}) =>{
    return (
        <Col size={12} sm={6} md={4}>
            <img src={imgUrl}/>
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{descipition}</span>
                </div>
                </Col>
    )
 }