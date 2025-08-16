/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Path } from "@/configs/path";
import ProfilePage from "@/pages/profile/ProfilePage";
import NotFoundPage from "@/pages/notfound/NotFoundPage";
import WelcomePage from "@/pages/welcome/WelcomePage";
import PersonalizedSearchPage from "@/pages/search/PersonalizedSearchPage";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import NavigationLayout from "@/layouts/NavigationLayout";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import ForgotPasswordPage from "@/pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "@/pages/auth/ResetPasswordPage";
import RegisterOptionsPage from "@/pages/auth/RegisterOptionsPage";
import PetDetailPage from "@/pages/pet/PetDetailPage";
import SearchPage from "@/pages/search/SearchPage";
import SearchNothing from "@/pages/search/SearchNothing";
import PersonalizedSearchPage from "@/pages/search/PersonalizedSearchPage";

// Interfaces for route guards can be reintroduced when enabling auth-protected routes

// const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
// 	const isAuthenticated = AuthService.getCurrentUser();

// 	return isAuthenticated ? (
// 		<Navigate to={Path.user.outlets.dashboard} replace />
// 	) : (
// 		<>{children}</>
// 	);
// };

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
// 	const isAuthenticated = AuthService.getCurrentUser();

// 	// For testing purposes, you can uncomment the line below to simulate an authenticated user
// 	// const isAuthenticated = true;

// 	return isAuthenticated ? <>{children}</> : <Navigate to={Path.login.index} />;
// };

const AppRoutes: React.FC = () => {
	return (
		<div>
			<Routes>
				<Route path="*" element={<NotFoundPage />} />
				<Route element={<NavigationLayout />}>
					{/* Welcome page route */}
					<Route path={Path.root.index} element={<WelcomePage />} />

					{/* Search page route */}
					<Route path={Path.search.index} element={<SearchPage />} />

					{/* Search nothing page route */}
					<Route path="search/search-nothing" element={<SearchNothing />} />

					{/* Personalized Search page route */}
					<Route path={Path.search.personalized.index} element={<PersonalizedSearchPage />} />

					{/* Personalized search */}
					<Route path={Path.search.personalized.index} element={<PersonalizedSearchPage />} />

					{/* Pet detail route */}
					<Route path="/pet/:id" element={<PetDetailPage />} />
				</Route>
				<Route
					path={Path.login.index}
					element={
						// <PublicRoute>
						<LoginPage />
						// </PublicRoute>
					}
				/>
				<Route
					path={Path.register.index}
					element={
						// <PublicRoute>
						<RegisterPage />
						// </PublicRoute>
					}
				/>
				<Route
					path={Path.register.options.index}
					element={
						// <PublicRoute>
						<RegisterOptionsPage />
						// </PublicRoute>
					}
				/>
				<Route
					path={Path.forgotPassword.index}
					element={
						// <PublicRoute>
						<ForgotPasswordPage />
						// </PublicRoute>
					}
				/>
				<Route
					path={Path.resetPassword.index}
					element={
						// <PublicRoute>
						<ResetPasswordPage />
						// </PublicRoute>
					}
				/>

				<Route element={<NavigationLayout />}>
					<Route
						path={Path.user.outlets.dashboard}
						element={
							// <ProtectedRoute>
							<DashboardPage />
							// </ProtectedRoute>
						}
					/>
					<Route
						path={Path.user.outlets.profile}
						element={
							// <ProtectedRoute>
							<ProfilePage />
							// </ProtectedRoute>
						}
					/>
				</Route>
			</Routes>
		</div>
	);
};

export default AppRoutes;
