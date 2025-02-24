// app/page.tsx
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
//import Image from 'next/image';

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Feature Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition duration-200">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Support</h3>
              <p className="text-gray-600 mb-4">
                Find a home away from home with our welcoming Indian student community at PoliMi.
              </p>
              <Link href="/about" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Learn More →
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition duration-200">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cultural Events</h3>
              <p className="text-gray-600 mb-4">
                Celebrate Indian festivals and cultural events together with fellow students.
              </p>
              <Link href="/events" className="text-indigo-600 hover:text-indigo-800 font-medium">
                View Events →
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition duration-200">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Academic Resources</h3>
              <p className="text-gray-600 mb-4">
                Access study materials, mentorship, and career guidance from seniors and alumni.
              </p>
              <Link href="/networks" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Explore Resources →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">About ISA POLIMI</h2>
              <p className="text-gray-600 mb-4">
                The Indian Student Association at Politecnico di Milano (ISA POLIMI) is a student-run organization dedicated to supporting Indian students and promoting Indian culture within the university community.
              </p>
              <p className="text-gray-600 mb-6">
                Our mission is to create a supportive environment for Indian students, helping them navigate academic challenges, cultural adjustment, and professional development while studying in Milan.
              </p>
              <Link 
                href="/about" 
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="w-full md:w-1/2 bg-gray-200 rounded-lg overflow-hidden shadow-md h-80 relative">
              {/* Replace with your actual image */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Placeholder for team image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Upcoming Events</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Join us for our upcoming events and celebrations to connect with the Indian community at PoliMi.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-200">
              <div className="h-48 bg-gray-200 w-full relative">
                {/* Replace with your actual image */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Event image placeholder
                </div>
              </div>
              <div className="p-6">
                <div className="text-indigo-600 text-sm font-semibold mb-2">MAR 15, 2025</div>
                <h3 className="text-xl font-bold mb-2">Holi Celebration</h3>
                <p className="text-gray-600 mb-4">
                  Join us for a colorful Holi celebration with traditional food, music, and festivities.
                </p>
                <Link href="/events" className="text-indigo-600 hover:text-indigo-800 font-medium">
                  Learn More →
                </Link>
              </div>
            </div>
            
            {/* Event 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-200">
              <div className="h-48 bg-gray-200 w-full relative">
                {/* Replace with your actual image */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Event image placeholder
                </div>
              </div>
              <div className="p-6">
                <div className="text-indigo-600 text-sm font-semibold mb-2">APR 05, 2025</div>
                <h3 className="text-xl font-bold mb-2">Career Workshop</h3>
                <p className="text-gray-600 mb-4">
                  Career preparation workshop with alumni working in top Italian and international companies.
                </p>
                <Link href="/events" className="text-indigo-600 hover:text-indigo-800 font-medium">
                  Learn More →
                </Link>
              </div>
            </div>
            
            {/* Event 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-200">
              <div className="h-48 bg-gray-200 w-full relative">
                {/* Replace with your actual image */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Event image placeholder
                </div>
              </div>
              <div className="p-6">
                <div className="text-indigo-600 text-sm font-semibold mb-2">APR 20, 2025</div>
                <h3 className="text-xl font-bold mb-2">Milan City Tour</h3>
                <p className="text-gray-600 mb-4">
                  Guided tour of Milan&apos;s historic sites and hidden gems for new students.
                </p>
                <Link href="/events" className="text-indigo-600 hover:text-indigo-800 font-medium">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/events" 
              className="px-8 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-lg shadow-md hover:bg-indigo-50 transition duration-200"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Members Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Priya Sharma</h4>
                  <p className="text-gray-600 text-sm">Computer Science, 2nd Year</p>
                </div>
              </div>
              <p className="text-gray-700">
                &quot;Joining ISA POLIMI was the best decision I made after coming to Milan. They helped me navigate the university system and made me feel at home right away.&quot;
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Rahul Patel</h4>
                  <p className="text-gray-600 text-sm">Mechanical Engineering, 3rd Year</p>
                </div>
              </div>
              <p className="text-gray-700">
                &quot;The events organized by ISA POLIMI helped me connect with other Indian students and build a support network. Their academic guidance sessions were incredibly helpful too.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community Today</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Become a member of ISA POLIMI and connect with fellow Indian students, access resources, and participate in cultural events.
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
    </>
  );
}