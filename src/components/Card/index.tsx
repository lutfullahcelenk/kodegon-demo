// @ts-nocheck
import React from "react";
import date from "../../assets/date.svg";
import useResponsive from "../../hooks/useResponsive";

type ICard = {
  data: any;
};

const Card = ({ data }: ICard) => {
  const { xs } = useResponsive();

  return (
    <div className="flex sm:flex-col shadow-lg mb-6 w-80 mx-2">
      <img src={data.image} alt="cardimage" className="object-cover block w-[168px] sm:w-full pr-5 sm:pr-0" />

      <div className="py-3 sm:py-6 sm:px-8 pr-3">
        <h3 className="font-bold text-base sm:text-lg tracking-wide">
          {data.title}
        </h3>

        <h4 className="font-medium text-sm pb-5"> {data.author} </h4>

        {!xs && (
          <p className="text-sm font-normal pb-6 w-60"> {data.content} </p>
        )}

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="flex">
            {!xs && <img src={date} alt="dateimage" className="pr-2" />}
            <p className="text-xs sm:text-sm">{data.date}</p>
          </div>
          <span className="text-orangeRed text-3xl">⟶</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
