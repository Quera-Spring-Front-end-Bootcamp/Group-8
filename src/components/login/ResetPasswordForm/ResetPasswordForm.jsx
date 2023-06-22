import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { baseUrl } from "../../../App";
import useInput from "../../../hooks/useInput";

import "../../../styles/index.css";

const ResetPassword = () => {
  const themeColor=localStorage.getItem('themeColor')?localStorage.getItem('themeColor'):"#208D8E";
  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  const history = useHistory();

  let passwordInputErrorMessage = "";
  let confirmPasswordInputErrorMessage = "";

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    resetHandler: passwordInputResetHandler,
  } = useInput((value) => {
    if (value.trim() !== "") {
      if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/.test(value)) {
        return true;
      } else {
        passwordInputErrorMessage =
          "رمز جدید باید بیشتر از ۸ کاراکتر داشته باشد";
        return false;
      }
    } else {
      passwordInputErrorMessage = "لطفاً رمز جدید خود را وارد کنید";
      return false;
    }
  });

  const {
    value: confirmPassword,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordInputHasError,
    valueChangeHandler: confirmPasswordChangedHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    resetHandler: confirmPasswordInputResetHandler,
  } = useInput((value) => {
    if (value.trim() !== "") {
      if (value === password) {
        return true;
      } else {
        confirmPasswordInputErrorMessage =
          "تاییدیه رمز با رمز جدید مطابقت ندارد";
        return false;
      }
    } else {
      confirmPasswordInputErrorMessage = "رمز جدید خود را مجدداً وارد نمایید";
      return false;
    }
  });



  const onSubmitHandler = (e) => {
    e.preventDefault();
  if (passwordIsValid && confirmPasswordIsValid) {
    setFormIsValid(true);
  }else
    if (passwordInputHasError || confirmPasswordInputHasError) {
      setFormIsValid(false);
      setFormErrorMessage("");
      return;
    }
else
    if (!formIsValid) {
      setFormErrorMessage("لطفاً رمز عبور جدید و تاییدیه آن را وارد نمایید.");
      setFormIsValid(false);
      return;
    }

    setFormErrorMessage("");
    // passwordInputResetHandler();
    // confirmPasswordInputResetHandler();
  };

  const onChangeHandler = () => {
    setFormErrorMessage("");
  };

  const passwordInputClasses = passwordInputHasError
    ? "border-2 border-[#D7284B]"
    : "border border-[#AAAAAA]";

  const confirmPasswordInputClasses = confirmPasswordInputHasError
    ? "border-2 border-[#D7284B]"
    : "border border-[#AAAAAA]";
  //////////////////////////////////////////////////////////////////
  useEffect(() => {
    if (formIsValid) {
      const userData = {
       // token: ,
       password:password,
      };
      ResetUserPassword(userData);
    }
  }, [formIsValid]);

  const ResetUserPassword = async (userData) => {
    try {
      const response = await axios.post(
        `${baseUrl}/auth/reset-password`,
        userData
      );
      console.log(response.data);
      alert("رمز عبور با موفقیت تعویض گردید.");
      history.push("/login");
    } catch (error) {
      setFormErrorMessage("لطفاً رمز عبور جدید و تاییدیه آن را وارد نمایید.");
      console.log(error);
      setFormIsValid(false);
    }
  };
  //////////////////////////////////////////////////////////////////

  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div
        className="w-max p-6 bg-white rounded-[20px] shadow"
        style={{
          boxShadow: "0px 12px 50px rgba(0, 0, 0, 0.18)",
        }}
      >
        <h1 className="text-2xl font-normal text-center">بازنشانی رمز عبور</h1>
        <form onSubmit={onSubmitHandler} onChange={onChangeHandler}>
          <div>
            {!formIsValid && (
              <p className="my-8 text-sm text-[#D7284B]">{formErrorMessage}</p>
            )}
          </div>
          <div className="mt-7 mb-5">
            <label htmlFor="password">رمز عبور جدید</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={passwordChangedHandler}
              onBlur={passwordBlurHandler}
              className={`w-full mt-1 px-3 py-2 border-solid rounded-md ${passwordInputClasses}`}
            />
            {passwordInputHasError && (
              <p className="mt-1 mr-4 text-sm text-[#D7284B]">
                {passwordInputErrorMessage}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="confirm-password">تایید رمز عبور</label>
            <input
              type="password"
              name="confirm-password"
              value={confirmPassword}
              onChange={confirmPasswordChangedHandler}
              onBlur={confirmPasswordBlurHandler}
              className={`w-full mt-1 px-3 py-2 rounded ${confirmPasswordInputClasses}`}
            />
            {confirmPasswordInputHasError && (
              <p className="mt-1 mr-4 mb-2 text-sm text-[#D7284B]">
                {confirmPasswordInputErrorMessage}
              </p>
            )}
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="w-full px-4 py-2 mb-5 text-white rounded"style={{backgroundColor:themeColor}}
            >
              بازنشانی رمز
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
