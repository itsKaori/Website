import '../App.css';
import Menu from '../Menu';
import hello from '../hello.png';
import { Link } from'react-router-dom';


function Home() {
  return (
    <body className="App">
        <Menu />
    <div>
        <img src={hello} className="hello" alt="hello" />
        <h1>Welcome to my website</h1>
        <p>This is a simple website to showcase my skills and experience</p>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
    </div>
        <img src="../hello.png" className="hello" alt="hello" />
        
    </body>
  );
}

export default Home;