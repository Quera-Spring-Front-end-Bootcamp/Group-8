import useInput from "../../hooks/useInput";

import "./../../styles/index.css";

const ForgotPassword = () => {
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

  if (emailIsValid ) {
    formIsValid = true;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (emailInputHasError) {
      formIsValid = false;
      return;
    }

    if (!formIsValid) {
      formIsValid = false;
      return;
    }

    emailInputResetHandler();
  };

  const emailInputClasses = emailInputHasError
  ? "border-2 border-[#D7284B]"
  : "border border-gray-300";

  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div className="w-max p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-normal text-center">
          فراموشی رمز عبور
        </h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mt-7 mb-5">
            <label htmlFor="email">
              پست الکترونیک خود را وارد نمایید
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={emailChangedHandler}
              onBlur={emailBlurHandler}
              className={`w-full mt-1 px-3 py-2 rounded ${emailInputClasses}`}
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
              className="w-full mt-1 px-4 py-2 mb-5 text-white bg-[#208D8E] rounded"
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