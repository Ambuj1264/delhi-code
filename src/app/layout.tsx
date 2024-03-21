import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "@/components/footer/Footer";
import SessionProvider from "@/Hoc/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Demo blog website",
  description:
    "Welcome to Demo blog website – Your Premier Destination for Social Media Management Solutions Are you ready to elevate your online presence? At Demo blog website, we specialize in cutting-edge social media management solutions tailored to suit your unique needs. With a team of experienced professionals dedicated to staying ahead of the curve, we're here to help you navigate the ever-evolving landscape of social media.Why Choose Demo blog website? Strategic Planning: We don't believe in a one-size-fits-all approach. Our team works closely with you to develop a customized strategy that aligns with your goals and objectives.  Engaging Content Creation: Content is king in the digital world. From captivating visuals to compelling copy, we craft content that resonates with your audience and drives meaningful engagement.  Community Management: Building and nurturing a thriving online community takes time and dedication. Let us handle the day-to-day interactions, ensuring that your followers feel valued and heard. Data-Driven Insights: We believe in the power of data to inform decision-making. Through comprehensive analytics and reporting, we provide actionable insights to help you continuously optimize your social media strategy. Continuous Support: Our commitment to your success doesn't end once the campaign is live. We're here to provide ongoing support and guidance, helping you adapt to changes in the social media landscape. Whether you're a small business looking to increase brand awareness or a seasoned enterprise seeking to drive conversions, Demo blog website has the expertise and resources to help you achieve your objectives.Ready to take your social media presence to the next level? Get in touch with us today to schedule a consultation.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <body className={inter.className}  suppressHydrationWarning={false}>
        <SessionProvider>
          
          <Providers>
            {children}
            <Footer />
          </Providers>
        </SessionProvider>
       
      </body>
    </html>
  );
}
