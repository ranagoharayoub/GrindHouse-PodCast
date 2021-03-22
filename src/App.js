import { useEffect } from 'react';
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  useEffect(() => {
      document.title='GrindHouse'
  }, [])
  return (
    <div className="App">
     <Header></Header>
     <Body></Body>
     <Footer></Footer>
    </div>
  );
}

export default App;
