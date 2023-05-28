import React from "react";

export default function Footer() {
  return (
    <>
      <div className="w-full h-[86px] absolute bottom-[60px] bg-darkGray flex justify-center items-center lg:h-[115px] lg:bottom-0">
        <p className="text-white text-center">© 2018. All rights reserved.</p>
      </div>
      <div className="w-full h-[60px] bg-darkGray fixed bottom-0 flex items-center text-center lg:hidden">
        <div className="w-1/2">
          <a className="text-white ">購物車</a>
        </div>
        <div className="w-1/2">
          <a className="text-white">會員</a>
        </div>
      </div>
    </>
  );
}
