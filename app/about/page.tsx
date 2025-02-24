// app/about/page.tsx
import Link from 'next/link';

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-['Gloock']">About ISA POLIMI</h1>
          <p className="text-xl max-w-3xl mx-auto">
            The Indian Student Association at Politecnico di Milano - Supporting and connecting Indian students since 2021.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                ISA POLIMI's mission is to foster a sense of community among Indian students at Politecnico di Milano by providing support, resources, and a platform for cultural exchange.
              </p>
              <p className="text-gray-700 mb-4">
                We aim to help students navigate academic challenges, cultural adjustment, and professional development while studying in Milan, ensuring they have a fulfilling university experience.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-700 mb-4">
                We envision a vibrant Indian student community at PoliMi that celebrates diversity, promotes cultural awareness, and creates lasting connections between students, alumni, and the broader university community.
              </p>
              <p className="text-gray-700 mb-4">
                Through our initiatives, we aspire to enhance the academic and cultural experience of Indian students while contributing positively to the international atmosphere at Politecnico di Milano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4">
              ISA POLIMI was founded in 2023 by a group of passionate Indian students who recognized the need for a dedicated support system for the growing Indian community at Politecnico di Milano.
            </p>
            <p className="text-gray-700 mb-4">
              What started as informal meetups and study groups quickly evolved into a structured organization with a clear mission to address the unique challenges faced by Indian students in Milan.
            </p>
            <p className="text-gray-700 mb-4">
              Today, ISA POLIMI has grown into a vibrant community with hundreds of active members across various departments and programs at PoliMi. We organize cultural events, academic workshops, networking sessions, and social gatherings to create a home away from home for Indian students.
            </p>
            <p className="text-gray-700 mb-4">
              Our close collaboration with the university administration, other cultural associations, and alumni has enabled us to expand our impact and provide valuable resources to our members.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md text-center">
              <div className="h-64 bg-gray-200 w-full"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Arjun Mehta</h3>
                <p className="text-indigo-600 mb-3">President</p>
                <p className="text-gray-600 mb-4">
                  PhD student in Computer Engineering with a passion for building communities.
                </p>
                <div className="flex justify-center space-x-4">
                  {/* Social icons would go here */}
                </div>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md text-center">
              <div className="h-64 bg-gray-200 w-full"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Neha Gupta</h3>
                <p className="text-indigo-600 mb-3">Vice President</p>
                <p className="text-gray-600 mb-4">
                  Master's in Architecture and leads our cultural events committee.
                </p>
                <div className="flex justify-center space-x-4">
                  {/* Social icons would go here */}
                </div>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md text-center">
              <div className="h-64 bg-gray-200 w-full"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Vikram Singh</h3>
                <p className="text-indigo-600 mb-3">Secretary</p>
                <p className="text-gray-600 mb-4">
                  Undergraduate in Mechanical Engineering and manages our academic resources.
                </p>
                <div className="flex justify-center space-x-4">
                  {/* Social icons would go here */}
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/contact-us" 
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
            >
              Get in Touch With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Value 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Community</h3>
              <p className="text-gray-600 text-center">
                Building a supportive and inclusive environment for all Indian students.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Cultural Pride</h3>
              <p className="text-gray-600 text-center">
                Celebrating and sharing Indian culture, traditions, and heritage.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Education</h3>
              <p className="text-gray-600 text-center">
                Supporting academic excellence and knowledge sharing among members.
              </p>
            </div>
            
            {/* Value 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Diversity</h3>
              <p className="text-gray-600 text-center">
                Embracing diversity and fostering cross-cultural understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Be part of the ISA POLIMI family and help us build a stronger Indian community at Politecnico di Milano.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              href="/join-us" 
              className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-md hover:bg-gray-100 transition duration-200"
            >
              Become a Member
            </Link>
            <Link 
              href="/contact-us" 
              className="px-8 py-3 bg-transparent text-white border border-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}