import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Layers,
  Zap,
  Settings,
  ShieldCheck,
  Users,
  Workflow,
  Rocket,
  Cloud,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const CustomSoftwareDevelopment = () => {
  const services = [
    {
      title: "Business-Specific Applications",
      desc: "Software designed to meet your unique challenges.",
      icon: <Workflow className="w-12 h-12 text-white" />,
      img: "https://cdn.pixabay.com/photo/2018/01/19/07/41/software-3091579_1280.jpg",
              gradient: "from-purple-800 to-gray-900",
    },
    {
      title: "Enterprise-Level Systems",
      desc: "Integrated solutions that streamline processes across departments.",
      icon: <Layers className="w-12 h-12 text-white" />,
      img: "https://cdn.pixabay.com/photo/2016/06/29/10/07/computer-1481889_1280.jpg",
              gradient: "from-purple-800 to-gray-900",
    },
    {
      title: "Automation Platforms",
      desc: "Tools that reduce manual work and increase accuracy.",
      icon: <Zap className="w-12 h-12 text-white" />,
      img: "https://cdn.pixabay.com/photo/2021/07/28/13/58/automation-6503219_1280.jpg",
              gradient: "from-purple-800 to-gray-900",
    },
    {
      title: "Maintenance & Upgrades",
      desc: "Continuous improvements to keep your software running efficiently.",
      icon: <Settings className="w-12 h-12 text-white" />,
      img: "https://cdn.pixabay.com/photo/2017/01/06/19/15/laptop-1954295_1280.jpg",
              gradient: "from-purple-800 to-gray-900",
    },
  ];

  const technologies = [
    { name: "Frontend", items: "React, Angular, Vue.js", icon: <Code /> },
    { name: "Backend", items: ".NET, Java, Python, Node.js", icon: <Server /> },
    { name: "Database", items: "MySQL, MongoDB, PostgreSQL", icon: <Server /> },
    { name: "Mobile", items: "Flutter, React Native, Swift", icon: <Rocket /> },
    { name: "Cloud", items: "AWS, Azure, Google Cloud", icon: <Cloud /> },
  ];

  const stacks = [
    { title: "MERN / MEAN Stack", desc: "For high-speed, scalable web apps" },
    { title: "LAMP Stack", desc: "For reliable and cost-effective systems" },
    {
      title: "Serverless & Microservices Architecture",
      desc: "For flexibility and modular growth",
    },
  ];

  const process = [
    {
      step: "Requirement Analysis",
      desc: "Understanding your goals and challenges.",
      icon: Users,
    },
    {
      step: "Design & Prototyping",
      desc: "Visualizing the structure and user experience.",
      icon: Workflow,
    },
    {
      step: "Development",
      desc: "Writing efficient, secure, and scalable code.",
      icon: Code,
    },
    {
      step: "Testing & QA",
      desc: "Ensuring performance and reliability.",
      icon: ShieldCheck,
    },
    {
      step: "Deployment & Support",
      desc: "Launching, maintaining, and evolving your solution.",
      icon: Rocket,
    },
  ];

  const clientsReasons = [
    "Agile and transparent development process",
    "Scalable architecture for future growth",
    "Clean, secure, and maintainable code",
    "Dedicated support from planning to deployment",
  ];

  return (
    <div className="min-h-screen text-gray-800" style={{ background: 'linear-gradient(to bottom right, #F9FAFB, #F3F4F6)' }}>
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full blur-3xl -top-48 -left-48 animate-pulse" style={{ background: 'radial-gradient(circle, #4C1D9520, #1F293715)' }}></div>
        <div className="absolute w-96 h-96 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000" style={{ background: 'radial-gradient(circle, #4C1D9520, #1F293715)' }}></div>
      </div>

      {/* Header Section - Home Page Style */}
      <section
        className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24 text-center shadow-lg overflow-hidden mb-24"
        style={{ backgroundColor: '#FFFFFF', boxShadow: '0 10px 15px -3px rgba(30, 58, 138, 0.1), 0 4px 6px -2px rgba(30, 58, 138, 0.05)' }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-100"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920)' }}
          ></div>
        </div>

        {/* Floating Decorative Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 md:left-20 opacity-20"
        >
          <div 
            className="w-20 h-20 rounded-2xl transform rotate-12" 
            style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
          />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-40 right-10 md:right-32 opacity-20"
        >
          <div 
            className="w-16 h-16 rounded-full" 
            style={{ background: 'linear-gradient(135deg, #7C3AED, #4C1D95)' }}
          />
        </motion.div>

        {/* Content */}
        <motion.h1 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { 
              duration: 0.8, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }
          }}
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight relative z-10"
        >
          Custom Software Development{" "}
          <motion.span 
            style={{ color: '#4C1D95' }}
            animate={{ 
              textShadow: [
                `0 0 20px ${'#4C1D95'}00`,
                `0 0 20px ${'#4C1D95'}50`,
                `0 0 20px ${'#4C1D95'}00`
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Services
          </motion.span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, delay: 0.2 }
          }}
          className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto font-light relative z-10" 
          style={{ color: '#6B7280' }}
        >
          At <span className="font-semibold" style={{ color: '#4C1D95' }}>Intellects</span>, we create fully customized software solutions built to match your business goals, workflow, and growth plans. Our team transforms your ideas into intelligent, scalable, and high-performing systems that drive results.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.6, delay: 0.4 }
          }}
          className="flex justify-center gap-4 flex-wrap relative z-10"
        >
          <motion.div whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
            <button
              className="font-bold px-10 py-4 rounded-full shadow-xl transition inline-flex items-center gap-3"
              style={{ background: 'linear-gradient(135deg, #4C1D95 0%, #7C3AED 100%)', color: '#FFFFFF', boxShadow: '0 25px 50px -12px rgba(76, 29, 149, 0.25)' }}
            >
              <span>Get Started</span>
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              className="font-bold px-10 py-4 rounded-full shadow-lg transition inline-flex items-center gap-3 border-2"
              style={{ backgroundColor: '#FFFFFF', color: '#4C1D95', borderColor: '#4C1D95' }}
            >
              View Portfolio
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <motion.div
        className="mb-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-gray-900 text-white text-sm font-bold rounded-full shadow-lg">
              OUR EXPERTISE
            </span>
          </motion.div>
          <h3 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
            Services We{" "}
            <motion.span 
              style={{ color: '#4C1D95' }}
              animate={{ 
                textShadow: [
                  `0 0 20px ${'#4C1D95'}00`,
                  `0 0 20px ${'#4C1D95'}50`,
                  `0 0 20px ${'#4C1D95'}00`
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Offer
            </motion.span>
          </h3>
          <p className="text-gray-600 text-lg mb-4 max-w-3xl mx-auto leading-relaxed">
            Our custom software development services help organizations simplify operations, enhance productivity, and deliver value through smart technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100"
              whileHover={{ y: -10, scale: 1.02 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={s.img} 
                  alt={s.title} 
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl border border-white/40 group-hover:scale-110 transition-transform duration-300">
                    {s.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-6 text-center">
                <h4 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                  {s.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {s.desc}
                </p>
              </div>
              
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${s.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Technologies Section */}
      <motion.div
        className="mb-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-gray-900 text-white text-sm font-bold rounded-full shadow-lg">
              TECH STACK
            </span>
          </motion.div>
          <h3 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
            Technologies We{" "}
            <motion.span 
              style={{ color: '#4C1D95' }}
              animate={{ 
                textShadow: [
                  `0 0 20px ${'#4C1D95'}00`,
                  `0 0 20px ${'#4C1D95'}50`,
                  `0 0 20px ${'#4C1D95'}00`
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Rely On
            </motion.span>
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((t, i) => (
            <motion.div
              key={i}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-purple-200 transition-all duration-300 text-center relative overflow-hidden"
              whileHover={{ y: -8, scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-800/10 to-gray-900/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-gray-900 text-4xl mb-4 inline-flex p-4 bg-purple-50 rounded-xl group-hover:bg-purple-100 transition-colors">
                  {t.icon}
                </div>
                <h4 className="font-bold text-lg text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                  {t.name}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t.items}
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Technology Stacks */}
      <motion.div
        className="mb-32 px-6 md:px-12 max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
            Technology{" "}
            <motion.span 
              style={{ color: '#4C1D95' }}
              animate={{ 
                textShadow: [
                  `0 0 20px ${'#4C1D95'}00`,
                  `0 0 20px ${'#4C1D95'}50`,
                  `0 0 20px ${'#4C1D95'}00`
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Stacks
            </motion.span>
          </h3>
        </div>
        
        <div className="space-y-6 mb-8">
          {stacks.map((stack, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="group bg-gradient-to-r from-white to-purple-50 p-6 rounded-2xl shadow-lg hover:shadow-xl border border-purple-100 flex items-start gap-4 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-800 to-gray-900 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                {i + 1}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                  {stack.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {stack.desc}
                </p>
              </div>
              <CheckCircle2 className="w-6 h-6 text-purple-500 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-br from-purple-800 to-gray-900 p-8 rounded-2xl text-center shadow-2xl"
        >
          <p className="text-white text-lg font-medium leading-relaxed">
            We match technology with your business strategy to ensure seamless performance.
          </p>
        </motion.div>
      </motion.div>

      {/* Tailored Tech */}
      <motion.div
        className="mb-32 px-6 md:px-12 max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-gradient-to-br from-purple-50 via-gray-50 to-white rounded-3xl p-12 shadow-2xl border border-purple-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-800/20 to-gray-900/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-800/20 to-gray-900/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="px-6 py-2 text-white text-sm font-bold rounded-full shadow-lg" style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}>
                FLEXIBLE SOLUTIONS
              </span>
            </motion.div>
            
            <h3 className="text-4xl md:text-5xl font-black mb-8 text-gray-900">
              Tailored Tech for All{" "}
              <motion.span 
                style={{ color: '#4C1D95' }}
                animate={{ 
                  textShadow: [
                    `0 0 20px ${'#4C1D95'}00`,
                    `0 0 20px ${'#4C1D95'}50`,
                    `0 0 20px ${'#4C1D95'}00`
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Business Types
              </motion.span>
            </h3>
            
            <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
              Whether you run a startup, SME, or enterprise, our custom-built software adapts to your specific needs. We design every feature to align with your operations, branding, and user expectations — ensuring your software feels like it was made just for you.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Why Clients Choose Intellects */}
      <motion.div
        className="mb-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Centered Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-gray-900 text-white text-sm font-bold rounded-full shadow-lg">
              WHY CHOOSE US
            </span>
          </motion.div>
          
          <h3 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
            Why Clients Choose{" "}
            <motion.span 
              style={{ color: '#4C1D95' }}
              animate={{ 
                textShadow: [
                  `0 0 20px ${'#4C1D95'}00`,
                  `0 0 20px ${'#4C1D95'}50`,
                  `0 0 20px ${'#4C1D95'}00`
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Intellects
            </motion.span>
          </h3>
        </div>

        {/* Content Grid */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-full min-h-[400px] overflow-hidden">
              <img
                src="https://cdn.pixabay.com/photo/2019/04/29/09/23/teamwork-4168591_1280.jpg"
                alt="Why Clients Choose Intellects"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(76, 29, 149, 0.8), rgba(124, 58, 237, 0.6))' }}></div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <Sparkles className="w-16 h-16 mx-auto mb-4" />
                  <h4 className="text-3xl font-bold">Trusted by Innovators</h4>
                </div>
              </div>
            </div>
            
            <div className="p-12 flex flex-col justify-center">
              <div className="space-y-5">
                {clientsReasons.map((reason, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}>
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed flex-1 group-hover:text-gray-900 transition-colors">
                      {reason}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Software Development Process */}
      <motion.div
        className="mb-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 text-white text-sm font-bold rounded-full shadow-lg" style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}>
              OUR PROCESS
            </span>
          </motion.div>
          <h3 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
            Software Development{" "}
            <motion.span 
              style={{ color: '#4C1D95' }}
              animate={{ 
                textShadow: [
                  `0 0 20px ${'#4C1D95'}00`,
                  `0 0 20px ${'#4C1D95'}50`,
                  `0 0 20px ${'#4C1D95'}00`
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Process
            </motion.span>
          </h3>
        </div>
        
        <div className="grid md:grid-cols-5 gap-6">
          {process.map(({ step, desc, icon: Icon }, i) => (
            <motion.div
              key={i}
              className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl flex flex-col items-center text-center border-2 border-transparent hover:border-purple-200 transition-all duration-300"
              whileHover={{ y: -15, scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-xl group-hover:scale-110 transition-transform">
                {i + 1}
              </div>
              
              <div className="mt-6 mb-4 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl group-hover:from-indigo-100 group-hover:to-purple-100 transition-colors">
                <Icon className="w-12 h-12 text-gray-900" />
              </div>
              
              <h4 className="font-bold text-lg text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                {step}
              </h4>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {desc}
              </p>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-900 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Final CTA Section */}
      <motion.div
        className="px-6 md:px-12 max-w-6xl mx-auto pb-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <div className="rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #4C1D95, #1F2937)' }}>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 border-2 border-white/40"
            >
              <Rocket className="w-10 h-10 text-white" />
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
              At Intellects, we don't offer templates — we engineer tailored software that grows with your business.
            </h3>
            
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Ready to transform your business with custom software solutions?
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="px-10 py-4 bg-white font-bold rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 group" style={{ color: '#4C1D95' }}>
                Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-purple-900 transition-all duration-300 hover:scale-105">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CustomSoftwareDevelopment;
