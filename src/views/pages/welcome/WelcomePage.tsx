import React from "react";
import arrowIcon from '../../../assets/arrow.svg';
import catIcon from '../../../assets/cat.svg'
import searchButton from '../../../assets/searchButton.svg'
import cat1 from '../../../assets/cat1.png'
import cat2 from '../../../assets/cat2.png'
import cat3 from '../../../assets/cat3.png'
import cat4 from '../../../assets/cat4.png'
import cat5 from '../../../assets/cat5.png'
import cat6 from '../../../assets/cat6.png'
import cat7 from '../../../assets/cat7.png'
import cat8 from '../../../assets/cat8.png'

const pets = [
  {
    name: "Buddy",
    breed: "Golden retriever",
    age: "7 tháng",
    location: "Cầu Giấy, Hà Nội",
    image: cat1,
  },
  {
    name: "Dulce",
    breed: "Golden retriever",
    age: "7 tháng",
    location: "Cầu Giấy, Hà Nội",
    image: cat2,
  },
  {
    name: "Nika",
    breed: "Golden retriever",
    age: "7 tháng",
    location: "Cầu Giấy, Hà Nội",
    image: cat3,
  },
  {
    name: "Draco",
    breed: "Golden retriever",
    age: "7 tháng",
    location: "Cầu Giấy, Hà Nội",
    image: cat4,
  },
  {
    name: "Firulais",
    breed: "Golden retriever",
    age: "7 tháng",
    location: "Cầu Giấy, Hà Nội",
    image: cat5,
  },
  {
    name: "Chuck",
    breed: "Golden retriever",
    age: "7 tháng",
    location: "Cầu Giấy, Hà Nội",
    image: cat6,
  },
  {
    name: "Hulk",
    breed: "Golden retriever",
    age: "7 tháng",
    location: "Cầu Giấy, Hà Nội",
    image: cat7,
  },
  {
    name: "Brandon",
    breed: "Golden retriever",
    age: "7 tháng",
    location: "Cầu Giấy, Hà Nội",
    image: cat8,
  },
];

type PetProps = {
  name: string;
  breed: string;
  age: string;
  location: string;
  image: string;
};

const PetCard = ({ name, breed, age, location, image }: PetProps) => (
  <div className="bg-white rounded-xl shadow">
    <div className="w-full h-50% rounded-t-2xl overflow-hidden">
		<img src={image} alt={name} className="w-full h-full object-cover" />
	</div>
	<div className="px-4 pb-4">
		<h2 className="text-lg font-semibold">{name}</h2>
		<p className="text-gray-700">{breed} - {age}</p>
		<p className="text-sm text-gray-500">{location}</p>
	</div>
  </div>
);


const WelcomePage: React.FC = () => {
	return (
		<div className="bg-[#FFFAF4] bg-custom-cream">
			{/* Hero-img */}
			<div className="min-h-[500px] bg-gradient-to-r from-[#F5B349] to-white flex flex-col lg:flex-row items-center justify-between px-6 py-12 md:px-12 lg:px-24 w-full">
				{/* Text Content (Left Side) */}
				<div className="flex-1 max-w-2xl space-y-6 text-gray-800 lg:mr-12 xl:mr-24">
					<h1 className="text-4xl md:text-5xl font-bold leading-tight">
						Mang một người bạn về nhà ngay hôm nay
					</h1>
					
					<p className="text-lg md:text-xl font-normal">
						Hàng trăm thú cưng đang chờ một mái ấm và vòng tay yêu thương. Bạn có thể là người thay đổi cuộc đời của chúng – bắt đầu hành trình nhận nuôi ngay hôm nay.
					</p>

					<div className="flex flex-wrap gap-10">
						<div className="flex items-center">
							<button className="text-white bg-gradient-to-r from-[#101828] to-[#535862] rounded-4xl px-6 py-3">Cá nhân hóa tìm kiếm</button>
						</div>
						<div className="flex items-center">
							<span className="">Quy trình nhận nuôi
								<a href='#' className="inline-flex ml-3">
									<img 
										src={arrowIcon}
										alt="arrow Icon"
									/>
								</a>
							</span>
						</div>
					</div>
				</div>

				{/* Image Placeholder (Right Side) */}
				<div className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0">
					<div className="bg-gray-200 rounded-xl w-full max-w-md h-80 lg:h-96 flex items-center justify-center text-gray-400">
					[Pet Image Here]
					</div>
				</div>
			</div>

			{/* Search Bar */}
			<div className="relative max-w-2xl mx-auto mt-8 w-full bg-nav font-medium">
				<div className="flex items-center gap-3">
					<div className="flex-1 flex items-center bg-white border border-[#0A0D120F] rounded-4xl overflow-hidden shadow focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
						<input 
							type="text"
							placeholder="Tìm kiếm"
							className="py-2 px-4 flex-grow focus:outline-none"
						/>

						<div className="h-6 border-l border-[#F8CC85]"></div>
						<div className="relative group">
							<button className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900">
								<img src={catIcon} alt="cat icon" />
								<span className="ml-2">Mèo</span>
								<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
								</svg>
							</button>

							<div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg hidden group-hover:block z-10">
								<div className="py-1">
									<a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Chó</a>
								</div>
							</div>
						</div>
					</div>
					<button className="flex items-center">
						<img src={searchButton} alt="search button" className="h-12 w-12 mt-2" />
					</button>
				</div>
			</div>

			{/* Pet Cards Grid */}
			<div className="w-[80%]	mx-auto px-4 mt-10">
				<button className="bg-[#FCE7C7] py-2 px-4 rounded-2xl font-medium">Gợi ý cho bạn</button>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
					{pets.map((pet, index) => (
						<PetCard
						key={index}
						name={pet.name}
						breed={pet.breed}
						age={pet.age}
						location={pet.location}
						image={pet.image}
						/>
					))}
				</div>
				<div className="flex justify-center">
					<button className="bg-gradient-to-r from-[#F59F16] to-[#F5B349] py-2 px-6 rounded-3xl text-black font-medium mt-5">
						Xem tất cả
					</button>
				</div>
			</div>

			{/* banner */}
			<div className="bg-white rounded-2xl p-8 shadow mx-[22px] max-w-[1150px] w-full md:mx-auto mt-8">
				<h2 className="text-2xl font-bold mb-6 ml-4">Quy trình nhận nuôi</h2>
				<div className="grid md:grid-cols-2 gap-4">
					<div className="ml-4">
						<h3 className="font-semibold">1. Tìm hiểu thú cưng</h3>
						<p className="text-gray-700 mt-2">
							Duyệt qua danh sách thú cưng theo sở thích và nhu cầu của bạn. <br />
							Mỗi bé đều có thông tin rõ ràng về tính cách, tuổi, giống loài...
							</p>
					</div>
					<div className="ml-4">
						<h3 className="font-semibold">2. Gửi đơn nhận nuôi</h3>
						<p className="text-gray-700 mt-2">
							Xem hồ sơ chi tiết và gửi đơn đăng ký nhận nuôi chỉ trong vài phút.
						</p>
					</div>
					<div className="ml-4">
						<h3 className="font-semibold">3. Xác minh & liên hệ</h3>
						<p className="text-gray-700 mt-2">
							Chúng tôi sẽ xác nhận thông tin và hướng dẫn các bước tiếp theo. <br />
							Bạn có thể đặt lịch gặp online tại bước này.
						</p>
					</div>
					<div className="ml-4">
						<h3 className="font-semibold">4. Hoàn tất & đưa thú cưng về nhà</h3>
						<p className="text-gray-700 mt-2">
							Ký cam kết nhận nuôi và chuẩn bị một mái ấm mới cho người bạn nhỏ.
						</p>
					</div>
			</div>
				<div className="mt-6 flex justify-center">
					<button className="bg-white border border-gray-400 font-medium px-4 py-2 rounded-xl text-[#414651]">
						Tìm hiểu thêm
					</button>
				</div>
			</div>
		</div>
	);
};

export default WelcomePage;
