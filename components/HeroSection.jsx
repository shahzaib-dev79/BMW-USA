import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
function HeroSection() {
  const links = [
    "Models",
    "Build Your Own",
    "Shopping",
    "Electric",
    "Owner",
    "About Us",
  ];
  return (
    <section className="w-full md:h-[90vh] text-white bg-[linear-gradient(to_right,black,transparent),url('/hero-background.webp')] bg-center bg-cover font-semibold bg-linear-to-r from-black to-transparent">
      <nav className="w-[90%] mx-auto flex items-center justify-between py-5 border-b-2 border-red">
        <div className="flex items-center justify-center gap-10 ">
          <img src="/navicon.svg" alt="icon" />
          {links.map((link) => {
            return <span key={link}>{link}</span>;
          })}
        </div>
        <div className="flex items-center gap-5">
          <a href="#">Choose your location BMW Center</a>
          <a href="#">
            <CgProfile size={25} />
          </a>
          <a href="#">
            <CiSearch size={25} />
          </a>
        </div>
      </nav>
      <div className="w-[90%] mx-auto my-35 flex flex-col gap-5 ">
        <h1>LEASE THE 2026</h1>
        <h1>BMW X5 xDRIVE40i.</h1>
        <h4>
          $869 Per month with $6929 due at signing. Plus, loyalty credit upto
        </h4>
        <h4>$2000 fir qualified lessees. Now through September 30th.</h4>
        <div>
          <button className="rounded-sm bg-blue-900 text-white  border-none px-10 mr-3">
            Offer details
          </button>
          <button className="bg-transparent text-white border-white rounded-sm px-10">
            See all offers
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
