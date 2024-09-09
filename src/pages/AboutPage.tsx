import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="w-full max-w-9xl mx-auto bg-white p-10 shadow-2xl rounded-2xl border border-gray-300">
        {/* Introduction Section */}
        <section className="mb-12">
          <h1 className="text-5xl font-extrabold text-teal-900 mb-6 text-center">
            About Me
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            With over 10 years of experience in software development, I
            specialize in creating robust and scalable solutions. My career has
            been marked by my expertise in various technologies and my ability
            to adapt to evolving industry trends.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-teal-800 mb-8">
            Professional Experience
          </h2>
          <ul className="space-y-8">
            <li>
              <h3 className="text-2xl font-semibold text-teal-700">
                Senior Software Engineer
              </h3>
              <p className="text-gray-600">Company Name - 2016 to Present</p>
              <p className="text-gray-700 mt-2">
                Lead development teams on high-impact projects using modern
                technologies. Specialize in building scalable web applications,
                developing Web APIs, and integrating with various front-end and
                back-end technologies.
              </p>
            </li>
            <li>
              <h3 className="text-2xl font-semibold text-teal-700">
                Software Engineer
              </h3>
              <p className="text-gray-600">Company Name - 2012 to 2016</p>
              <p className="text-gray-700 mt-2">
                Focused on developing and maintaining web applications with an
                emphasis on user experience and performance. Involved in
                architectural design, code reviews, and collaboration with
                cross-functional teams.
              </p>
            </li>
          </ul>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-teal-800 mb-8 text-center">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="p-8 bg-gradient-to-r from-teal-100 to-white shadow-lg rounded-2xl border border-gray-300 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-teal-800 mb-4">
                Programming Languages & Frameworks
              </h3>
              <p className="text-gray-600 text-center">
                C#, ASP.NET (.NET Core 6.0 & 8.0), MVC, Microservices, Angular,
                React.js, Node.js, TypeScript
              </p>
            </div>
            <div className="p-8 bg-gradient-to-r from-teal-100 to-white shadow-lg rounded-2xl border border-gray-300 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-teal-800 mb-4">
                Databases & Storage
              </h3>
              <p className="text-gray-600 text-center">
                MS SQL Server, MongoDB, MySQL, PostgreSQL, Cosmos DB
              </p>
            </div>
            <div className="p-8 bg-gradient-to-r from-teal-100 to-white shadow-lg rounded-2xl border border-gray-300 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-teal-800 mb-4">
                Tools & Platforms
              </h3>
              <p className="text-gray-600 text-center">
                Visual Studio, VS Code, TFS, GitHub, Bitbucket, Azure, Azure
                Functions, Key Vault, Azure AD, Kubernetes, Docker, Digital
                Ocean
              </p>
            </div>
            <div className="p-8 bg-gradient-to-r from-teal-100 to-white shadow-lg rounded-2xl border border-gray-300 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-teal-800 mb-4">
                DevOps & CI/CD
              </h3>
              <p className="text-gray-600 text-center">
                Jenkins, SonarQube, Kibana, Event Bus
              </p>
            </div>
            <div className="p-8 bg-gradient-to-r from-teal-100 to-white shadow-lg rounded-2xl border border-gray-300 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-teal-800 mb-4">
                Software Design & Methodologies
              </h3>
              <p className="text-gray-600 text-center">
                DFDs, Flow Charts, UML Diagrams (Use Case, Activity, Sequence,
                Class), ER-Diagrams, SOLID principles, Design Patterns, Agile,
                Scrum
              </p>
            </div>
            <div className="p-8 bg-gradient-to-r from-teal-100 to-white shadow-lg rounded-2xl border border-gray-300 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-teal-800 mb-4">
                Testing & Front-End
              </h3>
              <p className="text-gray-600 text-center">
                XUNIT, MS TEST, NUNIT, HTML5, CSS3, Redux, Elastic Search
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-4xl font-semibold text-teal-800 mb-6 text-center">
            Contact
          </h2>
          <p className="text-lg text-gray-700 text-center">
            If you would like to get in touch, please feel free to{" "}
            <a
              href="mailto:your.email@example.com"
              className="text-teal-500 hover:underline"
            >
              email me
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
