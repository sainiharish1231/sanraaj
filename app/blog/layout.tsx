import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { deta } from "./deta";
const inter = Inter({ subsets: ["latin"] });
const items = Object.values(deta);
export const metadata: Metadata = {
    title: `sri blog
`,
    description:
        "San Raj is a Software Development company providing technical solutions to business/individuals to transform their full of emotion ventures into a digital reality.",
    keywords:
        "San, Raj, San Raj, Sanraaj, San Raj Software, San Raj Software solutions, Software Solution, Software Development, Technical Solutions, Business Solutions, Digital Transformation, IT Services, Web Development, Mobile App Development, Cloud Solutions, AI Solutions, San Raj Blog",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main>{children}</main>
            </body>
        </html>
    );
}
