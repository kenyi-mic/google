import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
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

          {/* Avator */}
        </div>
      </header>
      {/* body */}
      {/*Footer */}
    </div>
  );
}