import React from "react";

const ExprienceCard = ({
  tanggal,
  keterangan,
  isSelected,
  onClick,
  progress,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex flex-col items-center  text-black group transition-all duration-300 py-8 ${
        isSelected ? "bg-primaryOrange-0" : "bg-primaryBlack-0"
      }`}
    >
      <h3
        className={`text-center font-primaryRegular transition-colors duration-300 ${
          isSelected ? "text-slate-50" : "text-[#4A4A4A] "
        }`}
      >
        {tanggal}
      </h3>
      <div className={"h-1 bg-[#4A4A4A] w-full relative my-4"}>
        <div
          className={`h-full absolute top-0 left-0transition-all duration-300 ${
            isSelected ? "bg-slate-50 delay-300" : "bg-slate-100 delay-0"
          }`}
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>
      <p
        className={`text-center max-w-[70%] font-primaryRegular transition-colors duration-300 ${
          isSelected ? "text-slate-50" : "text-[#4A4A4A] "
        }`}
      >
        {keterangan}
      </p>
    </button>
  );
};

export default ExprienceCard;
