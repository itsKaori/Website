import './App.css';
import Menu from './Menu.js';

function aboutme() {
  return (
    <body className="App">
        <Menu />
        <div className="greeting">
            <img src={hello} className="greeting-png" alt="hello" />
        </div>
    </body>
  );
}

export default App;