// import Image from 'next/image';
// import { Icon } from "@iconify/react/dist/iconify.js";
// import { getImagePrefix } from '@/utils/util';

// const Hero = () => {

//     return (
//         <section id="home-section" className='bg-slateGray'>
//             <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
//                 <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1 items-center'>
//                     <div className='col-span-6 flex flex-col gap-8 '>
//                         <div className='flex gap-2 mx-auto lg:mx-0'>
//                             <Icon
//                                 icon="solar:verified-check-bold"
//                                 className="text-success text-xl inline-block me-2"
//                             />
//                             <p className='text-success text-sm font-semibold text-center lg:text-start'>Get 30% off on first enroll</p>
//                         </div>
//                         <h1 className='text-midnight_text text-4xl sm:text-5xl font-semibold pt-5 lg:pt-0'>Advance your engineering skills with us.</h1>
//                         <h3 className='text-black/70 text-lg pt-5 lg:pt-0'>Build skills with our courses and mentor from world-class companies.</h3>
//                         <div className="relative rounded-full pt-5 lg:pt-0">
//                             <input type="Email address" name="q" className="py-6 lg:py-8 pl-8 pr-20 text-lg w-full text-black rounded-full focus:outline-none shadow-input-shadow" placeholder="search courses..." autoComplete="off" />
//                             <button className="bg-secondary p-5 rounded-full absolute right-2 top-2 ">
//                                 <Icon
//                                     icon="solar:magnifer-linear"
//                                     className="text-white text-4xl inline-block"
//                                 />
//                             </button>
//                         </div>
//                         <div className='flex items-center justify-between pt-10 lg:pt-4'>
//                             <div className='flex gap-2'>
//                                 <Image src={`${getImagePrefix()}images/banner/check-circle.svg`} alt="check-image" width={30} height={30} className='smallImage' />
//                                 <p className='text-sm sm:text-lg font-normal text-black'>Flexible</p>
//                             </div>
//                             <div className='flex gap-2'>
//                                 <Image src={`${getImagePrefix()}images/banner/check-circle.svg`} alt="check-image" width={30} height={30} className='smallImage' />
//                                 <p className='text-sm sm:text-lg font-normal text-black'>Learning path</p>
//                             </div>
//                             <div className='flex gap-2'>
//                                 <Image src={`${getImagePrefix()}images/banner/check-circle.svg`} alt="check-image" width={30} height={30} className='smallImage' />
//                                 <p className='text-sm sm:text-lg font-normal text-black'>Community</p>
//                             </div>
//                         </div>

//                     </div>
//                     <div className='col-span-6 flex justify-center'>
//                         <Image src={`${getImagePrefix()}images/banner/mahila.png`} alt="nothing" width={1000} height={805} />
//                     </div>
//                 </div>

//             </div>
//         </section >
//     )
// }

// export default Hero;


"use client";
import React from 'react';
import Image from 'next/image';

import { Book, Users, Award, TrendingUp, CheckCircle2, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home-section" className='relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden'>
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-32 pb-20 relative z-10">
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
                    <div className='col-span-6 flex flex-col gap-6'>
                        {/* Promo Badge */}
                        <div className='flex gap-2 mx-auto lg:mx-0 bg-green-50 border border-green-200 rounded-full px-6 py-3 animate-bounce-slow'>
                            <Sparkles className="text-green-600 w-5 h-5" />
                            <p className='text-green-700 text-sm font-semibold'>Get 30% off on first enrollment</p>
                        </div>

                        {/* Main Heading with gradient */}
                        <h1 className='text-midnight_text text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient'>
                            Building Minds, Shaping Futures
                        </h1>

                        {/* Subheading */}
                        <h3 className='text-gray-700 text-lg lg:text-xl leading-relaxed'>
                            Expert tutoring in <span className="font-semibold text-indigo-600">Mathematics, Science</span>, and test prep for <span className="font-semibold text-purple-600">WAEC, NECO, JAMB, SAT, IGCSE & CAPE/CSEC</span>. Learn online or in-person with passionate tutors who care about your success.
                        </h3>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                                <span className="relative z-10">Book Your First Session</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                            <button className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-50 transform hover:-translate-y-1 transition-all duration-300 shadow-md">
                                Free Consultation
                            </button>
                        </div>

                        {/* Feature Pills */}
                        <div className='grid grid-cols-3 gap-4 pt-6'>
                            <div className='flex flex-col items-center gap-2 bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1'>
                                <CheckCircle2 className="w-6 h-6 text-green-500" />
                                <p className='text-sm font-semibold text-gray-700'>Flexible Schedule</p>
                            </div>
                            <div className='flex flex-col items-center gap-2 bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1'>
                                <CheckCircle2 className="w-6 h-6 text-blue-500" />
                                <p className='text-sm font-semibold text-gray-700'>Expert Tutors</p>
                            </div>
                            <div className='flex flex-col items-center gap-2 bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1'>
                                <CheckCircle2 className="w-6 h-6 text-purple-500" />
                                <p className='text-sm font-semibold text-gray-700'>Proven Results</p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className='grid grid-cols-3 gap-4 pt-6'>
                            <div className='text-center'>
                                <h4 className='text-3xl font-bold text-indigo-600'>500+</h4>
                                <p className='text-sm text-gray-600'>Happy Students</p>
                            </div>
                            <div className='text-center'>
                                <h4 className='text-3xl font-bold text-purple-600'>98%</h4>
                                <p className='text-sm text-gray-600'>Success Rate</p>
                            </div>
                            <div className='text-center'>
                                <h4 className='text-3xl font-bold text-pink-600'>15+</h4>
                                <p className='text-sm text-gray-600'>Years Experience</p>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Hero Image with floating elements */}
                    <div className='col-span-6 flex justify-center relative'>
                        <div className="relative">
                            {/* Main illustration placeholder */}
                            <div className="w-full max-w-lg h-96 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-3xl shadow-2xl flex items-center justify-center transform hover:rotate-2 transition-transform duration-300">
                                <div className="text-white text-center p-8">
                                    {/* <Book className="w-24 h-24 mx-auto mb-4 animate-pulse" />
                                    <p className="text-2xl font-bold">Student Success Story</p> */}
                                    <Image
                                        src="/images/banner/student.jpg"
                                        alt="Hero Image"
                                        width={400}
                                        height={400}
                                        className="rounded-3xl shadow-lg"
                                    />
                                </div>
                            </div>

                            {/* Floating cards */}
                            <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl animate-float">
                                <Award className="w-8 h-8 text-yellow-500 mb-2" />
                                <p className="text-xs font-semibold">A1 in Math</p>
                            </div>

                            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl animate-float animation-delay-2000">
                                <TrendingUp className="w-8 h-8 text-green-500 mb-2" />
                                <p className="text-xs font-semibold">790 SAT Score</p>
                            </div>

                            <div className="absolute top-1/2 -right-12 bg-white rounded-2xl p-4 shadow-xl animate-float animation-delay-4000">
                                <Users className="w-8 h-8 text-blue-500 mb-2" />
                                <p className="text-xs font-semibold">1-on-1 Sessions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                .animate-bounce-slow {
                    animation: bounce 2s infinite;
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
            `}</style>
        </section>
    );
};

export default Hero;