import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  return (
    <Header>
      <Image
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        height={40}
        width={120}
        onClick={() => router.push("/")}
        className="cursor-pointer"
      />
      <form>
        <input ref={searchInputRef} type="text" />
      </form>
    </Header>
  );
}

export default Header;
