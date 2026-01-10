"use client"
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TruestedCompanies } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";
import { Award } from "lucide-react";

// CAROUSEL SETTINGS
const Companies = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (
        <section className='text-center' >
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
               <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Award className="w-8 h-8 text-indigo-600" />
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                            Accredited <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Examination Bodies</span>
                        </h2>
                    </div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We prepare students for success in nationally and internationally recognized examinations
                    </p>
                </div>
                <div className="py-14 border-b ">
                    <Slider {...settings}>
                        {TruestedCompanies.map((item, i) =>
                            <div key={i}>
                                  <Image 
                                    src={item.imgSrc} 
                                    alt={item.imgSrc} 
                                    width={200} 
                                    height={45} 
                                />
                            </div>
                        )}
                    </Slider>
                </div>
            </div>
        </section>
    )

}

export default Companies;