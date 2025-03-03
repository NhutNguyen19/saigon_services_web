import { useState } from "react";
import { FaFacebook, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showToolFacebook, setShowToolFacebook] = useState(false);
  const [showToolGoogle, setShowToolGoogle] = useState(false);

  return (
    <div className="flex items-center justify-center w-full h-screen overflow-hidden bg-gray-200">
      <div className="p-8 bg-white rounded-lg shadow-md w-96">
        <div className="text-center">
          <h2 className="text-xl font-semibold">Đăng nhập</h2>
        </div>
        <form className="mt-4">
          <div className="mb-4">
            <input
              className="w-full p-3 border border-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              id="username"
              type="text"
              placeholder="Tài khoản"
              autoComplete="off"
            />
          </div>

          {/* Input mật khẩu có icon mắt */}
          <div className="relative mb-4">
            <input
              className="w-full p-3 pr-10 border border-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Mật khẩu"
            />
            <span
              className="absolute inset-y-0 flex items-center text-gray-500 cursor-pointer right-3 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </span>
          </div>

          <div className="flex items-center justify-between mb-4 text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Ghi nhớ tài khoản
            </label>
            <a href="/reset-password" className="text-blue-600 hover:underline">
              Quên mật khẩu?
            </a>
          </div>
          <button
            className="w-full py-3 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
            type="submit"
          >
            Đăng nhập
          </button>
        </form>

        <div className="mt-4 text-center text-gray-500">
          <span>Bạn chưa có tài khoản? </span>
          <a href="/register" className="text-blue-600 hover:underline">
            Đăng ký ngay
          </a>
        </div>

        {/* Đăng nhập với Facebook & Google */}
        <div className="text-center">
        <div className="flex items-center my-4 mb-8">
        <div className="flex-1 border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">HOẶC</span>
        <div className="flex-1 border-t border-gray-300"></div>
        </div>
          <ul className="flex justify-center mt-3 space-x-4">
            <li className="relative">
            {showToolFacebook && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-1 text-white text-sm bg-gray-800 rounded shadow-lg whitespace-nowrap">
                  Bạn muốn đăng nhập bằng Facebook?
                </div>
              )}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setShowToolFacebook(true)}
                  onMouseLeave={() => setShowToolFacebook(false)}
                className="flex items-center justify-center w-12 h-12 text-blue-500 transition border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white"
              >
                <FaFacebook size={32} />
              </a>
            </li>

            <li className="relative">
            {showToolGoogle && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-1 text-white text-sm bg-gray-800 rounded shadow-lg whitespace-nowrap">
                  Bạn muốn đăng nhập bằng Google?
                </div>
              )}
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setShowToolGoogle(true)}
                  onMouseLeave={() => setShowToolGoogle(false)}
                className="flex items-center justify-center w-12 h-12 text-red-500 transition border-2 border-red-500 rounded-full hover:bg-red-500 hover:text-white"
              >
                <FaGoogle size={32} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
