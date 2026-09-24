import Navbar from "@/components/Navbar";
function HeroSection() {
  return (
    <section className="bg-gray-800 bg-[linear-gradient(to_top,rgba(0,0,0,1),transparent),url('/mobile-hero-bg.webp')] bg-contain bg-top bg-no-repeat ">
      <Navbar />
      <div className="relative top-50  mx-auto text-white mt-40 mb-50 flex flex-col items-center gap-3 bg-[linear-gradient(to_top,rgba(0,0,0,1),rgba(0,0,0,0.1))] z-5">
        <h1>LEASE THE 2026</h1>
        <h1>BMW X5 xDRIVE40i.</h1>
        <h4 className="text-center text-lg w-70">
          $869 Per month with $6929 due at signing. Plus, loyalty credit upto
          $2000 for qualified lessees. Now through September 30th.
        </h4>
        <div className="w-full p-5">
          <button className="rounded-sm block my-3 w-full bg-blue-900 text-white  border-none px-10 mr-3">
            Offer details
          </button>
          <button className="bg-transparent my-3 w-full block text-white border-white rounded-sm px-10">
            See all offers
          </button>
        </div>

        <p className="mb-10">Some images maybe Computer Genrated</p>
      </div>
    </section>
  );
}

export default HeroSection;
