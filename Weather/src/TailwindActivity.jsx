import "./tailwind.css";
export default function TailWind() {
  return (
    <>
      <div className="flex flex-col border-2 border-black rounded-md h-[100vh]">
        <div className="text-center md:h-44 h-28 items-center bg-gradient-to-r from-cyan-500 to-blue-500 md:p-16 p-10 font-semibold md:text-4xl text-2xl text-white">
          <h1>News you can trust.</h1>
        </div>
        <div className="flex flex-col items-center ">
          <p className="md:text-4xl text-2xl font-bold md:mt-8 mt-10">
            Stay up to date with the Latest!
          </p>
          <p className="md:text-2xl text-base text-center md:mt-4 mt-6 font-medium">
            Subscribe to our newsletter for the latest news straight into your
            inbox
          </p>
          <form className="flex flex-col  mt-10 sm:w-1/4  w-4/5" action="">
            <input
              className="py-3 text-center  bg-gray-100 rounded-lg "
              type="email"
              name=""
              id=""
              placeholder="you@example.com"
            />
            <button
              className=" mt-8 bg-blue-500 text-white p-3 rounded-full"
              type="submit"
            >
              Subscribe Now
            </button>
          </form>
          <p className="mt-4 font-medium md:text-lg text-xs">
            we value your privacy
          </p>
        </div>
      </div>
    </>
  );
}
