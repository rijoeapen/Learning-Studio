import { useEffect, useState } from "react";
import { InputWrapper, CheckboxType, SelectWrapper } from "./InputEle";

const Forms = () => {
  const [formObj, setFormObj] = useState({
    firstName: "",
    email: "",
    gender: "",
    course: [],
    date: "",
    country: "india",
  });

  const [evnt, setEvnt] = useState({});

  const [errorFields, setErrorFields] = useState({
    firstName: false,
    email: false,
    gender: false,
    course: false,
    date: false,
    country: false,
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      console.log("Form submitted successfully " + formObj);
      return;
    }
  };

  useEffect(() => {
    handleBlur();
  }, [formObj]);

  const handleChange = (event) => {
    setEvnt(event);
    const { type, name, value } = event.target;
    setFormObj((ele) => {
      if (type === "checkbox") {
        return checkBoxHandle(ele, event);
      } else {
        return {
          ...ele,
          [name]: value,
        };
      }
    });
  };

  const checkBoxHandle = (ele, event) => {
    const { value, checked } = event.target;
    if (checked) {
      return {
        ...ele,
        course: [...ele.course, value],
      };
    } else {
      let courseArr = [...ele?.course];
      courseArr = courseArr.filter((course) => course !== value);
      return {
        ...ele,
        course: courseArr,
      };
    }
  };

  const handleBlur = () => {
    if (Object.keys(evnt).length > 0) {
      const { type, name, value } = evnt.target;
      if (type === "checkbox") {
        setErrorFields((error) => {
          return {
            ...error,
            course: formObj.course.length === 0,
          };
        });
      } else {
        setErrorFields((error) => {
          return {
            ...error,
            [name]: value === "",
          };
        });
      }
    }
  };

  const isFormValid = () => {
    const errorObjCopy = { ...errorFields };
    const formFields = Object.keys(errorObjCopy);
    for (const field of formFields) {
      if (field === "course") {
        errorObjCopy[field] = formObj[field].length === 0;
      } else {
        if (formObj[field] === "") {
          errorObjCopy[field] = true;
        } else {
          errorObjCopy[field] = false;
        }
      }
    }

    setErrorFields(errorObjCopy);
    if (Object.values(errorObjCopy).some((error) => error === true)) {
      return false;
    }
    return true;
  };

  return (
    <section className="container">
      <form onSubmit={handleSubmit} noValidate>
        <h1>Registration</h1>
        <p className="caption">Please fill the fields...</p>
        <InputWrapper
          label="First Name"
          type="text"
          id="first-name"
          name="firstName"
          handleChange={handleChange}
          errorFields={errorFields}
          value=""
        />
        <InputWrapper
          label="Email"
          type="email"
          id="email"
          name="email"
          handleChange={handleChange}
          errorFields={errorFields}
          value=""
        />
        <CheckboxType
          type="radio"
          header="Gender"
          name="gender"
          handleChange={handleChange}
          box={["male", "female", "trans"]}
          label={["Male", "Female", "Transgender"]}
          errorFields={errorFields}
          errorHead="Gender"
        />
        <CheckboxType
          type="checkbox"
          header="Courses"
          name="course"
          handleChange={handleChange}
          box={["js", "html", "css", "node"]}
          label={["Javascript", "HTML", "CSS", "Nodejs"]}
          errorFields={errorFields}
          errorHead="Course"
        />
        <InputWrapper
          label="Date"
          type="date"
          id="date"
          name="date"
          handleChange={handleChange}
          errorFields={errorFields}
          value=""
        />
        <SelectWrapper
          id="country"
          handleChange={handleChange}
          errorFields={errorFields}
          header="Country"
          options={["India", "Canada", "USA"]}
          value={["india", "Canada", "usa"]}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Forms;
