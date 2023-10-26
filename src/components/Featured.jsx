import { featured } from "../data/data";

const Featured = () => {
  return (
    <div className="sm:my-5 md:my-5 xsm:my-5 my-32 sm:text-center relative">
      <div className="flex flex-row sm:flex-col-reverse md:flex-col-reverse left-0 justify-between gap-8">
        <div className="">
          <div className="text-xl max-w-3xl sm:text-lg sm:mb-2 right-0  mt-4 items-center">
            <p className="font-bold text-blue-600 sm:text-2xl md:text-3xl xsm:text-xl xl:text-6xl text-6xl">
              {featured.heading}
            </p>
            <p className="font-extrabold text-slate-900 sm:text-xl xsm:text-xl md:text-2xl xl:text-6xl text-5xl">
              {featured.title}
            </p>
            <p className="text-slate-800 text-md my-3 sm:text-md xsm:text-md md:text-md xl:text-xl">
              {featured.text}
            </p>
            <div className="bg-slate-800 w-[200px] sm:w-full md:w-full xsm:w-full h-12 shadow-xl rounded-lg align-center cursor-pointer  hover:bg-slate-700">
              <p className="flex pt-2 justify-center items-center text-white mt-8">
                {featured.btn}
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-xl mr-5">
          <img
            src={featured.img}
            className="object-fill
            w-auto h-[50vh] lg:h-[40vh] md:h-[50vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[-15deg] hover:rotate-0 cursor-pointer z-20"
            alt={featured.img}
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
