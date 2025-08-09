export const Path = {
	root: {
		index: "/",
	},
	login: {
		index: "/login",
	},
	register: {
		index: "/register",
		options: {
			index: "/register/options",
		},
	},
	forgotPassword: {
		index: "/forgot-password",
	},
	resetPassword: {
		index: "/reset-password",
	},
	search: {
		index: "/search",
    option: { index: "/search/search-nothing" },
    personalized: { index: "/search/personalized" },
	},
	user: {
		index: "/",
		outlets: {
			dashboard: "/dashboard",
			profile: "/profile",
		},
	},
};
