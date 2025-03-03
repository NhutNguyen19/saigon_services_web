import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [contact, setContact] = useState(""); // State để lưu email/số điện thoại
  const navigate = useNavigate();

  const handleChange = (e) => {
    setContact(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kiểm tra email hoặc số điện thoại hợp lệ
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex kiểm tra email
    const phoneRegex = /^\+?\d{10,}$/; // Regex kiểm tra số điện thoại (ít nhất 10 chữ số)

    if (!emailRegex.test(contact) && !phoneRegex.test(contact)) {
      alert("Vui lòng nhập email hoặc số điện thoại hợp lệ!");
      return;
    }

    console.log("Contact submitted:", contact);
    // Chuyển hướng đến trang SendOTP và truyền thông tin liên lạc
    navigate("/otp", { state: { contact } });
  };

  const handleBack = () => {
    navigate(-1); // Quay lại trang trước đó
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Nút quay lại */}
        <div className="mb-4">
          <button onClick={handleBack} className="text-blue-600 hover:text-blue-700">
            <FaArrowLeft size={20} />
          </button>
        </div>

        {/* Tiêu đề */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold">Đặt lại mật khẩu</h2>
        </div>

        {/* Form nhập Email/Số điện thoại */}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="text"
              value={contact}
              onChange={handleChange}
              placeholder="Email/Số Điện thoại"
              className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Nút tiếp theo */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-3 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              TIẾP THEO
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}