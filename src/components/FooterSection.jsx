import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
      const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    getHelp: [
      { name: 'Support Carrer', href: '#' },
      { name: '24h Service', href: '#' },
      { name: 'Quick Chat', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Policy', href: '#' },
      { name: 'Business', href: '#' },
    ],
    contact: [
      { name: 'WhatsApp', href: '#' },
      { name: 'Support 24', href: '#' },
    ],
  }

const FooterSection = () => {

    return (
        <footer className="bg-gray-100 ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-4">
                    {/* brand column */}
                    <div className="lg:col-span-4 ">
                        <div className="flex gap-1 items-center mb-6">
                            <div>
                                <div className="flex  items-center gap-1 cursor-pointer">
                                    <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
                                    <div className="w-4 h-4 -ml-2 bg-red-600 rounded-full opacity-100 hover:opacity-75 transition-opacity"></div>
                                </div>
                            </div>
                            <div>
                                <span className="text-xl font-medium ml-1">The Next Design</span>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-6 md:w-3/4 ">The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.</p>
                        <div className="flex gap-4">
                            <a href="#" className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all">
                                <FaFacebook className="size-5" />
                                </a>
                            <a href="#" className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all">
                                <FaTwitter className="size-5" />
                                </a>
                            <a href="#" className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all">
                                <FaInstagram className="size-5" />
                                </a>
                            <a href="#" className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all">
                                <FaLinkedinIn className="size-5" />
                                </a>
                        </div>
                    </div>
                    {/* footer navigation */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {
                                Object.entries(footerLinks).map(([category , links],index)=>(
                                    <div className="" key={index}>
                                        <h3 className="text-lg font-medium mb-4 uppercase">{category}</h3>
                                        <ul className="space-y-3">
                                            {links.map((link,i)=>(
                                                <li key={i}>
                                                    <a className="text-gray-600 hover:text-gray-900" href="#">{link.name}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* footer bottom section */}
                <div className="border-t border-gray-300 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <p className="text-gray-600 text-sm ">
                            Copyright © {new Date().getFullYear()} All rights reserved.
                        </p>
                        <p className="text-gray-600 text-sm ">Created by Redwan Ahmed</p>
                    </div>
                </div>
            </div>
            
        </footer>
    )
}

export default FooterSection
