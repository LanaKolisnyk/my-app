
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="container weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control search-input"
              id="search-input"
            />
          </div>
          <div className="col-3 p-0">
            <input
              type="submit"
              className="btn btn-primary w-100"
              id="searchbutton"
              value="Search"
            />
          </div>
        </div>
      </form>

      <div className="row">
        <div className="col-sm-6  WeatherInfo">
          <h1 id="location">
            Kyiv{" "}
            <img
              id="icon"
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Cloudy"
              className="temperature-container float-left"
            ></img>
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          {" "}
          <span className="temperature unit" id="tempnow">
            15
          </span>
          <span className="unit"> °C</span>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <ul>
            <li>
              Last updated:
              <strong>
                <div id="today">07.10.2022, 14:09</div>
              </strong>
              <div id="wea-dis"></div>
            </li>
            <li>
              <div>
                Humidity:
                <strong>
                  <span id="humidity">10</span>%
                </strong>
                , Wind:
                <strong>
                  <span id="wind">5</span> m/s
                </strong>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <footer>
        This project was coded by Lana Kolisnyk and is         <a
          href="https://github.com/LanaKolisnyk/my-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a> 
        {" "}and{" "}
        <a
          href="https://master--glowing-gelato-532b3d.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
        {" "}hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
