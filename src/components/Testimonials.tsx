import React from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Jason',
    role: 'SME Owner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    rating: 5,
    text: 'SwiftFix helped us remove old office furniture quickly. Very professional!',
  },
  {
    name: 'Amira',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    rating: 5,
    text: 'They demolished our partition wall in half a day, no mess left behind. Highly recommend.',
  },
]

const Testimonials = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block glass-strong rounded-2xl px-6 py-3 mb-6 shadow-lg">
            <span className="text-primary-700 font-semibold text-sm tracking-wide">
              CLIENT TESTIMONIALS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-strong rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-10 h-10 text-primary-300 opacity-50" />
              </div>

              <p className="text-gray-800 text-lg mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-white/30"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 glass-strong rounded-3xl p-8 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-700 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-700 mb-2">98%</div>
              <div className="text-gray-700 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-700 mb-2">15+</div>
              <div className="text-gray-700 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-700 mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
