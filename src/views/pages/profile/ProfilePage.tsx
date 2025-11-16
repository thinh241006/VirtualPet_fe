import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import Footer from "@/components/Footer";
import ProfileIcon from '@/assets/profile.svg';
import DocumentIcon from '@/assets/document.svg';
import PersonIcon from '@/assets/person.svg';
import Heart2Icon from '@/assets/heart2.svg';

const tabs = [
  { label: "Thông tin tài khoản", active: true },
  { label: "Danh sách yêu thích" },
  { label: "Đơn nhận nuôi" },
  { label: "Cá nhân hóa tìm kiếm" },
];

const ProfilePage: React.FC = () => {
  const [form, setForm] = useState({
    email: "thailinh@gmail.com",
    name: "Trần Thái Linh",
    phone: "097548613",
    address: "Cầu Giấy, Hà Nội",
    password: "password123",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Changes saved! (demo only)");
  };

  return (
    <div className="min-h-screen bg-[#FFFAF4] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-start pt-12 mb-50">
        <div className="bg-white rounded-xl shadow w-full max-w-5xl pt-10 pb-10">
          {/* Tabs - flush with card edge */}
          <div className="flex gap-x-0 ml-6">
            {tabs.map((tab, idx) => (
              <button
                key={tab.label}
                className={`flex items-center gap-1 px-4 py-3 font-medium text-sm focus:outline-none transition-colors whitespace-nowrap mb-2 ${
                  tab.active
                    ? "bg-[#FADCAB] text-black font-semibold rounded-full"
                    : "text-gray-500 hover:text-[#B88900] rounded-full"
                }`}
                disabled={idx === 0}
              >
                {idx === 0 && <img src={PersonIcon} alt="profile" className="w-4 h-4" style={{ filter: 'invert(27%) sepia(7%) saturate(1167%) hue-rotate(200deg) brightness(97%) contrast(90%)' }} />}
                {idx === 1 && <img src={Heart2Icon} alt="heart" className="w-4 h-4" style={{ filter: 'invert(27%) sepia(7%) saturate(1167%) hue-rotate(200deg) brightness(97%) contrast(90%)' }} />}
                {idx === 2 && <img src={DocumentIcon} alt="document" className="w-4 h-4" style={{ filter: 'invert(27%) sepia(7%) saturate(1167%) hue-rotate(200deg) brightness(97%) contrast(90%)' }} />}
                {idx === 3 && <img src={ProfileIcon} alt="person" className="w-4 h-4" style={{ filter: 'invert(27%) sepia(7%) saturate(1167%) hue-rotate(200deg) brightness(97%) contrast(90%)' }} />}
                {tab.label}
              </button>
            ))}
          </div>
          <div className="w-[90%] h-px bg-[#FCE7C7] my-4 mx-auto" />
          <div className="px-10">
            {/* Section Title */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-black">Thông tin cá nhân</h2>
            </div>

            {/* Avatar and Buttons */}
            <div className="flex items-center mb-8">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="avatar"
                className="w-16 h-16 rounded-full object-cover border mr-6"
              />
              <button
                type="button"
                className="px-5 py-2 text-sm rounded-full border border-gray-300 bg-white mr-3 hover:bg-gray-100"
              >
                Thay ảnh mới
              </button>
              <button
                type="button"
                className="px-5 py-2 text-sm rounded-full border border-gray-300 bg-white hover:bg-gray-100"
              >
                Xóa ảnh
              </button>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-10">
                <div>
                  <label className="block mb-2 font-semibold text-black">Email</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#F5B349]"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-black">Họ tên</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#F5B349]"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-black">Số điện thoại</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#F5B349]"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-black">Địa chỉ</label>
                  <input
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#F5B349]"
                  />
                </div>
                <div className="col-span-2 flex items-center mt-2">
                  <div className="w-full">
                    <label className="block mb-2 font-semibold text-black">Mật khẩu</label>
                    <div className="flex items-center">
                      <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={form.password}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#F5B349] pr-14"
                      />
                      <button
                        type="button"
                        className="ml-2 w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg bg-white hover:bg-gray-100"
                        onClick={() => setShowPassword((v) => !v)}
                        tabIndex={-1}
                      >
                        <FaPen size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-2 rounded-full shadow hover:bg-gray-800 transition text-base font-medium"
                >
                  Lưu thay đổi
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
