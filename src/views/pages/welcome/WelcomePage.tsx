import React from "react";
import arrowIcon from '../../../assets/arrow.svg';

const WelcomePage: React.FC = () => {
	return (
		//Hero-img
		<div className="min-h-[500px] bg-gradient-to-r from-[#F5B349] to-white flex flex-col lg:flex-row items-center justify-between px-6 py-12 md:px-12 lg:px-24 gap-8 font-inter">
			{/* Text Content (Left Side) */}
			<div className="max-w-2xl space-y-6 text-gray-800">
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
			<div className="w-full lg:w-1/2 flex justify-center">
				<div className="bg-gray-200 rounded-xl w-full max-w-md h-80 lg:h-96 flex items-center justify-center text-gray-400">
				[Pet Image Here]
				</div>
			</div>
		</div>
	);
};

export default WelcomePage;
