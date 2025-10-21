import React from 'react'
import { Trash2, Wrench, Hammer, Recycle } from 'lucide-react'

const services = [
  {
    icon: Trash2,
    number: '1',
    title: 'Furniture Removal & Disposal',
    description: 'Safe and eco-friendly disposal of bulky items, old furniture, and office equipment.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
  },
  {
    icon: Wrench,
    number: '2',
    title: 'Minor Repairs & Handyman Work',
    description: 'Quick fixes for plumbing, electrical, and household issues.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop',
  },
  {
    icon: Hammer,
    number: '3',
    title: 'Wall Demolition & Partition Removal',
    description: 'Professional, safe demolition for renovation or office restructuring.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop',
  },
  {
    icon: Recycle,
    number: '4',
    title: 'Waste Management & Site Clearing',
    description: 'Leave the heavy lifting to us—complete cleanup after demolition.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop',
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block glass-strong rounded-2xl px-6 py-3 mb-6 shadow-lg">
            <span className="text-primary-700 font-semibold text-sm tracking-wide">
              ✽ WHAT WE OFFER
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Comprehensive solutions for all your demolition and repair needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div 
                key={index}
                className="glass-strong rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:scale-105 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl glass-strong flex items-center justify-center shadow-lg">
                    <span className="text-xl font-bold text-primary-700">{service.number}</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                  <button className="mt-6 text-primary-700 font-semibold hover:text-primary-800 transition-colors flex items-center space-x-2 group">
                    <span>Learn More</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 glass-strong rounded-3xl p-12 shadow-2xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our team is ready to help with your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all hover:scale-105">
              Request Free Quote
            </button>
            <a 
              href="tel:+15555555556"
              className="glass-strong px-8 py-4 rounded-xl font-semibold text-lg text-gray-800 hover:shadow-xl transition-all hover:scale-105"
            >
              Call +1 555-555-5556
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
