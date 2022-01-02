import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Payment from "../../components/Payment/Payment";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import useRequest from "../../hooks/use-request";

const Register = () => {
  const [isNext, setIsNext] = useState(false);
  const user = useSelector((state) => state.user);
  const PostIsReady = useSelector((state) => state.PostIsReady);
  const { values } = useRequest("register", user, PostIsReady);
  const dispatch = useDispatch();

  useEffect(() => {
    if (values.length !== 0) {
      dispatch({ type: "PostWillNotReady" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);
  return !isNext ? (
    <RegisterForm setIsNext={setIsNext} />
  ) : (
    <Payment setIsNext={setIsNext} />
  );
};

export default Register;
