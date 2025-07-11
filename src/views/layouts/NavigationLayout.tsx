import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Path } from "../../configs/path";

const NavigationLayout: React.FC = () => {
	const [showSearchBox, setShowSearchBox] = useState(false);

	return (
		<div className="min-h-screen flex flex-col">
			{/* Navigation Bar */}
			<nav
				className="shadow-md py-6 px-6"
				style={{ backgroundColor: "#FFFAF4" }}
			>
				<div className="max-w-7xl mx-auto flex items-center justify-between">
					{/* Left: Logo + Links */}
					<div className="flex items-center space-x-8">
						<Link to={Path.root.index}>
							<img src={logo} alt="Furever Home Logo" className="h-9" />
						</Link>
						<div className="hidden md:flex items-center space-x-6">
							<Link to="/search" className="text-gray-600 font-inter">
								Tìm kiếm
							</Link>
							<a href="#" className="text-gray-600 font-inter">
								Tìm kiếm phù hợp nhất
							</a>
							<a href="#" className="text-gray-600 font-inter">
								Quy trình nhận nuôi
							</a>
							<a href="#" className="text-gray-600 font-inter">
								FAQs
							</a>
						</div>
					</div>

					{/* Right: Auth */}
					<div className="flex items-center space-x-4">
						<Link to={Path.login.index} className="text-gray-600 font-inter">
							Log in
						</Link>
						<Link
							to={Path.register.index}
							className="text-black font-inter px-4 py-5 rounded-4xl shadow-sm flex items-center justify-center"
							style={{
								background: "linear-gradient(90deg, #F5B349, #F7C26D)",
								lineHeight: "1",
							}}
						>
							Sign up
						</Link>
					</div>
				</div>

				{/* Search Box */}
				{showSearchBox && (
					<div className="max-w-7xl mx-auto mt-4">
						<div className="relative">
							<input
								type="text"
								placeholder="Tìm kiếm phù hợp nhất..."
								className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
							/>
						</div>
					</div>
				)}

				{/* Mobile Nav */}
				<div className="md:hidden mt-4 flex justify-between items-center">
					<button
						onClick={() => setShowSearchBox(!showSearchBox)}
						className="text-gray-700 hover:text-primary"
					>
						Tìm kiếm
					</button>
					<div className="flex space-x-4">
						<Link
							to={Path.login.index}
							className="text-gray-700 hover:text-primary"
						>
							Log in
						</Link>
						<Link
							to={Path.register.index}
							className="text-primary font-medium"
							style={{
								background: "linear-gradient(90deg, #F5B349, #F7C26D)",
								padding: "0.5rem 1rem",
								borderRadius: "0.375rem",
								color: "black",
							}}
						>
							Sign up
						</Link>
					</div>
				</div>
			</nav>

			{/* Main Content */}
			<main className="flex-1">
				<Outlet />
			</main>
		</div>
	);
};

export default NavigationLayout;
