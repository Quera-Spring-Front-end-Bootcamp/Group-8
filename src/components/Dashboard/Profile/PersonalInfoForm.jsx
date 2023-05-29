import { useForm } from "react-hook-form";
const PersonalInfoForm = (userName) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const namePattern = /^[\p{L}]{3,}$/u;

  const handleBlur = (fieldName) => {
    trigger(fieldName);
  };

  return (
    <div className="w-[1440px] bg-[#FAFBFC]">
      <div className="flex flex-col mt-[170px] mr-[58px] gap-[35px] w-[354px]">
        <h2 className="font-bold text-[31px] leading-[49px] text-right text-[#1E1E1E]">
          اطلاعات فردی
        </h2>

        <div className="flex flex-row items-center gap-[16px]">
          <div className="flex justify-center items-center rounded-full bg-[#EAF562] text-[#000000] text-[34px] leading-[53px] text-right w-[99px] h-[99px] pt-[13px]">
            {(userName = "NM")}
          </div>
          <div className="flex flex-col gap-[12px]">
            <button className="w-[204px] h-[51px] p-[10px] rounded-[8px] border border-[#208D8E] font-medium text-[19px] text-[#208D8E] leading-[31px] text-right ">
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
          <div className="flex flex-col gap-[8px]" style={{marginBottom: errors.firstName ? "-23px" : "0px",}}>
            <label htmlFor="firstName" className="font-normal text-[14px] leading-[21px] text-right text-[#000000] ">
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

          <div className="flex flex-col gap-[8px]"style={{marginBottom: errors.lastName ? "-23px" : "0px",}}>
            <label htmlFor="lastName" className="font-normal text-[14px] leading-[21px] text-right text-[#000000] ">
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

          <div className="flex flex-col gap-[8px]"style={{marginBottom: errors.mobileNumber ? "-23px" : "0px",}}>
            <label htmlFor="mobileNumber" className="font-normal text-[14px] leading-[21px] text-right text-[#000000] ">
              شماره موبایل
            </label>
            <input
            type="number"
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

          <button type="submit" className="flex items-center justify-center w-[354px] h-[38px] pr-[12px] pl-[12px] pb-[8px] pt-[8px] bg-[#208D8E] rounded-[6px] mt-[23px] font-bold text-[14px] leading-[22px] text-right text-[#FFFFFF] ">ثبت تغییرات</button>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
