import React from "react";

function TypeDecoration({ type }: { type: string }) {
  return (
    <div
      className={
        "border border-solid pl-3 pr-3 font-normal rounded-[4px] max-w-fit " +
        (type === "INVOKE"
          ? "border-[#2E4C3C]  bg-[#202E26] text-[#82F4BB] "
          : type === "DEPLOY"
          ? "border-[#3c506e]  bg-[#223655] text-[#d2e5ff]"
          : type === "DECLARE"
          ? "border-[#6b7d07]  bg-[#202e26] text-[#202e26]"
          : type === "L1_HANDLER"
          ? "border-[#a16340]  bg-[#3c3029] text-[#ffb388] "
          : "border-[#3c506e]  bg-[#223655] text-[#d2e5ff]")
      }
    >
      {type}
    </div>
  );
}

export default TypeDecoration;
