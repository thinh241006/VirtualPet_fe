import cat1 from '../assets/cat1.png';
import cat2 from '../assets/cat2.png';
import cat3 from '../assets/cat3.png';
import cat4 from '../assets/cat4.png';
import cat5 from '../assets/cat5.png';
import cat6 from '../assets/cat6.png';
import cat7 from '../assets/cat7.png';
import cat8 from '../assets/cat8.png';

export type PetProps = {
  name: string;
  breed: string;
  age: string;
  location: string;
  image: string;
};

export const pets: PetProps[] = [
  {
    name: "Buddy",
    breed: "Golden retriever",
    age: "7 tháng",
    location: "Cầu Giấy, Hà Nội",
    image: cat1,
  },
  {
    name: "Dulce",
    breed: "Golden retriever",
    age: "7 tháng",
    location: "Cầu Giấy, Hà Nội",
    image: cat2,
  },
  {
    name: "Nika",
    breed: "Golden retriever",
    age: "7 tháng",
    location: "Cầu Giấy, Hà Nội",
    image: cat3,
  },
  {
    name: "Draco",
    breed: "Golden retriever",
    age: "7 tháng",
    location: "Cầu Giấy, Hà Nội",
    image: cat4,
  },
  {
    name: "Firulais",
    breed: "Golden retriever",
    age: "7 tháng",
    location: "Cầu Giấy, Hà Nội",
    image: cat5,
  },
  {
    name: "Chuck",
    breed: "Golden retriever",
    age: "7 tháng",
    location: "Cầu Giấy, Hà Nội",
    image: cat6,
  },
  {
    name: "Hulk",
    breed: "Golden retriever",
    age: "7 tháng",
    location: "Cầu Giấy, Hà Nội",
    image: cat7,
  },
  {
    name: "Brandon",
    breed: "Golden retriever",
    age: "7 tháng",
    location: "Cầu Giấy, Hà Nội",
    image: cat8,
  },
]; 