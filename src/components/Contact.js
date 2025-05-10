const Contact = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Get In Touch 🍽️
          </h1>
          <p className="text-md sm:text-lg text-gray-700 mb-10">
            Have a question, suggestion, or just want to say hello? Fill out the form below and we’ll get back to you as soon as possible!
          </p>
        </div>
  
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-2xl border border-orange-200 hover:shadow-orange-300 transition duration-300">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-left text-sm font-medium text-gray-800 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your full name"
                required
              />
            </div>
  
            <div>
              <label htmlFor="email" className="block text-left text-sm font-medium text-gray-800 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
                placeholder="example@domain.com"
                required
              />
            </div>
  
            <div>
              <label htmlFor="message" className="block text-left text-sm font-medium text-gray-800 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 resize-none"
                placeholder="Tell us what's on your mind..."
                required
              ></textarea>
            </div>
  
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-200 cursor-pointer shadow-md"
              >
                📩 Send Message
              </button>
            </div>
          </form>
        </div>
  
        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-gray-600">
          Designed with 💜 by <span className="font-bold text-purple-700">Vikash Sengar</span>
        </footer>
      </div>
    );
  };
  
  export default Contact;
  