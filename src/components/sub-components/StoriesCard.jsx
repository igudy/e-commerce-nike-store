import truncate from "lodash/truncate";

const StoriesCard = ({ title, text, img, url, like, time, by, btn }) => {
  const truncatedText = truncate(text, {
    length: 100,
    omission: "...",
  });
  return (
    <>
      <div className="mx-6 h-[450px] w-[300px] rounded-2xl shadow-2xl text-black">
        <div>
          <img src={img} className="rounded-t-xl" alt={title} />
        </div>
        <div className="px-4">
          <div className="flex justify-between gap-5 my-3">
            <div className="left-0 text-sm">{like}</div>
            <div className="text-sm">{time}</div>
            <div className="right-0 font-bold text-blue-700 text-sm">#{by}</div>
          </div>
          <div>
            <p>{title}</p>
            <p className="text-sm">{truncatedText}</p>
          </div>
          <div className="flex text-center justify-center w-full my-5 bg-black rounded-xl h-10">
            <a href={url}>
              <p className="text-white text-center justify-center items-center">
                {btn}
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoriesCard;
