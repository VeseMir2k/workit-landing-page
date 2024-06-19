import './App.css';
import DemoInvitation from './components/DemoInvitation';
import Header from './components/Header';
import ProductBenefits from './components/ProductBenefits';

function App() {
  return (
    <div className="app">
      <Header />
      <ProductBenefits />
      <DemoInvitation />
    </div>
  );
}

export default App;
