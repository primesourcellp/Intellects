import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Lightbulb,
  TrendingUp,
  DollarSign,
  Briefcase,
  Zap,
  BookOpen,
  Clock,
  HeartHandshake,
  CheckCircle,
} from "lucide-react";

const AnimatedSection = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

const BulletPoint = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
    <Icon className="w-10 h-10 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function CareerCulture() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white text-gray-800 py-16 px-6 md:px-20">
      {/* Career & Company Culture */}
      <AnimatedSection>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-6">
            Career & Company Culture
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Grow With Purpose. Work With Intellect. <br />
            Join Intellects — where ideas turn into impact, and innovation meets
            opportunity. We’re more than a team of developers, strategists, and
            consultants — we’re a community of thinkers, creators, and
            problem-solvers who believe in using technology and intellect to
            shape a smarter future.
          </p>
        </div>
      </AnimatedSection>

      {/* Life at Intellects */}
      <AnimatedSection delay={0.2}>
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Life at Intellects
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Working at Intellects means being part of a company that values
            creativity, integrity, and collaboration. We believe in open
            communication, mutual respect, and a positive work environment that
            encourages everyone to bring their best ideas forward.
          </p>
        </div>
      </AnimatedSection>

      {/* Our Work Culture */}
      <AnimatedSection delay={0.3}>
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Our Work Culture
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We’ve built a culture that balances excellence and empathy — where
            performance matters, but people matter more. <br />
            Our culture thrives on teamwork, continuous learning, and the
            freedom to innovate.
          </p>
        </div>
      </AnimatedSection>

      {/* What Defines Our Culture */}
      <AnimatedSection delay={0.4}>
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
            What Defines Our Culture
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <BulletPoint
              icon={Users}
              title="Collaboration"
              description="We believe in shared success — every win is a team win."
            />
            <BulletPoint
              icon={Clock}
              title="Flexibility"
              description="Work in ways that empower you to perform your best."
            />
            <BulletPoint
              icon={Lightbulb}
              title="Innovation"
              description="We encourage new ideas, bold thinking, and creative problem-solving."
            />
            <BulletPoint
              icon={TrendingUp}
              title="Growth Mindset"
              description="Every challenge is an opportunity to learn and improve."
            />
            <BulletPoint
              icon={HeartHandshake}
              title="Respect & Inclusion"
              description="We welcome diverse voices and perspectives."
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Career Growth & Learning */}
      <AnimatedSection delay={0.5}>
        <div className="max-w-5xl mx-auto mb-20 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">
            Career Growth & Learning
          </h2>
          <p className="text-gray-700 leading-relaxed mb-10">
            At Intellects, your career path is built around your strengths and
            ambitions. We offer continuous learning programs, hands-on training,
            mentorship, and certifications to help you stay ahead in the
            ever-changing world of technology and consulting. <br />
            Our employees are encouraged to explore new roles, master new tools,
            and expand their expertise — because your growth fuels our success.
          </p>

          <h3 className="text-2xl font-semibold mb-6 text-blue-600">
            Learning Opportunities Include:
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <BulletPoint
              icon={BookOpen}
              title="Professional Skill Development Programs"
              description="Professional skill development programs."
            />
            <BulletPoint
              icon={CheckCircle}
              title="Technology Workshops & Certifications"
              description="Technology workshops & certifications."
            />
            <BulletPoint
              icon={HeartHandshake}
              title="Mentorship from Industry Experts"
              description="Mentorship from industry experts."
            />
            <BulletPoint
              icon={Zap}
              title="Leadership & Communication Training"
              description="Leadership & communication training."
            />
            <BulletPoint
              icon={Users}
              title="Cross-Department Collaboration"
              description="Cross-department collaboration."
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Why Work With Intellects */}
      <AnimatedSection delay={0.6}>
        <div className="max-w-5xl mx-auto mb-20 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">
            Why Work With Intellects
          </h2>
          <p className="text-gray-700 leading-relaxed mb-10">
            Joining Intellects means being part of something bigger — a team
            that’s shaping the digital future for businesses across industries.
            You’ll work on real projects, solve real problems, and create real
            impact.
          </p>
          <h3 className="text-xl font-semibold mb-8 text-blue-600">
            Here’s why professionals love working with us:
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <BulletPoint
              icon={Briefcase}
              title="Opportunity to Work with Global Clients"
              description="Opportunity to work with global clients."
            />
            <BulletPoint
              icon={HeartHandshake}
              title="Transparent and Supportive Management"
              description="Transparent and supportive management."
            />
            <BulletPoint
              icon={Lightbulb}
              title="Exposure to the Latest Technologies"
              description="Exposure to the latest technologies."
            />
            <BulletPoint
              icon={Users}
              title="A Culture of Trust, Innovation, and Respect"
              description="A culture of trust, innovation, and respect."
            />
            <BulletPoint
              icon={DollarSign}
              title="Competitive Salary and Growth Opportunities"
              description="Competitive salary and growth opportunities."
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Join the Intellects Family */}
      <AnimatedSection delay={0.8}>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Join the Intellects Family
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            At Intellects, we’re not just building technology — we’re building
            futures. If you’re driven by passion, purpose, and progress, your
            next big opportunity starts here.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all"
          >
            Start Your Journey →
          </motion.button>

          <p className="text-gray-600 mt-6 italic">
            “Start your journey with Intellects — where your ideas inspire
            innovation.”
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}
