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

function Home() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen" style={{ backgroundImage: `url(${spaceBackground})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      {/* Header */}
      <header className="shadow-sm rounded-b-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.52)', backdropFilter: 'blur(10px)' }}>
        <div className="container mx-auto px-5 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img src={mapLogo} alt="Map Of Moments Logo" className="h-8 w-8" />
            <span className="ml-2 font-semibold text-gray-800">Map Of Moments</span>
          </div>
          <div>
            {isAuthenticated ? (
              <button 
                onClick={logout}
                className="px-3 py-1 text-sm bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Logout
              </button>
            ) : (
              <>
                <button 
                  onClick={() => navigate('/auth')}
                  className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800 mr-2"
                >
                  Login
                </button>
                <button 
                  onClick={() => navigate('/auth')}
                  className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }}>
          <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left text-white mb-4">
            Welcome to Map Of Moments
          </h1>
          <p className="text-white text-center md:text-left mb-6">
            Connect with the world through maps and explore trending locations.
          </p>
          
          {/* Sign Up Button */}
          <div className="text-center md:text-left">
            <button 
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors text-lg"
              onClick={() => navigate('/auth')}
            >
              Sign Up Now!
            </button>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center" style={{ height: '600px' }}>
          {/* 3D Earth component */}
          <EarthScene />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }}>
          <h2 className="text-2xl font-bold text-center mb-12 text-white">Features & Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-white">Discover Locations</h3>
              <p className="text-white text-sm">Explore new and trending places around the world with ease.</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-white">Connect with Others</h3>
              <p className="text-white text-sm">Interact with people who've visited the places you're interested in.</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-white">Personalized Maps</h3>
              <p className="text-white text-sm">Create and share maps with your unique insights and travel stories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Users Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }}>
          <h2 className="text-2xl font-bold text-center mb-8 text-white">Popular Users</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg shadow p-6 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }}>
              <img src={userAlice} alt="Alice Summers" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="font-semibold text-white">Alice Summers</h3>
              <p className="text-white text-sm">Travel & Blogger</p>
            </div>
            
            <div className="rounded-lg shadow p-6 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }}>
              <img src={userJohn} alt="John Brown" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="font-semibold text-white">John Brown</h3>
              <p className="text-white text-sm">Photo Journalist</p>
            </div>
            
            <div className="rounded-lg shadow p-6 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }}>
              <img src={userEmily} alt="Emily Chan" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="font-semibold text-white">Emily Chan</h3>
              <p className="text-white text-sm">Adventure Seeker</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Locations */}
      <section className="py-12">
        <div className="container mx-auto px-4 p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }}>
          <h2 className="text-2xl font-bold text-center mb-8 text-white">Trending Locations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }}>
              <img src={marrakech} alt="Marrakech, Morocco" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-white">Marrakech, Morocco</h3>
                <p className="text-white text-sm">Experience the vibrant colors and bustling markets.</p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }}>
              <img src={santorini} alt="Santorini, Greece" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-white">Santorini, Greece</h3>
                <p className="text-white text-sm">Discover blue domes and breathtaking sunsets.</p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }}>
              <img src={tokyo} alt="Tokyo, Japan" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-white">Tokyo, Japan</h3>
                <p className="text-white text-sm">Explore the city that blends the old with the ultra-modern.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-8">
        <div className="container mx-auto px-4 p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">About Map Of Moments</h3>
              <p className="text-white text-sm">Map Of Moments is a platform to connect travelers through shared map experiences.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
              <p className="text-white text-sm">Email: dibyanshumohanty4@gmail.com</p>
              <p className="text-white text-sm">Phone: +91 xxxxxxxxxx</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Social Media Icons */}
                <a href="#" className="text-white hover:text-gray-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-white text-sm">
            &copy; {new Date().getFullYear()} Map Of Moments. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;