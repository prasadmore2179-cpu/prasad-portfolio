import {
  Menu,
  X,
  Mail,
  ExternalLink,
  Layout,
  Globe,
  Code2,
  ArrowRight,
  Check,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [showContactOptions, setShowContactOptions] = useState(false);

  const projects = [
  {
    title: "Loopbelle Business Website",
    category: "Top Project",
    status: "Completed",
    description: "Business website built with clean UI and responsive design.",
    tech: ["React", "Tailwind", "Vercel"],
    link: "https://loopbelle.vercel.app/",
  },
  {
    title: "KCET Rank Predictor",
    category: "Top Project",
    status: "Completed",
    description: "Student-focused rank prediction web app with simple UX.",
    tech: ["React", "Vercel"],
    link: "https://kcet-rank-predictor-sepia.vercel.app/",
  },
  {
    title: "Camera Rental Website",
    category: "Client Project",
    status: "Under Development",
    description: "Rental catalog website with WhatsApp enquiry flow, prototype completed",
    tech: ["React", "Tailwind"],
    link: "file:///C:/Users/prasa/Downloads/P4.html",
  },
  {
    title: "Quiz Platform",
    category: "Web App",
    status: "Under Development",
    description: "Quiz app with login, rewards, progress, and questions.",
    tech: ["React", "Supabase"],
    link: "#",
  },
  {
    title: "Social Media Design Pack",
    category: "Graphic Design",
    status: "Under Development",
    description: "Instagram posts and stories for brand promotion.",
    tech: ["Canva", "Figma"],
    link: "#unavailable",
  },
];

  const skills = [
    // Development
    "React",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "Tailwind CSS",
    "Supabase",
    "Vercel",
    "Python",
    "SQL",
    
    // Design
    "UI/UX Design",
    "Figma",
    "Logo Design",
    "Brand Identity Design",
    "Instagram Post Design",
    "YouTube Thumbnail Design",
    "Poster & Banner Design",
    "Invitation Card Design",
    
    // Modern Workflow 
    "AI-Assisted Development",
    "Rapid Prototyping",
    "Prompt Optimization",
    
  ];

  const tools = [
    "ChatGPT & Claude (AI Assistance)",
    "VS Code (Development Environment)",
    "Cursor / Codex (AI Development Tools)",
    "Figma (UI/UX Design)",
    "Canva (Graphic Design)",
    "Vercel (Deployment)",
    "Supabase (Backend & Database)",
  ];

  const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    price: "₹5k – ₹15k",
    description:
      "Modern responsive websites for businesses, personal brands, and startups.",
    features: [
      "Landing Pages",
      "Business Websites",
      "Mobile Responsive",
      "WhatsApp Integration",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code2,
    title: "Web Apps",
    price: "₹10k+",
    description:
      "Functional web applications with login, dashboard, database, and custom features.",
    features: [
      "User Login",
      "Dashboard",
      "Database Setup",
      "Custom Features",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Layout,
    title: "Graphic Design",
    price: "₹99 – ₹5k+",
    description:
      "Creative designs for social media, brands, events, and marketing.",
    features: [
      "Logo Design",
      "Instagram Posts",
      "YouTube Thumbnails",
      "Invitation Cards",
    ],
    color: "from-purple-500 to-pink-500",
  },
];


  return (
    <div className="relative min-h-screen bg-white">
      {/* Video Background - Fixed behind everything */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover [transform:scaleY(-1)]"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085640_276ea93b-d7da-4418-a09b-2aa5b490e838.mp4"
            type="video/mp4"
          />
        </video>

        {/* White Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[26.416%] from-[rgba(255,255,255,0)] to-[66.943%] to-white"></div>
      </div>

      {/* All Content - Relative positioned above video */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
             <motion.a
               href="#home"
               className="text-xl font-semibold tracking-tight text-gray-900 flex items-center gap-1"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               <span className="hover:text-gray-600 transition">prasad</span>             

               <motion.span
                 className="text-blue-600"
                 whileHover={{ y: -2 }}
                 transition={{ type: "spring", stiffness: 300 }}
               >
                 .aitech
               </motion.span>
             </motion.a>
 
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-6 ml-auto items-center">
                <a
                  href="#about"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Services
                </a>
                <a
                  href="#projects"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Skills
                </a>
                <a
                  href="#contact"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100">
              <div className="px-4 py-4 space-y-3">
                <a
                  href="#about"
                  className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#services"
                  className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#projects"
                  className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Skills
                </a>
                <a
                  href="#contact"
                  className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
              <a
                href="https://wa.me/918310946487"
                target="_blank"
                className="hidden md:inline-flex ml-4 px-4 py-2 bg-gray-900 text-white rounded-full text-sm hover:bg-blue-600 transition"
              >
                Contact
              </a>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi, I&apos;m{" "}
                <motion.span
                  className="text-blue-600 inline-block cursor-pointer"
                  whileHover={{
                    scale: 1.1,
                    rotate: [-1, 1, -1, 0],
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Prasad
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Full Stack Developer & Graphic Designer with Integrated AI
              </motion.p>

              <motion.p
                className="text-lg text-gray-500 mb-12 max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto italic leading-relaxed">
                   “Fast delivery. Clean design. Real results — powered by modern tools and smart workflows.”
                </p>
            
              </motion.p>

              <motion.div
                className="flex justify-center gap-4 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="relative inline-block">
                  <motion.button
                    onClick={() => setShowContactOptions(!showContactOptions)}
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get In Touch
                  </motion.button>                

                  {showContactOptions && (
                    <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-md z-50">                

                      <a
                        href="https://wa.me/918310946487"
                        target="_blank"
                        className="block px-4 py-3 hover:bg-gray-50 text-gray-700"
                      >
                        WhatsApp
                      </a>                

                      <a
                        href="https://www.instagram.com/prasad.aitech/"
                        target="_blank"
                        className="block px-4 py-3 hover:bg-gray-50 text-gray-700"
                      >
                        Instagram
                      </a>                

                    </div>
                  )}
                </div>

                <motion.a
                  href="#projects"
                  className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Work
                </motion.a>
              </motion.div>
              <p className="text-sm text-gray-500 mt-4">
                Worked on real projects • Fast delivery • Affordable pricing • Built with modern tools • Better results
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
       <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
         <div className="max-w-4xl mx-auto">
           <h2 className="text-4xl mb-12 text-gray-900 font-heading">
             About Me
           </h2>
        
           <div className="space-y-6 text-lg leading-relaxed text-gray-700">
        
             <p>
               I’m a <span className="font-medium text-gray-900">Web Developer and Graphic Designer</span> focused on helping businesses build a strong and professional online presence. I create modern websites, web apps, and visual designs that are clean, fast, and easy to use.
             </p>
        
             <p>
               I don’t just follow traditional methods — I use <span className="font-medium text-gray-900">modern tools and smart workflows</span> to build and design more efficiently. This allows me to deliver high-quality work faster while keeping things practical and cost-effective for clients.
             </p>
        
             <p>
               From websites and web apps to logos, thumbnails, social media posts, and invitation designs — I handle both the <span className="font-medium text-gray-900">technical and creative side</span> of digital work.
             </p>
        
             <p>
               My approach is simple: understand the idea, keep the design clean, build it properly, and deliver something that actually works in the real world.
             </p>
        
           </div>
         </div>
        </section>
        
        {/* Services Section */}
        <section
          id="services"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl mb-4 text-gray-900">Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Transform your ideas into reality with professional web
                solutions tailored to your needs
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-transparent hover:shadow-2xl overflow-hidden">
                    {/* Gradient Background on Hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      initial={false}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        className="w-16 h-16 mb-6 rounded-xl bg-gray-100 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300"
                        animate={{
                          scale: hoveredService === index ? 1.1 : 1,
                          rotate: hoveredService === index ? 5 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <service.icon className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-lg mb-2 text-gray-900 font-medium">
                        {service.title}
                      </h3>

                      {/* Price */}
                      <div className="text-3xl mb-4 text-gray-900 group-hover:text-white transition-colors duration-300">
                        {service.price}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-600 mb-3">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            className="flex items-start gap-2 text-gray-600 group-hover:text-white transition-colors duration-300"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: index * 0.1 + featureIndex * 0.05,
                            }}
                          >
                            <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <motion.a
                        href={`https://wa.me/918310946487?text=${encodeURIComponent(
                          `Hi Prasad, I am interested in your ${service.title} service.\n\nPrice range: ${service.price}\n\nPlease share more details.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 rounded-lg bg-gray-900 text-white group-hover:bg-white group-hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>


            <p className="text-sm text-gray-500 mt-2">
               Delivered using modern workflows for faster turnaround
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl mb-12 text-gray-900">
              Featured Projects
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-600">
                      {project.category}
                    </span>                

                    <span
                      className={`text-xs px-2.5 py-1 rounded-full ${
                        project.status === "Completed"
                          ? "bg-green-50 text-green-600"
                          : "bg-orange-50 text-orange-600"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>                

                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {project.title}
                  </h3>                

                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>                

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 bg-gray-50 text-gray-600 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>                

                  <a
                    href={project.link}
                    target={project.link === "#" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                </motion.div>
              ))}
            </div>

          </div>
          <div className="text-center mt-10">
            <a
              href="#all-projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white text-sm hover:bg-blue-600 transition"
            >
              Explore More Projects
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-12 text-gray-900">
              Skills & Technologies
            </h2>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="px-6 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-blue-600 hover:text-blue-600 transition"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03, duration: 0.3 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </section>
        
        {/* Tools section */}
        <section className="py-20 bg-white text-center">
          <h2 className="text-3xl mb-8">Expertise & Tools</h2>
          

          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Using modern tools to deliver faster, smarter, and more efficient solutions
          </p>

        </section>



        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl mb-8 text-gray-900">
              Let&apos;s Connect
            </h2>

            <p className="text-xl text-gray-600 mb-12">
              I&apos;m always open to new opportunities and interesting projects
            </p>

            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="https://wa.me/918310946487"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition flex items-center gap-2"
              >
                <Phone size={20} />
                WhatsApp
              </a>

              <a
                href="https://www.instagram.com/prasad.aitech/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-gray-500 text-white rounded-full hover:bg-pink-600 transition flex items-center gap-2"
              >
                <span>📸 Instagram</span>
              </a>

              <a
                href="mailto:prasadmore2179@gmail.com"
                className="px-5 py-3 bg-red-400 text-white rounded-full hover:bg-red-600 transition flex items-center gap-2"
              >
                <Mail size={20} />
                Email
              </a>
            </div>
          </div>
        </section>


        <section
          id="privacy"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-6 text-gray-900">Privacy Policy</h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>* This website does not collect or store personal data directly.</p>

              <p>
                * When you contact me through WhatsApp or email, your details are only
                used to respond to your inquiry.
              </p>

              <p>
                * No personal information is sold, shared, or used for unwanted marketing.
              </p>

              <p>
                * For any privacy-related concerns, you can contact me directly.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto text-center text-gray-600">
            <p>&copy; 2026 prasad.aitech All rights reserved.</p>
          </div>
          <div className="mt-2 text-sm text-gray-500">
            
          </div>
        </footer>
      </div>
    </div>
  );
}

