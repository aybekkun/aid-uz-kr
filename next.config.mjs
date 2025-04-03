/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "api.uznak.uz",
				port: "",
				pathname: "/media/uploads/**",
				search:""
			}
		]
	}
};

export default nextConfig;
