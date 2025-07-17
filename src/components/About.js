const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-orange-50">
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl w-full text-center space-y-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3">
            <img
              src="https://img.icons8.com/emoji/48/hamburger-emoji.png"
              alt="Food Icon"
              className="w-10 h-10"
            />
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            About GRUBHUB
          </h1>
          </div>

          {/* Intro Text */}
          <div className="text-left text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed space-y-6">
            <p>
              Welcome to <strong>GrubHub</strong> – your ultimate food discovery and delivery companion!
              Built using Swiggy's API, our app is designed to bring your favorite meals from local restaurants
              right to your fingertips.
            </p>

            {/* Why GrubHub */}
            <div>
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Why GrubHub?</h2>
              <p>
                We believe food is more than just fuel – it's an experience. Whether you're craving spicy street food,
                gourmet delights, or a comforting home-style meal, GrubHub helps you explore a wide range of cuisines
                and dishes without leaving your couch.
              </p>
            </div>

            {/* What We Offer */}
            <div>
              <h2 className="text-2xl font-bold mb-2 text-gray-900">What We Offer:</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Seamless browsing of restaurant menus powered by Swiggy’s robust API.</li>
                <li>Easy-to-use and beautifully designed interface.</li>
                <li>Real-time updates and fast performance.</li>
                <li>Personalized recommendations based on your taste.</li>
              </ul>
            </div>

            {/* Closing Line */}
            <p>
              Whether you're a foodie on the hunt or someone just looking for a quick bite – GrubHub is here to serve!
              Your next delicious meal is just a tap away.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 py-4 text-center">
        <p className="text-sm sm:text-base text-gray-600">
          Proudly designed & developed by{" "}
          <span className="font-bold text-black">Vikash Sengar 💜</span>
        </p>
      </footer>
    </div>
  );
};

export default About;
