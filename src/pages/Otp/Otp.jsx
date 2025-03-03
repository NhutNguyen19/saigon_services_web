import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SendOTP() {
  const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const navigate = useNavigate();

  // Đếm ngược thời gian
  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleChange = (index, value, e) => {
    // Chỉ cho phép nhập số
    if (!/^[0-9]*$/.test(value)) return; // Bỏ qua nếu không phải số

    // Nếu người dùng nhập vào ô đầu tiên, xóa toàn bộ OTP trước đó
    if (index === 0) {
      setOtp(value); // Chỉ giữ giá trị mới tại ô đầu tiên
    } else {
      const newOtp = otp.split("");
      newOtp[index] = value;
      setOtp(newOtp.join(""));
    }

    // Tự động chuyển con trỏ sang ô tiếp theo
    if (value && index < 5) {
      e.target.nextSibling.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Xử lý phím Backspace
    if (e.key === "Backspace" && index > 0) {
      const newOtp = otp.split("");
      newOtp[index] = ""; // Xóa nội dung ô hiện tại
      setOtp(newOtp.join(""));
      e.target.previousSibling.focus(); // Chuyển con trỏ về ô trước đó
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kiểm tra xem OTP có đầy đủ 6 chữ số hay không
    if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
      alert("Mã OTP phải chứa đúng 6 chữ số!");
      return;
    }
    console.log("OTP submitted:", otp);
    // Thêm logic để gửi mã OTP (API call hoặc xử lý khác)
  };

  const handleResend = () => {
    if (!canResend) return;

    console.log("Resending OTP...");
    alert("Mã OTP đã được gửi lại qua Zalo!");
    setCountdown(60);
    setCanResend(false);
    setOtp(""); // Xóa OTP khi gửi lại mã
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
          <h2 className="text-xl font-semibold">Nhập mã xác nhận</h2>
        </div>

        {/* Thông tin số điện thoại */}
        <div className="text-center mb-4">
          <p className="text-gray-600">
            Mã xác thực sẽ được gửi qua Zalo đến
          </p>
          <p className="text-blue-600 font-medium">
            <span className="inline-flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Zalo_Logo.png"
                alt="Zalo"
                className="w-5 h-5 mr-1"
              />
              (+84) 344 145 287
            </span>
          </p>
        </div>

        {/* Form nhập OTP */}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <div className="flex justify-center space-x-2">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={otp[index] || ""}
                  onChange={(e) => handleChange(index, e.target.value, e)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onFocus={() => {
                    // Khi ô đầu tiên được focus, xóa toàn bộ OTP
                    if (index === 0) {
                      setOtp("");
                    }
                  }}
                  className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))}
            </div>
          </div>

          {/* Thông báo thời gian chờ với đếm ngược */}
          <div className="text-center text-gray-500 mb-6">
            {countdown > 0
              ? `Vui lòng chờ ${countdown} giây để gửi lại.`
              : "Bạn có thể gửi lại mã ngay bây giờ!"}
          </div>

          {/* Nút tiếp tục */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-600 rounded-lg hover:bg-blue-700 text-white p-3 transition"
            >
              ĐĂNG NHẬP
            </button>
          </div>
        </form>

        {/* Liên kết gửi lại mã */}
        <div className="text-center">
          <button
            onClick={handleResend}
            className={`${
              canResend
                ? "text-blue-600 hover:underline"
                : "text-gray-400 cursor-not-allowed"
            }`}
            disabled={!canResend}
          >
            Gửi lại mã
          </button>
        </div>
      </div>
    </div>
  );
}