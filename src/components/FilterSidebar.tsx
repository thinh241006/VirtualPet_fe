import React from "react";

interface IconProps {
	className: string;
}

interface FilterDropdownProps {
	label: string;
	options: string[];
}

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

const FilterSidebar: React.FC = () => {
	const filterOptions: { [key: string]: string[] } = {
		Breed: ["All", "Golden Retriever", "Siamese", "Ragdoll", "Tabby"],
		Age: ["All", "Under 1 year", "1-3 years", "Over 3 years"],
		Gender: ["All", "Male", "Female"],
		Size: ["All", "Small", "Medium", "Large"],
		Coat: ["All", "Short", "Long"],
	};
	return (
		<aside className="flex-1 w-full lg:w-1/4">
			<div className="p-6 rounded-lg">
				<h2 className="text-lg font-bold text-gray-800 mb-4">Filters</h2>
				<div className="space-y-6">
					{Object.entries(filterOptions).map(([label, options]) => (
						<FilterDropdown key={label} label={label} options={options} />
					))}
				</div>
				<button className="mt-8 w-full bg-gray-800 text-white font-bold py-3 rounded-lg hover:bg-gray-700 transition duration-300">
					Apply
				</button>
			</div>
		</aside>
	);
};

export default FilterSidebar;
