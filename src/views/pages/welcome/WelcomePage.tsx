import React from "react";
import arrowIcon from "../../../assets/arrow.svg";
import heroImage from "../../../assets/hero-img.png";
import Footer from "../../../components/Footer";
import { pets } from "../../../components/PetMockData";
import type { PetProps } from "../../../components/PetMockData";
import { Link } from "react-router-dom";
import { Path } from "../../../configs/path";

const PetCard = ({ name, breed, age, location, image }: PetProps) => (
	<div className="bg-white rounded-xl shadow">
		<div className="w-full h-50% rounded-t-2xl overflow-hidden">
			<img src={image} alt={name} className="w-full h-full object-cover" />
		</div>
		<div className="px-4 pb-4">
			<h2 className="text-lg font-semibold">{name}</h2>
			<p className="text-gray-700">
				{breed} - {age}
			</p>
			<p className="text-sm text-gray-500">{location}</p>
		</div>
	</div>
);

const WelcomePage: React.FC = () => {
	return (
		<div className="bg-white bg-custom-cream">
			{/* Hero Section */}
			<div className="min-h-[400px] bg-[#fff6ea] flex flex-col lg:flex-row items-center justify-between px-6 py-12 md:px-12 lg:px-24 w-full">
				{/* Text Content (Left Side) */}
				<div className="flex-1 max-w-2xl space-y-6 text-black lg:mr-16 xl:mr-20">
				<h1 className="text-4xl md:text-4xl font-bold leading-tight text-black">
					Want to adopt a pet?
				</h1>				<p className="text-xl md:text-2xl font-normal text-black leading-relaxed">
					Search manually by location & species, or use our personalized feature to get perfect pet recommendations in 30 seconds.
				</p>					{/* Search Bar */}
					<div className="flex items-center bg-white rounded-full shadow-md p-1 w-full max-w-2xl">
						<input
							type="text"
							placeholder="Enter location"
							className="flex-1 px-6 py-4 rounded-full border-none focus:outline-none focus:ring-0 text-gray-700 text-base"
						/>
						<div className="relative mx-1">
							<select className="px-6 py-4 rounded-full border-none focus:outline-none focus:ring-0 text-gray-700 appearance-none pr-10 bg-transparent text-base">
							<option value="">Species</option>
							<option value="dog">Dog</option>
							<option value="cat">Cat</option>
							<option value="other">Other</option>
							</select>
							<div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
								<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
							</svg>
							</div>
						</div>
						<button className="bg-black hover:bg-gray-800 text-white p-4 rounded-full transition-colors">
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
							</svg>
						</button>
					</div>

					{/* Action Buttons */}
					<div className="flex flex-wrap gap-8">
					<Link to={Path.search.personalized.index} className="text-white bg-black hover:bg-gray-800 rounded-full px-8 py-4 font-medium transition-colors">
						Personalized Search
					</Link>
					<a href="#" className="text-black hover:text-gray-700 inline-flex items-center gap-3 transition-colors font-medium">
						<span>Adoption Process</span>
							<img src={arrowIcon} alt="arrow Icon" className="w-5 h-5" />
						</a>
					</div>
				</div>

				{/* Hero Image (Right Side) */}
				<div className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0">
					<img 
						src={heroImage} 
						alt="Pet adoption - person kissing dog" 
						className="w-full max-w-2xl h-80 lg:h-[350px] object-cover rounded-xl"
					/>
				</div>
			</div>


			{/* Pet Cards Grid */}
			<div className="w-[80%]	mx-auto px-4 mt-20">
			<div className="flex justify-between items-center mb-2">
				<button className="border-2 border-[#FCE7C7] bg-white py-2 px-4 rounded-3xl font-medium">
					Recommended for You
				</button>
				<button className="text-[#F59F16] hover:text-[#f1a025] font-medium inline-flex items-center gap-2 transition-colors">
					<span>View All</span>
						<img src={arrowIcon} alt="arrow Icon" className="w-4 h-4" style={{ filter: 'brightness(0) saturate(100%) invert(80%) sepia(20%) saturate(1500%) hue-rotate(359deg) brightness(90%) contrast(110%)' }} />
					</button>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
					{pets.map((pet) => (
						<Link
							key={pet.id}
							to={`/pet/${pet.id}`}
							style={{ textDecoration: "none", color: "inherit" }}
						>
							<PetCard {...pet} />
						</Link>
					))}
				</div>
				<div className="flex justify-center">
				<button className="bg-gradient-to-r from-[#F59F16] to-[#F5B349] py-2 px-6 rounded-3xl text-black font-medium mt-5">
					View All
				</button>
				</div>
			</div>

			{/* banner */}
			<div className="bg-white rounded-2xl p-8 shadow mx-[22px] max-w-[1150px] w-full md:mx-auto mt-8">
				<h2 className="text-2xl font-bold mb-6 ml-4">Adoption Process</h2>
				<div className="grid md:grid-cols-2 gap-4">
					<div className="ml-4">
						<h3 className="font-semibold">1. Learn About Pets</h3>
						<p className="text-gray-700 mt-2">
							Browse through our pet list based on your preferences and needs.{" "}
							<br />
							Each pet has detailed information about personality, age, and breed.
						</p>
					</div>
					<div className="ml-4">
						<h3 className="font-semibold">2. Submit Adoption Application</h3>
						<p className="text-gray-700 mt-2">
							View detailed profiles and submit your adoption application in just
							a few minutes.
						</p>
					</div>
					<div className="ml-4">
						<h3 className="font-semibold">3. Verification & Contact</h3>
						<p className="text-gray-700 mt-2">
							We will verify your information and guide you through the next steps.{" "}
							<br />
							You can schedule an online meeting at this stage.
						</p>
					</div>
					<div className="ml-4">
						<h3 className="font-semibold">4. Finalization & Take Pet Home</h3>
						<p className="text-gray-700 mt-2">
							Sign the adoption commitment and prepare a new home for your new furry friend.
						</p>
					</div>
				</div>
				<div className="mt-10 flex justify-center">
					<button className="bg-white border border-gray-400 font-medium px-4 py-2 rounded-xl text-[#414651]">
						Learn More
					</button>
				</div>
			</div>

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default WelcomePage;
