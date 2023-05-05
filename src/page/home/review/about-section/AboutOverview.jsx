const AboutOverview = () => {
  return (
    <div data-theme="dark" className="bg-base-300 text-white">
      <div className="grid md:grid-cols-2 gap-10 py-10">
        <img className="w-11/12 mx-auto" src="/about-banner.jpg" alt="" />
        <div className="grid place-items-center">
          <div className="md:w-4/5 px-4">
            <h1 className="mb-6 font-about font-light">Our Food Haven</h1>
            <h1 className="mb-6  font-light">About Food Haven</h1>
            <h3 className="mb-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </h3>
            <p className="font-thin mb-6 ">
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures.
            </p>
            <button className="btn btn-success btn-outline">
              Discover more
            </button>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 w-3/4 mx-auto py-6 md:py-10 text-center gap-8">
        <div>
          <div className="bg-[#0d1317] mx-auto h-28 w-28 p-5 rounded-full ">
            <img src="/fish-icon-1-1.png" alt="" />
          </div>
          <h2 className="my-6 text-green-200">100% unique food</h2>
          <p>
            Fusce sed urna lobortis ultric mauris nibh molestie es nulla ac
            euismod.
          </p>
        </div>
        <div>
          <div className="bg-[#0d1317] mx-auto h-28 w-28 p-5 rounded-full ">
            <img src="/icon-7-1.png" alt="" />
          </div>
          <h2 className="my-6 text-green-200">authentic atmosphere</h2>
          <p>
            Fusce sed urna lobortis ultric mauris nibh molestie es nulla ac
            euismod.
          </p>
        </div>
        <div>
          <div className="bg-[#0d1317] mx-auto h-28 w-28 p-5 rounded-full ">
            <img src="/chef-hat-1-1.png" alt="" />
          </div>
          <h2 className="my-6 text-green-200">skilled chef</h2>
          <p>
            Curabitur dignissim sapien quis nisi ornar sed scelerisq ligula
            dignissim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutOverview;
