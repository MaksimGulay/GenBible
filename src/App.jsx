import "./App.css";
import LinePlot from "./LinePlot";
import data from "./data";
function App() {
  const sampleData = data;
  return (
    <>
      <h1>GedBible</h1>
      <LinePlot data={sampleData} />
    </>
  );
}

export default App;
