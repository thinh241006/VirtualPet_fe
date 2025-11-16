import React from "react";

const RegisterOptionsPage: React.FC = () => {
  const handleAdopterClick = () => {
    console.log("User wants to adopt pets");
    // Navigate to adopter registration
  };

  const handleShelterClick = () => {
    console.log("User wants to manage shelter");
    // Navigate to shelter registration
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-7xl text-center p-12 rounded-lg">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
          Sign up free with FureverHome
        </h1>

        {/* Options Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {/* Adopter Option */}
          <button
            onClick={handleAdopterClick}
            className="bg-[#F59E0B] hover:bg-orange-600 text-white font-medium py-12 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:ring-4 focus:ring-orange-300 focus:outline-none"
          >
            <div className="text-lg md:text-xl">
              I want to adopt a pet
            </div>
          </button>

          {/* Shelter Owner Option */}
          <button
            onClick={handleShelterClick}
            className="bg-[#F59E0B] hover:bg-orange-600 text-white font-medium py-12 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:ring-4 focus:ring-orange-300 focus:outline-none"
          >
            <div className="text-lg md:text-xl">
              I'm a shelter manager
            </div>
          </button>
        </div>

        {/* Optional subtitle or additional info */}
        <p className="mt-8 text-gray-600 text-sm md:text-base">
          Choose the account type that suits you to start your pet rescue and adoption journey
        </p>
      </div>
    </div>
  );
};

export default RegisterOptionsPage;
