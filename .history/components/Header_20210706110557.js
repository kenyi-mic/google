import Image from "next/image";

function Header() {
  return (
    <Header>
      <Image
        src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        height={40}
        width={120}
        className="cursor-pointer"
      />
    </Header>
  );
}

export default Header;
