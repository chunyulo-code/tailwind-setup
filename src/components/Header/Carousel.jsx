import React from "react";

const products = [{}, {}, {}, {}, {}, {}, {}, {}];

export default function Carousel() {
  return (
    <div className="flex justify-center py-10">
      <div className="max-w-[1160px] flex flex-wrap gap-10 justify-center">
        {products.map((_, index) => {
          return (
            <div
              className={`w-[360px] h-[480px] rounded-xl cursor-pointer ${
                index % 2 ? "bg-gray-100" : "bg-gray-300"
              }`}
              key={index}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
