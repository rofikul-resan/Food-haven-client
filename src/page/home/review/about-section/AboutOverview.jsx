const AboutOverview = () => {
  return (
    <div data-theme="dark" className="bg-base-300 text-white">
      <div className="grid md:grid-cols-2 gap-10 py-10">
        <img className="w-11/12 mx-auto" src="/about-banner.jpg" alt="" />
        <div className="grid place-items-center">
          <div className="md:w-4/5">
            <h1 className="mb-6 font-about font-light">About Food Haven</h1>
            <h3 className="mb-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </h3>
            <p className="font-thin mb-6 font-about">
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
    </div>
  );
};

export default AboutOverview;
