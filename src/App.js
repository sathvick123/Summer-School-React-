import './App.css';

import Navbar from './components/navbar/navbar'
import Home from './components/title/title.jsx'
import Footer from './components/footer/footer.jsx'
import Products from './components/Products/products.jsx'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Products />
      <Footer />
    </div>
  );
}

export default App;