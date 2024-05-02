import logo from './logo.svg';
import './App.css';
import NumberState from './Components/NumberState';
import OrderStatus from './Components/OrderStatus';
function App() {
  return (
    <div className="App">
      <NumberState></NumberState>
      <OrderStatus></OrderStatus>
    </div>
  );
}

export default App;
