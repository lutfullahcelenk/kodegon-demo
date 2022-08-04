import React from "react";
import Masonry from "react-masonry-css";
import { generalData } from "../../constants/generalData";
import Card from "../Card";

const CardSection = () => {
  const breakpointColumnsObj = {
    default: 4,
    1350: 3,
    1024: 2,
    768: 1,
  };

  return (
    <div className="p-5 sm:px-16 w-max">
      <h2 className="text-2xl sm:text-3xl font-bold border-b-2 pb-1 border-orangeRed max-w-fit mb-8">
        Suspendisse Tempus
      </h2>
      
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex"
        columnClassName="bg-clip-padding"
      >
        {generalData.map((data: any) => (
          <Card key={data.id} data={data} />
        ))}
      </Masonry>
    </div>
  );
};

export default CardSection;
