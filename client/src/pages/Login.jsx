import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mt-10">
      <h2 className="text-4xl font-semibold text-center">Login</h2>
      <div className="max-w-lg p-9 mx-auto rounded-xl bg-slate-100 my-10">
        <form>
          <div className="space-y-7">
            <label className="flex flex-col">
              <span>email</span>
              <input className="p-1" type="text" />
            </label>
            <label className="flex flex-col">
              <span>password</span>
              <input className="p-1" type="text" />
            </label>
            <div className="flex items-center gap-2">
              <p>New To Tomato?</p>
              <Link className="text-[tomato]">Sign up</Link>
            </div>
            <button className="btn w-full text-lg text-white bg-green-400">
              login
            </button>
          </div>
          <p className="text-center font-bold my-2">OR</p>
          <button className="btn w-full text-lg text-white bg-red-500">
            continue with <FcGoogle />
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
