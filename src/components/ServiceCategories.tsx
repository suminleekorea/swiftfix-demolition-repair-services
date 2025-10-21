import React from 'react'
import { Wrench, Zap, Droplet, Hammer, PaintBucket, Wind, Lock, Lightbulb } from 'lucide-react'

const categories = [
  { id: 'all', name: 'All Services', icon: Wrench, color: 'from-blue-500 to-blue-600' },
  { id: 'plumbing', name: 'Plumbing', icon: Droplet, color: 'from-cyan-500 to-cyan-600' },
  { id: 'electrical', name: 'Electrical', icon: Zap, color: 'from-yellow-500 to-yellow-600' },
  { id: 'carpentry', name: 'Carpentry', icon: Hammer, color: 'from-orange-500 to-orange-600' },
  { id: 'painting', name: 'Painting', icon: PaintBucket, color: 'from-purple-500 to-purple-600' },
  { id: 'hvac', name: 'HVAC', icon: Wind, color: 'from-teal-500 to-teal-600' },
  { id: 'locksmith', name: 'Locksmith', icon: Lock, color: 'from-red-500 to-red-600' },
  { id: 'lighting', name: 'Lighting', icon: Lightbulb, color: 'from-amber-500 to-amber-600' },
]

interface ServiceCategoriesProps {
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

const ServiceCategories: React.FC<ServiceCategoriesProps> = ({ selectedCategory, onSelectCategory }) => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 rounded-full px-6 py-2 mb-6">
            <span className="text-blue-700 font-semibold text-sm">
              🛠️ POPULAR SERVICES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Do You Need Fixed?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse by service category to find the right technician for your needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => {
            const Icon = category.icon
            const isSelected = selectedCategory === category.id
            
            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={`p-6 rounded-2xl transition-all hover:scale-105 ${
                  isSelected 
                    ? 'bg-gradient-to-br ' + category.color + ' text-white shadow-xl' 
                    : 'bg-white hover:shadow-lg'
                }`}
              >
                <Icon className={`w-10 h-10 mx-auto mb-3 ${isSelected ? 'text-white' : 'text-gray-700'}`} />
                <div className={`font-semibold ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                  {category.name}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServiceCategories
