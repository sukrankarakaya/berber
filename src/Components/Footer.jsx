import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary bottom-0 min-w-screen px-3">
      <div className="mx-auto w-full max-w-screen-xl ">
        <div className="md:flex md:justify-between">
          <div className="">
            <a href="https://flowbite.com/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Berber Sepeti</span>
            </a>
          </div>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between mt-1">
          <span className="text-base text-white sm:text-center dark:text-black-400">
            © 2024 <a href="https://flowbite.com/" className="hover:underline">BerberSepeti™</a>. Bütün Hakları Saklıdır.
          </span>
          <div className="flex justify-center sm:justify-end  sm:mt-0">
            {/* Place your social media icons here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
