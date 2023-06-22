import useInput from "../../../hooks/useInput";
import axios from "axios";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import { baseUrl } from "../../../App";

import "../../../styles/index.css";

const ForgotPassword = () => {
  const themeColor = localStorage.getItem("themeColor")
    ? localStorage.getItem("themeColor")
    : "#208D8E";
  const [formIsValid, setFormIsValid] = useState(false);
  const history = useHistory();

  let emailInputErrorMessage = "";

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    resetHandler: emailInputResetHandler,
  } = useInput((value) => {
    if (value.trim() === "") {
      emailInputErrorMessage = "لطفا پست الکترونیک خود را وارد نمایید";
      return false;
    } else {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        return true;
      } else {
        emailInputErrorMessage = "پست الکترونیک واردشده معتبر نیست";
        return false;
      }
    }
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setFormIsValid(true);
    if (emailInputHasError || !emailIsValid) {
      setFormIsValid(false);
    } else setFormIsValid(true);
    // emailInputResetHandler();
  };

  const emailInputClasses = emailInputHasError
    ? "border-2 border-[#D7284B]"
    : "border border-[#AAAAAA]";
  ////////////////////////////////////////////////////////////
  useEffect(() => {
    if (formIsValid) {
      const userData = {
        email: email,
      };
      ForgetUserPassword(userData);
    }
  }, [formIsValid]);

  const ForgetUserPassword = async (userData) => {
    try {
      const response = await axios.post(
        `${baseUrl}/auth/forget-password`,
        userData
      );
      console.log(response.data);
      history.push("/sendpassword");
    } catch (error) {
      alert("حسابی با این ایمیل ایجاد نشده است.");
      console.log(error);
      setFormIsValid(false);
    }
  };
  /////////////////////////////////////////////////////////////
  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div
        className="w-max p-6 bg-white rounded-[20px] shadow"
        style={{
          boxShadow: "0px 12px 50px rgba(0, 0, 0, 0.18)",
        }}
      >
        <h1 className="text-2xl font-normal text-center">فراموشی رمز عبور</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mt-7 mb-5">
            <label htmlFor="email">پست الکترونیک خود را وارد نمایید</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={emailChangedHandler}
              onBlur={emailBlurHandler}
              className={`w-full mt-1 px-3 py-2 border-solid rounded-md ${emailInputClasses}`}
            />
            {emailInputHasError && (
              <p className="mt-1 mr-4 text-sm text-[#D7284B]">
                {emailInputErrorMessage}
              </p>
            )}
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="w-full mt-1 px-4 py-2 mb-5 text-white rounded"
              style={{ backgroundColor: themeColor }}
            >
              ورود
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
