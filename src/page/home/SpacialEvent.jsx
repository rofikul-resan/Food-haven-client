const SpacialEvent = () => {
  return (
    <div className="py-8 px-4">
      <div className="text-4xl text-center space-y-3">
        <h1 className="font-semibold text-white">SEASONAL</h1>
        <div className="w-10 h-1 bg-orange-400 mx-auto"></div>
        <h1 className="font-about text-white/70 font-light">
          Enjoy Every Moment
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-10 md:w-9/12 mx-auto mt-6">
        <div>
          <img src="/event.jpg" />
          <div className="flex gap-10 text-white mt-10">
            <div className="flex ">
              <p className="text-3xl mt-10">$</p>
              <span className="text-[100px]">17</span>
            </div>
            <div className="space-y-4 mt-10">
              <p className="text-orange-400 font-semibold text-2xl">STARTER</p>
              <p className="text-xs w-7/12">
                Lorem ipsum dolor sit amet, consectetur a elit. In ut
                ullamcorper leo, eget euismod orci. Cum sociis natoque
                penatibus.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src="/event-2.jpg" />
          <div className="flex gap-10 text-white mt-10">
            <div className="flex ">
              <p className="text-3xl mt-10">$</p>
              <span className="text-[100px]">27</span>
            </div>
            <div className="space-y-4 mt-10">
              <p className="text-orange-400 font-semibold text-2xl">PREMIUM</p>
              <p className="text-xs w-7/12">
                Lorem ipsum dolor sit amet, consectetur a elit. In ut
                ullamcorper leo, eget euismod orci. Cum sociis natoque
                penatibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpacialEvent;
