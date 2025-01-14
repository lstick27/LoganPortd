 import 'bootstrap/dist/css/bootstrap.min.css';
 import {NavBar} from "./NavBar";
 import Banner from './Banner';
 import {Footer} from './Footer';
 import {Skills} from './Skills';
 import {Projects} from './Projects';
 import {Contact} from './Contact.jsx';
 import "./app.css";

 function App() {
    return (
        <div>
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />

        </div>
    );
 };
 export default App;