import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Someswararao Tarra | Cloud & DevOps Engineer | Data Science",
  description: "Portfolio of Someswararao Tarra showcasing AWS cloud infrastructure, DevOps, Linux, Python, machine learning, deep learning, and data science projects.",
  keywords: [
    "AWS",
    "Cloud Engineer",
    "DevOps Engineer",
    "Linux",
    "Python",
    "Data Science",
    "Machine Learning",
    "India",
    "Portfolio",
    "Someswararao Tarra",
    "Linux Administration",
    "Terraform",
    "Docker",
    "Kubernetes",
    "Git",
    "CI/CD"
  ],
  authors: [{ name: "Someswararao Tarra" }],
  openGraph: {
    title: "Someswararao Tarra | Cloud & DevOps Engineer | Data Science",
    description: "Portfolio of Someswararao Tarra showcasing AWS cloud infrastructure, DevOps, Linux, Python, machine learning, deep learning, and data science projects.",
    type: "website",
    locale: "en_US",
    siteName: "Someswararao Tarra Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${outfit.variable} h-full scroll-smooth antialiased`}
    >
      <body
        className="min-h-full bg-[#FCFBF9] text-stone-800 selection:bg-red-100 selection:text-red-800"
        style={{ fontFamily: "var(--font-inter), var(--font-geist-sans), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
