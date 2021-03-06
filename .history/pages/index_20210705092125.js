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
      <header className="p-10">
        {/*left */}
        <div>
          <p>About</p>
          <p>Store</p>
        </div>
        {/*right */}
        <div>
          <p>Gmail</p>
          <p>Images</p>
        </div>
      </header>
      {/* body */}
      {/*Footer */}
    </div>
  );
}
