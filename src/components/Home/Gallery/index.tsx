// "use client";
// import React, { useState, useEffect } from 'react';
// import { BookOpen, Atom, Calculator, Globe, TrendingUp, Star, Users, Clock, ChevronLeft, ChevronRight, Camera, Award, GraduationCap } from 'lucide-react';

// // Gallery Section Component
// const Gallery = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//     const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

//     useEffect(() => {
//         const handleResize = () => setWindowWidth(window.innerWidth);
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     const galleryItems = [
//         {
//             id: 1,
//             title: "Interactive Learning Sessions",
//             description: "Students engaging in collaborative problem-solving",
//             image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
//             category: "Classroom"
//         },
//         {
//             id: 2,
//             title: "Laboratory Excellence",
//             description: "Hands-on science experiments and practical work",
//             image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop",
//             category: "Lab Work"
//         },
//         {
//             id: 3,
//             title: "Achievement Ceremonies",
//             description: "Celebrating academic excellence and milestones",
//             image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
//             category: "Events"
//         },
//         {
//             id: 4,
//             title: "Study Groups",
//             description: "Collaborative learning and peer support",
//             image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
//             category: "Groups"
//         },
//         {
//             id: 5,
//             title: "Technology Integration",
//             description: "Modern digital learning tools and resources",
//             image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=600&h=400&fit=crop",
//             category: "Technology"
//         },
//         {
//             id: 6,
//             title: "Graduation Success",
//             description: "Our students achieving their academic goals",
//             image: "https://images.unsplash.com/photo-1627556704302-624286467c65?w=600&h=400&fit=crop",
//             category: "Success"
//         }
//     ];

//     const itemsPerPage = windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1;
//     const totalPages = Math.ceil(galleryItems.length / itemsPerPage);

//     useEffect(() => {
//         if (!isAutoPlaying) return;
        
//         const timer = setInterval(() => {
//             setCurrentIndex((prev) => (prev + 1) % totalPages);
//         }, 4000);

//         return () => clearInterval(timer);
//     }, [isAutoPlaying, totalPages]);

//     const nextSlide = () => {
//         setIsAutoPlaying(false);
//         setCurrentIndex((prev) => (prev + 1) % totalPages);
//     };

//     const prevSlide = () => {
//         setIsAutoPlaying(false);
//         setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
//     };

//     const displayedItems = galleryItems.slice(
//         currentIndex * itemsPerPage,
//         (currentIndex * itemsPerPage) + itemsPerPage
//     );

//     return (
//         <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
//             <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
//                 <div className="text-center mb-16">
//                     <div className="flex items-center justify-center gap-2 mb-4">
//                         <Camera className="w-8 h-8 text-indigo-600" />
//                         <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
//                             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Gallery</span>
//                         </h2>
//                     </div>
//                     <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                         Glimpses of our vibrant learning environment and student success stories
//                     </p>
//                 </div>

//                 <div className="relative">
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//                         {displayedItems.map((item) => (
//                             <div
//                                 key={item.id}
//                                 className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
//                             >
//                                 <div className="relative h-80 overflow-hidden">
//                                     <img
//                                         src={item.image}
//                                         alt={item.title}
//                                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                                     />
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                                    
//                                     <div className="absolute top-4 right-4">
//                                         <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/30">
//                                             {item.category}
//                                         </span>
//                                     </div>

//                                     <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
//                                         <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
//                                         <p className="text-white/90 text-sm">{item.description}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Navigation Arrows */}
//                     <button
//                         onClick={prevSlide}
//                         className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 z-10"
//                         aria-label="Previous"
//                     >
//                         <ChevronLeft className="w-6 h-6 text-indigo-600" />
//                     </button>
//                     <button
//                         onClick={nextSlide}
//                         className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 z-10"
//                         aria-label="Next"
//                     >
//                         <ChevronRight className="w-6 h-6 text-indigo-600" />
//                     </button>
//                 </div>

//                 {/* Dots Navigation */}
//                 <div className="flex justify-center gap-2 mt-8">
//                     {Array.from({ length: totalPages }).map((_, index) => (
//                         <button
//                             key={index}
//                             onClick={() => {
//                                 setIsAutoPlaying(false);
//                                 setCurrentIndex(index);
//                             }}
//                             className={`transition-all duration-300 rounded-full ${
//                                 index === currentIndex
//                                     ? 'bg-gradient-to-r from-indigo-600 to-purple-600 w-8 h-3'
//                                     : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
//                             }`}
//                             aria-label={`Go to slide ${index + 1}`}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };
// export default Gallery;




"use client";
import React, { useState, useEffect } from 'react';
import { BookOpen, Atom, Calculator, Globe, TrendingUp, Star, Users, Clock, ChevronLeft, ChevronRight, Camera, Award, GraduationCap, X } from 'lucide-react';

// Gallery Section Component
const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
    const [selectedImage, setSelectedImage] = useState<{ id: number; title: string; description: string; image: string; category: string } | null>(null);
    const [modalImageIndex, setModalImageIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const galleryItems = [
        {
            id: 1,
            title: "Interactive Learning Sessions",
            description: "Students engaging in collaborative problem-solving",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
            category: "Classroom"
        },
        {
            id: 2,
            title: "Online Education",
            description: "PROVIDES EVERYONE WITH THE CHANCE TO NETWORK WITH PEERS FROM AROUND THE WORLD.",
            image: "/images/banner/rm347-s88-sasi-socialmedia-08.jpg",
            category: "E-Learning"
        },
        {
            id: 3,
            title: "Achievement Ceremonies",
            description: "Celebrating academic excellence and milestones",
            image: "/images/banner/full-shot-smiley-students-library.jpg",
            category: "Events"
        },
        {
            id: 4,
            title: "Study Groups",
            description: "Collaborative learning and peer support",
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
            category: "Groups"
        },
        {
            id: 5,
            title: "Technology Integration",
            description: "Modern digital learning tools and resources",
            image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=600&h=400&fit=crop",
            category: "Technology"
        },
        {
            id: 6,
            title: "Graduation Success",
            description: "Our students achieving their academic goals",
            image: "https://images.unsplash.com/photo-1627556704302-624286467c65?w=600&h=400&fit=crop",
            category: "Success"
        },
        {
            id: 7,
            title: "One-on-One Sessions",
            description: "Personalized attention for student growth",
            image: "/images/banner/close-up-man-kid-doing-homework.jpg",
            category: "Personalized"
        },
        {
            id: 8,
            title: "Group Studies",
            description: "Students engaging in collaborative problem-solving",
            image: "/images/banner/study-group-african-people (1).jpg",
            category: "Group Study"
        },
        {
            id: 9,
            title: "Group Studies",
            description: "Students engaging in collaborative problem-solving",
            image: "/images/banner/study-group-african-people.jpg",
            category: "Group Study"
        },
         {
            id: 10,
            title: "Online Education",
            description: "PROVIDES EVERYONE WITH THE CHANCE TO NETWORK WITH PEERS FROM AROUND THE WORLD.",
            image: "/images/banner/meeting-mobile-phone-lesson-wall-college.jpg",
            category: "E-Learning"
        },
         {
            id: 11,
            title: "Online Education",
            description: "PROVIDES EVERYONE WITH THE CHANCE TO NETWORK WITH PEERS FROM AROUND THE WORLD.",
            image: "/images/banner/mahila.png",
            category: "E-Learning"
        },
        {
            id: 11,
            title: "Online Education",
            description: "PROVIDES EVERYONE WITH THE CHANCE TO NETWORK WITH PEERS FROM AROUND THE WORLD.",
            image: "/images/banner/young-student-working-assignment.jpg",
            category: "E-Learning"
        },
        {
            id: 11,
            title: "Online Education",
            description: "PROVIDES EVERYONE WITH THE CHANCE TO NETWORK WITH PEERS FROM AROUND THE WORLD.",
            image: "/images/banner/student.jpg",
            category: "E-Learning"
        },
    ];

    const itemsPerPage = windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1;
    const totalPages = Math.ceil(galleryItems.length / itemsPerPage);

    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalPages);
        }, 4000);

        return () => clearInterval(timer);
    }, [isAutoPlaying, totalPages]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedImage !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    const nextSlide = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const openModal = (index: number) => {
        setSelectedImage(galleryItems[index]);
        setModalImageIndex(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const nextModalImage = () => {
        const newIndex = (modalImageIndex + 1) % galleryItems.length;
        setModalImageIndex(newIndex);
        setSelectedImage(galleryItems[newIndex]);
    };

    const prevModalImage = () => {
        const newIndex = (modalImageIndex - 1 + galleryItems.length) % galleryItems.length;
        setModalImageIndex(newIndex);
        setSelectedImage(galleryItems[newIndex]);
    };

    const displayedItems = galleryItems.slice(
        currentIndex * itemsPerPage,
        (currentIndex * itemsPerPage) + itemsPerPage
    );

    return (
        <>
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Gallery</span>
                            </h2>
                        </div>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                            Glimpses of our vibrant learning environment and student success stories
                        </p>
                    </div>

                    <div className="relative px-8 sm:px-12 lg:px-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
                            {displayedItems.map((item, idx) => (
                                <div
                                    key={item.id}
                                    onClick={() => openModal(currentIndex * itemsPerPage + idx)}
                                    className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                                >
                                    <div className="relative h-64 sm:h-80 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                                        
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/30">
                                                {item.category}
                                            </span>
                                        </div>

                                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{item.title}</h3>
                                            <p className="text-white/90 text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrows - Fixed positioning */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 lg:p-4 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 z-10"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-indigo-600" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 lg:p-4 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 z-10"
                            aria-label="Next"
                        >
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-indigo-600" />
                        </button>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setIsAutoPlaying(false);
                                    setCurrentIndex(index);
                                }}
                                className={`transition-all duration-300 rounded-full ${
                                    index === currentIndex
                                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 w-8 h-3'
                                        : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal Gallery View */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
                    {/* Close Button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 z-50"
                        aria-label="Close"
                    >
                        <X className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </button>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevModalImage}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 z-50"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </button>
                    <button
                        onClick={nextModalImage}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 z-50"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </button>

                    {/* Image Container */}
                    <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center">
                        <div className="relative w-full">
                            <img
                                src={selectedImage.image.replace('w=600&h=400', 'w=1200&h=800')}
                                alt={selectedImage.title}
                                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                            />
                        </div>
                        
                        {/* Image Info */}
                        <div className="mt-6 text-center max-w-2xl">
                            <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/30 mb-3">
                                {selectedImage.category}
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                                {selectedImage.title}
                            </h3>
                            <p className="text-white/80 text-base sm:text-lg">
                                {selectedImage.description}
                            </p>
                            <p className="text-white/60 text-sm mt-3">
                                Image {modalImageIndex + 1} of {galleryItems.length}
                            </p>
                        </div>
                    </div>

                    {/* Thumbnail Strip */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-full px-4 pb-2">
                        {galleryItems.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setModalImageIndex(index);
                                    setSelectedImage(galleryItems[index]);
                                }}
                                className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                                    index === modalImageIndex
                                        ? 'border-indigo-500 scale-110'
                                        : 'border-white/30 hover:border-white/60'
                                }`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;