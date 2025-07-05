import React from 'react';
import { useParams } from 'react-router-dom';
import { pets } from '../../../components/PetMockData';

const PetDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const pet = pets.find((p) => p.id === Number(id));

  if (!pet) {
    return <div>Pet not found.</div>;
  }

  return (
    <div style={{ padding: 32 }}>
      <h1>{pet.name}</h1>
      <img src={pet.image} alt={pet.name} style={{ width: 300, height: 300, objectFit: 'cover', borderRadius: 16 }} />
      <p><strong>Breed:</strong> {pet.breed}</p>
      <p><strong>Age:</strong> {pet.age}</p>
      <p><strong>Location:</strong> {pet.location}</p>
    </div>
  );
};

export default PetDetailPage; 