import Image from "next/image";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  return (
    <Header>
      <Image
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        height={40}
        width={120}
        onClick={() => router.push("/")}
        className="cursor-pointer"
      />
    </Header>
  );
}

export default Header;
