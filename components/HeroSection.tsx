// components/HeroSection.tsx
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-r from-indigo-100 to-blue-50">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 font-['Gloock']">
          Indian Student Association
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-indigo-700 font-['Gloock']">
          Supporting Our Community Together
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-10">
          We connect hearts, transform lives and foster a sense of belonging for everyone.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <Link 
            href="/join-us" 
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
          >
            Join Our Community
          </Link>
          <Link 
            href="/events" 
            className="px-8 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-lg shadow-md hover:bg-indigo-50 transition duration-200"
          >
            Upcoming Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;