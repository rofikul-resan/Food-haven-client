import mapImg from "./map.jpg";

const OurLocation = () => {
  return (
    <div className="chef-contener text-white">
      <div className="grid md:grid-cols-2 place-items-center gap-4 w-3/4 mx-auto py-5 md:py-20">
        <div>
          <h1 className="mb-6">CONTACT US </h1>

          <p>
            Phone number: (907) 486-2612 <br /> City: Kodiak <br /> State:
            Alaska (AK) Zipcode: 99615 <br /> Country: USA
          </p>
        </div>
        <div>
          <img src={mapImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurLocation;
