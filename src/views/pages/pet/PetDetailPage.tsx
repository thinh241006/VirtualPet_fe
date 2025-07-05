import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { pets } from '../../../components/PetMockData';
import Footer from '../../../components/Footer';
import arrowIcon from '../../../assets/arrow.svg';

const LocationIcon = () => (
  <svg className="inline-block w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7-7.5 11-7.5 11s-7.5-4-7.5-11a7.5 7.5 0 1115 0z"/></svg>
);
const HeartIcon = () => (
  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.682l-7.682-7.682a4.5 4.5 0 010-6.364z"/></svg>
);
const VaccineIcon = () => (
  <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a5 5 0 00-10 0v2M5 20h14M7 20v-4a2 2 0 012-2h6a2 2 0 012 2v4"/></svg>
);
const NeuterIcon = () => (
  <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 9l-6 6M9 9l6 6"/></svg>
);
const HealthIcon = () => (
  <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
);
const PawIcon = () => (
  <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="5.5" cy="10.5" r="1.5"/><circle cx="18.5" cy="10.5" r="1.5"/><circle cx="12" cy="7.5" r="2"/><ellipse cx="7.5" cy="16.5" rx="2" ry="3"/><ellipse cx="16.5" cy="16.5" rx="2" ry="3"/></svg>
);
const InfoIcon = () => (
  <svg className="w-5 h-5 inline-block mr-2 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4M12 8h.01"/></svg>
);

const PetDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const pet = pets.find((p) => p.id === Number(id));
  const otherPets = pets.filter((p) => p.id !== Number(id));
  const navigate = useNavigate();

  if (!pet) {
    return <div>Pet not found.</div>;
  }

  // Placeholder data for demo
  const gender = 'Đực';
  const color = 'Vàng đồng';
  const health = [
    { label: 'Tình trạng tiêm chủng', value: 'Đầy đủ', icon: <VaccineIcon /> },
    { label: 'Tình trạng triệt sản', value: 'Đã triệt sản', icon: <NeuterIcon /> },
    { label: 'Tình trạng sức khỏe', value: 'Tốt', icon: <HealthIcon /> },
  ];
  const traits = ['Phù hợp với trẻ nhỏ', 'Đã được đào tạo', 'Thân thiện', 'Năng động'];

  return (
    <div className="bg-[#FFFAF4] min-h-screen flex flex-col">
      {/* Back link */}
      <div className="max-w-6xl mx-auto w-full pt-8 px-4">
        <button
          className="flex items-center text-[#F59F16] font-medium mb-6 hover:underline"
          onClick={() => navigate(-1)}
        >
          <svg className="w-6 h-6 mr-2  text-[#F5B349]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Quay lại danh sách
        </button>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row gap-8 px-4 pb-8">
        {/* Pet image */}
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-md aspect-square flex items-center justify-center">
            <img
              src={pet.image}
              alt={pet.name}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Pet info card */}
        <div className="flex-1">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h1 className="text-2xl font-bold mb-1">{pet.name}</h1>
                <div className="flex items-center text-gray-500 text-sm">
                  <LocationIcon />
                  {pet.location}
                </div>
              </div>
              <button className="ml-2 p-1 rounded-full hover:bg-yellow-100 transition"><HeartIcon /></button>
            </div>
            <hr className="mb-6 opacity-10" />
            <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm mb-4">
              <div>
                <span className="text-gray-500">Giống</span><br />
                <div className="pt-2">
                  <span className="font-bold mt-5">{pet.breed}</span>
                </div>
              </div>
              <div>
                <span className="text-gray-500">Tuổi</span><br />
                <div className="pt-2">
                  <span className="font-bold mt-5">2 năm</span>
                </div>
              </div>
              <div>
                <span className="text-gray-500">Màu sắc</span><br />
                <div className="pt-2">
                  <span className="font-bold mt-5">{color}</span>
                </div>
              </div>
              <div>
                <span className="text-gray-500">Giới tính</span><br />
                <div className="pt-2">
                  <span className="font-bold mt-5">{gender}</span>
                </div>
              </div>
            </div>
            <div className="mb-4 space-y-2">
              {health.map((h) => (
                <div key={h.label} className="flex items-center justify-between bg-green-50 rounded-lg px-4 py-2">
                  <div className="flex items-center text-gray-700 text-sm font-medium">
                    {h.icon}
                    {h.label}
                  </div>
                  <span className="text-green-600 font-semibold text-sm">{h.value}</span>
                </div>
              ))}
            </div>
            <div className="mb-4">
              <span className="text-gray-900 font-bold text-sm">Đặc điểm tính cách</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {traits.map((trait) => (
                  <span key={trait} className="bg-gray-100 rounded-full px-4 py-1 text-xs text-gray-700 font-medium">{trait}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-6">
              <button className="w-full bg-gradient-to-r from-[#F59F16] to-[#F5B349] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition flex items-center justify-center text-base">
                <PawIcon />Nhận nuôi {pet.name}
              </button>
              <button className="w-full border-2 border-[#F59F16] text-[#F59F16] py-3 rounded-xl font-semibold hover:bg-[#F59F16] hover:text-white transition flex items-center justify-center text-base">
                <InfoIcon />Tìm hiểu quy trình
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Other pets section */}
      <div className="max-w-6xl mx-auto w-full px-4 pb-12">
        <h2 className="text-lg font-bold mb-4">Các thú cưng cùng khu vực</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {otherPets.map((other) => (
            <Link key={other.id} to={`/pet/${other.id}`} className="min-w-[200px] max-w-[220px] bg-white rounded-xl shadow p-3 flex flex-col items-center hover:shadow-lg transition">
              <img src={other.image} alt={other.name} className="w-full h-32 object-cover rounded-lg mb-2" />
              <div className="font-semibold text-sm mb-1">{other.name}</div>
              <div className="text-xs text-gray-500 mb-1">{other.breed} - {other.age}</div>
              <div className="text-xs text-gray-400">{other.location}</div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PetDetailPage; 