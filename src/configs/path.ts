export const Path = {
	root: {
		index: "/",
	},
	login: {
		index: "/login",
	},
	register: {
		index: "/register",
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
