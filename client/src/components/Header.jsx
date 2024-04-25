const Header = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/header_img.png")',
        height: "34vw",
        margin: "30px auto",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        position: "relative",
      }}
    >
      <div className="absolute flex flex-col items-start gap-3 max-w-[50%] bottom-[10%] left-[6vw] animate-fade-in">
        <h2 className="text-6xl text-white font-bold">
          Order your favourite food here
        </h2>
        <p className="text-white">
          Savor the Flavor: Order Now for Delectable Delights Delivered Directly
          to Your Doorstep!
        </p>
        <button className="btn bg-white border-none rounded-full text-[#747474] font-semibold px-7 py-2">
          View Menu
        </button>
      </div>
    </div>
  );
};
export default Header;
