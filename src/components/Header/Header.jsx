import logo from "./logo.png";
import cartIcon from "./cart.png";
import memberIcon from "./member.png";

export default function Header() {
  return (
    <>
      <div className="w-full h-[102px] lg:h-[140px] fixed top-0 bg-white lg:flex lg:items-center lg:border-darkGray lg:border-b-[40px] lg:px-6 lg:py-5">
        <div className="h-[52px] p-[14px] flex justify-center lg:h-full">
          <a href="https://google.com" className="">
            <img src={logo} className="h-full" alt="logo" />
          </a>
        </div>
        <ul className="h-[50px] flex justify-center items-center text-l bg-darkGray text-white lg:ms-6 lg:bg-transparent lg:text-darkGray">
          <li className="w-32 text-center border-r-2 border-gray-500 cursor-pointer hover:text-selected">
            女裝
          </li>
          <li className="w-32 text-center border-r-2 border-gray-500 cursor-pointer  hover:text-selected">
            男裝
          </li>
          <li className="w-32 text-center cursor-pointer  hover:text-selected">
            配件
          </li>
        </ul>
        <div className=" hidden lg:flex  lg:ml-auto lg:gap-5">
          <input
            className="rounded-3xl border border-gray-600 text-gray-600 px-2 block w-[214px] h-[44px]"
            type="text"
          />

          <a>
            <img src={cartIcon} />
          </a>
          <a>
            <img src={memberIcon} />
          </a>
        </div>
      </div>
    </>
  );
}
