import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaDribbble
} from 'react-icons/fa';
import { SiX } from "react-icons/si";
import handIcon from '../assets/hand.svg';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 mt-20" style={{ backgroundColor: '#FFFAF4' }}>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-16">
        {/* Logo and Description */}
        <div>
          <h2 className="text-lg font-semibold mb-2 text-black">Furever Home</h2>
          <p className="text-gray-600">
            Chung tay tìm kiếm mái ấm cho động vật bị bỏ rơi
          </p>
        </div>

        {/* Sản phẩm */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Sản phẩm</h3>
          <ul className="space-y-1 text-gray-600">
            <li><a href="#">Tính năng</a></li>
            <li><a href="#">Về chúng tôi</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-gray-600">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">Events</a></li>
          </ul>
        </div>

        {/* Cộng đồng */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Cộng đồng</h3>
          <ul className="space-y-1 text-gray-600">
            <li><a href="#">Discord</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </div>

        {/* Pháp lý */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Pháp lý</h3>
          <ul className="space-y-1 text-gray-600">
            <li><a href="#">Điều khoản</a></li>
            <li><a href="#">Bảo mật</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-15 px-4 mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm text-gray-600">
          © 2077 Untitled UI. All rights reserved.
        </p>
        <div className="flex space-x-4 text-gray-500 text-xl">
          <SiX className="hover:text-gray-700 cursor-pointer" />
          <FaLinkedin className="hover:text-gray-700 cursor-pointer" />
          <FaFacebook className="hover:text-gray-700 cursor-pointer" />
          <FaGithub className="hover:text-gray-700 cursor-pointer" />
          <div className="hover:text-gray-700 cursor-pointer">
            <a href='#' className="hover:text-gray-700 cursor-pointer">
              <img 
                src={handIcon}
                alt="Hand Icon"
                className="h-5 hover:opacity-75 transition-opacity cursor-pointer"
              />
            </a>
          </div>
          <FaDribbble className="hover:text-gray-700 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
