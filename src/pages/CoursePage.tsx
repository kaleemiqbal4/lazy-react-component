import React from "react";
import {
  CodeBracketIcon,
  CircleStackIcon, // Updated icon import
  DevicePhoneMobileIcon,
  CloudIcon,
  Cog6ToothIcon,
  ChartBarSquareIcon,
  GlobeAltIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";

const CoursePage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="w-full max-w-9xl mx-auto bg-white p-10 shadow-2xl rounded-2xl border border-gray-300">
        {/* Introduction Section */}
        <section className="mb-12">
          <h1 className="text-5xl font-extrabold text-teal-900 mb-6 text-center">
            Courses & Skills
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            With over 10 years of experience, I offer a comprehensive range of
            courses and skills across various domains. My expertise spans across
            development frameworks, databases, tools, and methodologies, each
            vital for building modern and scalable solutions.
          </p>
        </section>

        {/* Courses Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-teal-800 mb-8">
            Courses & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Languages & Frameworks */}
            <div className="p-8 bg-gradient-to-r from-teal-100 to-white shadow-lg rounded-2xl border border-gray-300 flex items-start space-x-4">
              <CodeBracketIcon className="h-10 w-10 text-teal-500" />
              <div>
                <h3 className="text-xl font-semibold text-teal-800">
                  Languages & Frameworks
                </h3>
                <p className="text-gray-600 mt-2">
                  C#, ASP.NET, .NET Core (6.0, 8.0), .NET Core WEB API
                </p>
              </div>
            </div>

            {/* Web Development */}
            <div className="p-8 bg-gradient-to-r from-teal-100 to-white shadow-lg rounded-2xl border border-gray-300 flex items-start space-x-4">
              <DevicePhoneMobileIcon className="h-10 w-10 text-teal-500" />
              <div>
                <h3 className="text-xl font-semibold text-teal-800">
                  Web Development
                </h3>
                <p className="text-gray-600 mt-2">
                  MVC, Microservices, Web API, Angular, React.js,
                  Node.js/TypeScript
                </p>
              </div>
            </div>

            {/* Databases */}
            <div className="p-8 bg-gradient-to-r from-teal-100 to-white shadow-lg rounded-2xl border border-gray-300 flex items-start space-x-4">
              <CircleStackIcon className="h-10 w-10 text-teal-500" />
              <div>
                <h3 className="text-xl font-semibold text-teal-800">
                  Databases
                </h3>
                <p className="text-gray-600 mt-2">
                  SQL Server, MongoDB, MySQL, PostgreSQL
                </p>
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="p-8 bg-gradient-to-r from-teal-100 to-white shadow-lg rounded-2xl border border-gray-300 flex items-start space-x-4">
              <CloudIcon className="h-10 w-10 text-teal-500" />
              <div>
                <h3 className="text-xl font-semibold text-teal-800">
                  Tools & Platforms
                </h3>
                <p className="text-gray-600 mt-2">
                  Visual Studio, VS Code, TFS, GitHub, Bitbucket, Azure, Azure
                  Functions, Kubernetes, Docker, Digital Ocean
                </p>
              </div>
            </div>

            {/* DevOps & CI/CD */}
            <div className="p-8 bg-gradient-to-r from-teal-100 to-white shadow-lg rounded-2xl border border-gray-300 flex items-start space-x-4">
              <Cog6ToothIcon className="h-10 w-10 text-teal-500" />
              <div>
                <h3 className="text-xl font-semibold text-teal-800">
                  DevOps & CI/CD
                </h3>
                <p className="text-gray-600 mt-2">
                  Jenkins, SonarQube, Kibana, Event Bus
                </p>
              </div>
            </div>

            {/* Software Design & Development */}
            <div className="p-8 bg-gradient-to-r from-teal-100 to-white shadow-lg rounded-2xl border border-gray-300 flex items-start space-x-4">
              <SquaresPlusIcon className="h-10 w-10 text-teal-500" />
              <div>
                <h3 className="text-xl font-semibold text-teal-800">
                  Software Design & Development
                </h3>
                <p className="text-gray-600 mt-2">
                  DFD, Flow Chart, UML (Use Case, Activity, Sequence, Class
                  Diagrams), ER-Diagram
                </p>
              </div>
            </div>

            {/* Methodologies */}
            <div className="p-8 bg-gradient-to-r from-teal-100 to-white shadow-lg rounded-2xl border border-gray-300 flex items-start space-x-4">
              <ChartBarSquareIcon className="h-10 w-10 text-teal-500" />
              <div>
                <h3 className="text-xl font-semibold text-teal-800">
                  Methodologies
                </h3>
                <p className="text-gray-600 mt-2">Agile, Scrum</p>
              </div>
            </div>

            {/* Project Management & Collaboration */}
            <div className="p-8 bg-gradient-to-r from-teal-100 to-white shadow-lg rounded-2xl border border-gray-300 flex items-start space-x-4">
              <GlobeAltIcon className="h-10 w-10 text-teal-500" />
              <div>
                <h3 className="text-xl font-semibold text-teal-800">
                  Project Management & Collaboration
                </h3>
                <p className="text-gray-600 mt-2">
                  Jira, Elastic Search, Azure DevOps
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-4xl font-semibold text-teal-800 mb-6">Contact</h2>
          <p className="text-lg text-gray-700">
            For more information or to get in touch, please feel free to{" "}
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

export default CoursePage;
