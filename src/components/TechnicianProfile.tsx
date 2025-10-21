import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Star, MapPin, Clock, CheckCircle, Award, Shield, ArrowLeft, Calendar } from 'lucide-react'

const TechnicianProfile = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // Mock data - in real app, fetch based on id
  const technician = {
    id: 1,
    name: 'Michael Chen',
    specialty: 'Plumbing',
    rating: 4.9,
    reviews: 234,
    hourlyRate: 85,
    location: 'Downtown',
    experience: '12 years',
    verified: true,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop',
    bio: 'Licensed master plumber with over 12 years of experience. Specializing in residential and commercial plumbing repairs, installations, and emergency services. Committed to providing high-quality workmanship and excellent customer service.',
    skills: ['Pipe Repair', 'Drain Cleaning', 'Water Heater Installation', 'Leak Detection', 'Fixture Installation', 'Emergency Repairs'],
    certifications: ['Licensed Master Plumber', 'EPA Certified', 'OSHA Safety Certified'],
    completedJobs: 1247,
    responseTime: '< 2 hours',
  }

  const reviews = [
    {
      id: 1,
      author: 'Jennifer Smith',
      rating: 5,
      date: '2 days ago',
      comment: 'Michael was fantastic! Fixed our leaking pipe quickly and professionally. Highly recommend!',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      id: 2,
      author: 'Robert Johnson',
      rating: 5,
      date: '1 week ago',
      comment: 'Very knowledgeable and efficient. Explained everything clearly and left the workspace clean.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
    {
      id: 3,
      author: 'Maria Garcia',
      rating: 4,
      date: '2 weeks ago',
      comment: 'Great service! Arrived on time and completed the job as promised. Will definitely hire again.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    },
  ]

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold">Back to Technicians</span>
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative">
                  <img 
                    src={technician.image}
                    alt={technician.name}
                    className="w-32 h-32 rounded-2xl object-cover"
                  />
                  {technician.verified && (
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full shadow-lg">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">{technician.name}</h1>
                      <p className="text-xl text-blue-600 font-semibold">{technician.specialty}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        <span className="text-2xl font-bold text-gray-900">{technician.rating}</span>
                      </div>
                      <p className="text-sm text-gray-500">({technician.reviews} reviews)</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-2" />
                      {technician.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-2" />
                      {technician.experience} experience
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Award className="w-5 h-5 mr-2" />
                      {technician.completedJobs} jobs completed
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Shield className="w-5 h-5 mr-2" />
                      Response: {technician.responseTime}
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">{technician.bio}</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-3">
                {technician.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Certifications</h2>
              <div className="space-y-3">
                {technician.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b last:border-b-0 pb-6 last:pb-0">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={review.avatar}
                        alt={review.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-gray-900">{review.author}</h4>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <div className="flex items-center space-x-1 mb-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  ${technician.hourlyRate}
                  <span className="text-lg text-gray-500 font-normal">/hour</span>
                </div>
                <p className="text-gray-600">Starting rate</p>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center space-x-2 mb-4">
                <Calendar className="w-5 h-5" />
                <span>Book Now</span>
              </button>

              <button className="w-full border-2 border-blue-600 text-blue-600 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all">
                Send Message
              </button>

              <div className="mt-6 pt-6 border-t space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Response Time</span>
                  <span className="font-semibold text-gray-900">{technician.responseTime}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Completed Jobs</span>
                  <span className="font-semibold text-gray-900">{technician.completedJobs}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Member Since</span>
                  <span className="font-semibold text-gray-900">2018</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center space-x-2 text-green-600 mb-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Background Checked</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600 mb-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Satisfaction Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnicianProfile
