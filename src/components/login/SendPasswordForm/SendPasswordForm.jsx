const SendPasswordForm = () => {
  return (
      <div className="flex items-center justify-center h-[70vh]">
        <div className="w-max p-6 bg-white rounded shadow">
          <h1 className="text-3xl pb-6 text-center font-semibold">
            فراموشی رمز عبور
          </h1>
          <h5 className=" text-sm text-center font-normal">
            لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی کنید.
          </h5>
        </div>
      </div>
    );
  };
  
  export default SendPasswordForm;