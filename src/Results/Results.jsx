function Results({ results }) {
  return (
    <div className="overflow-x-auto">
        <h1 className="text-lg mb-10">Results</h1>
        <table className="table">
            <thead>
                <tr>
                    <th></th>
                    <th>Operation</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1</th>
                    <td>Addition</td>
                    <td>{results.add}</td>
                </tr>
                <tr>
                    <th>2</th>
                    <td>Substraction</td>
                    <td>{results.subs}</td>
                </tr>
                <tr>
                    <th>3</th>
                    <td>Multiplicatio</td>
                    <td>{results.mult}</td>
                </tr>
                <tr>
                    <th>3</th>
                    <td>Division</td>
                    <td>{results.divi}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Results
