import { useState } from "react";
import { Link } from "react-router-dom";

import useInput from "../../hooks/useInput";

import "./../../styles/index.css";

const Login = () => {
  const [formErrorMessage, setFormErrorMessage] = useState("");

  let formIsValid = false;
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
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value)) {
        return true;
      } else {
        emailInputErrorMessage = "پست الکترونیک واردشده معتبر نیست";
        return false;
      }
    }
  });

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    resetHandler: passwordInputResetHandler,
  } = useInput((value) => value.trim() !== "");

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (emailInputHasError || passwordInputHasError) {
      formIsValid = false;
      setFormErrorMessage("");
      return;
    }

    if (!formIsValid) {
      setFormErrorMessage("لطفاً پست الکترونیک و رمز عبور خود را وارد نمایید.");
      formIsValid = false;
      return;
    }

    setFormErrorMessage("");
    emailInputResetHandler();
    passwordInputResetHandler();
  };

  const onChangeHandler = () => {
    setFormErrorMessage("");
  };

  const emailInputClasses = emailInputHasError
    ? "border-2 border-[#D7284B]"
    : "border border-[#AAAAAA]";

  const passwordInputClasses = passwordInputHasError
    ? "border-2 border-[#D7284B]"
    : "border border-[#AAAAAA]";

  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div
        className="w-max p-6 bg-white rounded-[20px] shadow"
        style={{
          boxShadow: "0px 12px 50px rgba(0, 0, 0, 0.18)",
        }}
      >
        <h1 className="text-2xl font-normal text-center">
          به کوئرا تسک منیجر خوش برگشتی :)
        </h1>
        <form onSubmit={onSubmitHandler} onChange={onChangeHandler}>
          <div>
            {!formIsValid && formErrorMessage && (
              <p className="my-8 text-sm text-[#D7284B]">{formErrorMessage}</p>
            )}
          </div>
          <div className="mt-7 mb-5">
            <label htmlFor="email">پست الکترونیک</label>
            <input
              type="email"
              id="email"
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
          <div>
            <label htmlFor="password">رمز عبور</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={passwordChangedHandler}
              onBlur={passwordBlurHandler}
              className={`w-full mt-1 px-3 py-2 rounded ${passwordInputClasses}`}
            />
            {passwordInputHasError && (
              <p className="mt-1 mr-4 mb-2 text-sm text-[#D7284B]">
                لطفا رمز عبور خود را وارد نمایید
              </p>
            )}
          </div>
          <div className="mt-2 text-sm text-[#208D8E]">
            <Link to="/ForgotPassword">رمز عبور را فراموش کردی؟</Link>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="w-full px-4 py-2 mb-5 text-white bg-[#208D8E] rounded"
            >
              ورود
            </button>
            <div className="text-center">
              ثبت نام نکردی؟{" "}
              <Link className="text-[#208D8E]" to="/Register">
                ثبت نام
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
