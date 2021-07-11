import { GlobeIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="px-8 py-3">
        <p>Bangladesh</p>
      </div>

      <div className="grid grid-cols-1">
        <GlobeIcon />
        Carbon Nutral since 2007{" "}
      </div>
      <div className="flex justify-center space-x-8 whitespace-nowrap m">
        <p>Advertising </p>
        <p>Business</p>
        <p>How Search Works</p>
      </div>
      <div className="flex justify-center space-x-8 ">
        <p>Privacy</p>
        <p>Terms</p>
        <p>Settings</p>
      </div>
    </footer>
  );
}

export default Footer;
