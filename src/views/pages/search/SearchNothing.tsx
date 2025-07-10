import FilterSidebar from "@/components/FilterSidebar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import React, { useState, useEffect, useRef } from "react";

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
];

const SearchNothing: React.FC = () => {
	return (
		<div className="bg-[#FFFAF4] min-h-screen font-sans">
			<main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
				<SearchBar />

				<div className="flex flex-col lg:flex-row gap-8 ">
					<FilterSidebar />
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default SearchNothing;
