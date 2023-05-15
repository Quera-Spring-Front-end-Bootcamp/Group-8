import React, { useReducer } from 'react';
import "./../../styles/index.css";

const reducer = (state, action) => {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    case 'submit':
      console.log( state.email, state.password);
      return state;
    default:
      throw new Error();
  }
};

const Login = () => {
  const initialState = { email: '', password: '' };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({ type:e.target.name , payload:e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'submit' });
    
  };

  return (
    <div dir="rtl" className=" flex items-center justify-center">
    
      <div className="w-1/2 p-6 bg-white rounded shadow">
        <h1 className=" text-3xl font-semibold">به کوئرا تسک منیجر خوش برگشتی :)</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">ایمیل</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            
          />
          <label htmlFor="password">پسورد</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            
          />
          <div className=' text-[#208D8E]'>
            <a href="#">رمز عبور را فراموش کرده‌ای؟</a>
          </div>
          
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-[#208D8E] rounded"
          >
            ورود
          </button>
          <div className='text-center'>ثبت نام نکرده‌ای؟ <a className='text-[#208D8E]' href="#">ثبت نام</a></div>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
