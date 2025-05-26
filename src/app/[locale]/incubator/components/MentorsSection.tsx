import { UserIcon, BriefcaseIcon, AcademicCapIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function MentorsSection() {
	const mentors = [
		{
			id: 1,
			name: "Jerome Leclanche",
			title: "Founder of Ingram Technologies",
			image: "/images/members/jerome.webp",
		},
		{
			id: 2,
			name: "Alessandra Guion",
			title: "Board Member of Fintech Belgium",
			image: "/images/mentors/alessandra-guion.webp",
		},
		{
			id: 3,
			name: "Frank Hoogendijk",
			title: "Founder of Found Advisory",
			image: "/images/mentors/FrankHoogendijk.jpg",
		},
		{
			id: 4,
			name: "Ron Eddings",
			title: "Founder of Hacker Valley Media",
			image: "/images/mentors/RonEddings.webp",
		},
	];

	return (
		<div className="py-20 md:py-28 relative overflow-hidden w-full max-w-7xl mx-auto">
			{/* Subtle dot pattern background - matching other sections */}
			<div className="absolute inset-0 overflow-hidden opacity-10">
				<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<pattern
							id="mentor-dots"
							width="20"
							height="20"
							patternUnits="userSpaceOnUse"
						>
							<circle cx="2" cy="2" r="1" fill="#2563eb" />
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#mentor-dots)" />
				</svg>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="text-center mb-16">
					<div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
						Expert Guidance
					</div>

					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						Learn from{" "}
						<span className="text-blue-600">Industry Leaders</span>
					</h2>

					<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
						Our mentors assist startups and coach them in their field of
						expertise as needed, providing targeted guidance when you need
						it most.
					</p>
				</div>

				{/* Mentor Categories */}
				<div className="grid md:grid-cols-3 gap-8 mb-16">
					<div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-100 transition-all duration-300 text-center group hover:shadow-md">
						<div className="bg-blue-50 p-4 rounded-xl inline-flex mb-4 group-hover:bg-blue-100 transition-colors duration-300">
							<BriefcaseIcon className="h-8 w-8 text-blue-600" />
						</div>
						<h3 className="text-gray-800 font-semibold text-lg mb-3">
							Successful Entrepreneurs
						</h3>
						<p className="text-gray-600 text-sm">
							Experienced founders who provide coaching on building and
							scaling companies, sharing practical insights from their
							European startup journey.
						</p>
					</div>

					<div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-100 transition-all duration-300 text-center group hover:shadow-md">
						<div className="bg-blue-50 p-4 rounded-xl inline-flex mb-4 group-hover:bg-blue-100 transition-colors duration-300">
							<UserIcon className="h-8 w-8 text-blue-600" />
						</div>
						<h3 className="text-gray-800 font-semibold text-lg mb-3">
							Venture Capitalists
						</h3>
						<p className="text-gray-600 text-sm">
							Investment professionals who assist with fundraising
							strategy and coach you through the funding process in the
							European market.
						</p>
					</div>

					<div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-100 transition-all duration-300 text-center group hover:shadow-md">
						<div className="bg-blue-50 p-4 rounded-xl inline-flex mb-4 group-hover:bg-blue-100 transition-colors duration-300">
							<AcademicCapIcon className="h-8 w-8 text-blue-600" />
						</div>
						<h3 className="text-gray-800 font-semibold text-lg mb-3">
							Industry Experts
						</h3>
						<p className="text-gray-600 text-sm">
							Technical specialists in AI, cybersecurity, and defense who
							provide expert coaching and assistance in their specific
							domains.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
					{mentors.map((mentor) => (
						<div
							key={mentor.id}
							className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-100 transition-all duration-300 text-center group hover:shadow-md"
						>
							<div className="relative w-24 h-24 mx-auto mb-4">
								<div className="absolute -inset-1 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
								<div className="relative w-full h-full rounded-full overflow-hidden bg-gray-100">
									<Image
										src={mentor.image || "/placeholder.svg"}
										alt={mentor.name}
										fill
										className="object-cover"
									/>
								</div>
							</div>

							<h4 className="text-lg font-semibold text-gray-900 mb-2">
								{mentor.name}
							</h4>
							<p className="text-sm text-gray-600 mb-2">{mentor.title}</p>
						</div>
					))}
				</div>

				<div className="text-center">
					<div className="bg-white bg-opacity-80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
						<h3 className="text-xl font-bold mb-4 text-gray-900">
							1-on-1 Mentorship Sessions
						</h3>
						<p className="text-gray-600 mb-6">
							Mentors are matched to startups based on specific needs and
							expertise areas. They provide coaching and assistance as
							required, helping you overcome challenges and accelerate
							growth in their field of expertise.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm">
							<span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
								On-Demand Assistance
							</span>
							<span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
								Expert Coaching
							</span>
							<span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
								Field-Specific
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
