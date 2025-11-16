import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Path } from "../../configs/path";

const NavigationLayout: React.FC = () => {

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
							<Link to={Path.search.personalized.index} className="text-gray-600 font-inter">
								Cá nhân hóa tìm kiếm
							</Link>
							<a href="#" className="text-gray-600 font-inter">
								Quy trình nhận nuôi
							</a>
						</div>
					</div>

					{/* Right: Auth */}
					<div className="flex items-center space-x-4">
						<Link to={Path.login.index} className="text-gray-600 font-inter">Log in</Link>
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
			</nav>

			{/* Main Content */}
			<main className="flex-1">
				<Outlet />
			</main>
		</div>
	);
};

export default NavigationLayout;
