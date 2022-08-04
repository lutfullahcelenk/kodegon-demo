import React, { useState } from "react";
import { content } from "../../constants/content";
import useResponsive from "../../hooks/useResponsive";

type IContent = {
  selected: any;
};

const Content = ({ selected }: IContent) => {
  const [moreText, setMoreText] = useState(false);
  const { xs } = useResponsive();
  const title = content.filter((text: any) => text.title === selected);

  return (
    <div className="flex flex-col p-5 sm:p-16">
      <h1 className="text-2xl sm:text-3xl font-bold border-b-2 pb-1 border-orangeRed max-w-fit">
        {title[0].title}
      </h1>

      <div className="max-w-screen-md flex flex-col text-justify">
        <p className="pb-4 text-base pt-10">{title[0].content1}</p>
        <p className="py-4 text-base">{title[0].content2}</p>

        {xs && (
          <div className="flex justify-center">
            <button
              onClick={() => setMoreText(true)}
              className={`uppercase border items-center ${
                moreText ? "hidden" : "flex"
              } border-orangeRed max-w-fit px-5 py-3 text-sm my-4`}
            >
              Yazının Devamı <span className="w-8 text-xl">+</span>
            </button>
          </div>
        )}

        <p className={`py-4 sm:flex ${moreText ? "flex" : "hidden"} text-base`}>
          {title[0].content3}
        </p>
        <p className={`py-4 sm:flex ${moreText ? "flex" : "hidden"} text-base`}>
          {title[0].content4}
        </p>
        <p className={`pt-4 sm:flex ${moreText ? "flex" : "hidden"} text-base`}>
          {title[0].content5}
        </p>

        {xs && (
          <div className="flex justify-center">
            <button
              onClick={() => setMoreText(false)}
              className={`uppercase border items-center ${
                !moreText ? "hidden" : "flex"
              } border-orangeRed max-w-fit px-5 py-3 text-sm my-4`}
            >
              Yazının Özeti <span className="w-8 text-xl">-</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
