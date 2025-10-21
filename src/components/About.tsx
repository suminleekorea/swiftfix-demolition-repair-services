import React from 'react'
import { Shield, Clock, Award, Users } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block glass-strong rounded-2xl px-6 py-3 mb-6 shadow-lg">
              <span className="text-primary-700 font-semibold text-sm tracking-wide">
                ABOUT SWIFTFIX
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Your Trusted Partner for All Repair & Demolition Needs
            </h2>
            
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              At SwiftFix, we understand how stressful it can be to manage bulky removals, minor repairs, or renovation preparation.
            </p>
            
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Our experienced team has handled over 500 successful projects across Singapore, from simple home fixes to complex office demolitions.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-5 shadow-lg">
                <Shield className="w-8 h-8 text-primary-600 mb-3" />
                <h4 className="font-bold text-gray-800 mb-1">Licensed & Insured</h4>
                <p className="text-sm text-gray-600">Fully certified professionals</p>
              </div>
              
              <div className="glass rounded-2xl p-5 shadow-lg">
                <Clock className="w-8 h-8 text-primary-600 mb-3" />
                <h4 className="font-bold text-gray-800 mb-1">Fast Response</h4>
                <p className="text-sm text-gray-600">Same-day service available</p>
              </div>
              
              <div className="glass rounded-2xl p-5 shadow-lg">
                <Award className="w-8 h-8 text-primary-600 mb-3" />
                <h4 className="font-bold text-gray-800 mb-1">Quality Work</h4>
                <p className="text-sm text-gray-600">Excellence guaranteed</p>
              </div>
              
              <div className="glass rounded-2xl p-5 shadow-lg">
                <Users className="w-8 h-8 text-primary-600 mb-3" />
                <h4 className="font-bold text-gray-800 mb-1">Expert Team</h4>
                <p className="text-sm text-gray-600">Skilled professionals</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="glass-strong rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=700&fit=crop" 
                alt="Professional team at work"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 glass-strong rounded-2xl p-6 shadow-2xl max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-2xl font-bold">
                  15+
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-lg">Years of Excellence</div>
                  <div className="text-gray-600 text-sm">Serving Singapore</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
