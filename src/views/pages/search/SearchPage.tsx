import React, { useState, useEffect, useRef } from "react";
import catIcon from "../../../assets/cat.svg";
import searchButton from "../../../assets/searchButton.svg";
import Footer from "../../../components/Footer";
// --- TypeScript Interfaces ---
interface Pet {
	id: number;
	name: string;
	breed: string;
	age: string;
	location: string;
	imageUrl: string;
}

interface IconProps {
	className: string;
}

interface FilterDropdownProps {
	label: string;
	options: string[];
}

interface PetCardProps {
	pet: Pet;
}

// --- MOCK DATA ---
const pets: Pet[] = [
	{
		id: 1,
		name: "Buddy",
		breed: "Golden Retriever",
		age: "7 tháng",
		location: "Cầu Giấy, Hà Nội",
		imageUrl:
			"https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=256&h=256&fit=crop",
	},
	{
		id: 2,
		name: "Lucy",
		breed: "Siamese",
		age: "1 năm",
		location: "Cầu Giấy, Hà Nội",
		imageUrl:
			"https://images.unsplash.com/photo-1574158622682-e40e6984100d?q=80&w=256&h=256&fit=crop",
	},
	{
		id: 3,
		name: "Max",
		breed: "Black Cat",
		age: "2 năm",
		location: "Cầu Giấy, Hà Nội",
		imageUrl:
			"https://images.unsplash.com/photo-1516371248853-4e4425245647?q=80&w=256&h=256&fit=crop",
	},
	{
		id: 4,
		name: "Bella",
		breed: "Calico",
		age: "5 tháng",
		location: "Cầu Giấy, Hà Nội",
		imageUrl:
			"https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=256&h=256&fit=crop",
	},
	{
		id: 5,
		name: "Charlie",
		breed: "Tonkinese",
		age: "1.5 năm",
		location: "Cầu Giấy, Hà Nội",
		imageUrl:
			"https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?q=80&w=256&h=256&fit=crop",
	},
	{
		id: 6,
		name: "Daisy",
		breed: "Ragdoll",
		age: "3 năm",
		location: "Cầu Giấy, Hà Nội",
		imageUrl:
			"https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=256&h=256&fit=crop",
	},
	{
		id: 7,
		name: "Rocky",
		breed: "Tabby",
		age: "8 tháng",
		location: "Cầu Giấy, Hà Nội",
		imageUrl:
			"https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?q=80&w=256&h=256&fit=crop",
	},
	{
		id: 8,
		name: "Molly",
		breed: "Siberian",
		age: "4 năm",
		location: "Cầu Giấy, Hà Nội",
		imageUrl:
			"https://images.unsplash.com/photo-1517331156700-4c24112b46e3?q=80&w=256&h=256&fit=crop",
	},
	{
		id: 9,
		name: "Toby",
		breed: "Heterochromia",
		age: "2 năm",
		location: "Cầu Giấy, Hà Nội",
		imageUrl:
			"https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=256&h=256&fit=crop",
	},
];

const ChevronDownIcon: React.FC<IconProps> = ({ className }) => (
	<svg
		className={className}
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M19 9l-7 7-7-7"
		/>
	</svg>
);

const FilterDropdown: React.FC<FilterDropdownProps> = ({ label, options }) => (
	<div>
		<label className="text-sm font-semibold text-black">{label}</label>
		<div className="relative mt-1">
			<select className="w-full bg-white shadow-md border-transparent rounded-lg appearance-none py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white">
				{options.map((option) => (
					<option key={option}>{option}</option>
				))}
			</select>
			<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
				<ChevronDownIcon className="w-4 h-4" />
			</div>
		</div>
	</div>
);

const PetCard: React.FC<PetCardProps> = ({ pet }) => (
	<div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
		<img
			src={pet.imageUrl}
			alt={pet.name}
			className="w-full h-56 object-cover"
			onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
				const target = e.target as HTMLImageElement;
				target.onerror = null; // prevents looping
				target.src = "https://placehold.co/256x256/e0e0e0/757575?text=Pet";
			}}
		/>
		<div className="p-4">
			<h3 className="text-xl font-bold text-gray-800">{pet.name}</h3>
			<p className="text-sm text-gray-600 mt-1">
				{pet.breed} - {pet.age}
			</p>
			<p className="text-sm text-gray-500 mt-2">{pet.location}</p>
		</div>
	</div>
);

const SearchPage: React.FC = () => {
	const [activePage, setActivePage] = useState<number>(1);
	const [selectedPetType, setSelectedPetType] = useState("Mèo");
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const petTypes = ["Mèo", "Chó"];

	const handlePetTypeSelect = (petType: string) => {
		setSelectedPetType(petType);
		setIsDropdownOpen(false);
	};

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsDropdownOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	const filterOptions: { [key: string]: string[] } = {
		Giống: ["Tất cả", "Golden Retriever", "Siamese", "Ragdoll", "Tabby"],
		Tuổi: ["Tất cả", "Dưới 1 năm", "1-3 năm", "Trên 3 năm"],
		"Giới tính": ["Tất cả", "Đực", "Cái"],
		"Kích thước": ["Tất cả", "Nhỏ", "Vừa", "Lớn"],
		Lông: ["Tất cả", "Ngắn", "Dài"],
	};

	return (
		<div className="bg-[#FFFAF4] min-h-screen font-sans">
			{/* Header */}
			<main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
				{/* Search Bar */}
				<div className="relative max-w-2xl mx-auto mt-8 w-full bg-nav font-medium">
					<div className="flex items-center gap-3">
						<div className="flex-1 flex items-center bg-white border border-[#0A0D120F] rounded-4xl overflow-visible shadow focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
							<input
								type="text"
								placeholder="Tìm kiếm"
								className="py-2 px-4 flex-grow focus:outline-none"
							/>

							<div className="h-6 border-l border-[#F8CC85]"></div>
							<div className="relative overflow-visible" ref={dropdownRef}>
								<button
									onClick={() => {
										setIsDropdownOpen(!isDropdownOpen);
									}}
									className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900"
								>
									<img src={catIcon} alt="cat icon" />
									<span className="ml-2">{selectedPetType}</span>
									<svg
										className={`w-4 h-4 ml-1 transition-transform ${
											isDropdownOpen ? "rotate-180" : ""
										}`}
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</button>

								{/* Dropdown positioned relative to the button */}
								{isDropdownOpen && (
									<div className="absolute left-0 top-full mt-1 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200">
										<div className="py-1">
											{petTypes.map((petType) => (
												<button
													key={petType}
													onClick={() => handlePetTypeSelect(petType)}
													className={`block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 ${
														selectedPetType === petType
															? "bg-gray-100 font-medium"
															: ""
													}`}
												>
													{petType}
												</button>
											))}
										</div>
									</div>
								)}
							</div>
						</div>
						<button className="flex items-center">
							<img
								src={searchButton}
								alt="search button"
								className="h-12 w-12 mt-2"
							/>
						</button>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row gap-8 ">
					{/* Filters Sidebar */}
					<aside className="flex-1 w-full lg:w-1/4">
						<div className="p-6 rounded-lg">
							<h2 className="text-lg font-bold text-gray-800 mb-4">Bộ lọc</h2>
							<div className="space-y-6">
								{Object.entries(filterOptions).map(([label, options]) => (
									<FilterDropdown key={label} label={label} options={options} />
								))}
							</div>
							<button className="mt-8 w-full bg-gray-800 text-white font-bold py-3 rounded-lg hover:bg-gray-700 transition duration-300">
								Áp dụng
							</button>
						</div>
					</aside>

					{/* Pets Grid */}
					<div className="w-full lg:w-3/4">
						<p className="text-gray-600 mb-6 text-right">
							Có {pets.length * 3} thú cưng phù hợp
						</p>
						<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
							{pets.map((pet) => (
								<PetCard key={pet.id} pet={pet} />
							))}
						</div>

						{/* Pagination */}
						<nav className="text-black mt-12 flex justify-center items-center space-x-2">
							{[1, 2, 3].map((page) => (
								<a
									key={page}
									href="#"
									onClick={(e) => {
										e.preventDefault();
										setActivePage(page);
									}}
									className={`px-4 py-2 rounded-lg transition shadow-md text-black ${
										activePage === page
											? "bg-[#FFFAF4] text-black font-bold"
											: "bg-white text-black hover:bg-gray-100"
									}`}
								>
									{page}
								</a>
							))}
							<a
								href="#"
								className="px-4 py-2 text-black bg-white rounded-lg hover:bg-gray-100 transition"
								onClick={(e) => e.preventDefault()}
							>
								&rarr;
							</a>
						</nav>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default SearchPage;
