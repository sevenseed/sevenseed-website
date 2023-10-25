/** @type {import('next').NextConfig} */
const nextConfig = {
	// redirects
	async redirects() {
		return [
			{
				source: "/login",
				destination: "/waitlist",
				permanent: false,
			},
			{
				source: "/signup",
				destination: "/waitlist",
				permanent: false,
			},
			{
				source: "/contact",
				destination: "/waitlist",
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;
