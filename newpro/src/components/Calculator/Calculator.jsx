import { useState } from "react"

function Calculator({setResults}) {

  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault()
    const result = {
      add: Number.parseInt(firstValue)+Number.parseInt(secondValue),
      subs: firstValue-secondValue,
      mult: firstValue*secondValue,
      divi: firstValue/secondValue,
    }
    setResults(result)
  }

  const handleClear = (e) => {
    e.preventDefault()
    const result = {
      add: 0,
      subs: 0,
      mult: 0,
      divi: 0,
    }
    setResults(result)
    setFirstValue(0)
    setSecondValue(0)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="text-lg mb-10">Enter Numbers</h1>
        <input value={firstValue} onChange={(e) => setFirstValue(e.target.value)} type="number" placeholder="First Number" className="input input-bordered input-primary w-full max-w-xs mb-12" />
        <br />
        <input value={secondValue} onChange={(e) => setSecondValue(e.target.value)} type="number" placeholder="Second Number" className="input input-bordered input-primary w-full max-w-xs mb-5" />
        
        <div>
          <button onClick={handleClear} className="btn btn-outline btn-primary mr-5">clear</button>
          <button type="submit" className="btn btn-outline btn-secondary">Show Result</button>
        </div>
      </form>
    </div>
  )
}

export default Calculator
