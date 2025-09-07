import Image from "next/image";

export default function MentorsPage() {
	const mentors = [
		{
			name: "Jerome Leclanche",
			title: "Serial Founder - Tech Wizard",
			image: "/images/mentors/jerome-leclanche.jpg",
			experience: "15+ years",
			companies: 9,
			exits: 2,
			linkedin: "https://www.linkedin.com/in/jleclanche/",
			bio: "Jerome Leclanche is a serial entrepreneur and engineer with a background in AI, cybersecurity, and open source. He is the founder of Seven Seed, Seven Camp, and Seven Capital as well as the AI venture studio Ingram Technologies. Over his 15+ year career, he has built and led ventures across video games, fintech, and AI, with multiple successful exits. Jerome focuses on deep tech, dual-use startups, and European tech sovereignty.",
		},
		{
			name: "Andriy Kolodyuk",
			title: "Venture Capital Pioneer & Defence Tech Investor",
			image: "/images/andriy-kolodyuk.jpg",
			experience: "25+ years",
			companies: 10,
			exits: 2,
			linkedin: "https://www.linkedin.com/in/andkol/",
			bio: "Andriy Kolodyuk is the founder and managing partner of AVentures Capital and chairman of the Ukrainian Venture Capital and Private Equity Association (UVCA). With over 25 years of experience, he has built 10+ companies in IT, telecom, and media, including some reaching $1B in revenues. His fund has invested $2.8B in the Ukrainian ecosystem, with notable exits including Augmented Pixels (acquired by Qualcomm). A Young Global Leader at the World Economic Forum, Andriy specializes in dual-use technologies, defence tech, and Eastern European innovation ecosystems.",
		},
		{
			name: "Alessandra Guion",
			title: "FinTech Expert & Board Member",
			image: "/images/mentors/alessandra-guion.jpg",
			experience: "20+ years",
			linkedin: "https://www.linkedin.com/in/alessandraguion/",
			bio: "Alessandra Guion is the founder of Fintech Belgium and serves as a board member for Isabel Group & EDFA. With over 20 years in financial services, she is recognized as a leading FinTech expert in Europe. Alessandra helps startups navigate complex regulatory landscapes, build strategic partnerships within the financial ecosystem, and develop compliant fintech solutions. Her extensive network in European financial services makes her invaluable for fintech companies looking to scale.",
		},
		{
			name: "Frank Hoogendijk",
			title: "Legal Advisor & Startup Specialist",
			image: "/images/mentors/frank-hoogendijk.jpg",
			experience: "12+ years",
			companies: 1,
			linkedin: "https://www.linkedin.com/in/frankhoogendijk/",
			bio: "Frank Hoogendijk is the founder of Found Advisory, specializing in startup legal strategy and advisory services. With 12+ years of experience, he helps early-stage companies navigate complex legal frameworks, protect intellectual property, and structure their organizations for growth. Frank's practical approach to legal strategy helps startups avoid common pitfalls while scaling efficiently, particularly in areas of corporate structure, compliance, and contract negotiation.",
		},
		{
			name: "Ron Eddings",
			title: "Cybersecurity Expert",
			image: "/images/mentors/ron-eddings.jpg",
			experience: "18+ years",
			companies: 3,
			linkedin: "https://www.linkedin.com/in/ronaldeddings/",
			bio: "Ron Eddings is the founder of Hacker Valley Media and a recognized cybersecurity expert with 18+ years in the industry. He combines deep technical knowledge with media expertise to help security startups build thought leadership and market presence. Ron specializes in helping cybersecurity and defense tech companies develop go-to-market strategies, establish technical credibility, and navigate the competitive security market landscape.",
		},
		{
			name: "Jean-Raymond Naveau",
			title: "Product Manager & Silicon Valley Veteran",
			image: "/images/mentors/jean-raymond-naveau.jpg",
			experience: "30+ years",
			companies: 6,
			linkedin: "https://www.linkedin.com/in/jeanraymondnaveau/",
			bio: "Jean-Raymond Naveau is a strategist, advisor, and mentor to startups, scaleups, and corporates tackling the product-market fit challenge. With 30+ years in product management—17 of them in Silicon Valley—he’s the founder of Innovation Attitude and co-founder of the Global IPR Exchange. Jean-Raymond helps organizations design adaptable innovation systems, de-risk growth strategies, and co-create value within open innovation ecosystems.",
		},
		{
			name: "Denis Pokataev",
			title: "Tech Strategy Advisor",
			image: "/images/mentors/denis-pokataev.jpg",
			experience: "20+ years",
			companies: 2,
			linkedin: "https://www.linkedin.com/in/denispokataev/",
			bio: "Denis Pokataev is a tech advisor and mentor with 25+ years of experience across startups and FAANG companies. Ex-Stripe, Meta & Amazon, he specializes in tech strategy, go-to-market roadmaps, and scaling both products and engineering teams. His focus is on building platforms and growing future engineering leaders.",
		},
		{
			name: "Nicolas Streel",
			title: "Marketing & Growth Specialist",
			image: "/images/mentors/nicolas-streel.jpg",
			experience: "10+ years",
			linkedin: "https://linkedin.com/in/nicolas-streel",
			bio: "Nicolas Streel is a Belgian entrepreneur and CMO, co-founder of Line-Out and The Maul—two ventures helping startups and SMEs prototype and launch MVPs fast. A former director at BEyond by Pulse Foundation, Nicolas is a hands-on operator known for his love of execution, strategic thinking, and mental models. ",
		},
		{
			name: "Filip Maertens",
			title: "Venture Builder & AI Expert",
			image: "/images/mentors/filip-maertens.jpg",
			experience: "20+ years",
			companies: 8,
			linkedin: "https://www.linkedin.com/in/fmaertens/",
			bio: "Filip Maertens is a Belgian tech founder and keynote speaker with a background in cybersecurity and artificial intelligence. He founded Securax (acquired), Argus Labs, and co-founded Faktion, which spun off multiple AI ventures including Chatlayer and Metamaze (both acquired). A TEDx and Cannes Lions speaker, Filip is recognized for helping catalyze the Antwerp AI ecosystem and creating over 300 AI jobs between 2011 and 2021.",
		},
	];

	const categories = [
		{
			title: "Serial Entrepreneurs",
			mentors: mentors.filter((m) =>
				["Jerome Leclanche", "Andriy Kolodyuk", "Jean-Raymond Naveau", "Filip Maertens"].includes(
					m.name,
				),
			),
		},
		{
			title: "Industry Experts",
			mentors: mentors.filter((m) =>
				[
					"Alessandra Guion",
					"Frank Hoogendijk",
					"Ron Eddings",
					"Denis Pokataev",
					"Nicolas Streel",
				].includes(m.name),
			),
		},
	];

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
							Our mentors are successful entrepreneurs, investors, and
							industry experts who provide personalized guidance to help
							startups navigate challenges and accelerate growth.
						</p>
					</div>
				</div>
			</div>
			<div className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
				{categories.map((category, categoryIndex) => (
					<div key={categoryIndex} className="mb-12 sm:mb-20">
						<h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-8 sm:mb-12">
							{category.title}
						</h2>

						<div className="space-y-6 sm:space-y-8">
							{category.mentors.map((mentor) => (
								<div
									key={mentor.name}
									className="group bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
								>
									<div className="block sm:hidden">
										<div className="flex items-start gap-4 mb-4">
											<div className="flex-shrink-0">
												<div className="relative">
													<div className="w-16 h-16 relative rounded-xl overflow-hidden bg-gray-100 ring-2 ring-gray-50 group-hover:ring-blue-50 transition-all duration-300">
														<Image
															src={
																mentor.image ||
																"/placeholder.svg?height=64&width=64&query=professional headshot"
															}
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
												<p className="text-sm text-gray-600 mb-2">
													{mentor.title}
												</p>
											</div>
											{mentor.linkedin && (
												<a
													href={mentor.linkedin}
													target="_blank"
													rel="noopener noreferrer"
													className="flex-shrink-0 p-2 bg-gray-50 hover:bg-blue-50 rounded-lg text-gray-400 hover:text-blue-600 transition-all duration-300"
													aria-label={`${mentor.name}'s LinkedIn profile`}
												>
													<svg
														className="h-4 w-4"
														fill="currentColor"
														viewBox="0 0 24 24"
													>
														<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
													</svg>
												</a>
											)}
										</div>

										<div className="flex flex-wrap gap-2 mb-4">
											<div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 rounded-full">
												<div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
												<span className="text-xs font-medium text-gray-700">
													{mentor.experience}
												</span>
												<span className="text-xs text-gray-500">
													exp
												</span>
											</div>
											{mentor.companies ? (
												<div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 rounded-full">
													<div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
													<span className="text-xs font-medium text-gray-700">
														{mentor.companies}
													</span>
													<span className="text-xs text-gray-500">
														{mentor.companies === 1
															? "co"
															: "cos"}
													</span>
												</div>
											) : null}
										</div>

										<p className="text-sm text-gray-700 leading-relaxed">
											{mentor.bio}
										</p>
									</div>
									<div className="hidden sm:block">
										<div className="flex gap-6 md:gap-8">
											<div className="flex-shrink-0">
												<div className="relative">
													<div className="w-20 h-20 md:w-24 md:h-24 relative rounded-2xl overflow-hidden bg-gray-100 ring-4 ring-gray-50 group-hover:ring-blue-50 transition-all duration-300">
														<Image
															src={
																mentor.image ||
																"/placeholder.svg?height=96&width=96&query=professional headshot"
															}
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
														<p className="text-base md:text-lg text-gray-600 mb-3">
															{mentor.title}
														</p>

														<div className="flex flex-wrap gap-3 md:gap-6 mb-4">
															<div className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full">
																<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
																<span className="text-sm font-medium text-gray-700">
																	{mentor.experience}
																</span>
																<span className="text-sm text-gray-500">
																	experience
																</span>
															</div>
															{mentor.companies ? (
																<div className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full">
																	<div className="w-2 h-2 bg-green-500 rounded-full"></div>
																	<span className="text-sm font-medium text-gray-700">
																		{
																			mentor.companies
																		}
																	</span>
																	<span className="text-sm text-gray-500">
																		{mentor.companies ===
																		1
																			? "company"
																			: "companies"}
																	</span>
																	{mentor.exits ? (
																		<>
																			<span className="text-sm font-medium text-gray-700">
																				{
																					mentor.exits
																				}
																			</span>
																			<span className="text-sm text-gray-500">
																				{mentor.exits ===
																				1
																					? "exit"
																					: "exits"}
																			</span>
																		</>
																	) : null}
																</div>
															) : null}
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
															<svg
																className="h-5 w-5 md:h-6 md:w-6"
																fill="currentColor"
																viewBox="0 0 24 24"
															>
																<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
															</svg>
														</a>
													)}
												</div>

												<p className="text-gray-700 leading-relaxed text-base md:text-lg">
													{mentor.bio}
												</p>
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
	);
}
