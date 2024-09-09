import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-teal-900 text-white text-center py-24">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl font-extrabold mb-6 leading-tight">
            Unlock the Power of React
          </h1>
          <p className="text-2xl mb-10">
            Master lazy loading and routing to build faster, more efficient
            applications.
          </p>
          <a
            href="#learn-more"
            className="inline-block px-8 py-4 bg-teal-500 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-600 transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Content Section */}
      <section id="learn-more" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Learn React Techniques
          </h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                <h3 className="text-3xl font-semibold mb-4 text-teal-900">
                  Lazy Loading
                </h3>
                <p className="text-gray-700 mb-4">
                  Lazy loading delays the loading of resources until they are
                  needed. In React, this helps to improve performance by
                  splitting your code into smaller chunks.
                </p>
                <p className="text-gray-700">
                  Use `React.lazy()` and `Suspense` to dynamically import
                  components and show a fallback while loading.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                <h3 className="text-3xl font-semibold mb-4 text-teal-900">
                  Routing in React
                </h3>
                <p className="text-gray-700 mb-4">
                  Routing in React is managed with `react-router-dom`. It allows
                  you to navigate between different components seamlessly.
                </p>
                <p className="text-gray-700">
                  Combine routing with lazy loading for optimized performance
                  and better user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-teal-900 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Dive In?</h2>
          <p className="text-xl mb-8">
            Start implementing lazy loading and routing in your React projects
            to enhance performance and user experience.
          </p>
          <a
            href="/docs"
            className="inline-block px-8 py-4 bg-teal-500 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-600 transition-colors duration-300"
          >
            Explore Documentation
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
