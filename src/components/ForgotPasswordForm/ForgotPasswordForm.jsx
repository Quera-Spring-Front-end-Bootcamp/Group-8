import { useReducer } from "react";

import "./../../styles/index.css";

const reducer = (state, action) => {
    switch (action.type) {
      case "email":
        return { ...state, email: action.payload };
      case "submit":
        console.log(state.email);
        return state;
      default:
        throw new Error();
    }
  };

const ForgotPassword = () => {
  const initialState = { email: "" };
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
        <h1 className="text-2xl font-normal text-center">
          فراموشی رمز عبور
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mt-7 mb-5">
            <label htmlFor="email">
              پست الکترونیک خود را وارد نمایید
            </label>
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded"
            />
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