import React from "react";
import DiscoverCard from "@/components/Cards/DiscoverCrad";
function DiscoverSection() {
  return (
    <div>
      <h2 className="font-normal">Discover offeres around you.</h2>
      <button>See All Offers</button>
      <DiscoverCard
        year={2026}
        name="X3 30 xDrive"
        lease="Lease for $569/month."
        desc=""
      />
    </div>
  );
}

export default DiscoverSection;
