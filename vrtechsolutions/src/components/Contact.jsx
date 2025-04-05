function Contact() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-blue-100 px-4">
        <div className="text-center w-full max-w-md">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <form
            action="https://formspree.io/f/xvgkwjqe"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Contact;
  