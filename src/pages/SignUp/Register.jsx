import { useState } from "react";
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showToolFacebook, setShowToolFacebook] = useState(false);
  const [showToolGoogle, setShowToolGoogle] = useState(false);

  const [form, setForm] = useState({
    username: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form submitted", form);
    navigate("/otp");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <div className="text-center">
          <h2 className="text-xl font-semibold mb-6">Đăng ký tài khoản</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              placeholder="Tài khoản"
              value={form.username}
              onChange={handleChange}
              required
              className="w-full p-3 pr-10 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative mb-4">
        <input
          name="password"
          placeholder="Mật khẩu"
          value={form.password}
          onChange={handleChange}
          type={showPassword ? "text" : "password"}
          required
          className="w-full p-3 border pr-10 border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span
          className="absolute inset-y-0 right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-gray-700"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
        </span>
      </div>

      {/* Trường Xác nhận mật khẩu */}
      <div className="relative mb-4">
        <input
          name="confirmPassword"
          placeholder="Xác nhận mật khẩu"
          value={form.confirmPassword}
          onChange={handleChange}
          type={showPassword ? "text" : "password"}
          required
          className="w-full p-3 pr-10 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
          <div className="mb-4">
            <input
              type="text"
              name="phone"
              placeholder="Số điện thoại"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full p-3 pr-10 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
              Tiếp tục
            </button>
          </div>
        </form>

        <div className="mt-4 text-center text-gray-500">
          <span>Bạn đã có tài khoản? </span>
          <a href="/" className="text-blue-600 hover:underline">
            Đăng nhập ngay
          </a>
        </div>

        {/* <div className="text-center mb-3">Or</div> */}
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
                  Bạn muốn đăng ký bằng Facebook?
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
                  Bạn muốn đăng ký bằng Google?
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
}
