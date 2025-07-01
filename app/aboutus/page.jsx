import React from 'react';

const data = [
    {
        imgSrc: "/assets/about/photo-1.jpg",
        title: "Our Journey",
        description: "Founded in 2000, Zenbrew started as a small café with a vision for exceptional coffee. Now a beloved brand, we are known for our commitment to quality and sustainability. Driven by passion, we create memorable coffee experiences, inviting you to join us in exploring the rich world of coffee, one cup at a time. Our journey is rooted in the belief that coffee is more than just a beverage; it's an art form that connects people. We source our beans ethically, ensuring that every cup you enjoy supports farmers and promotes environmental stewardship.\n\nAt Zenbrew, every sip tells a story of dedication, care, and a relentless pursuit of excellence. Our skilled baristas are trained to bring out the best flavors in every brew, using techniques honed over years of experience. We offer a diverse range of blends and single-origin coffees, each with its own unique profile, ensuring there's something for every palate. Our cozy cafes are designed to be welcoming spaces where you can relax, work, or catch up with friends.\n\nIn addition to our focus on quality coffee, we are committed to sustainability. We use eco-friendly packaging, support reforestation projects, and continuously seek ways to reduce our carbon footprint. We believe that great coffee and environmental responsibility go hand in hand. Join us in savoring the moments that matter, one perfect brew at a time, and become part of the Zenbrew family, where every cup is brewed with love and respect for our planet.",
    },
    {
        imgSrc: "/assets/about/photo-2.jpg",
        title: "Our Promise",
        description: "At Zenbrew, we promise the finest coffee with a positive impact. We source beans from sustainable farms, respecting people and the planet. Our meticulous roasting process ensures a rich, satisfying experience in every cup. We are committed to quality, sustainability, and community.\n\nOur promise extends beyond just delivering exceptional coffee. We believe in building lasting relationships with the farmers who cultivate our beans, ensuring they receive fair wages and work in safe conditions. This ethical approach helps create a sustainable livelihood for those who are at the heart of our coffee production.\n\nQuality is paramount at Zenbrew. Our expert roasters carefully monitor each batch, bringing out the unique flavors and aromas of our premium beans. From the moment the beans are harvested to the final brew, every step is handled with precision and care.\n\nSustainability is woven into the fabric of everything we do. We use eco-friendly packaging, promote recycling, and support environmental initiatives to reduce our carbon footprint. By choosing Zenbrew, you're making a conscious choice to support a brand that values the environment.\n\nCommunity is at the core of our mission. We aim to create a welcoming space where coffee lovers can come together, share stories, and build connections. Whether you visit one of our cozy cafes or enjoy our coffee at home, you are part of the Zenbrew family.\n\nJoin us in our commitment to exceptional coffee, ethical practices, and a positive impact on the world. With Zenbrew, every cup you enjoy contributes to a better future for our planet and the people who inhabit it.",
    },
    {
        imgSrc: "/assets/about/photo-3.jpg",
        title: "Our Team",
        description: "At Zenbrew, our dedicated team is behind every great cup. Our skilled baristas and expert roasters work with passion and precision, making each coffee experience special. Meet the people who bring creativity and care to every cup and learn their unique stories.\n\nOur team is a diverse group of coffee enthusiasts, each bringing their own unique talents and backgrounds to Zenbrew. From the early morning hours when our roasters begin their meticulous work, to the friendly smiles of our baristas as they craft your favorite drink, every member of our team is committed to excellence.\n\nOur roasters are true artisans, mastering the delicate balance of time and temperature to unlock the full potential of our beans. They are passionate about their craft, constantly experimenting with new techniques and blends to ensure we offer the best possible coffee. Their dedication to quality and innovation is the cornerstone of our brand.\n\nOur baristas are the face of Zenbrew, creating the perfect cup of coffee and providing exceptional customer service. They are trained to bring out the best in our beans, using precise brewing methods to highlight the unique flavors of each blend. Beyond their technical skills, our baristas are warm, approachable, and always eager to share their coffee knowledge with our customers.\n\nWe believe that a great coffee experience goes beyond the beverage itself; it's about the people who make it possible. Our team members are not just employees; they are part of the Zenbrew family. We take pride in fostering a supportive and inclusive work environment where everyone can thrive.\n\nEach member of our team has a unique story to tell, and we celebrate the diverse paths that have brought them to Zenbrew. Whether it's a lifelong passion for coffee, a love of culinary arts, or a commitment to sustainability, our team's collective experiences enrich our brand and enhance the experience we offer to our customers.\n\nJoin us at Zenbrew and get to know the talented individuals who pour their hearts into every cup. We invite you to experience the creativity, care, and dedication that define our team and make Zenbrew a beloved coffee destination.",
    }
];

function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-amber-900/90 to-orange-900/90 py-16">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-amber-400/10"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-amber-300/5 to-orange-300/5"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold text-center text-white mb-4">
                        About <span className="text-amber-300">Zenbrew</span>
                    </h1>
                    <p className="text-xl text-center text-amber-100 max-w-2xl mx-auto">
                        Discover the story behind every perfect cup
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-16 max-w-6xl">
                {data.map((item, index) => (
                    <React.Fragment key={index}>
                        <article className="group mb-20">
                            {/* Title Section */}
                            <div className="text-center mb-12">
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 inline-block">
                                    {item.title.split('').map((char, i) => (
                                        <span 
                                            key={i} 
                                            className={`${i === 1 ? 'text-amber-600' : ''} 
                                                      hover:scale-110 inline-block transition-transform duration-200 cursor-default`}
                                            style={{ animationDelay: `${i * 100}ms` }}
                                        >
                                            {char === ' ' ? '\u00A0' : char}
                                        </span>
                                    ))}
                                </h2>
                                <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
                            </div>

                            {/* Content Card */}
                            <div className="relative">
                                {/* Background decorative element */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-amber-100/50 to-orange-100/50 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                                
                                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-amber-100/50 overflow-hidden">
                                    {/* Image placeholder with gradient overlay */}
                                    <div className="h-64 md:h-80 bg-gradient-to-br from-amber-200 via-orange-200 to-yellow-200 relative overflow-hidden rounded-t-2xl">
                                        <img
                                            src={item.imgSrc}
                                            alt={item.title}
                                            className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                        {/* Coffee bean decoration */}
                                        <div className="absolute top-6 right-6 w-12 h-12 bg-amber-600/20 rounded-full flex items-center justify-center">
                                            <div className="w-6 h-6 bg-amber-700/40 rounded-full"></div>
                                        </div>
                                    </div>
                                    
                                    {/* Text Content */}
                                    <div className="p-8 md:p-12">
                                        <div className="prose prose-lg max-w-none">
                                            {item.description.split('\n\n').map((paragraph, pIndex) => (
                                                <p 
                                                    key={pIndex} 
                                                    className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg first-letter:text-4xl first-letter:font-bold first-letter:text-amber-600 first-letter:float-left first-letter:mr-2 first-letter:mt-1"
                                                >
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Separator */}
                        {index < data.length - 1 && (
                            <div className="flex items-center justify-center my-16">
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                                    <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
                                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                                </div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Footer accent */}
            <div className="h-32 bg-gradient-to-t from-amber-900/10 to-transparent"></div>
        </div>
    );
}

export default Page;
