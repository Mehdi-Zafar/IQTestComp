import { LuMailOpen } from "react-icons/lu";

export default function UpperPortion() {
  return (
    <div className="flex flex-col xl:flex-row justify-between gap-8 items-center">
      <div className="w-full xl:w-1/2 flex flex-col items-center xl:items-start gap-6">
        <span className="bg-[#5235E8] p-5 rounded-full w-fit">
          <LuMailOpen size={30} />
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-6xl text-center xl:text-start">
          Keep up with the latest
        </h2>
        <p className="text-xl md:text-2xl text-center xl:text-start">
          Join our newsletter to stay up to date on features and releases.
        </p>
      </div>
      <div className="w-full xl:w-1/2 flex flex-col gap-6">
        <h5 className="font-medium text-center text-2xl">Stay up to date</h5>
        <div className="flex justify-between gap-4 flex-col sm:flex-row items-center">
          <input
            type="text"
            placeholder="Enter your email"
            className="rounded-full flex-1 py-3 px-6 text-lg w-full"
          />
          <button className="rounded-full w-fit py-2 md:py-3 px-6 md:px-8 text-lg md:text-xl bg-[#5235E8]">
            Subscribe
          </button>
        </div>
        <p className="text-center text-xl">
          By subscribing you agree with our Privacy Policy
        </p>
      </div>
    </div>
  );
}
