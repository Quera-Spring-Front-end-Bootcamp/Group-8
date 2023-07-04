import { useReducer, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../../App";
import { useHistory } from "react-router-dom";

let formErrorMessage;

const reducer = (state, action) => {
  //dispatch reducer
  switch (action.type) {
    case "USERNAME":
      if (action.onBlur === "blur") {
        state.userNameIsValid = userNameValidation(action.payload);
        return { ...state, userName: action.payload };
      } else {
        return { ...state, userName: action.payload };
      }

    case "EMAIL":
      if (action.onBlur === "blur") {
        state.emailIsValid = emailValidation(action.payload);
        return { ...state, email: action.payload };
      } else {
        return { ...state, email: action.payload };
      }

    case "PASSWORD":
      if (action.onBlur === "blur") {
        state.passwordIsValid = passwordValidation(action.payload);
        return { ...state, password: action.payload };
      } else {
        return { ...state, password: action.payload };
      }

    case "TERMS":
      return { ...state, terms: action.payload };

    case "SUBMIT": {
      //check validation of username & email & password and send error
      state.userNameIsValid = userNameValidation(state.userName);
      state.passwordIsValid = passwordValidation(state.password);
      state.emailIsValid = emailValidation(state.email);
      if (
        state.userNameIsValid &&
        state.emailIsValid &&
        state.passwordIsValid &&
        state.terms
      ) {
        return { ...state, formIsValid: true };
      } else {
        if (!state.userNameIsValid) {
          formErrorMessage = "نام کاربری نامعتبر است.";
          return { ...state, formIsValid: false };
        } else if (!state.emailIsValid) {
          formErrorMessage = "پست الکترونیکی نامتعبر است.";
          return { ...state, formIsValid: false };
        } else if (!state.passwordIsValid) {
          formErrorMessage = "رمز عبور نامعتبر است.";
          return { ...state, formIsValid: false };
        } else if (!state.terms) {
          formErrorMessage = "پذیرفتن قوانین ضروری است.";
          return { ...state, formIsValid: false };
        }
      }
    }
    default:
      return state;
  }
};

const userNameValidation = (userName) => {
  //validation of username (include less 3 letters and have uppercase and lowercase letters)
  const userNameRegex = /^[\p{L}\s]{3,}$/u;
  return userNameRegex.test(userName);
};

const emailValidation = (email) => {
  //validation of email
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
};

const passwordValidation = (password) => {
  // validation of password
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
  const themeColor=localStorage.getItem('themeColor')?localStorage.getItem('themeColor'):"#208D8E";
  const initialState = {
    userName: "",
    email: "",
    password: "",
    userNameIsValid: Boolean,
    emailIsValid: Boolean,
    passwordIsValid: Boolean,
    terms: false,
    formIsValid: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useHistory();

  const handleChange = (e) => {
    // for inputs
    dispatch({ type: e.target.name.toUpperCase(), payload: e.target.value });
  };

  const handleBlur = (e) => {
    // for blur inputs and show errors
    dispatch({
      type: e.target.name.toUpperCase(),
      payload: e.target.value,
      onBlur: "blur",
    });
  };

  const handleTermsChecked = (e) => {
    // for terms
    dispatch({ type: e.target.name.toUpperCase(), payload: e.target.checked });
  };
  
  const handleSubmit = (e) => {
    //for form
    e.preventDefault();
    dispatch({ type: "SUBMIT" });
  };
////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    if (state.formIsValid) {
      let parts = state.email.split("@");
      const username = parts[0];
      parts = state.userName.split(" ");
      const fName = parts[0];
      const lName = parts[1];
      const userData = {
        username: username, //required
        email: state.email, //required
        password: state.password, //required
        firstname: fName,
        lastname: lName,
        // "profile_url": "https://example.com/john_doe/profile.jpg",
        // "phone": "+1-555-555-5555"
      };
      registerUser(userData);
    }
  }, [state.formIsValid]);

  const registerUser = async (userData) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/register`, userData);
      console.log(response.data); // دریافت داده‌های پاسخ
      alert("ثبت نام شما با موفقیت انجام شد.");
      history.push("/login");
    } catch (error) {
      alert("این ایمیل قبلا ثبت شده است.");
      console.log(error);
    }
  };
///////////////////////////////////////////////////////////////////////////////////////////////
  const userNameErrorClasses = !state.userNameIsValid
    ? "border-2 border-[#D7284B]"
    : "border border-[#AAAAAA]";

  const emailErrorClasses = !state.emailIsValid
    ? "border-2 border-[#D7284B]"
    : "border border-[#AAAAAA]";

  const passwordErrorClasses = !state.passwordIsValid
    ? "border-2 border-[#D7284B]"
    : "border border-[#AAAAAA]";

  const userNameErrorMessage =
    "نام کاربری باید شامل حداقل ۳ حرف و حروف انگلیسی و یا فارسی باشد.";
  const emailErrorMessage = "پست الکترونیکی به صورت صحیح وارد نشده است.";
  const passwordErrorMessage =
    "رمزعبور باید شامل حداقل ۸ کاراکتر ،حروف کوچک وبزرگ، اعداد و نماد باشد.";

  return (
    <div className="flex justify-center items-center h-[75vh]">
      <div
        className="flex flex-col items-center p-24px gap-29px absolute w-[402px] h-[486px] bg-[#FFFFFF] rounded-[20px] pb-[24px]"
        style={{
          boxShadow: "0px 12px 50px rgba(0, 0, 0, 0.18)",
        }}
      >
        <h1 className="font-normal font-semibold text-[31px] leading-[50px] text-right text-[#000000] flex-none order-0 grow-0 m-[24px] mb-[29px]">
          ثبت نام در کوئرا تسک منیجر
        </h1>
        <div>
          {!state.formIsValid ? (
            <p className="m-[-20px] text-sm text-[#D7284B]">
              {formErrorMessage}
            </p>
          ) : (
            ""
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label
              className="not-italic font-normal text-sm leading-[21px] text-right text-[#000000] flex-none order-0 grow-0 mb-[8px] mr-[24px]"
              htmlFor="userName"
            >
              نام و نام خانوادگی
            </label>
            <input
              className={`h-[40px] w-[354px] bg-white border border-solid rounded-md border-[#AAAAAA] flex-none order-1 self-stretch grow-0 focus:outline-none mb-[22px] mr-[24px] ml-[24px] pr-[10px] ${userNameErrorClasses}`}
              type="text"
              id="userName"
              name="userName"
              value={state.userName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {!state.userNameIsValid ? (
              <p className="mt-[-19px] mr-[30px] mb-[5px] text-[10px] text-[#D7284B] order-2">
                {userNameErrorMessage}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col">
            <label
              className="not-italic font-normal text-sm leading-[21px] text-right text-[#000000] flex-none order-0 grow-0 mb-[8px] mr-[24px]"
              htmlFor="email"
            >
              پست الکترونیکی
            </label>
            <input
              className={`h-[40px] w-[354px] bg-white border border-solid rounded-md border-[#AAAAAA] flex-none order-1 self-stretch grow-0 focus:outline-none mb-[22px] mr-[24px] ml-[24px] pr-[10px] ${emailErrorClasses}`}
              type="text"
              id="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {!state.emailIsValid ? (
              <p className="mt-[-19px] mr-[30px] mb-[5px] text-[10px] text-[#D7284B] order-2">
                {emailErrorMessage}
              </p>
            ) : (
              ""
            )}
          </div>

          <div className="flex flex-col">
            <label
              className="not-italic font-normal text-sm leading-[21px] text-right text-[#000000] flex-none order-0 grow-0 mb-[8px] mr-[24px]"
              htmlFor="password"
            >
              رمز عبور
            </label>
            <input
              className={`h-[40px] w-[354px] bg-white border border-solid rounded-md border-[#AAAAAA] flex-none order-1 self-stretch grow-0 focus:outline-none mb-[22px] mr-[24px] ml-[24px] pr-[10px]  ${passwordErrorClasses}`}
              type="password"
              id="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {!state.passwordIsValid ? (
              <p className="mt-[-19px] mr-[30px] mb-[5px] text-[10px] text-[#D7284B] order-2">
                {passwordErrorMessage}
              </p>
            ) : (
              ""
            )}
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
          <button className="flex flex-row items-center justify-center p-[10px] gap-[10px] w-[354px] h-[48px] rounded-[6px] self-stretch grow-0 m-[24px] mt-[20px] font-dana not-italic font-bold text-[14px] leading-[22px] text-right text-[#FFFFFF] cursor-pointer"style={{backgroundColor:themeColor}}>
            ثبت نام
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
