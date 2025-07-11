import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import catIcon from "../assets/cat.svg";
import searchButton from "../assets/searchButton.svg";

const SearchBar: React.FC = () => {
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
	return (
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
				<Link to="/search/search-nothing" className="flex items-center">
					<img
						src={searchButton}
						alt="search button"
						className="h-12 w-12 mt-2"
					/>
				</Link>
			</div>
		</div>
	);
};

export default SearchBar;
