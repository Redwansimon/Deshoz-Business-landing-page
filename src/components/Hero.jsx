
import heroimage from "../assets/hero-image.png"
import { motion } from "framer-motion"
import { fadeIn, textVariant } from "../utility/motion"
const Hero = () => {
    return (
        <div>
            <section id="home" className="container mx-auto pt-44 pb-16 px-8 sm:px-6  lg:px-8 flex flex-col md:flex-row justify-between items-center">
                {/* left column */}
                <div className=" w-full md:w-1/2 space-y-8">
                    {/* start badge */}
                    <motion.div
                     variants={fadeIn('right', 0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{once:true}}
                    >
                        <div className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">

                        <span className="group-hover:scale-110 transition-transform text-blue-600 group-hover:text-amber-500">
                            ★
                        </span>
                        <span className="text-sm font-semibold">jump start your growth</span>
                    </div>
                    </motion.div>
                   <motion.div
                    variants={textVariant(0.3)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{once:true}}
                   >
                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">We boost the growth for
                        <span className="text-blue-600 relative inline-block">
                            Startup to Fortune 500
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60"></span>
                        </span>
                        Companies
                        <span className="inline-block ml-2 animate-pulse">🕒</span>
                    </h1>

                   </motion.div>
                    <motion.p 
                     variants={fadeIn('up', 0.4)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{once:true}}
                    className=" text-gray-600 text-lg md:text-xl max-w-xl">Get the most accurate leads, sales people training and conversions, tools and more - all within the same one billing.
                    </motion.p>
                    <motion.div
                    variants={fadeIn('right', 0.5)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{once:true}}
                    className="flex gap-3 max-w-md">
                        <input type="email" placeholder="Email address" className="flex-1 px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all" />
                        <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-300">→</button>
                    </motion.div>

                </div>
                {/* right col */}
                <motion.div
                variants={fadeIn('left', 0.5)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{once:true}}
                
                className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12">
                    <div className="relative ">
                        <img src={heroimage} className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300" alt="" />
                    </div>

                </motion.div>
            </section>
        </div>
    )
}

export default Hero
