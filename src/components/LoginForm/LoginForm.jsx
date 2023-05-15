import { useReducer } from "react";
import { Link } from 'react-router-dom'

import "./../../styles/index.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "submit":
      console.log(state.email, state.password);
      return state;
    default:
      throw new Error();
  }
};

const Login = () => {
  const initialState = { email: "", password: "", emailIsValid: false, passwordIsValid: false };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "submit" });
  };

  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div className="w-max p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-normal">
          به کوئرا تسک منیجر خوش برگشتی :)
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mt-7 mb-5">
            <label htmlFor="email">
              پست الکترونیک
            </label>
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="password">رمز عبور</label>
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded"
            />
          </div>
          <div className="mt-1 text-sm text-[#208D8E]">
            <Link to="/Forgotpassword">رمز عبور را فراموش کردی؟</Link>
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
