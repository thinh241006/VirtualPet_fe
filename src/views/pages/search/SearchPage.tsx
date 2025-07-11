import React, { useState } from "react";
import Footer from "../../../components/Footer";
import SearchBar from "@/components/SearchBar";
import FilterSidebar from "@/components/FilterSidebar";
// --- TypeScript Interfaces ---
interface Pet {
	id: number;
	name: string;
	breed: string;
	age: string;
	location: string;
	imageUrl: string;
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

	return (
		<div className="bg-[#FFFAF4] min-h-screen font-sans">
			{/* Header */}
			<main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
				{/* Search Bar */}
				<SearchBar />

				<div className="flex flex-col lg:flex-row gap-8 ">
					{/* Filters Sidebar */}

					<FilterSidebar />

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
