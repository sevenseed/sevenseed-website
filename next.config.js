/** @type {import('next').NextConfig} */
const nextConfig = {
	// redirects
	async redirects() {
		return [
			{
				source: "/login",
				destination: "/dashboard",
				permanent: false,
			},
			{
				source: "/signup",
				destination: "/dashboard",
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;
