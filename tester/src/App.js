import Chart from './Chart';
import useGeoLocation from "react-ipgeolocation";
import ReactCountryFlag from "react-country-flag"
const lookup = require('country-code-lookup')

function App() {
  const location = useGeoLocation();
  return (
    <div className="p-6">
      <ul role="list" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
          <Chart region="Frankfurt (rewrite)" url="/frankfurt" />
          <Chart region="Frankfurt (direct)" url="https://test-frankfurt.onrender.com" />
          <Chart region="Ohio (rewrite)" url="/ohio" />
          <Chart region="Ohio (direct)" url="https://test-ohio.onrender.com" />
          <Chart region="Oregon (rewrite)" url="/oregon" />
          <Chart region="Oregon (direct)" url="https://test-oregon.onrender.com" />
          <Chart region="Singapore (rewrite)" url="/singapore" />
          <Chart region="Singapore (direct)" url="https://test-singapore-ak20.onrender.com" />
      </ul>
      <p className="pt-2">Your location: {location.country} <ReactCountryFlag countryCode={location.country} /></p>
    </div>
  );
}

export default App;
