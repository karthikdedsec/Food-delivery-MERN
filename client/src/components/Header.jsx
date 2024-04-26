const Header = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/header_img.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        width: "90%",
      }}
      className="md:flex min-w-full mx-auto rounded-3xl h-[64vw] md:h-[34vw]"
    >
      <div className="absolute flex flex-col items-start gap-3 max-w-[50%] bottom-[10%] left-[6vw] animate-fade-in">
        <h2 className="text-xl md:text-3xl lg:text-6xl text-white font-bold">
          Order your favourite food here
        </h2>
        <p className="text-white text-sm lg:text-md">
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
