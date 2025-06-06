import Image from "next/image"

export default function MentorsPage() {
    const mentors = [
        {
            id: 1,
            name: "Jerome Leclanche",
            title: "Serial Entrepreneur",
            image: "/images/mentors/jerome-leclanche.jpg",
            experience: "15+ years",
            companies: 4,
            linkedin: "https://linkedin.com/in/jerome-leclanche",
            bio: "Jerome Leclanche is a serial entrepreneur with experience in both US and EU markets. He is the founder of Seven Seed and Seven Capital, where he has built multiple successful ventures over his 15+ year career. Jerome specializes in helping startups with fundraising strategy, international expansion, and building high-performing teams. He has raised over $50M across his various companies and has extensive experience in B2B SaaS scaling.",
        },
        {
            id: 2,
            name: "Alessandra Guion",
            title: "FinTech Expert & Board Member",
            image: "/images/mentors/alessandra-guion.jpg",
            experience: "20+ years",
            companies: 2,
            linkedin: "https://linkedin.com/in/alessandra-guion",
            bio: "Alessandra Guion is the founder of Fintech Belgium and serves as a board member for Isabel Group & EDFA. With over 20 years in financial services, she is recognized as a leading FinTech expert in Europe. Alessandra helps startups navigate complex regulatory landscapes, build strategic partnerships within the financial ecosystem, and develop compliant fintech solutions. Her extensive network in European financial services makes her invaluable for fintech companies looking to scale.",
        },
        {
            id: 3,
            name: "Frank Hoogendijk",
            title: "Legal Advisor & Startup Specialist",
            image: "/images/mentors/frank-hoogendijk.jpg",
            experience: "12+ years",
            companies: 1,
            linkedin: "https://linkedin.com/in/frank-hoogendijk",
            bio: "Frank Hoogendijk is the founder of Found Advisory, specializing in startup legal strategy and advisory services. With 12+ years of experience, he helps early-stage companies navigate complex legal frameworks, protect intellectual property, and structure their organizations for growth. Frank's practical approach to legal strategy helps startups avoid common pitfalls while scaling efficiently, particularly in areas of corporate structure, compliance, and contract negotiation.",
        },
        {
            id: 4,
            name: "Ron Eddings",
            title: "Cybersecurity Expert",
            image: "/images/mentors/ron-eddings.jpg",
            experience: "18+ years",
            companies: 3,
            linkedin: "https://linkedin.com/in/ron-eddings",
            bio: "Ron Eddings is the founder of Hacker Valley Media and a recognized cybersecurity expert with 18+ years in the industry. He combines deep technical knowledge with media expertise to help security startups build thought leadership and market presence. Ron specializes in helping cybersecurity and defense tech companies develop go-to-market strategies, establish technical credibility, and navigate the competitive security market landscape.",
        },
        {
            id: 5,
            name: "Jean-Raymond Naveau",
            title: "Silicon Valley Veteran",
            image: "/images/mentors/jean-raymond-naveau.jpg",
            experience: "40+ years",
            companies: 6,
            linkedin: "https://linkedin.com/in/jean-raymond-naveau",
            bio: "Jean-Raymond Naveau brings 40 years of experience spanning Silicon Valley and Belgium as the founder of OpenThink Outcomes. He has built 6 companies and raised over $200M throughout his career. Jean-Raymond specializes in helping European startups expand to US markets and American companies enter European markets, leveraging his extensive Silicon Valley network and deep understanding of international business dynamics.",
        },
        {
            id: 6,
            name: "Denis Pokataev",
            title: "Tech Strategy Advisor",
            image: "/images/mentors/denis-pokataev.jpg",
            experience: "15+ years",
            companies: 2,
            linkedin: "https://linkedin.com/in/denis-pokataev",
            bio: "Denis Pokataev is a tech strategy advisor with experience at Amazon, Oracle, Stripe, and Meta. He specializes in helping startups leverage big tech insights for product development, scaling, and strategic partnerships. Denis applies methodologies from major technology platforms to help startups build scalable products, optimize operations, and develop strategic partnerships. His insider knowledge provides startups with competitive advantages in product strategy and market positioning.",
        },
        {
            id: 7,
            name: "Nicolas Streel",
            title: "Marketing & Growth Specialist",
            image: "/images/mentors/nicolas-streel.jpg",
            experience: "10+ years",
            companies: 3,
            linkedin: "https://linkedin.com/in/nicolas-streel",
            bio: "Nicolas Streel is the founder of Line Out & The Maul, specializing in marketing strategy for early-stage startups and prototypes. With 10+ years of experience, he helps companies build strong brands and execute effective go-to-market strategies with limited resources. Nicolas focuses on helping early-stage startups develop compelling brand narratives, establish market presence, and build sustainable growth engines from the ground up.",
        },
        {
            id: 8,
            name: "Filip Maertens",
            title: "Venture Builder & AI Expert",
            image: "/images/mentors/filip-maertens.jpg",
            experience: "20+ years",
            companies: 8,
            linkedin: "https://linkedin.com/in/filip-maertens",
            bio: "Filip Maertens is a venture builder and AI expert with 20+ years of experience building and scaling technology companies. He is a Forbes Technology Council member and keynote speaker who has built 8 companies and raised over $150M in total funding. Filip helps tech startups build scalable venture models, implement AI strategies, and navigate the complexities of rapid growth and technology adoption in competitive markets.",
        },
    ]

    const categories = [
        {
            title: "Serial Entrepreneurs",
            mentors: mentors.filter((m) => ["Jerome Leclanche", "Jean-Raymond Naveau", "Filip Maertens"].includes(m.name)),
        },
        {
            title: "Industry Experts",
            mentors: mentors.filter((m) =>
                ["Alessandra Guion", "Frank Hoogendijk", "Ron Eddings", "Denis Pokataev", "Nicolas Streel"].includes(m.name),
            ),
        },
    ]

    return (
        <div className="min-h-screen ">
            <div>
                <div className="max-w-7xl mx-auto px-4 py-12 sm:py-20 md:py-28">
                    <div className="text-center">
                        <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
                            Expert Network
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Meet Our <span className="text-blue-600">Mentors</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12">
                            Our mentors are successful entrepreneurs, investors, and industry experts who provide personalized
                            guidance to help startups navigate challenges and accelerate growth.
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 text-base sm:text-lg text-gray-500">
                            <div className="flex items-center justify-center gap-2">
                                <span className="font-bold text-xl sm:text-2xl text-gray-900">120+</span>
                                <span>Years Combined Experience</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <span className="font-bold text-xl sm:text-2xl text-gray-900">30+</span>
                                <span>Companies Built</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <span className="font-bold text-xl sm:text-2xl text-gray-900">$570M+</span>
                                <span>Total Funding Raised</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
                {categories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="mb-12 sm:mb-20">
                        <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-8 sm:mb-12">{category.title}</h2>

                        <div className="space-y-6 sm:space-y-8">
                            {category.mentors.map((mentor) => (
                                <div
                                    key={mentor.id}
                                    className="group bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
                                >
                                    <div className="block sm:hidden">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="flex-shrink-0">
                                                <div className="relative">
                                                    <div className="w-16 h-16 relative rounded-xl overflow-hidden bg-gray-100 ring-2 ring-gray-50 group-hover:ring-blue-50 transition-all duration-300">
                                                        <Image
                                                            src={mentor.image || "/placeholder.svg?height=64&width=64&query=professional headshot"}
                                                            alt={mentor.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                                                </div>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                                    {mentor.name}
                                                </h3>
                                                <p className="text-sm text-gray-600 mb-2">{mentor.title}</p>
                                            </div>
                                            {mentor.linkedin && (
                                                <a
                                                    href={mentor.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-shrink-0 p-2 bg-gray-50 hover:bg-blue-50 rounded-lg text-gray-400 hover:text-blue-600 transition-all duration-300"
                                                    aria-label={`${mentor.name}'s LinkedIn profile`}
                                                >
                                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                    </svg>
                                                </a>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 rounded-full">
                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                                <span className="text-xs font-medium text-gray-700">{mentor.experience}</span>
                                                <span className="text-xs text-gray-500">exp</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 rounded-full">
                                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                                <span className="text-xs font-medium text-gray-700">{mentor.companies}</span>
                                                <span className="text-xs text-gray-500">{mentor.companies === 1 ? "co" : "cos"}</span>
                                            </div>
                                        </div>

                                        <p className="text-sm text-gray-700 leading-relaxed">{mentor.bio}</p>
                                    </div>
                                    <div className="hidden sm:block">
                                        <div className="flex gap-6 md:gap-8">
                                            <div className="flex-shrink-0">
                                                <div className="relative">
                                                    <div className="w-20 h-20 md:w-24 md:h-24 relative rounded-2xl overflow-hidden bg-gray-100 ring-4 ring-gray-50 group-hover:ring-blue-50 transition-all duration-300">
                                                        <Image
                                                            src={mentor.image || "/placeholder.svg?height=96&width=96&query=professional headshot"}
                                                            alt={mentor.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <div className="absolute -bottom-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-green-500 border-4 border-white rounded-full"></div>
                                                </div>
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between gap-4 mb-4">
                                                    <div>
                                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                                            {mentor.name}
                                                        </h3>
                                                        <p className="text-base md:text-lg text-gray-600 mb-3">{mentor.title}</p>

                                                        <div className="flex flex-wrap gap-3 md:gap-6 mb-4">
                                                            <div className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full">
                                                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                                <span className="text-sm font-medium text-gray-700">{mentor.experience}</span>
                                                                <span className="text-sm text-gray-500">experience</span>
                                                            </div>
                                                            <div className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full">
                                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                                <span className="text-sm font-medium text-gray-700">{mentor.companies}</span>
                                                                <span className="text-sm text-gray-500">
                                                                    {mentor.companies === 1 ? "company" : "companies"}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {mentor.linkedin && (
                                                        <a
                                                            href={mentor.linkedin}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex-shrink-0 p-3 bg-gray-50 hover:bg-blue-50 rounded-xl text-gray-400 hover:text-blue-600 transition-all duration-300 group-hover:scale-105"
                                                            aria-label={`${mentor.name}'s LinkedIn profile`}
                                                        >
                                                            <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                            </svg>
                                                        </a>
                                                    )}
                                                </div>

                                                <p className="text-gray-700 leading-relaxed text-base md:text-lg">{mentor.bio}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
