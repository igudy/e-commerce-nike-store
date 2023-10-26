import React from "react";

const StoriesCard = ({ title, text, img, url, like, time, by, btn }) => {
  return (
    <>
      <div className="overflow-hidden h-40 w-32 drop-shadow-xl text-white">
        <div>
          <img src={img} className={title} />
        </div>
        <div className="flex justify-between gap-5">
          <div className="left-0">{like}</div>
          <div className="">{time}</div>
          <div className="right-0 text-blue-700">#{by}</div>
        </div>
        <div>
          <p>{title}</p>
          <p>{text}</p>
        </div>
        <div className="w-full bg-black rounded-xl h-12">
          <a href={url}>
            <p className="text-white">{btn}</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default StoriesCard;
