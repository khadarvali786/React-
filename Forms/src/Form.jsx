import {useState} from "react"
import FormData from "./FormData";

export default function Forms({addNewForm}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const handleFormData = (event) => {
    const { name, value } = event.target;
    setFormData((currData)=>{
        return { ...currData, [name]: value }
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
        name: '',
        email: '',
        password: ''
      })
      addNewForm(formData);
    };

  return (
    <>
      <h1>Forms</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          placeholder="Enter your name"
          onChange={handleFormData}
          required
        />
        <br />
        <br />
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleFormData}
          required
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          placeholder="Enter your password"
          onChange={handleFormData}
          required
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <hr />
    </>
  );
}
