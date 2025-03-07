/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // ✅ Tailwind가 적용될 파일 경로
  theme: {
    extend: {}, // 원하는 스타일 확장 가능
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
