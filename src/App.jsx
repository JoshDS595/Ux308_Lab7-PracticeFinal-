import "./App.css";

function App() {
  // 1. Hello Function
  function sayHello(name) {
    return `Hello, ${name}!`;
  }

  // 2. Square Feet to Acres
  function squareFeetToAcres(squareFeet) {
    return squareFeet / 43560;
  }

  // 3. Lawn Mowing Time
  function mowingTime(width, length, sqMetresPerMinute) {
    const area = width * length;
    return area / sqMetresPerMinute;
  }

  // 4. Air Quality
  function airQuality(aqi) {
    if (aqi >= 0 && aqi <= 50) {
      return "Good";
    } else if (aqi <= 100) {
      return "Moderate";
    } else if (aqi <= 150) {
      return "Unhealthy for Sensitive Groups";
    } else if (aqi <= 200) {
      return "Unhealthy";
    } else if (aqi <= 300) {
      return "Very Unhealthy";
    } else {
      return "Hazardous";
    }
  }

  // 5. Yee Ha
  function yee_ha(num) {
    if (num % 3 === 0 && num % 7 === 0) {
      return "Yee Ha";
    } else if (num % 3 === 0) {
      return "Yee";
    } else if (num % 7 === 0) {
      return "Ha";
    } else {
      return "Nada";
    }
  }

  // 6. Calculate Slope
  function calculateSlope(x1, y1, x2, y2) {
    const rise = y2 - y1;
    const run = x2 - x1;

    if (run === 0) {
      return "Undefined";
    }

    return rise / run;
  }

  return (
    <div className="container">
      <h1>Lab Functions Results</h1>

      <div className="card">
        <h2>1. Hello Function</h2>
        <p>{sayHello("Josh")}</p>
        <p>{sayHello("Maria")}</p>
        <p>{sayHello("David")}</p>
      </div>

      <div className="card">
        <h2>2. Square Feet to Acres</h2>
        <p>43,560 sq ft = {squareFeetToAcres(43560).toFixed(2)} acres</p>
        <p>87,120 sq ft = {squareFeetToAcres(87120).toFixed(2)} acres</p>
        <p>21,780 sq ft = {squareFeetToAcres(21780).toFixed(2)} acres</p>
      </div>

      <div className="card">
        <h2>3. Lawn Mowing Time</h2>
        <p>10m x 20m at 5 m²/min = {mowingTime(10, 20, 5).toFixed(2)} min</p>
        <p>15m x 30m at 10 m²/min = {mowingTime(15, 30, 10).toFixed(2)} min</p>
        <p>25m x 40m at 8 m²/min = {mowingTime(25, 40, 8).toFixed(2)} min</p>
      </div>

      <div className="card">
        <h2>4. Air Quality</h2>
        <p>AQI 25 = {airQuality(25)}</p>
        <p>AQI 75 = {airQuality(75)}</p>
        <p>AQI 125 = {airQuality(125)}</p>
        <p>AQI 175 = {airQuality(175)}</p>
        <p>AQI 250 = {airQuality(250)}</p>
        <p>AQI 350 = {airQuality(350)}</p>
      </div>

      <div className="card">
        <h2>5. Yee Ha</h2>
        <p>9 = {yee_ha(9)}</p>
        <p>14 = {yee_ha(14)}</p>
        <p>21 = {yee_ha(21)}</p>
        <p>10 = {yee_ha(10)}</p>
      </div>

      <div className="card">
        <h2>6. Slope of a Line</h2>
        <p>(1,2) to (3,6) = {calculateSlope(1, 2, 3, 6)}</p>
        <p>(2,4) to (6,12) = {calculateSlope(2, 4, 6, 12)}</p>
        <p>(0,0) to (5,10) = {calculateSlope(0, 0, 5, 10)}</p>
      </div>
    </div>
  );
}

export default App;