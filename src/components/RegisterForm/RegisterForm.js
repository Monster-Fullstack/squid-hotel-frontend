import { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "../../pages/Auth/Form.module.scss";
import MainButton from "../Design/MainButton/MainButton";

const RegisterForm = ({ setIsNext }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const dispatch = useDispatch();

  const setValues = (eo) => {
    const type = eo.target.name;
    switch (type) {
      case "username":
        setUsername(eo.target.value);
        break;
      case "email":
        setEmail(eo.target.value);
        break;
      case "password":
        setPassword(eo.target.value);
        break;
      case "password_confirmation":
        setRePassword(eo.target.value);
        break;

      default:
        break;
    }
  };

  const sendToNext = (eo) => {
    eo.preventDefault();
    dispatch({ type: "getFormValues", username, email, password });
    setIsNext(true);
  };
  return (
    <form className={classes.form}>
      <h1 className={classes.main_title}>Register/Login/Contact Forms</h1>
      <label className={classes.input}>
        <input
          className={classes.input__field}
          name="username"
          id="username"
          onChange={setValues}
          type="text"
          placeholder=" "
        />
        <span className={classes.input__label}>Username</span>
      </label>
      <br />
      <label className={classes.input}>
        <input
          className={classes.input__field}
          name="email"
          id="email"
          onChange={setValues}
          type="email"
          placeholder=" "
        />
        <span className={classes.input__label}>Email</span>
      </label>
      <br />
      <label className={classes.input}>
        <input
          className={classes.input__field}
          name="password"
          id="password"
          onChange={setValues}
          type="password"
          placeholder=" "
        />
        <span className={classes.input__label}>Password</span>
      </label>
      <br />
      <label className={classes.input}>
        <input
          className={classes.input__field}
          name="password_confirmation"
          id="confirmation"
          onChange={setValues}
          type="password"
          placeholder=" "
        />
        <span className={classes.input__label}>Confirm Password</span>
      </label>
      <br />
      <br />
      <MainButton click={sendToNext} className={classes.btn}>
        Next
      </MainButton>
    </form>
  );
};

export default RegisterForm;
