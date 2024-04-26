import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center my-20">
      <p className="text-3xl">
        For Better Experience Download <br />{" "}
        <span className="flex justify-center items-center">Tomato App</span>
      </p>
      <div className="flex items-center justify-center gap-5">
        <img
          src={assets.play_store}
          alt=""
          className="cursor-pointer transition duration-300 hover:scale-[1.05]"
        />
        <img
          src={assets.app_store}
          alt=""
          className="cursor-pointer transition duration-300 hover:scale-[1.05]"
        />
      </div>
    </div>
  );
};
export default AppDownload;
