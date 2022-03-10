import Chart from './Chart';

function App() {
  return (
    <div className="p-6">
      <ul role="list" class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
          <Chart region="Frankfurt (rewrite)" url="/frankfurt" />
          <Chart region="Frankfurt (direct)" url="https://test-frankfurt.onrender.com" />
          <Chart region="Ohio (rewrite)" url="/ohio" />
          <Chart region="Ohio (direct)" url="https://test-ohio.onrender.com" />
          <Chart region="Oregon (rewrite)" url="/oregon" />
          <Chart region="Oregon (direct)" url="https://test-oregon.onrender.com" />
          <Chart region="Singapore (rewrite)" url="/singapore" />
          <Chart region="Singapore (direct)" url="https://test-singapore-ak20.onrender.com" />
      </ul>
    </div>
  );
}

export default App;
