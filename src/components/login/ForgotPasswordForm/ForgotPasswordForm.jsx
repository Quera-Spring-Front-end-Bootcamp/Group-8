import useInput from "../../../hooks/useInput";

import "../../../styles/index.css";

const ForgotPassword = () => {
  const themeColor=localStorage.getItem('themeColor')?localStorage.getItem('themeColor'):"#208D8E";
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

  if (emailIsValid) {
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
    : "border border-[#AAAAAA]";

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
              className="w-full mt-1 px-4 py-2 mb-5 text-white rounded"style={{backgroundColor:themeColor}}
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