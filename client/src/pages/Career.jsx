import React from "react";
import Navbar from "../components/Global/Navbar";
import Footer from "../components/Global/Footer";

const Career = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-50 to-white">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Brand tagline */}
            <div className="text-sm uppercase tracking-wider text-gray-600 font-medium">
              JOIN OUR JOURNEY
            </div>

            {/* Main heading */}
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
              Build Your Career With{" "}
              <span className="text-[#0092b8]">Innovation</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We're passionate about creating cutting-edge software solutions.
              While we're not actively hiring right now, we're always interested
              in connecting with talented individuals who share our vision.
            </p>
          </div>
        </div>

        {/* Current Status */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-team-line text-2xl text-[#0092b8]"></i>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Not Currently Hiring
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              We're currently focused on our ongoing projects and not actively
              hiring new team members. However, we believe great talent
              shouldn't wait for perfect timing!
            </p>
            <div className="bg-white rounded-xl p-6 inline-block shadow-sm">
              <div className="flex items-center justify-center gap-2 mb-2">
                <i className="ri-lightbulb-line text-[#0092b8]"></i>
                <p className="text-slate-800 font-semibold">
                  Interested in future opportunities?
                </p>
              </div>
              <p className="text-gray-600 text-sm">
                Send us your resume and we'll keep you in mind for upcoming
                positions.
              </p>
            </div>
          </div>
        </div>

        {/* Why Work With Us */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 text-lg">What makes our team special</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-code-s-slash-line text-xl text-[#0092b8]"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Cutting-Edge Tech
              </h3>
              <p className="text-gray-600">
                Work with the latest technologies and frameworks in a modern
                development environment.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-heart-3-line text-xl text-pink-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Work-Life Balance
              </h3>
              <p className="text-gray-600">
                We believe in maintaining a healthy balance between professional
                growth and personal well-being.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-trophy-line text-xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Growth Opportunities
              </h3>
              <p className="text-gray-600">
                Continuous learning and development opportunities to advance
                your career.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-cup-line text-xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Great Culture
              </h3>
              <p className="text-gray-600">
                Collaborative environment where innovation thrives and every
                voice matters.
              </p>
            </div>
          </div>
        </div>

        {/* Future Roles */}
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Future Opportunities
            </h2>
            <p className="text-gray-600 text-lg">
              Roles we might be looking for in the future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Frontend Developer",
                skills: ["React", "TypeScript", "Tailwind CSS"],
                level: "Mid-Senior",
                icon: "ri-computer-line",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Backend Developer",
                skills: ["Node.js", "Python", "Database Design"],
                level: "Mid-Senior",
                icon: "ri-server-line",
                color: "from-green-500 to-green-600"
              },
              {
                title: "Full Stack Developer",
                skills: ["MERN", "Next.js", "Cloud Services"],
                level: "Senior",
                icon: "ri-stack-line",
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "UI/UX Designer",
                skills: ["Figma", "User Research", "Prototyping"],
                level: "Mid-Level",
                icon: "ri-palette-line",
                color: "from-pink-500 to-pink-600"
              },
              {
                title: "DevOps Engineer",
                skills: ["AWS", "Docker", "CI/CD"],
                level: "Senior",
                icon: "ri-settings-3-line",
                color: "from-orange-500 to-orange-600"
              },
              {
                title: "Project Manager",
                skills: ["Agile", "Team Leadership", "Client Relations"],
                level: "Senior",
                icon: "ri-user-star-line",
                color: "from-indigo-500 to-indigo-600"
              },
            ].map((role, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-cyan-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${role.color} rounded-lg flex items-center justify-center`}>
                    <i className={`${role.icon} text-white text-lg`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      {role.title}
                    </h3>
                    <div className="text-sm text-[#0092b8] font-medium">
                      {role.level} Level
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {role.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full group-hover:bg-gray-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <i className="ri-time-line"></i>
                  Position may open in the future
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills We Value */}
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Skills We Value
            </h2>
            <p className="text-gray-600 text-lg">Technologies and expertise we appreciate</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "React", icon: "ri-reactjs-line", color: "text-blue-500" },
              { name: "Node.js", icon: "ri-nodejs-line", color: "text-green-500" },
              { name: "Python", icon: "ri-code-line", color: "text-yellow-500" },
              { name: "JavaScript", icon: "ri-javascript-line", color: "text-yellow-600" },
              { name: "Git", icon: "ri-git-branch-line", color: "text-orange-500" },
              { name: "Docker", icon: "ri-container-line", color: "text-blue-600" },
              { name: "AWS", icon: "ri-cloud-line", color: "text-orange-400" },
              { name: "MongoDB", icon: "ri-database-2-line", color: "text-green-600" },
              { name: "Figma", icon: "ri-pencil-ruler-2-line", color: "text-purple-500" },
              { name: "Tailwind", icon: "ri-css3-line", color: "text-[#0092b8]" },
              { name: "TypeScript", icon: "ri-code-s-slash-line", color: "text-blue-700" },
              { name: "GraphQL", icon: "ri-share-circle-line", color: "text-pink-500" }
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 text-center border border-gray-100 hover:border-cyan-200 hover:shadow-md transition-all duration-300"
              >
                <i className={`${skill.icon} text-2xl ${skill.color} mb-2 block`}></i>
                <p className="text-sm font-medium text-gray-700">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="bg-gradient-to-r from-[#0092b8] to-blue-600 rounded-2xl p-8 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-mail-line text-2xl"></i>
              </div>
              <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
              <p className="text-cyan-100 text-lg mb-8">
                Send us your resume and portfolio. We'll reach out when the right
                opportunity comes up!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="flex items-center justify-center gap-2 bg-white text-[#0092b8] hover:bg-gray-50 px-8 py-4 rounded-full font-medium transition-colors duration-200">
                  <i className="ri-attachment-line"></i>
                  Send Your Resume
                </button>
                <button className="flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#0092b8] px-8 py-4 rounded-full font-medium transition-colors duration-200">
                  View Our Work <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
          </div>
        </div>

        {/* Team Values */}
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Our Team Values
            </h2>
            <p className="text-gray-600 text-lg">What drives us every day</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0092b8] to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-bar-chart-box-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for excellence in every project, delivering quality
                that exceeds expectations.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0092b8] to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-team-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Collaboration
              </h3>
              <p className="text-gray-600">
                We believe great things happen when talented people work
                together towards a common goal.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0092b8] to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-lightbulb-flash-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Innovation
              </h3>
              <p className="text-gray-600">
                We embrace new technologies and creative solutions to solve
                complex challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="max-w-5xl mx-auto px-6 pb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Application Process
            </h2>
            <p className="text-gray-600 text-lg">How we evaluate candidates when positions open</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Submit Resume",
                description: "Send your updated resume and portfolio",
                icon: "ri-file-text-line"
              },
              {
                step: "02", 
                title: "Initial Review",
                description: "Our team reviews your application",
                icon: "ri-search-eye-line"
              },
              {
                step: "03",
                title: "Technical Round",
                description: "Technical interview and coding assessment",
                icon: "ri-code-box-line"
              },
              {
                step: "04",
                title: "Final Interview",
                description: "Culture fit and final discussion",
                icon: "ri-user-heart-line"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <i className={`${process.icon} text-2xl text-[#0092b8]`}></i>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#0092b8] text-white text-sm font-bold rounded-full flex items-center justify-center">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
