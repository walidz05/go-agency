import { memo } from "react";

function Heading({ children1, children2, textAlign = "" }) {
  return (
    <div
      className={` flex flex-col gap-2 ${
        textAlign === "center" ? "text-center" : "text-left"
      }`}
    >
      <p className="font-bold sm:text-[20px] text-secondary uppercase ">
        {children1}
      </p>

      <h2
        className={`font-normal w-[80%] m-auto text-[14px] sm:text-[16px] leading-[1.5] text-white normal-case`}
      >
        {children2}
      </h2>
    </div>
  );
}

export default memo(Heading);
