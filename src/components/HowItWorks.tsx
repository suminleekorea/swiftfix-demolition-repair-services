import React from 'react'
import { Search, UserCheck, Calendar, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Search & Compare',
    description: 'Browse verified technicians, read reviews, and compare rates for your specific repair needs.',
  },
  {
    icon: UserCheck,
    title: 'Choose Your Pro',
    description: 'Select the perfect technician based on expertise, availability, and customer ratings.',
  },
  {
    icon: Calendar,
    title: 'Book Instantly',
    description: 'Schedule your service at a time that works for you with our easy booking system.',
  },
  {
    icon: CheckCircle,
    title: 'Get It Fixed',
    description: 'Your chosen technician arrives on time and completes the job to your satisfaction.',
  },
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 rounded-full px-6 py-2 mb-6">
            <span className="text-blue-700 font-semibold text-sm">
              ✨ SIMPLE PROCESS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get your home repairs done in four easy steps
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-300 to-cyan-300" />
                )}
                
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {index + 1}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
