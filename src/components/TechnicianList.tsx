import React from 'react'
import { Star, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const technicians = [
  {
    id: 1,
    name: 'Michael Chen',
    specialty: 'Plumbing',
    rating: 4.9,
    reviews: 234,
    hourlyRate: 85,
    location: 'Downtown',
    experience: '12 years',
    verified: true,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    categories: ['plumbing'],
    availability: 'Available Today',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    specialty: 'Electrical',
    rating: 5.0,
    reviews: 189,
    hourlyRate: 95,
    location: 'Westside',
    experience: '15 years',
    verified: true,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    categories: ['electrical', 'lighting'],
    availability: 'Available Tomorrow',
  },
  {
    id: 3,
    name: 'David Martinez',
    specialty: 'Carpentry',
    rating: 4.8,
    reviews: 156,
    hourlyRate: 75,
    location: 'Eastside',
    experience: '10 years',
    verified: true,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    categories: ['carpentry'],
    availability: 'Available Today',
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    specialty: 'Painting',
    rating: 4.9,
    reviews: 201,
    hourlyRate: 70,
    location: 'Northside',
    experience: '8 years',
    verified: true,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    categories: ['painting'],
    availability: 'Available This Week',
  },
  {
    id: 5,
    name: 'James Wilson',
    specialty: 'HVAC',
    rating: 4.7,
    reviews: 178,
    hourlyRate: 90,
    location: 'Southside',
    experience: '14 years',
    verified: true,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    categories: ['hvac'],
    availability: 'Available Today',
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    specialty: 'Locksmith',
    rating: 5.0,
    reviews: 143,
    hourlyRate: 80,
    location: 'Central',
    experience: '11 years',
    verified: true,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    categories: ['locksmith'],
    availability: '24/7 Emergency',
  },
]

interface TechnicianListProps {
  selectedCategory: string
}

const TechnicianList: React.FC<TechnicianListProps> = ({ selectedCategory }) => {
  const navigate = useNavigate()
  
  const filteredTechnicians = selectedCategory === 'all' 
    ? technicians 
    : technicians.filter(tech => tech.categories.includes(selectedCategory))

  return (
    <section id="technicians" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Top-Rated Technicians
          </h2>
          <p className="text-xl text-gray-600">
            {filteredTechnicians.length} professionals ready to help
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTechnicians.map((tech) => (
            <div 
              key={tech.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden group cursor-pointer"
              onClick={() => navigate(`/technician/${tech.id}`)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={tech.image}
                  alt={tech.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {tech.verified && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 shadow-lg">
                    <CheckCircle className="w-4 h-4" />
                    <span>Verified</span>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                  {tech.availability}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{tech.name}</h3>
                    <p className="text-blue-600 font-semibold">{tech.specialty}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-gray-900">{tech.rating}</span>
                    </div>
                    <p className="text-sm text-gray-500">({tech.reviews} reviews)</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    {tech.location}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {tech.experience} experience
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">${tech.hourlyRate}</span>
                    <span className="text-gray-500">/hour</span>
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 flex items-center space-x-2">
                    <span>Book Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnicianList
