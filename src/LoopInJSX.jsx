import React from "react";

function LoopInJSX({data}) {
  console.log(data);
  
  return (
    <>
      <div>LoopInJSX</div>
      <table border={"1"}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Prof</td>
            <td>ID</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.prof}</td>
              <td>{item.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default LoopInJSX;
