import React from "react";

function DiscoverCrad({ year, name, lease, desc, link, imgUrl }) {
  return (
    <div className="" style={{ backgroundImage: `url(${imgUrl})` }}>
      <p>{year}</p>
      <h4>{name}</h4>
      <h5>{lease}</h5>
      <h6>{desc}</h6>
      <button>
        <a href={link}>Offer details</a>
      </button>
    </div>
  );
}

export default DiscoverCrad;
