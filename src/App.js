import './App.css';

import Navbar from './components/navbar/navbar'
import Title from './components/title/title.jsx'
import Footer from './components/footer/footer.jsx'
import Card from './components/Products/card.jsx'
import Products from './components/Products/products.jsx'




function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Title ></Title>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;