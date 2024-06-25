import './App.css';
import DemoInvitation from './components/DemoInvitation';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductBenefits from './components/ProductBenefits';

function App() {
  return (
    <div className="app">
      <Header />
      <ProductBenefits />
      <DemoInvitation />
      <Footer />
    </div>
  );
}

export default App;
