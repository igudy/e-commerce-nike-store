import { highlight } from "../data/data";

const Highlights = () => {
  return (
    <div className="sm:my-5 md:my-5 xsm:my-5 my-32 sm:text-center relative">
      <div className="flex flex-row sm:flex-col-reverse md:flex-col-reverse left-0 justify-between gap-10">
        <div>
          <img
            src={highlight.img}
            className="min-w-2xl object-fill
            w-auto h-[50vh] lg:h-[40vh] md:h-[50vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[-15deg] hover:rotate-0 cursor-pointer z-20"
            alt={highlight.img}
          />
        </div>
        <div>
          <div className="relative text-xl sm:text-lg sm:mb-2 right-0  min-w-2xl mt-4 items-center">
            <p className="font-bold text-blue-600 sm:text-2xl md:text-3xl xsm:text-xl xl:text-6xl text-8xl">
              {highlight.heading}
            </p>
            <p className="font-extrabold text-slate-900 sm:text-xl xsm:text-xl md:text-2xl xl:text-6xl text-6xl">
              {highlight.title}
            </p>
            <p className="text-slate-800 text-sm my-3">{highlight.text}</p>

            <div className="bg-slate-800 w-[200px] sm:w-full md:w-full xsm:w-full h-12 shadow-xl rounded-lg align-center cursor-pointer  hover:bg-slate-700">
              <p className="flex pt-2 justify-center items-center text-white">
                {highlight.btn}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
