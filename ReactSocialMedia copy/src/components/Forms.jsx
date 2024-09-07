import { useContext, useState } from "react";
import "./Forms.css";
import { validateForm } from "./validation";
import { PostListContext } from "../Store/Post-List-Store";
import { useNavigate } from "react-router-dom";

const Forms = ({ forms, schema, validateOn }) => {
  const { addPost } = useContext(PostListContext);
  const [error, setErrors] = useState({});
  const [formData, setFormData] = useState({});
  const navigate = useNavigate()

  const handleValidate = (form, schema) => {
    const errors = validateForm(form, schema);
    const haveErrors = !!Object.keys(errors).length;
    setErrors(errors);
    return haveErrors;
  };

  const handleValidationOnEvent = (event) => {
    if (event.type === validateOn) {
      const { name, value } = event.target;
      const objData = {
        [name]: value,
      };
      var haveErrors = handleValidate(objData, {
        [name]: schema[name],
      });
    }
    if (haveErrors) return;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const obj = Object.fromEntries(formData);
    const haveErrors = handleValidate(obj, schema);
    if (haveErrors) {
      return;
    } else {
      alert("Form submitted successfully");
      addPost(obj);
      navigate('/')
      // Reset the form
      event.target.reset();
      setFormData({}); // Clear all form data
      setErrors({});
      
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    handleValidationOnEvent(e);
  };

  return (
    <div className="custom-form-container">
      <form className="custom-form" onSubmit={onSubmit}>
        {forms.map((form, index) => {
          let InputComponent = form.input === "textarea" ? "textarea" : "input";

          return (
            <label
              key={index}
              htmlFor={form.name}
              className="custom-form-label"
            >
              <span className="custom-form-label-text">{form.label}</span>

              <InputComponent
                className={`custom-form-input ${
                  form.input === "textarea" ? "custom-form-textarea" : ""
                } ${error[form.name] ? "invalid" : ""}`}
                onChange={handleInputChange}
                onBlur={handleValidationOnEvent}
                type={form.type}
                name={form.name}
                id={form.name}
                rows={form.rows}
                cols={form.cols}
                value={formData[form.name] || ""}
              />
              {error[form.name] && (
                <span className="errorMessage">{error[form.name]}</span>
              )}
            </label>
          );
        })}

        <button type="submit" className="custom-form-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms;
