import Image from "next/image";
import logo from "../../../../assets/growledge.png";

export default function Hero() {
  return (
    <section className="lg:2/6 text-center mb-28">
      <div className="flex justify-center items-center">
      <Image
        src={logo}
        alt="Growledge"
        width={722}
        height={280}
      />
      </div>
      <div className="text-6xl font-semibold text-gray-900 leading-none">
        Grow your career as a developer
      </div>
      <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
        Learn programming and web development the easy way! Get unlimited access
        to all of our courses.
      </div>
      <div className="mt-5 sm:mt-8 flex lg:justify-center">
        <div className="rounded-md shadow">
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
}
