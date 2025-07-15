import React, { useState } from "react";

const ProfilePage: React.FC = () => {
  const [form, setForm] = useState({
    email: "thailinh@gmail.com",
    name: "Trần Thái Linh",
    phone: "097548613",
    address: "Cầu Giấy, Hà Nội",
    password: "password123",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Changes saved! (demo only)");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFFAF4]">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-6">Thông tin cá nhân</h2>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input name="email" value={form.email} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Họ tên</label>
          <input name="name" value={form.name} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Số điện thoại</label>
          <input name="phone" value={form.phone} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Địa chỉ</label>
          <input name="address" value={form.address} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-6">
          <label className="block mb-1">Mật khẩu</label>
          <input name="password" type="password" value={form.password} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">Lưu thay đổi</button>
      </form>
    </div>
  );
};

export default ProfilePage;
