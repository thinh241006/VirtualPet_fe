import React from "react";
import { Outlet } from "react-router-dom";

const NavigationLayout: React.FC = () => (
	<div>
		<nav className="bg-gray-800 text-white p-4">
			<h2 className="text-xl">My App</h2>
		</nav>
		<main>
			<Outlet />
		</main>
	</div>
);

export default NavigationLayout;
