import { HiArrowRight } from "react-icons/hi"


const NewsLetter = () => {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16" id="newsletter">
            <div className="bg-blue-600 rounded-2xl overflow-hidden ">
                <div className="relative md:px-16 py-16 px-6 md:py-24">
                    {/* gradiant bd */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant hidden md:block"></div>
                    <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                        {/* left content  */}
                        <div className="text-white max-w-lg text-center md:text-left">
                            <h2 className=" text-2xl sm:text-3xl lg:text-4xl font-medium mb-4">Subscribe newsletter</h2>
                            <p className="text-blue-100 text-sm">Best cooks and best delivery guys all at your service. Hot tadty food</p>
                        </div>
                        {/* right content */}
                        <div className="flex flex-col sm:flex-row">
                            <input type="email"placeholder="Enter your email address" className="bg-white w-full sm:w-auto md:w-80 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none  " />
                            <button className="w-full sm:w-auto cursor-pointer bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-lg flex items-center gap-2">
                                <span>Discover</span>
                                <HiArrowRight className="size-5"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default NewsLetter
