import FilterSidebar from "@/components/FilterSidebar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import React from "react";

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

const pets: Pet[] = [
	{
		id: 1,
		name: "Buddy",
		breed: "Golden Retriever",
		age: "7 months",
		location: "Cau Giay, Hanoi",
		imageUrl:
			"https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=256&h=256&fit=crop",
	},
	{
		id: 2,
		name: "Lucy",
		breed: "Siamese",
		age: "1 year",
		location: "Cau Giay, Hanoi",
		imageUrl:
			"https://images.unsplash.com/photo-1574158622682-e40e6984100d?q=80&w=256&h=256&fit=crop",
	},
	{
		id: 3,
		name: "Max",
		breed: "Black Cat",
		age: "2 years",
		location: "Cau Giay, Hanoi",
		imageUrl:
			"https://images.unsplash.com/photo-1516371248853-4e4425245647?q=80&w=256&h=256&fit=crop",
	},
	{
		id: 4,
		name: "Bella",
		breed: "Calico",
		age: "5 months",
		location: "Cau Giay, Hanoi",
		imageUrl:
			"https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=256&h=256&fit=crop",
	},
	{
		id: 5,
		name: "Charlie",
		breed: "Tonkinese",
		age: "1.5 years",
		location: "Cau Giay, Hanoi",
		imageUrl:
			"https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?q=80&w=256&h=256&fit=crop",
	},
	{
		id: 6,
		name: "Daisy",
		breed: "Ragdoll",
		age: "3 years",
		location: "Cau Giay, Hanoi",
		imageUrl:
			"https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=256&h=256&fit=crop",
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

const SearchNothing: React.FC = () => {
	return (
		<div className="bg-[#FFFAF4] min-h-screen font-sans">
			<main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
				{/* Search Bar */}
				<SearchBar />

				<div className="flex flex-col lg:flex-row gap-8 pt-10">
					{/* Filter SideBar */}
					<FilterSidebar />
					<div className="w-full lg:w-3/4">
						{/* Nothing Found part */}
						<div className="bg-white rounded-lg shadow-sm p-8 text-center">
							<h2 className="text-2xl font-bold text-gray-800 mb-2">
								No suitable pets found
							</h2>
							<p className="text-gray-600">
								Currently, there are no pets that match your selected filters.
							</p>
							<p className="text-gray-600">
								Try adjusting your filters or check out similar pets below.
							</p>
						</div>

						{/* Pets Grid */}
						<div className="mt-8">
							<h3 className="text-xl font-bold text-gray-800 mb-4">
								Pets in the same area
							</h3>
							<p className="text-gray-600 mb-6">
								Other furry friends are also waiting to be adopted in Cau Giay, Hanoi
							</p>
							<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
								{pets.map((pet) => (
									<PetCard key={pet.id} pet={pet} />
								))}
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default SearchNothing;
