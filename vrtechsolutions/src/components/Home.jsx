// src/components/Home.jsx
function Home() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in">Welcome</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This is a brief description of our amazing single-page application.
          </p>
        </div>
      </div>
    );
  }
  
  export default Home;