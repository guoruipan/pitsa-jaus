/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/auth",
        destination: "/auth/login",
        permanent: true,
      },
      {
        source: "/dashboard",
        destination: "/dashboard/my-account",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
