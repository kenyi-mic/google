import Head from "next/head";
import Avatar from "../components/Avatar";
import {
  SearchIcon,
  ViewGridIcon,
  MicrophoneIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen hover:no-underline">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*header */}
      <header className=" flex  w-full p-5 justify-between text-sm text-gray-700">
        {/*left */}
        <div className="flex space-x-4 space-x items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/*right */}

        <div className="flex space-x-4 space-x items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          {/* Avator */}
          <Avatar url="https://cutt.ly/rml9g1m" />
        </div>
      </header>
      {/* body */}
      <form
        className="flex flex-col items-center mt-10 flex-grow w-4/5 "
        action=""
      >
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md border border-gray-200 rounded-full px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl ">
          <SearchIcon className="h-5 mr-3 text-gray-500 cursor-pointer" />
          <input
            ref={searchInputRef}
            type="text"
            className="outline-none flex-grow"
          />
          <MicrophoneIcon className="h-5 cursor-pointer text-blue-700" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn ">Google Search</button>
          <button className="btn">
            <a href="https://www.google.com/doodles">I'm Feeling Lucky</a>
          </button>
        </div>
      </form>

      {/*Footer */}
      <Footer />
    </div>
  );
}
