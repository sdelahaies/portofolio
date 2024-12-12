"use client";
import { ReactTyped } from "react-typed";

const TypedText = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
        Data{" "}
        <ReactTyped
          strings={["Scientist", "Engineer"]}
          typeSpeed={90}
          loop
          backSpeed={50}
          cursorChar="|"
          showCursor={true}
        />
      </h1>
    </div>
  );
};

export default TypedText;