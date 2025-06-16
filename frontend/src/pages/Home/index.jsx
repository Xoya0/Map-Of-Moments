import { useNavigate } from 'react-router-dom';
import spaceBackground from '../../assets/space.jpg';
import mapLogo from '../../assets/logo.svg';
import userAlice from '../../assets/user-alice.jpeg';
import userJohn from '../../assets/user-john.jpeg';
import userEmily from '../../assets/user-emily.jpeg';
import marrakech from '../../assets/location-marrakech.jpg';
import santorini from '../../assets/location-santorini.jpg';
import tokyo from '../../assets/location-tokyo.jpeg';
import EarthScene from '../../components/EarthScene';
import { useAuth } from '../../context/AuthContext';
import './index.css';

function Home() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="home-container" style={{ backgroundImage: `url(${spaceBackground})` }}>
      {/* Header */}
      <header className="header">
        <div className="container mx-auto px-5 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src={mapLogo} alt="Map Of Moments Logo" className="h-10 w-10" />
            <span className="text-xl font-bold text-white">Map Of Moments</span>
          </div>
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <button 
                onClick={logout}
                className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Logout
              </button>
            ) : (
              <>
                <button 
                  onClick={() => navigate('/auth')}
                  className="px-4 py-2 text-sm text-white hover:text-gray-200"
                >
                  Login
                </button>
                <button 
                  onClick={() => navigate('/auth')}
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 hero-content p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Explore the World Through <span className="text-blue-400">Shared Moments</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Connect with travelers worldwide, discover hidden gems, and create your own journey map.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-lg font-semibold"
                onClick={() => navigate('/auth')}
              >
                Get Started
              </button>
              <button 
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 text-lg font-semibold"
                onClick={() => navigate('/explore')}
              >
                Explore Maps
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center" style={{ height: '500px' }}>
            <EarthScene />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose Map Of Moments?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="features-section p-6">
              <div className="text-blue-400 text-4xl mb-4">🗺️</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Discover Locations</h3>
              <p className="text-gray-200">Explore new and trending places around the world with detailed insights and recommendations.</p>
            </div>
            
            <div className="features-section p-6">
              <div className="text-blue-400 text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Connect with Others</h3>
              <p className="text-gray-200">Join a community of travelers and share experiences with people who share your interests.</p>
            </div>
            
            <div className="features-section p-6">
              <div className="text-blue-400 text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Personalized Maps</h3>
              <p className="text-gray-200">Create and customize your own travel maps with photos, stories, and personal insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Users Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Meet Our Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="user-card p-6 text-center">
              <div className="relative mb-6">
                <img src={userAlice} alt="Alice Summers" className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-400" />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-400 text-white px-4 py-1 rounded-full text-sm">
                  Travel Expert
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Alice Summers</h3>
              <p className="text-gray-200">Travel & Lifestyle Blogger</p>
            </div>
            
            <div className="user-card p-6 text-center">
              <div className="relative mb-6">
                <img src={userJohn} alt="John Brown" className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-400" />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-400 text-white px-4 py-1 rounded-full text-sm">
                  Photo Expert
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">John Brown</h3>
              <p className="text-gray-200">Photo Journalist</p>
            </div>
            
            <div className="user-card p-6 text-center">
              <div className="relative mb-6">
                <img src={userEmily} alt="Emily Chan" className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-400" />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-400 text-white px-4 py-1 rounded-full text-sm">
                  Adventure Guide
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Emily Chan</h3>
              <p className="text-gray-200">Adventure Seeker</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Locations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Trending Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="location-card overflow-hidden">
              <div className="relative">
                <img src={marrakech} alt="Marrakech, Morocco" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Marrakech</h3>
                  <p className="text-gray-200">Morocco</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-200">Experience the vibrant colors and bustling markets of this magical city.</p>
              </div>
            </div>
            
            <div className="location-card overflow-hidden">
              <div className="relative">
                <img src={santorini} alt="Santorini, Greece" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Santorini</h3>
                  <p className="text-gray-200">Greece</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-200">Discover blue domes and breathtaking sunsets in this Mediterranean paradise.</p>
              </div>
            </div>
            
            <div className="location-card overflow-hidden">
              <div className="relative">
                <img src={tokyo} alt="Tokyo, Japan" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Tokyo</h3>
                  <p className="text-gray-200">Japan</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-200">Explore the city that blends the old with the ultra-modern.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12">
        <div className="container mx-auto px-4">
          <div className="footer-section p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">About Map Of Moments</h3>
                <p className="text-gray-200 leading-relaxed">Map Of Moments is a platform to connect travelers through shared map experiences and create lasting memories.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
                <div className="space-y-2">
                  <p className="text-gray-200">Email: dibyanshumohanty4@gmail.com</p>
                  <p className="text-gray-200">Phone: +91 xxxxxxxxxx</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-blue-400 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-blue-400 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-blue-400 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 footer-border text-center text-gray-200">
              &copy; {new Date().getFullYear()} Map Of Moments. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
