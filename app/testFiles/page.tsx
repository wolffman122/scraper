export default function Test() {
  return (

    <>
      More STuff
      <div className="shadow-lg hover:shadow-lg w-72 rounded-lg">
        <div className="bg-red-400 rounded-tl-lg rounded-tr-lg">Testing Cards</div>
        <div className="p-1">
          <h4>Version</h4>
          <p>v14.0.4</p>
        </div>
      </div>
      <table className="rounded-lg text-center border-separate">
        <thead className="" >
          <th className="rounded-tl-2xl bg-yellow-200 text-center">One</th>
          <th className="rounded-tr-sm bg-yellow-200 text-center">Two</th>
        </thead>
        <tbody className="rounded-b-sm">
          <tr>
            <td className="bg-blue-100 pl-12">1</td>
            <td className="bg-blue-100 pl-12">2</td>
          </tr>

          <tr>
            <td className="rounded-bl-sm bg-blue-100 pl-12">1</td>
            <td className="rounded-br-sm bg-blue-100 pl-12">2</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}