import React from 'react';
import { Users, Lightbulb, TrendingUp, DollarSign, Briefcase, Zap, BookOpen, Clock, HeartHandshake, CheckCircle } from 'lucide-react';

// Reusable component for list items in the "What Defines Our Culture" section
const CultureItem = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:shadow-2xl hover:border-blue-300">
        <Icon className="h-10 w-10 text-blue-600 mb-3" />
        <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
    </div>
);

// Reusable component for the list items in "Why Work With Intellects"
const BenefitItem = ({ children }) => (
    <li className="flex items-start space-x-3 text-lg text-slate-700">
        <CheckCircle className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5" />
        <span>{children}</span>
    </li>
);

// Component for the final Call-to-Action link (Reusing the pattern from MethodologyPage)
const GrowTogetherLink = ({ to, children }) => {
    // Placeholder for navigation logic
    const navigate = (path) => console.log(`Navigating to ${path}`);

    return (
        <button
            onClick={() => navigate(to)}
            className="mt-8 inline-flex items-center px-10 py-4 border border-transparent text-lg font-medium rounded-full shadow-xl text-white bg-blue-600 hover:bg-blue-700 transition duration-300 transform hover:scale-[1.02]"
        >
            {children}
        </button>
    );
};


export default function CareerCulturePage() {
    return (
        <main className="min-h-screen bg-gray-50 py-16 font-sans">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="text-center mb-16 bg-white p-10 rounded-xl shadow-lg border-b-4 border-blue-500">
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Career & Company Culture
                    </h1>
                    <p className="text-2xl text-blue-600 font-medium italic">
                        Grow With Purpose. Work With Intellect.
                    </p>
                    <p className="mt-4 text-lg text-slate-600 max-w-4xl mx-auto">
                        Join **Intellects** — where ideas turn into impact, and innovation meets opportunity. We’re 
                        more than a team of developers, strategists, and consultants — we’re a community of 
                        thinkers, creators, and problem-solvers who believe in using technology and intellect to 
                        shape a smarter future.
                    </p>
                </div>

                {/* Life at Intellects / Our Work Culture */}
                <section className="mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="p-8 bg-white rounded-xl shadow-2xl h-full">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4 border-b pb-2">
                                Life at Intellects
                            </h2>
                            <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                Working at Intellects means being part of a company that values **creativity, integrity, and collaboration**. 
                                We believe in open communication, mutual respect, and a positive work environment that encourages 
                                everyone to bring their best ideas forward.
                            </p>
                            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                                Our Work Culture
                            </h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                We’ve built a culture that balances excellence and **empathy** — where performance 
                                matters, but people matter more. Our culture thrives on teamwork, continuous learning, and the freedom to innovate.
                            </p>
                        </div>

                        {/* What Defines Our Culture - Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <CultureItem 
                                icon={Users}
                                title="Collaboration"
                                description="We believe in shared success — every win is a team win."
                            />
                            <CultureItem 
                                icon={Clock}
                                title="Flexibility"
                                description="Work in ways that empower you to perform your best."
                            />
                            <CultureItem 
                                icon={Lightbulb}
                                title="Innovation"
                                description="We encourage new ideas, bold thinking, and creative problem-solving."
                            />
                            <CultureItem 
                                icon={TrendingUp}
                                title="Growth Mindset"
                                description="Every challenge is an opportunity to learn and improve."
                            />
                            <CultureItem 
                                icon={HeartHandshake}
                                title="Respect & Inclusion"
                                description="We welcome diverse voices and perspectives."
                            />
                             {/* Added a filler element for better grid balance */}
                             <div className="md:col-span-1"></div> 
                        </div>
                    </div>
                </section>

                <hr className="my-12 border-slate-200" />
                
                {/* Career Growth & Learning */}
                <section className="mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 text-center mb-10">
                        Career Growth & Learning
                    </h2>
                    <p className="text-xl text-slate-700 text-center max-w-5xl mx-auto mb-10">
                        At Intellects, your career path is built around your strengths and ambitions. 
                        We offer continuous learning programs, hands-on training, mentorship, and certifications 
                        to help you stay ahead in the ever-changing world of technology and consulting. 
                        Our employees are encouraged to explore new roles, master new tools, and expand their 
                        expertise — because your growth fuels our success.
                    </p>

                    <div className="bg-blue-50 p-8 rounded-xl shadow-inner border-l-4 border-blue-500">
                        <h3 className="text-2xl font-semibold text-blue-800 mb-6 flex items-center space-x-2">
                            <BookOpen className="h-6 w-6" />
                            <span>Learning Opportunities Include:</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                'Professional skill development programs',
                                'Technology workshops & certifications',
                                'Mentorship from industry experts',
                                'Leadership & communication training',
                                'Cross-department collaboration'
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow border-l-4 border-blue-400">
                                    <Zap className="h-5 w-5 text-blue-500" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* Why Work With Intellects */}
                <section className="mb-16 bg-white p-10 rounded-xl shadow-2xl">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6 text-center">
                        Why Work With Intellects
                    </h2>
                    <p className="text-xl text-slate-700 text-center max-w-4xl mx-auto mb-10">
                        Joining Intellects means being part of something bigger — a team that’s shaping the digital 
                        future for businesses across industries. You’ll work on real projects, solve real problems, and create real impact.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <ul className="space-y-4">
                            <BenefitItem>Opportunity to work with **global clients**</BenefitItem>
                            <BenefitItem>Transparent and **supportive management**</BenefitItem>
                            <BenefitItem>Exposure to the **latest technologies**</BenefitItem>
                        </ul>
                        <ul className="space-y-4">
                            <BenefitItem>A culture of **trust, innovation, and respect**</BenefitItem>
                            <BenefitItem>Competitive salary and **growth opportunities**</BenefitItem>
                            <BenefitItem>Hands-on work creating **real impact**</BenefitItem>
                        </ul>
                    </div>
                </section>
                
                {/* Join the Intellects Family CTA */}
                <section className="text-center mt-16 p-10 bg-blue-600 rounded-xl shadow-2xl">
                    <h2 className="text-4xl font-extrabold text-white mb-4">
                        Join the Intellects Family
                    </h2>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-6">
                        At Intellects, we’re not just building technology — we’re building futures. 
                        If you’re driven by passion, purpose, and progress, your next big opportunity starts here.
                    </p>
                    <blockquote className="italic text-lg text-blue-200 mb-6">
                        “Start your journey with Intellects — where your ideas inspire innovation.”
                    </blockquote>
                    <GrowTogetherLink to="/careers/openings">
                        View Open Positions
                    </GrowTogetherLink>
                </section>
            </div>
        </main>
    );
}