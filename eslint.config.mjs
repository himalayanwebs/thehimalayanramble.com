import nextConfig from "eslint-config-next";

export default [
  { ignores: ["legacy/**", "out/**", ".next/**"] },
  ...nextConfig,
];
