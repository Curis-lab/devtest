import React from "react";

function Button({ label }: { label: string }) {
  return (
    <button className="list-none bg-[hsla(207,66%,92%,1)] p-2.5 rounded-full w-[175px] h-[55px] text-[hsla(206,31%,42%,1)] text-lg leading-[160%] font-medium flex justify-center items-center">
      {label}
    </button>
  );
}

export default Button;
