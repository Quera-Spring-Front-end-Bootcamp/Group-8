import './../../styles/index.css'
export const AuthHeader = () => {
    return (
        <div className="flex items-center justify-between mx-12 my-8">
            <div className='font-extrabold bg-gradient-to-r from-[#118C80] from-0% to-[#4AB7D8] to-120% bg-clip-text text-[transparent] text-2xl'><a href="#">کوئرا تسک منیجر</a></div>
            <div>
                <a className='text-base' href="#">ثبت نام نکردی؟</a>
                <button className='bg-[#208D8E] rounded-md py-2 px-7 text-white mr-2.5'>ثبت نام</button>
            </div>
        </div>
    );
}
