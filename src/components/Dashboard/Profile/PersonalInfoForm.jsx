import { useForm } from "react-hook-form";
import axios from "axios";
import { baseUrl } from "../../../App";
import { useState, useEffect } from "react";
///////////////////////////////////////////////////////////////////
const checkToken = (token, expireDate) => {
  const date = Date.now();
  if (date > expireDate && localStorage.getItem("refreshToken")) {
    const refreshToken = localStorage.getItem("refreshToken");
    const token = refreshTokenFunction(refreshToken);
    return token;
  }
  return token;
};

const refreshTokenFunction = async (refreshToken) => {
  try {
    const response = await axios.post(
      `${baseUrl}/auth/refreshtoken`,
      refreshToken
    );
    localStorage.setItem("accessToken", response.data.data.accessToken);
    localStorage.removeItem("tokenExpireDate");
    return response.data.data.accessToken;
  } catch (error) {
    console.log(error);
  }
};
///////////////////////////////////////////////////////////////////////
const PersonalInfoForm = () => {
  const themeColor = localStorage.getItem("themeColor")
    ? localStorage.getItem("themeColor")
    : "#208D8E";
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setValue,
  } = useForm();
  const [userName, setUserName] = useState();
  ////////////////////////////////////////////
  const onSubmit = async (data) => {
    try {
      // console.log(data);
      const token = localStorage.getItem("accessToken");
      const jwtExpireDate = localStorage.getItem("tokenExpireDate");
      const jwtToken = await checkToken(token, jwtExpireDate);
      const userId = localStorage.getItem("userId");
      const userData = {
        firstname: data.firstName,
        lastname: data.lastName,
        phone: data.mobileNumber,
      };
      const response = await axios.put(`${baseUrl}/users/${userId}`, userData, {
        headers: {
          "x-auth-token": jwtToken,
        },
      });
      console.log(response);
      alert("اطلاعات حساب شما با موفقیت ثبت گردید.");
      setUserName("");
    } catch (error) {
      console.log(error);
      alert("در ثبت اطلاعات مشکلی به وجود آمده است.");
    }
    setValue("firstName", "");
    setValue("lastName", "");
    setValue("mobileNumber", "");
    
  };
  ///////////////////////////////////////////
  const namePattern = /^[\p{L}]{3,}$/u;

  const handleBlur = (fieldName) => {
    trigger(fieldName);
  };
  ///////////////////////////////////////////////////////////
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    axios
      .get(`${baseUrl}/users/${userId}`)
      .then((response) => {
        const firstname = response.data.data.firstname.toUpperCase();
        const lastname = response.data.data.lastname.toUpperCase();
        setUserName(firstname[0] + lastname[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userName]);
  ////////////////////////////////////////////////////////////
  return (
    <div className="w-[1440px] bg-[#FAFBFC]">
      <div className="flex flex-col mt-[120px] mr-[58px] gap-[35px] w-[354px]">
        <h2 className="font-bold text-[31px] leading-[49px] text-right text-[#1E1E1E]">
          اطلاعات فردی
        </h2>

        <div className="flex flex-row items-center gap-[16px]">
          <div className="flex justify-center items-center rounded-full bg-[#EAF562] text-[#000000] text-[34px] leading-[53px] text-right w-[99px] h-[99px] pt-[13px]">
            {userName}
          </div>
          <div className="flex flex-col gap-[12px]">
            <button
              className="w-[204px] h-[51px] p-[10px] rounded-[8px] border font-medium text-[19px] leading-[31px] text-right "
              style={{ borderColor: themeColor, color: themeColor }}
            >
              ویرایش تصویر پروفایل
            </button>
            <span className="font-normal text-[12px] leading-[18px] text-right text-[#8A8989]">
              این تصویر برای عموم قابل نمایش است.
            </span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[25px] w-[354px] "
        >
          <div
            className="flex flex-col gap-[8px]"
            style={{ marginBottom: errors.firstName ? "-23px" : "0px" }}
          >
            <label
              htmlFor="firstName"
              className="font-normal text-[14px] leading-[21px] text-right text-[#000000] "
            >
              نام
            </label>
            <input
              type="text"
              name="firstName"
              {...register("firstName", {
                required: true,
                pattern: namePattern,
              })}
              onBlur={() => handleBlur("firstName")}
              className="w-[354px] h-[40px] bg-[#FFFFFF] border border-[#AAAAAA] rounded-[6px]  focus:outline-none pr-[10px]"
              style={{
                borderColor: errors.firstName ? "red" : "",
              }}
            />
            {errors.firstName && (
              <span className="ml-[3px] text-[10px] text-[#D7284B] text-left">
                نام باید حداقل سه حرف بوده و شامل اعداد و نمادها نباشد.
              </span>
            )}
          </div>

          <div
            className="flex flex-col gap-[8px]"
            style={{ marginBottom: errors.lastName ? "-23px" : "0px" }}
          >
            <label
              htmlFor="lastName"
              className="font-normal text-[14px] leading-[21px] text-right text-[#000000] "
            >
              نام خانوادگی
            </label>
            <input
              type="text"
              name="lastName"
              {...register("lastName", {
                required: true,
                pattern: namePattern,
              })}
              onBlur={() => handleBlur("lastName")}
              className="w-[354px] h-[40px] bg-[#FFFFFF] border border-[#AAAAAA] rounded-[6px]  focus:outline-none pr-[10px]"
              style={{ border: errors.lastName ? "1px solid red" : "" }}
            />
            {errors.lastName && (
              <span className="ml-[3px] text-[10px] text-[#D7284B] text-left">
                نام خانوادگی باید حداقل سه حرف بوده و شامل اعداد و نمادها نباشد.
              </span>
            )}
          </div>

          <div
            className="flex flex-col gap-[8px]"
            style={{ marginBottom: errors.mobileNumber ? "-23px" : "0px" }}
          >
            <label
              htmlFor="mobileNumber"
              className="font-normal text-[14px] leading-[21px] text-right text-[#000000] "
            >
              شماره موبایل
            </label>
            <input
              type="tel"
              name="mobileNumber"
              {...register("mobileNumber", {
                required: true,
                pattern: /^[0-9]{11}$/i,
              })}
              onBlur={() => handleBlur("mobileNumber")}
              className="w-[354px] h-[40px] bg-[#FFFFFF] border border-[#AAAAAA] rounded-[6px]  focus:outline-none pr-[10px]"
              style={{ border: errors.mobileNumber ? "1px solid red" : "" }}
            />
            {errors.mobileNumber && (
              <span className="ml-[3px] text-[10px] text-[#D7284B] text-left">
                شماره موبایل باید 11 رقم باشد.
              </span>
            )}
          </div>

          <button
            type="submit"
            className="flex items-center justify-center w-[354px] h-[38px] pr-[12px] pl-[12px] pb-[8px] pt-[8px] rounded-[6px] mt-[23px] font-bold text-[14px] leading-[22px] text-right text-[#FFFFFF] "
            style={{ backgroundColor: themeColor }}
          >
            ثبت تغییرات
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
