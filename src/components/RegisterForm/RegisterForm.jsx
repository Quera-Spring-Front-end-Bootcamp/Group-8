import { useReducer } from "react";

const reducer = (state, action) => {   //dispatch reducer
  switch (action.type) {
    case "userName":
      return { ...state, userName: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "terms":
      return { ...state, terms: action.payload };
    case "submit": {  //check validation of username & email & password and send error
      state.userNameIsValid = userNameValidation(state.userName);
      state.passwordIsValid = passwordValidation(state.password);
      state.emailIsValid = emailValidation(state.email);
      if (state.userNameIsValid && state.emailIsValid && state.passwordIsValid && state.terms) {
        console.log("form is valid");
      } else {

        if (!state.userNameIsValid) {
          console.log("نام کاربری نامعتبر است.");
        } else if (!state.emailIsValid) {
          console.log("ایمیل نامعتبر است.");
        } else if (!state.passwordIsValid) {
          console.log("رمز عبور نامعتبر است.");
        } else if (!state.terms) {
          console.log("پذیرفتن قوانین ضروری است.");;
        }
      }
    }
    default:
      return state;
  }
};

const userNameValidation = (userName) => {  //validation of username (include less 3 letters and have uppercase and lowercase letters)
  const userNameRegex = /^[\p{L}\s]{3,}$/u;
  return userNameRegex.test(userName);
};

const emailValidation = (email) => {    //validation of email
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
};

const passwordValidation = (password) => { // validation of password
  const minLength = 8;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const digitRegex = /\d/;
  const symbolRegex = /[!@#$%^&*]/;

  if (password.length < minLength) {
    return false; // رمز عبور باید حداقل ۸ کاراکتر داشته باشد
  }

  if (!uppercaseRegex.test(password)) {
    return false; // رمز عبور باید حداقل یک حرف بزرگ داشته باشد
  }

  if (!lowercaseRegex.test(password)) {
    return false; // رمز عبور باید حداقل یک حرف کوچک داشته باشد
  }

  if (!digitRegex.test(password)) {
    return false; // رمز عبور باید حداقل یک عدد داشته باشد
  }

  if (!symbolRegex.test(password)) {
    return false; // رمز عبور باید حداقل یک نماد داشته باشد
  }

  return true; // رمز عبور معتبر است
};

const RegisterForm = () => {

  const initialState = {
    userName: "",
    email: "",
    password: "",
    userNameIsValid:false,
    emailIsValid:false,
    passwordIsValid:false,
    terms: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => { // for inputs
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  const handleTermsChecked = (e) => {  // for terms
    dispatch({ type: e.target.name, payload: e.target.checked });
  };
  const handleSubmit = (e) => { //for form
    e.preventDefault();
    dispatch({ type: "submit" });
  };

  return (
    <div className="flex justify-center items-center h-[75vh]">
      <div
        className="flex flex-col items-center p-24px gap-29px absolute w-[402px] h-[486px] bg-[#FFFFFF] rounded-[20px]"
        style={{
          boxShadow: "0px 12px 50px rgba(0, 0, 0, 0.18)",
        }}
      >
        <h1 className="font-normal font-semibold text-[31px] leading-[50px] text-right text-[#000000] flex-none order-0 grow-0 m-[24px] mb-[29px]">
          ثبت نام در کوئرا تسک منیجر
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label
              className="not-italic font-normal text-sm leading-[21px] text-right text-[#000000] flex-none order-0 grow-0 mb-[8px] mr-[24px]"
              htmlFor="userName"
            >
              نام و نام خانوادگی
            </label>
            <input
              className="h-[40px] w-[354px] bg-white border border-solid rounded-md border-[#AAAAAA] flex-none order-1 self-stretch grow-0 focus:outline-none mb-[20px] mr-[24px] ml-[24px] pr-[10px]"
              type="text"
              id="userName"
              name="userName"
              value={state.userName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label
              className="not-italic font-normal text-sm leading-[21px] text-right text-[#000000] flex-none order-0 grow-0 mb-[8px] mr-[24px]"
              htmlFor="email"
            >
              پست الکترونیک
            </label>
            <input
              className="h-[40px] w-[354px] bg-white border border-solid rounded-md border-[#AAAAAA] flex-none order-1 self-stretch grow-0 focus:outline-none mb-[20px] mr-[24px] ml-[24px] pr-[10px]"
              type="text"
              id="email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label
              className="not-italic font-normal text-sm leading-[21px] text-right text-[#000000] flex-none order-0 grow-0 mb-[8px] mr-[24px]"
              htmlFor="password"
            >
              رمز عبور
            </label>
            <input
              className="h-[40px] w-[354px] bg-white border border-solid rounded-md border-[#AAAAAA] flex-none order-1 self-stretch grow-0 focus:outline-none mb-[20px] mr-[24px] ml-[24px] pr-[10px]"
              type="password"
              id="password"
              name="password"
              value={state.password}
              onChange={handleChange}
            />
          </div>

          <label className="flex felx-row gap-[10px] self-start font-dana not-italic font-normal text-[16px] laeding-[24px] text-right mr-[24px] cursor-pointer">
            <input
              className=" w-[18px] border border-solid rounded-md border-[#AAAAAA]"
              name="terms"
              type="checkbox"
              checked={state.terms}
              onChange={handleTermsChecked}
            />
            قوانین و مقررات را می پذیرم.
          </label>
          <button className="flex flex-row items-center justify-center p-[10px] gap-[10px] w-[354px] h-[48px] bg-[#208D8E] rounded-[6px] self-stretch grow-0 m-[24px] mt-[20px] font-dana not-italic font-bold text-[14px] leading-[22px] text-right text-[#FFFFFF] cursor-pointer">
            ثبت نام
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
