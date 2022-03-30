import Chart from './Chart';
import useGeoLocation from "react-ipgeolocation";
import ReactCountryFlag from "react-country-flag"
const lookup = require('country-code-lookup')

function App() {
  const location = useGeoLocation();
  return (
    <div className="p-6">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
          <Chart region="Frankfurt RENDER (rewrite)" url="/frankfurt" />
          <Chart region="Frankfurt RENDER (direct)" url="https://test-frankfurt.onrender.com" />
          <Chart region="Frankfurt NETLIFY (rewrite)" url="https://extraordinary-chaja-86c0d6.netlify.app/frankfurt" />
          <Chart region="Frankfurt VERCEL (rewrite)" url="https://vercel-rewrite-rho.vercel.app/frankfurt" />        
          <Chart region="Ohio RENDER (rewrite)" url="/ohio" />
          <Chart region="Ohio RENDER (direct)" url="https://test-ohio.onrender.com" />
          <Chart region="Ohio NETLIFY (rewrite)" url="https://extraordinary-chaja-86c0d6.netlify.app/ohio" />
          <Chart region="Ohio VERCEL (rewrite)" url="https://vercel-rewrite-rho.vercel.app/ohio" />
          <Chart region="Oregon RENDER (rewrite)" url="/oregon" />
          <Chart region="Oregon RENDER (direct)" url="https://test-oregon.onrender.com" />
          <Chart region="Oregon NETLIFY (rewrite)" url="https://extraordinary-chaja-86c0d6.netlify.app/oregon" />
          <Chart region="Oregon VERCEL (rewrite)" url="https://vercel-rewrite-rho.vercel.app/oregon" />
          <Chart region="Singapore RENDER (rewrite)" url="/singapore" />
          <Chart region="Singapore RENDER (direct)" url="https://test-singapore-ak20.onrender.com" />
          <Chart region="Singpore NETLIFY (rewrite)" url="https://extraordinary-chaja-86c0d6.netlify.app/singapore" />
          <Chart region="Singapore VERCEL (rewrite)" url="https://vercel-rewrite-rho.vercel.app/singapore" />
           </ul>
      <p className="pt-2">Your location: {location.country} <ReactCountryFlag countryCode={location.country} /></p>
    </div>
  );
}

export default App;
