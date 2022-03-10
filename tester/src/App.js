import logo from './logo.svg';
import './App.css';
import Chart from './Chart';

function App() {
  return (
    <div className="App">
      <Chart region="Frankfurt (rewrite)" url="/frankfurt" />
      <Chart region="Frankfurt (direct)" url="https://test-frankfurt.onrender.com" />
      <Chart region="Ohio (rewrite)" url="/ohio" />
      <Chart region="Oregon (rewrite)" url="/oregon" />
      <Chart region="Singapore (rewrite)" url="/singapore" />
    </div>
  );
}

export default App;
