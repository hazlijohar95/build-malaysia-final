import { useState } from 'react';

const testimonials = [
  {
    quote: "Build Malaysia connected me with opportunities I never thought possible. The network here understands what it means to be Malaysian and extraordinary.",
    author: "Ahmad Haziq",
    title: "Senior Engineer, now building Malaysia's next unicorn",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  },
  {
    quote: "Coming home to contribute to Malaysia's tech ecosystem was the best decision I made. This platform made the transition seamless.",
    author: "Sarah Lee", 
    title: "Former Meta PM, now leading Malaysia's fintech revolution",
    image: "https://images.unsplash.com/photo-1494790108755-2616b512d0b7?w=80&h=80&fit=crop&crop=face",
  },
  {
    quote: "The talent network here is unparalleled. I found co-founders, investors, and mentors all committed to building extraordinary things in Malaysia.",
    author: "Raj Krishnan",
    title: "Ex-Google AI researcher, now CEO of Malaysian AI startup",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
  },
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-black leading-tight tracking-tight">
            Working with build malaysia
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-12 lg:p-16 shadow-sm border border-gray-100/50">
            <blockquote className="text-xl lg:text-2xl text-gray-800 mb-12 leading-relaxed font-normal">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-lg text-black mb-1">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-base text-gray-600 leading-relaxed">
                    {testimonials[currentTestimonial].title}
                  </div>
                </div>
              </div>
              
              <button className="text-base text-gray-900 hover:text-black font-medium transition-colors hidden sm:block">
                See profile →
              </button>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-black w-8' 
                  : 'bg-gray-300 w-1.5'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}