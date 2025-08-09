export const Path = {
	root: {
		index: "/",
	},
    search: {
        index: "/search",
        option: { index: "/search/search-nothing" },
        personalized: {
            index: "/search/personalized",
        },
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
	user: {
		index: "/",
		outlets: {
			dashboard: "/dashboard",
			profile: "/profile",
		},
	},
};
