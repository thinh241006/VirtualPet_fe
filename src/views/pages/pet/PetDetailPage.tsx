import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { pets } from "@/components/PetMockData";
import Footer from "@/components/Footer";
import arrowIcon from "@/assets/arrow.svg";

const PetDetailPage: React.FC = () => {
  const { petId } = useParams<{ petId: string }>();
  const navigate = useNavigate();
  
  // Find the pet by index (since we're using array index as ID)
  const pet = petId ? pets[parseInt(petId)] : null;

  if (!pet) {
    return (
      <div className="min-h-screen bg-[#FFFAF4] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Pet not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-[#F59F16] to-[#F5B349] text-white px-6 py-3 rounded-xl"
          >
            Go back home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FFFAF4] min-h-screen">
      {/* Header with back button */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <img src={arrowIcon} alt="Back" className="w-5 h-5 mr-2 rotate-180" />
            Back to pets
          </button>
        </div>
      </div>

      {/* Pet Details */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pet Image */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src={pet.image} 
                alt={pet.name} 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Pet Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{pet.name}</h1>
              <p className="text-xl text-gray-600 mb-4">{pet.breed}</p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-gray-500 w-24">Age:</span>
                  <span className="font-medium">{pet.age}</span>
                </div>
                
                <div className="flex items-center">
                  <span className="text-gray-500 w-24">Location:</span>
                  <span className="font-medium">{pet.location}</span>
                </div>
                
                <div className="flex items-center">
                  <span className="text-gray-500 w-24">Status:</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Available for adoption
                  </span>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">About {pet.name}</h2>
              <p className="text-gray-700 leading-relaxed">
                {pet.name} is a lovely {pet.breed} who is looking for a forever home. 
                This sweet pet is {pet.age} old and currently located in {pet.location}. 
                {pet.name} is friendly, well-behaved, and ready to bring joy to your family.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Interested in adopting?</h2>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-[#F59F16] to-[#F5B349] text-white py-3 px-6 rounded-xl font-medium hover:opacity-90 transition-opacity">
                  Apply for Adoption
                </button>
                <button className="w-full bg-white border-2 border-[#F59F16] text-[#F59F16] py-3 px-6 rounded-xl font-medium hover:bg-[#F59F16] hover:text-white transition-colors">
                  Contact Shelter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PetDetailPage; 