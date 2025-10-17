import React, { useCallback } from 'react';
import { ArrowRight } from 'lucide-react';

// Assuming you have a custom hook or context for navigation (like usePath or useRouter)
// Placeholder for navigation logic that your setup will provide.
const usePath = () => ({
    navigate: (to) => console.log(`Navigating to ${to}`), // Replace with your actual navigation
});

// Component for the redirection buttons (Client and Partner buttons redirect to /testimonials)
const RedirectButton = ({ to, label }) => {
    const { navigate } = usePath();

    return (
        <button
            onClick={() => navigate(to)}
            className="flex items-center space-x-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition duration-150 group"
        >
            <span>{label}</span>
            <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
        </button>
    );
};

// Component for the final Call-to-Action link
const GrowTogetherLink = ({ to, children }) => {
    const { navigate } = usePath();

    return (
        <button
            onClick={() => navigate(to)}
            className="mt-6 inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300 transform hover:scale-[1.02]"
        >
            {children}
        </button>
    );
};

export default function MethodologyPage() {
    return (
        <main className="min-h-screen bg-gray-50 py-16 font-sans">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Our Development & Methodology
                    </h1>
                    <p className="text-xl text-blue-600 font-medium">
                        Building with Purpose, Delivering with Precision
                    </p>
                </div>
                
                {/* About Us Section */}
                <section className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl mb-16 border-t-4 border-blue-500">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        Empowering Businesses Through Intelligence and Innovation.
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        At **Intellects**, we bridge technology, creativity, and human insight to help organizations 
                        grow smarter, faster, and stronger in a digital world. We believe that innovation begins with 
                        **intellect** — the power to think differently, solve challenges, and create progress. 
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed font-semibold">
                        At Intellects, we don’t just provide consulting services; we deliver meaningful **transformation**. 
                        Our mission is to make technology and talent work together to drive measurable business 
                        success.
                        <span className="ml-2 inline-block align-middle">
                            {/* Placeholder for abstract node illustration */}
                            
                        </span>
                    </p>
                </section>
                
                {/* Methodology Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b-2 border-slate-200 pb-2">
                        Our Proven Methodology
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-8">
                        Our approach to development is rooted in **agility**, **collaboration**, and **continuous 
                        improvement**. We understand that every client’s journey is unique — that’s why Intellects 
                        tailors its methodology to fit your goals, timelines, and business model. We combine deep 
                        technical knowledge with a human-centered mindset to ensure every solution we build is 
                        innovative, reliable, and scalable.
                    </p>
                    
                    <ol className="space-y-8">
                        {[
                            { title: 'Discovery & Strategy', desc: 'We start with understanding — diving deep into your business, audience, and goals to build a solid strategic foundation.' },
                            { title: 'Planning & Design', desc: 'Our experts design intelligent systems and user-friendly interfaces that balance creativity with functionality.' },
                            { title: 'Agile Development', desc: 'Using an agile framework, we develop in focused sprints, ensuring rapid progress, flexibility, and transparency throughout the process.' },
                            { title: 'Testing & Quality Assurance', desc: 'Every product undergoes thorough testing to guarantee stability, security, and performance at every level.' },
                            { title: 'Deployment & Support', desc: 'We ensure seamless deployment and provide long-term support so your solutions continue performing as your business scales.' }
                        ].map((step, index) => (
                            <li key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-0.5 border-l-4 border-blue-500">
                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600 font-bold text-xl ring-4 ring-blue-500/20">
                                    {index + 1}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                                    <p className="text-slate-600 mt-1">{step.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </section>
                
                {/* Why it Works & Client/Partner Section (Grid Layout) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* Why It Works */}
                    <section>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b-2 border-blue-500 pb-2">
                            Why it works:
                        </h2>
                        <ul className="space-y-3 text-lg text-slate-700 list-none p-0">
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2 font-extrabold text-xl">&#8227;</span> Transparent communication
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2 font-extrabold text-xl">&#8227;</span> Agile and adaptable process
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2 font-extrabold text-xl">&#8227;</span> Quality-first culture
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2 font-extrabold text-xl">&#8227;</span> Strong partnership mindset
                            </li>
                        </ul>
                    </section>
                    
                    {/* Key Clients */}
                    <section className="bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            Our Key Clients
                        </h2>
                        <p className="text-lg text-slate-700 mb-4">
                            Over the years, Intellects has had the privilege of working with a diverse range of clients — 
                            from emerging startups to established enterprises across industries like technology, 
                            healthcare, retail, and finance. Our clients choose us not just for our skills — but for our 
                            commitment to helping them achieve lasting success.
                        </p>
                        <blockquote className="italic text-slate-500 mb-6 border-l-4 border-blue-300 pl-4">
                            “Trusted by forward-thinking brands who believe in innovation and excellence.”
                        </blockquote>
                        {/* Client redirect button: Redirects to /testimonials */}
                        <RedirectButton to="/testimonials" label="View Client & Testimonials" />
                    </section>
                </div>
                
                {/* Partnerships */}
                <section className="bg-white p-8 rounded-xl shadow-lg mt-12 border-b-4 border-blue-500">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        Partnerships
                    </h2>
                    <p className="text-lg text-slate-700 mb-6">
                        Intellects partners with leading technology providers and platforms to ensure we deliver 
                        world-class solutions. Our alliances help us access the best tools, frameworks, and 
                        expertise — so our clients always stay ahead in an ever-evolving digital ecosystem.
                    </p>
                    {/* Partner redirect button: Redirects to /testimonials */}
                    <RedirectButton to="/testimonials" label="Explore Partnerships and Alliances" />
                </section>
                
                
                {/* Let's Grow Together CTA */}
                <section className="text-center mt-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        Let’s Grow Together
                    </h2>
                    <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                        Intellects is more than a consulting firm — we’re a growth partner that combines 
                        technology, creativity, and strategy to shape the future of business.
                    </p>
                    <GrowTogetherLink to="/contact">
                        Start Your Project
                    </GrowTogetherLink>
                </section>
            </div>
        </main>
    );
}
