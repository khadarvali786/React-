import { useState } from "react";
import Form from "./Form";
export default function FormData({ data }) {
  const [alldata, setAllData] = useState([
    {
      name: "Khadar",
      email: "khadar@gamil.com",
    },
  ]);

  let addNewForm = (form) => {
    setAllData((currData) => [...currData, form]);
  };

  return (
    <>
      <Form addNewForm={addNewForm} />
      <div className="form-data">
        <h1>Submited From Data</h1>
        {alldata.map((data) => {
          return (
            <div
              style={{
                border: "1px solid white",
                marginBottom: "15px",
                borderRadius: "5rem",
              }}
              className="data"
              key={data.id}
            >
              <h2>Name: {data.name}</h2>
              <h2>Email: {data.email}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}
