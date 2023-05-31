import { useForm } from "react-hook-form";
import { useState } from "react";

const AccountInfoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const [passwordType,setPasswordType]=useState("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const passwordPattern =/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W)(?!.*\s).{8,}$/;
  const userNamePattern = /^[a-zA-Z0-9_]+$/;

  const handleBlur = (fieldName) => {
    trigger(fieldName);
  };

  const togglePassword=()=>{
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  };

  return (
    <div className="w-[1440px] bg-[#FAFBFC]">
      <div className="flex flex-col mt-[170px] mr-[58px] gap-[35px] w-[354px]">
        <h2 className="font-bold text-[31px] leading-[49px] text-right text-[#1E1E1E]">
          اطلاعات حساب
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[25px] w-[354px] "
        >
          <div
            className="flex flex-col gap-[8px]"
            style={{ marginBottom: errors.email ? "-23px" : "0px" }}
          >
            <label
              htmlFor="email"
              className="font-normal text-[14px] leading-[21px] text-right text-[#000000] "
            >
              ایمیل
            </label>
            <input
              name="email"
              type="email"
              {...register("email", {
                required: true,
                pattern: emailPattern,
              })}
              onBlur={() => handleBlur("email")}
              className="w-[354px] h-[40px] bg-[#FFFFFF] border border-[#AAAAAA] rounded-[6px]  focus:outline-none pr-[10px]"
              style={{
                borderColor: errors.email ? "red" : "",
              }}
            />
            {errors.email && (
              <span className="ml-[3px] text-[10px] text-[#D7284B] text-left">
                پست الکترونیکی به صورت صحیح وارد نشده است.
              </span>
            )}
          </div>

          <div
            className="flex flex-col gap-[8px] relative"
            style={{ marginBottom: errors.password ? "-23px" : "0px" }}
          >
            <label
              htmlFor="password"
              className="font-normal text-[14px] leading-[21px] text-right text-[#000000] "
            >
              رمز عبور
            </label>
            <input
              type={passwordType}
              name="password"
              {...register("password", {
                required: true,
                pattern: passwordPattern,
              })}
              onBlur={() => handleBlur("password")}
              className="w-[354px] h-[40px] bg-[#FFFFFF] border border-[#AAAAAA] rounded-[6px]  focus:outline-none pr-[10px]"
              style={{
                borderColor: errors.password ? "red" : "",
              }}
            />
            {passwordType==="password" &&(
                <span className="material-symbols-rounded absolute top-[36px] right-[320px] text-[#BDC0C6] cursor-pointer" onClick={togglePassword}>visibility_off</span>
            )
            }
            {passwordType==="text" &&(
                <span className="material-symbols-rounded absolute top-[36px] right-[320px] text-[#BDC0C6] cursor-pointer" onClick={togglePassword}>visibility</span>
            )
            }
            {errors.password && (
              <span className="ml-[3px] text-[10px] text-[#D7284B] text-left">
                رمزعبور باید شامل حداقل ۸ کاراکتر ،حروف کوچک وبزرگ، اعداد و نماد
                باشد.
              </span>
            )}
          </div>

          <div
            className="flex flex-col gap-[8px]"
            style={{ marginBottom: errors.userName ? "-23px" : "0px" }}
          >
            <label
              htmlFor="userName"
              className="font-normal text-[14px] leading-[21px] text-right text-[#000000] "
            >
              نام کاربری
            </label>
            <input
              type="text"
              name="userName"
              {...register("userName", {
                required: true,
                pattern: userNamePattern,
              })}
              onBlur={() => handleBlur("userName")}
              className="w-[354px] h-[40px] bg-[#FFFFFF] border border-[#AAAAAA] rounded-[6px]  focus:outline-none pr-[10px]"
              style={{
                borderColor: errors.userName ? "red" : "",
              }}
            />
            {errors.userName && (
              <span className="ml-[3px] text-[10px] text-[#D7284B] text-left">
                رمزعبور باید شامل حداقل ۸ کاراکتر ،حروف کوچک وبزرگ، اعداد و نماد
                باشد.
              </span>
            )}
          </div>

          <button
            type="submit"
            className="flex items-center justify-center w-[354px] h-[38px] pr-[12px] pl-[12px] pb-[8px] pt-[8px] bg-[#208D8E] rounded-[6px] mt-[23px] font-bold text-[14px] leading-[22px] text-right text-[#FFFFFF] "
          >
            ثبت تغییرات
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountInfoForm;
