import React from "react";
import useResponsive from "../../hooks/useResponsive";

const Video = () => {
  const { xs } = useResponsive();

  return (
    <div className="max-w-screen-md sm:m-16 mb-16">
      <iframe
        width="100%"
        height={xs ? "211": "511"}
        src="https://www.youtube.com/embed/5EZquD8JXro"
        title="Eurovision Song"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
