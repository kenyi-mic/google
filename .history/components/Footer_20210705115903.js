import { GlobeIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="px-8 py-3"></div>

      <div className="grid grid-cols-1">
        <GlobeIcon />
        Carbon Nutral since 2007{" "}
      </div>
      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </footer>
  );
}

export default Footer;
