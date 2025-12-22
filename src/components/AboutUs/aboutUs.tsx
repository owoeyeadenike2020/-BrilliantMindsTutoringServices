"use client";
import React, { useState, useEffect } from 'react';
import { BookOpen, Target, Eye, Heart, Users, TrendingUp, Award, Globe, Lightbulb, CheckCircle2, Sparkles, Star, Clock, MessageCircle, Zap, Rocket, Brain, Trophy } from 'lucide-react';

const AboutUs = () => {
    const [activeValue, setActiveValue] = useState(0);
    const [countStudents, setCountStudents] = useState(0);
    const [countSuccess, setCountSuccess] = useState(0);
    const [countYears, setCountYears] = useState(0);

    // Animated counter effect
    useEffect(() => {
        const duration = 2000;
        const steps = 50;
        const studentTarget = 500;
        const successTarget = 98;
        const yearsTarget = 15;

        let currentStep = 0;
        const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            setCountStudents(Math.floor(studentTarget * progress));
            setCountSuccess(Math.floor(successTarget * progress));
            setCountYears(Math.floor(yearsTarget * progress));

            if (currentStep >= steps) {
                clearInterval(timer);
                setCountStudents(studentTarget);
                setCountSuccess(successTarget);
                setCountYears(yearsTarget);
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, []);

    const values = [
        {
            icon: Globe,
            title: "Accessibility",
            description: "Every learner deserves the opportunity to reach their potential, regardless of background or learning style.",
            color: "from-blue-500 to-cyan-500",
            badge: "For Everyone"
        },
        {
            icon: Sparkles,
            title: "Confidence",
            description: "We help students believe in themselves and their ability to succeed.",
            color: "from-purple-500 to-pink-500",
            badge: "Build Belief"
        },
        {
            icon: TrendingUp,
            title: "Empowerment",
            description: "Education is power — and we empower students to take charge of their own learning journey.",
            color: "from-green-500 to-emerald-500",
            badge: "Take Control"
        },
        {
            icon: Lightbulb,
            title: "Growth Mindset",
            description: "Challenges are opportunities. We teach students to embrace mistakes and keep growing.",
            color: "from-orange-500 to-red-500",
            badge: "Never Stop"
        },
        {
            icon: Award,
            title: "Innovation",
            description: "We use modern tools, interactive lessons, and creative methods to make learning exciting and effective.",
            color: "from-indigo-500 to-purple-500",
            badge: "Stay Modern"
        },
        {
            icon: Users,
            title: "Community",
            description: "Together, we build a culture of learning, support, and shared success.",
            color: "from-pink-500 to-rose-500",
            badge: "Together"
        }
    ];

    const features = [
        {
            icon: Target,
            title: "Personalized Learning",
            description: "We tailor each lesson to your unique strengths, weaknesses, and goals.",
            stat: "100%"
        },
        {
            icon: Clock,
            title: "Flexible Options",
            description: "Learn your way — in-person or online — with scheduling that fits your lifestyle.",
            stat: "24/7"
        },
        {
            icon: BookOpen,
            title: "Expert Tutors",
            description: "Our experienced tutors are passionate educators who make even the toughest subjects easy to understand.",
            stat: "20+"
        },
        {
            icon: Star,
            title: "Exam Success",
            description: "We specialize in results-driven preparation for WAEC, NECO, JAMB, SAT, IGCSE, and CAPE/CSEC.",
            stat: "98%"
        },
        {
            icon: Heart,
            title: "Confidence & Growth",
            description: "Beyond academics, we help students build self-belief, motivation, and a lifelong love of learning.",
            stat: "∞"
        },
        {
            icon: Globe,
            title: "Community Impact",
            description: "We're dedicated to making education accessible and meaningful — helping students succeed in school and in life.",
            stat: "500+"
        }
    ];

    const subjects = [
        { name: "Mathematics", icon: "📐" },
        { name: "Physics", icon: "⚛️" },
        { name: "Chemistry", icon: "🧪" },
        { name: "Biology", icon: "🧬" },
        { name: "JAMB", icon: "📚" },
        { name: "WAEC", icon: "✍️" },
        { name: "NECO", icon: "📝" },
        { name: "SAT", icon: "🎓" },
        { name: "IGCSE", icon: "🌍" },
        { name: "CAPE/CSEC", icon: "🏆" }
    ];

    const achievements = [
        { icon: Trophy, label: "Award-Winning", desc: "Excellence in Education" },
        { icon: Rocket, label: "Fast Results", desc: "See progress in weeks" },
        { icon: Brain, label: "Smart Learning", desc: "AI-powered insights" },
        { icon: Zap, label: "Quick Support", desc: "24/7 assistance" }
    ];

    return (
        <div className="bg-white overflow-hidden">
            {/* Hero Section with Animation */}
            <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-32 overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-blob"></div>
                    <div className="absolute top-40 right-10 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-white rounded-full animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${5 + Math.random() * 10}s`
                            }}
                        />
                    ))}
                </div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-block mb-6 animate-bounce-slow">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
                                <span className="text-sm font-semibold flex items-center gap-2">
                                    <Sparkles className="w-4 h-4" />
                                    Building Brilliant Futures Since 2009
                                </span>
                            </div>
                        </div>
                        
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-fade-in-up leading-tight">
                            Building Minds,<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-white animate-gradient">
                                Shaping Futures
                            </span>
                        </h1>
                        
                        <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 leading-relaxed">
                            Empowering students to achieve academic excellence through personalized, innovative tutoring that transforms lives
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-400">
                            <button className="group relative bg-white text-indigo-600 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 overflow-hidden">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    <Rocket className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                                    Start Your Journey
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                            <button className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-indigo-600 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                                <MessageCircle className="w-5 h-5" />
                                Free Consultation
                            </button>
                        </div>

                        {/* Achievement badges */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-600">
                            {achievements.map((achievement, idx) => {
                                const Icon = achievement.icon;
                                return (
                                    <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                                        <Icon className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                                        <p className="font-bold text-sm">{achievement.label}</p>
                                        <p className="text-xs text-white/70">{achievement.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section with Interactive Elements */}
            <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-100 rounded-full filter blur-3xl opacity-30"></div>
                    <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
                </div>

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-block">
                                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    About Us
                                </span>
                            </div>
                            
                            <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">Story</span>
                            </h2>
                            
                            <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
                                <p className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                    <span>Founded with a passion for transforming education, <span className="font-bold text-indigo-600">Brilliant Minds Tutoring Services</span> is a modern and innovative learning hub dedicated to helping students reach their full potential.</span>
                                </p>
                                <p className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                                    <span>We specialize in <span className="font-semibold">Mathematics, Sciences</span> (Physics, Chemistry, Biology), and standardized test preparation including <span className="font-semibold">WAEC, NECO, JAMB, SAT, IGCSE, and CAPE/CSEC</span>.</span>
                                </p>
                                <p className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                                    <span>Through flexible <span className="font-semibold">in-person and online tutoring</span>, we provide high-quality instruction tailored to each learner's needs, building confidence, critical thinking, and a lifelong love for learning.</span>
                                </p>
                                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border-l-4 border-indigo-600">
                                    <p className="font-bold text-indigo-900 text-xl">
                                        💡 At Brilliant Minds, education is more than passing exams — it's about empowerment, growth, and opportunity!
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Interactive card with subjects and stats */}
                        <div className="relative">
                            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 shadow-2xl transform hover:rotate-1 transition-all duration-500 hover:scale-105">
                                {/* Stats section */}
                                <div className="bg-white rounded-2xl p-6 mb-6 shadow-xl">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                        <Trophy className="w-6 h-6 text-yellow-500" />
                                        Our Impact
                                    </h3>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 transform hover:scale-110 transition-transform duration-300">
                                            <p className="text-4xl font-extrabold text-indigo-600">{countStudents}+</p>
                                            <p className="text-sm text-gray-600 font-semibold mt-1">Students</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 transform hover:scale-110 transition-transform duration-300">
                                            <p className="text-4xl font-extrabold text-green-600">{countSuccess}%</p>
                                            <p className="text-sm text-gray-600 font-semibold mt-1">Success</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 transform hover:scale-110 transition-transform duration-300">
                                            <p className="text-4xl font-extrabold text-purple-600">{countYears}+</p>
                                            <p className="text-sm text-gray-600 font-semibold mt-1">Years</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Subjects section */}
                                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <BookOpen className="w-6 h-6 text-indigo-600" />
                                        What We Teach
                                    </h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        {subjects.map((subject, idx) => (
                                            <div
                                                key={idx}
                                                className="bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 text-indigo-700 px-4 py-3 rounded-xl text-sm font-bold flex items-center gap-2 transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                                            >
                                                <span className="text-xl">{subject.icon}</span>
                                                <span>{subject.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Floating badges */}
                            <div className="absolute -top-6 -right-6 bg-yellow-400 text-yellow-900 rounded-full w-24 h-24 flex flex-col items-center justify-center font-bold shadow-xl animate-bounce-slow transform hover:rotate-12 transition-transform">
                                <Star className="w-6 h-6 mb-1" />
                                <span className="text-xs">Top</span>
                                <span className="text-xs">Rated</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision with Interactive Hover */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Purpose</span>
                        </h2>
                        <p className="text-xl text-gray-600">What drives us every single day</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Mission */}
                        <div className="group relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-10 shadow-lg hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="relative z-10">
                                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl">
                                    <Target className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-3xl font-extrabold text-gray-900 group-hover:text-white mb-6 transition-colors duration-300">Our Mission</h3>
                                <p className="text-gray-700 group-hover:text-white/95 text-lg leading-relaxed transition-colors duration-300">
                                    To empower students to achieve academic excellence and confidence through accessible, innovative tutoring in math, science, and test preparation. We bridge learning gaps, inspire curiosity, and equip every learner with the skills and mindset to succeed — both in exams and in life.
                                </p>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="group relative bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 rounded-3xl p-10 shadow-lg hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="relative z-10">
                                <div className="bg-gradient-to-r from-pink-600 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl">
                                    <Eye className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-3xl font-extrabold text-gray-900 group-hover:text-white mb-6 transition-colors duration-300">Our Vision</h3>
                                <p className="text-gray-700 group-hover:text-white/95 text-lg leading-relaxed transition-colors duration-300">
                                    To become a leading force in education by inspiring confident, empowered learners who use knowledge to transform their communities and shape a better future. We aim to redefine learning through innovation — making world-class education accessible to every student, everywhere.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values with Tabs */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4">
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                                What We Stand For
                            </span>
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-4">
                            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">Values</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, idx) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={idx}
                                    onMouseEnter={() => setActiveValue(idx)}
                                    className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 cursor-pointer overflow-hidden ${
                                        activeValue === idx ? 'ring-4 ring-indigo-400 scale-105' : ''
                                    }`}
                                >
                                    {/* Animated background */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                    
                                    <div className="relative z-10">
                                        {/* Badge */}
                                        <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                                            {value.badge}
                                        </div>

                                        <div className={`bg-gradient-to-r ${value.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                                            <Icon className="w-10 h-10 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">{value.title}</h3>
                                        <p className="text-gray-700 group-hover:text-white/95 leading-relaxed transition-colors duration-300">{value.description}</p>
                                    </div>

                                    {/* Corner decoration */}
                                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us with Stats */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-4">
                            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">Brilliant Minds?</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Experience the difference with our proven approach
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, idx) => {
                            const Icon = feature.icon;
                            return (
                                <div key={idx} className="group bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 rounded-3xl p-8 hover:border-indigo-300 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                                    {/* Animated background gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="bg-yellow-400 text-yellow-900 w-16 h-16 rounded-full flex items-center justify-center font-extrabold text-xl shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                                                {feature.stat}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">{feature.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* <section className="relative py-32 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-blob"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
                </div>

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-10 w-32 h-32 border-4 border-white/20 rounded-full animate-spin-slow"></div>
                    <div className="absolute bottom-1/4 right-20 w-24 h-24 border-4 border-white/20 rounded-lg animate-spin-reverse"></div>
                </div>
                
                <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center text-white">
                    <div className="mb-8 animate-bounce-slow">
                        <Sparkles className="w-20 h-20 mx-auto text-yellow-300" />
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                        Ready to Start Your<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                            Amazing Journey?
                        </span>
                    </h2>
                    
                    <p className="text-xl lg:text-2xl mb-12 text-white/95 max-w-3xl mx-auto leading-relaxed">
                        Join the Brilliant Minds family today and discover how we're building minds and shaping futures, one brilliant student at a time!
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                        <button className="group relative bg-white text-indigo-600 px-12 py-6 rounded-full font-bold text-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 overflow-hidden">
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                <Rocket className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
                                Book Your First Session Today!
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        <button className="border-3 border-white text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white hover:text-indigo-600 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg">
                            <MessageCircle className="w-6 h-6" />
                            Free Consultation
                        </button>
                    </div>

                    {/* <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 max-w-4xl mx-auto shadow-2xl">
                        <p className="text-2xl font-bold mb-8 flex items-center justify-center gap-2">
                            <Zap className="w-6 h-6 text-yellow-300" />
                            Get in Touch With Us
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6 text-left">
                            
                            <div className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                    📞 Call Us
                                </h4>
                                <div className="space-y-2">
                                    <a href="tel:07038609914" className="block text-white/90 hover:text-white text-lg transition-colors">
                                        070 3860 9914
                                    </a>
                                    <a href="tel:07069581734" className="block text-white/90 hover:text-white text-lg transition-colors">
                                        070 6958 1734
                                    </a>
                                </div>
                            </div>

                           
                            <div className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                    ✉️ Email Us
                                </h4>
                                <a href="mailto:brilliantmindsprivate@gmail.com" className="block text-white/90 hover:text-white text-lg transition-colors break-all">
                                    brilliantmindsprivate@gmail.com
                                </a>
                            </div>
                        </div>

                
                        <div className="mt-8 pt-8 border-t border-white/20">
                            <p className="text-lg mb-6 font-semibold">Follow Us On Social Media</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a href="https://youtube.com/@brilliantmindstutor01" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-red-600 p-4 rounded-full transform hover:scale-110 transition-all duration-300 group">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                                </a>
                                <a href="https://facebook.com/BrilliantMindsTutor" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-blue-600 p-4 rounded-full transform hover:scale-110 transition-all duration-300 group">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                                </a>
                                <a href="https://instagram.com/brilliantmindstutor01" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-pink-600 p-4 rounded-full transform hover:scale-110 transition-all duration-300 group">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                </a>
                                <a href="https://tiktok.com/@brilliantmindstutor01" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-gray-900 p-4 rounded-full transform hover:scale-110 transition-all duration-300 group">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                                </a>
                            </div>
                        </div>
                    </div> 
                </div>
            </section> */}

            <style jsx>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(20px, -50px) scale(1.1); }
                    50% { transform: translate(-20px, 20px) scale(0.9); }
                    75% { transform: translate(50px, 50px) scale(1.05); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes spin-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out;
                }
                .animation-delay-200 {
                    animation-delay: 0.2s;
                }
                .animation-delay-400 {
                    animation-delay: 0.4s;
                }
                .animation-delay-600 {
                    animation-delay: 0.6s;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                .animate-bounce-slow {
                    animation: bounce 3s infinite;
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
                .animate-spin-reverse {
                    animation: spin-reverse 15s linear infinite;
                }
                .bg-grid-pattern {
                    background-image: 
                        linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
                    background-size: 20px 20px;
                }
            `}</style>
        </div>
    );
};

export default AboutUs;