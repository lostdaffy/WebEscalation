import React from "react";
import {
  Users,
  Heart,
  Award,
  Coffee,
  Mail,
  ArrowRight,
  Star,
  Code,
  BarChart3,
} from "lucide-react";
import Navbar from "../components/Global/Navbar";
import Footer from "../components/Global/Footer";

const Career = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto py-20 px-6">
          <div className="text-center space-y-8">
            {/* Brand tagline */}
            <div className="text-sm uppercase tracking-wider text-gray-600 font-medium">
              JOIN OUR JOURNEY
            </div>

            {/* Main heading */}
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
              Build Your Career With{" "}
              <span className="text-cyan-600">Innovation</span>
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
              <Users className="w-8 h-8 text-cyan-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Not Currently Hiring
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              We're currently focused on our ongoing projects and not actively
              hiring new team members. However, we believe great talent
              shouldn't wait for perfect timing!
            </p>
            <div className="bg-white rounded-xl p-6 inline-block">
              <p className="text-slate-800 font-semibold mb-2">
                Interested in future opportunities?
              </p>
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
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Cutting-Edge Tech
              </h3>
              <p className="text-gray-600">
                Work with the latest technologies and frameworks in a modern
                development environment.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Work-Life Balance
              </h3>
              <p className="text-gray-600">
                We believe in maintaining a healthy balance between professional
                growth and personal well-being.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Growth Opportunities
              </h3>
              <p className="text-gray-600">
                Continuous learning and development opportunities to advance
                your career.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Coffee className="w-6 h-6 text-cyan-600" />
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
              },
              {
                title: "Backend Developer",
                skills: ["Node.js", "Python", "Database Design"],
                level: "Mid-Senior",
              },
              {
                title: "Full Stack Developer",
                skills: ["MERN", "Next.js", "Cloud Services"],
                level: "Senior",
              },
              {
                title: "UI/UX Designer",
                skills: ["Figma", "User Research", "Prototyping"],
                level: "Mid-Level",
              },
              {
                title: "DevOps Engineer",
                skills: ["AWS", "Docker", "CI/CD"],
                level: "Senior",
              },
              {
                title: "Project Manager",
                skills: ["Agile", "Team Leadership", "Client Relations"],
                level: "Senior",
              },
            ].map((role, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-cyan-200 transition-colors"
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {role.title}
                </h3>
                <div className="text-sm text-cyan-600 font-medium mb-3">
                  {role.level} Level
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {role.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="text-gray-500 text-sm">
                  Position may open in the future
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-center text-white">
            <Mail className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="text-cyan-100 text-lg mb-8">
              Send us your resume and portfolio. We'll reach out when the right
              opportunity comes up!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 hover:bg-gray-50 px-8 py-4 rounded-full font-medium transition-colors duration-200">
                Send Your Resume
              </button>
              <button className="flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-full font-medium transition-colors duration-200">
                View Our Work <ArrowRight className="w-4 h-4" />
              </button>
            </div>
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
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for excellence in every project, delivering quality
                that exceeds expectations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Collaboration
              </h3>
              <p className="text-gray-600">
                We believe great things happen when talented people work
                together towards a common goal.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-white" />
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
      </div>
      <Footer />
    </>
  );
};

export default Career;
