// import Link from "next/link";
// import Image from "next/image";
// import Logo from "../Header/Logo";
// import { Icon } from "@iconify/react/dist/iconify.js";
// import { headerData } from "../Header/Navigation/menuData";

// const footer = () => {
//   return (
//     <footer className="bg-deepSlate py-10">
//       <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
//         <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
//           <div className='col-span-4 md:col-span-12 lg:col-span-4'>
//             <Logo />
//             <div className='flex items-center gap-4'>
//               <Link href="#" className='hover:text-primary text-black text-3xl'>
//                 <Icon
//                   icon="tabler:brand-facebook"
//                 />
//               </Link>
//               <Link href="#" className='hover:text-primary text-black text-3xl'>
//                 <Icon
//                   icon="tabler:brand-twitter"
//                 />
//               </Link>
//               <Link href="#" className='hover:text-primary text-black text-3xl'>
//                 <Icon
//                   icon="tabler:brand-instagram"
//                 />
//               </Link>
//             </div>
//           </div>
//           <div className="col-span-2">
//             <h3 className="mb-4 text-2xl font-medium">Links</h3>
//             <ul>
//               {headerData.map((item, index) => (
//                 <li key={index} className="mb-2 text-black/50 hover:text-primary w-fit">
//                   <Link href={item.href}>
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="col-span-2">
//             <h3 className="mb-4 text-2xl font-medium">Other</h3>
//             <ul>
//               <li className="mb-2 text-black/50 hover:text-primary w-fit">
//                 <Link href="#">
//                   About Us
//                 </Link>
//               </li>
//               <li className="mb-2 text-black/50 hover:text-primary w-fit">
//                 <Link href="#">
//                   Our Team
//                 </Link>
//               </li>
//               <li className="mb-2 text-black/50 hover:text-primary w-fit">
//                 <Link href="#">
//                   career
//                 </Link>
//               </li>
//               <li className="mb-2 text-black/50 hover:text-primary w-fit">
//                 <Link href="#">
//                   Services
//                 </Link>
//               </li>
//               <li className="mb-2 text-black/50 hover:text-primary w-fit">
//                 <Link href="#">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className='col-span-4 md:col-span-4 lg:col-span-4'>
//             <div className="flex items-center gap-2">
//               <Icon
//                 icon="tabler:brand-google-maps"
//                 className="text-primary text-3xl inline-block me-2"
//               />
//               <h5 className="text-lg text-black/60">925 Filbert Street Pennsylvania 18072</h5>
//             </div>
//             <div className="flex gap-2 mt-10">
//               <Icon
//                 icon="tabler:phone"
//                 className="text-primary text-3xl inline-block me-2"
//               />
//               <h5 className="text-lg text-black/60">+45 3411-4411</h5>
//             </div>
//             <div className="flex gap-2 mt-10">
//               <Icon
//                 icon="tabler:folder"
//                 className="text-primary text-3xl inline-block me-2"
//               />
//               <h5 className="text-lg text-black/60">info@gmail.com</h5>
//             </div>
//           </div>
//         </div>

//         <div className='mt-10 lg:flex items-center justify-between'>
//           <h4 className='text-black/50 text-sm text-center lg:text-start font-normal'>@2025 Agency. All Rights Reserved by <Link href="https://getnextjstemplates.com/" target="_blank" className="hover:text-primary"> GetNextJsTemplates.com</Link></h4>
//           <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
//             <Link href="/" className='text-black/50 text-sm font-normal hover:text-primary'>Privacy policy</Link>
//             <Link href="/" className='text-black/50 text-sm font-normal hover:text-primary'>Terms & conditions</Link>
//           </div>
//           <h4 className='text-black/50 text-sm text-center lg:text-start font-normal'>Distributed by <Link href="https://themewagon.com/" target="_blank" className="hover:text-primary"> ThemeWagon</Link></h4>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default footer;

"use client";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Youtube, Facebook, Instagram, Music, Heart } from 'lucide-react';

const Footer = () => {
  const navigationLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Contact", href: "#contact" }
  ];

  const quickLinks = [
    { label: "WAEC Prep", href: "#waec" },
    { label: "JAMB Prep", href: "#jamb" },
    { label: "SAT Prep", href: "#sat" },
    { label: "IGCSE", href: "#igcse" },
    { label: "Testimonials", href: "#testimonials" }
  ];

  const subjects = [
    { label: "Mathematics", href: "#math" },
    { label: "Physics", href: "#physics" },
    { label: "Chemistry", href: "#chemistry" },
    { label: "Biology", href: "#biology" }
  ];

  return (
    <footer className="bg-deepSlate text-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Brand Section */}
          <div className='col-span-1 sm:col-span-2 lg:col-span-4'>
            <div className="mb-6">
              <Image
                src="/images/logo/uncle_s_logo-removebg-preview2.png"
                alt="Brilliant Minds Logo"
                width={100}
                height={100}
                className="w-auto h-30 object-contain"
              />
            </div>
            <p className="text-black mb-6 leading-relaxed">
              Building minds and shaping futures through personalized, innovative tutoring in math, science, and test preparation.
            </p>
            
            {/* Social Media Links */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-black mb-3">Follow Us</p>
              <div className='flex items-center gap-3 flex-wrap'>
                <Link 
                  href="https://youtube.com/@brilliantmindstutor01" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className='group bg-white/10 hover:bg-red-600 p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg'
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </Link>
                <Link 
                  href="https://facebook.com/BrilliantMindsTutor" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className='group bg-white/10 hover:bg-blue-600 p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg'
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link 
                  href="https://instagram.com/brilliantmindstutor01" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className='group bg-white/10 hover:bg-pink-600 p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg'
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link 
                  href="https://tiktok.com/@brilliantmindstutor01" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className='group bg-white/10 hover:bg-gray-900 p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg'
                  aria-label="TikTok"
                >
                  <Music className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-xl font-bold mb-6 text-primary">Navigation</h3>
            <ul className="space-y-3">
              {navigationLinks.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href}
                    className="text-black hover:text-white hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-xl font-bold mb-6 text-primary">Programs</h3>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href}
                    className="text-black hover:text-white hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-xl font-bold mb-6 text-primary">Subjects</h3>
            <ul className="space-y-3">
              {subjects.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href}
                    className="text-black hover:text-white hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className='col-span-1 sm:col-span-2 lg:col-span-2'>
            <h3 className="text-xl font-bold mb-6 text-primary">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:07038609914" 
                  className="flex items-start gap-3 text-black hover:text-white transition-colors duration-300 group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-1 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-sm">070 3860 9914</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:07069581734" 
                  className="flex items-start gap-3 text-black hover:text-white transition-colors duration-300 group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-1 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-sm">070 6958 1734</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:brilliantmindsprivate@gmail.com" 
                  className="flex items-start gap-3 text-black hover:text-white transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm break-all">brilliantmindsprivate@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-black">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span className="text-sm">Lagos, Nigeria</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
            <p className="text-black mb-6">Subscribe to get the latest updates on courses and educational tips</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-gray-600 text-white placeholder-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-700 pt-8'>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <p className='text-black text-sm text-center lg:text-left'>
              © {new Date().getFullYear()} Brilliant Minds Tutoring Services. All Rights Reserved.
            </p>
            
            {/* <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <Link href="/privacy" className='text-black text-sm hover:text-white transition-colors duration-300'>
                Privacy Policy
              </Link>
              <Link href="/terms" className='text-black text-sm hover:text-white transition-colors duration-300'>
                Terms & Conditions
              </Link>
              <Link href="/refund" className='text-black text-sm hover:text-white transition-colors duration-300'>
                Refund Policy
              </Link>
            </div> */}

           
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;