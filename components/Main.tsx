// Main component
import Image from "next/image";
import Button from "./Button";
import"../app/globals.css"
const Main = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-slate-200">
      {/* Commented out block */}
      {/* <div className="hero-map" /> */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image src="/camp.svg" width={39} height={29} />
        <h1 className="bold-52 lg:bold-78">Embark on Adventures with TravelNext.</h1>
        <p className="regular-16 mt-6 text-gray-50 xl:max-w-[520px]">
          Join us on every journey, discovering nature's timeless beauty. Explore the world effortlessly with our all-in-one app.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(6).fill(1).map((_, index) => (
              <Image src="/star.svg" key={index} width={24} height={24} />
            ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            1.9M
            <span className="regular-16 lg:regular-20 ml-1">Outstanding feedback</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title="Download App"
            variant="btn_dark_green"
            className="w-full sm:w-auto"
          />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
{/* 
        <div className="relative flex flex-1 items-start mt-12 ml-36">
          <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="regular-16 text-gray-20">Location</p>
                <Image src="/close.svg" alt="close" width={24} height={24} />
              </div>
              <p className="bold-20 text-white">Aguas Calientes</p>
            </div>

            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Distance</p>
                <p className="bold-20 text-white">173.28 mi</p>
              </div>
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Elevation</p>
                <p className="bold-20 text-white">2.040 km</p>
              </div>
            </div>
          </div>
        </div> */}
    </section>
  );
};

export default Main;
