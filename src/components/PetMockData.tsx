import cat1 from '../assets/cat1.png';
import cat2 from '../assets/cat2.png';
import cat3 from '../assets/cat3.png';
import cat4 from '../assets/cat4.png';
import cat5 from '../assets/cat5.png';
import cat6 from '../assets/cat6.png';
import cat7 from '../assets/cat7.png';
import cat8 from '../assets/cat8.png';

export type PetProps = {
  id: number;
  name: string;
  breed: string;
  age: string;
  location: string;
  image: string;
};

export const pets: PetProps[] = [
  {
    id: 1,
    name: "Buddy",
    breed: "Golden retriever",
    age: "7 months",
    location: "Cau Giay, Hanoi",
    image: cat1,
  },
  {
    id: 2,
    name: "Dulce",
    breed: "Golden retriever",
    age: "7 months",
    location: "Cau Giay, Hanoi",
    image: cat2,
  },
  {
    id: 3,
    name: "Nika",
    breed: "Golden retriever",
    age: "7 months",
    location: "Cau Giay, Hanoi",
    image: cat3,
  },
  {
    id: 4,
    name: "Draco",
    breed: "Golden retriever",
    age: "7 months",
    location: "Cau Giay, Hanoi",
    image: cat4,
  },
  {
    id: 5,
    name: "Firulais",
    breed: "Golden retriever",
    age: "7 months",
    location: "Cau Giay, Hanoi",
    image: cat5,
  },
  {
    id: 6,
    name: "Chuck",
    breed: "Golden retriever",
    age: "7 months",
    location: "Cau Giay, Hanoi",
    image: cat6,
  },
  {
    id: 7,
    name: "Hulk",
    breed: "Golden retriever",
    age: "7 months",
    location: "Cau Giay, Hanoi",
    image: cat7,
  },
  {
    id: 8,
    name: "Brandon",
    breed: "Golden retriever",
    age: "7 months",
    location: "Cau Giay, Hanoi",
    image: cat8,
  },
]; 