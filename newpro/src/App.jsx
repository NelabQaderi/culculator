import { useState } from "react";
import Calculator from "./components/Calculator/Calculator";
import Navbar from "./components/Navbar/Navbar";
import Results from "./Results/Results";


function App() {

  const [results, setResults] = useState({
    add: 0,
    subs: 0,
    mult: 0,
    divi: 0,
  })


  return (
    <div className="App">
      <Navbar />

      <div className="flex justify-center items-center my-8 w-12/12">
        <div className="bg-gray-900 p-8 m-2 flex justify-between w-10/12 text-center">
            <div className="w-2/4 ">
              <Calculator setResults={setResults} />
            </div>
            <div className="w-2/4 p-4">
              <Results results={results} />
            </div>
      </div>
    </div>
      
    </div>
  );
}

export default App;



