"use client";

import Button from "@/components/button";
import Navbar from "@/components/nav";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const AchieveMENTS = ({ n, label }: { n: string; label: string }) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium text-[44px] leading-[56px]">{n}</p>
      <p>{label}</p>
    </div>
  );
};

const ProjectContent = () => {
  return (
    <div className="hidden md:block bg-[hsla(210,100%,99%,1)] p-3">
      <div className="flex justify-between items-center p-12">
        <div>
          <h1 className="font-medium text-[32px] leading-[40px] tracking-[-0.96px] align-middle">
            Raze
          </h1>
          <p className="caption_label w-[536.54px]">
            Our design team helps clients achieve their marketing and business
            goals through user-friendly, engaging target branding that appeals
            to a website.
          </p>
        </div>
        <div className="p-4 rounded-full border border-[hsla(220,7%,92%,1)]">
          <Image
            src="/assets/vector.svg"
            height={12.24}
            width={12.24}
            alt="vector"
          />
        </div>
      </div>
      <div className="bg-[hsla(240,7%,97%,1)] px-12 py-8">
        <Image src="/assets/raze.png" width={624} height={391.48} alt="raze" />
      </div>
    </div>
  );
};

const ProjectInfo = () => {
  return (
    <div className=" md:p-3 bg-[hsla(210,100%,99%,1)] h-[635.89px]">
      <div className="md:w-[157.84px] h-[76.79px] flex items-center justify-center bg-[hsla(210,100%,99%,1)] rounded-[50px] p-2.5 my-12 mx-auto">
        <Image
          width={64.93}
          height={25.84}
          src="/assets/global.svg"
          alt="global"
        />
      </div>

      <div
        className="bg-[hsla(240,7%,97%,1)] flex flex-col md:p-3 items-center gap-1.25 h-full"
        style={{ display: "inline" }}
      >
        <div className="justify-center">
          <h1 className="font-medium text-[24px] leading-[32px] tracking-[-0.72px] text-center align-middle max-w-[264.47px]">
            Project was about precision and information. That’s all! Graphic
          </h1>
          <div className="flex">
            <div className="tag">Design</div>
            <div className="tag">Branding</div>
            <div className="tag">UI/UX </div>
          </div>
        </div>
        <div className="flex-1"></div>
        <div className="bg-[hsla(210,100%,99%,1)]">
          <p className="caption_label">
            The service was excellent. Template example is the next killer app.
          </p>
          <div className="flex gap-4">
            <Image
              src="/assets/profile.png"
              alt="profile"
              width={40}
              height={40}
              objectFit="cover"
            />
            <div>
              <p>Jeremy Douglas</p>
              <p>UI & UX designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogContent = ({
  imgUrl,
  header,
  description,
}: {
  imgUrl: string;
  header: string;
  description: string;
}) => {
  return (
    <div
      className="bg-cover md:w-[32em] h-[20em] p-3 rounded-[6px_12px] flex flex-col-reverse"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className="bg-[hsla(210,100%,99%,1)] p-[24px_20px] rounded-lg">
        <p className="font-medium text-[18px] leading-[28px] tracking-[-0.54px] align-middle">
          {header}
        </p>
        <p className="w-[18em] md:w-[27.89em] font-normal text-[0.875em] leading-[1.5em] tracking-[-0.0175em] align-middle">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function Home() {
  const text = "Hey, I'm Tom. A Product Designer with 9 years of";
  return (
    <main>
      <Navbar />
      <section className="md:px-[150px] py-[72px] px-[16px] flex flex-col gap-[15px] md:gap-[36px]">
        <h1 className="max-w-[691px] font-medium text-h1 leading-[83.2px] tracking-[0.92px] align-middle text-[hsla(222,47%,11%,1)]">
          {text.split(" ").map((ch, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
              }}
            >
              {ch}{" "}
            </motion.span>
          ))}
        </h1>
        <motion.span
        transition={{
          delay: 1,
          duration: 0.5
        }}        
        initial={{scale: 0, opacity: 0}}
        animate={{
          scale:1,
          opacity:1
        }}
          className="
        bg-[hsla(207,66%,92%,1)] rounded-[16px] w-[200px] text-center py-2"
        >
          Experience
        </motion.span>
        <div className="flex md:gap-[71.57px]">
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 1.8,
              duration: 1.5,
            }}
            className="font-normal text-[24px] leading-[43.2px] tracking-[-0.48px] align-middle text-[hsla(206,29%,23%,1)] w-[908.43px]"
          >
            The Alpinfluence is a powerful and professional tool for showcasing
            your work online. With a clean and modern design, this template is
            perfect for creative professionals.
          </motion.p>
          <motion.div
          transition={{
            delay:2
          }}
          initial={{
            left:-100
          }}
            animate={
              {
                left:1
                //start time
              }
            }
            className="hidden md:block px-[31px] py-[5.5px] bg-[hsla(210,100%,99%,1)] border border-[hsla(220,7%,92%,1)] rounded-full"
          >
            <Image
              src="/assets/global.svg"
              alt="global svg"
              width={75}
              height={56}
            />
          </motion.div>
        </div>
      </section>
      <section
        id="achievements"
        className="flex flex-col md:flex-row justify-center gap-[106px] px-[16px] md:px-[150px] pt-[26px] md:pt-[144px] h-screen"
      >
        <div className="max-w-[400px] flex flex-col justify-center">
          <h3 className="font-medium text-h2 leading-[56px] tracking-[-1.2px] align-middle">
            Achievements in my professional life.
          </h3>
          <p className="caption_label">
            The Oska Portfolio template is fully responsive, meaning it looks
            great on any device, from desktop computers to smartphones.
          </p>

          <Link
            href="/contact"
            className="list-none bg-[hsla(207,66%,92%,1)] p-2.5 rounded-full w-[175px] h-[55px] text-[hsla(206,31%,42%,1)] text-lg leading-[160%] font-medium flex justify-center items-center"
          >
            Contact me
          </Link>
          {/* <Button label="Contact me" /> */}
        </div>
        <div className="hidden md:grid grid-cols-[1fr_2fr] gap-[147px_92.35px]">
          <AchieveMENTS n="70%" label="Job Achievements" />
          <AchieveMENTS n="+24" label="Job Achievements" />
          <AchieveMENTS n="1.6K" label="Job Achievements" />
          <AchieveMENTS n="$8.4M" label="Job Achievements" />
        </div>
      </section>
      <section
        id="portfolio"
        className="p-[26px] md:p-[60px] mx-[16px] md:mx-[150px] my-[24px]"
      >
        <h1 className="font-medium text-h3 leading-[48px] md:w-[1020px] md:h-[144px] mb-[65px]">
          I like Portfolio Page more and more each day because it makes my life
          a lot easier. It fits our needs perfectly. Keep up the excellent work.
        </h1>
        <div className="flex justify-between items-center">
          <div className="flex">
            <Image
              src="/assets/profile.png"
              alt="profile"
              width={84}
              height={72}
            />
            <div className="flex flex-col">
              <p className="font-medium text-[24px] leading-[32px] tracking-[-0.72px]">
                John Smith{" "}
              </p>
              <p className="font-normal text-[14px] leading-[24px]">
                UI & UX Designer
              </p>
            </div>
          </div>
          <div className="flex">
            <div>prv </div>
            <div>next</div>
          </div>
        </div>
      </section>
      <section className="flex px-[16px] md:px-[150px]">
        <ProjectContent />
        <ProjectInfo />
      </section>
      {/* <section className="flex mx-[150px] py-[50px]">
        <ProjectInfo />
        <ProjectContent />
      </section>  */}
      {/* <section className="flex mx-[150px] my-0">
        <ProjectContent />
        <ProjectInfo />
      </section> */}
      <section className="hidden md:flex justify-center">
        <Button label="Load More" />
      </section>
      <section
        id="articles"
        className="flex flex-col mx-[16px] md:mx-[150px] md:p-12 min-h-screen"
      >
        <div className="gap-[7.86px] mb-10">
          <h1 className="font-medium text-[32px] leading-[40px] tracking-[-0.96px] align-middle">
            Latest Articles
          </h1>
          <p className="font-normal text-[16px] leading-[32px] tracking-[-0.32px] align-middle">
            A template from Flowbase
          </p>
        </div>
        <div className="flex gap-6 items-center bg-[hsla(210,100%,99%,1)] overflow-x-auto md:overflow-x-hidden">
          <BlogContent
            imgUrl="/assets/blog/first.png"
            header="The role of typography in website design"
            description="Website design is a crucial aspect of building an online presence. A
well-designed website can make all the difference in the world when it
comes to attracting and retaining customers."
          />
          <BlogContent
            imgUrl="/assets/blog/second.png"
            header="Creating a visual hierarchy for better website readability"
            description="Website design is a crucial aspect of building an online presence. A
well-designed website can make all the difference in the world when it
comes to attracting and retaining customers."
          />
        </div>
      </section>
      <section className="mx-[150px] justify-items-center py-12">
        <h1 className="font-medium text-h1 leading-[83.2px] tracking-[-1.92px] text-center align-middle">
          Want to start
        </h1>
        <p className="font-medium text-h1 leading-[83.2px] tracking-[-1.92px] text-center align-middle">
          a project?
        </p>
        <div className="flex justify-between items-center bg-[hsla(207,66%,92%,1)] w-[205.95px] p-2.5 rounded-[50px] mt-5">
          <p className="ml-2.5 font-medium text-[16px] leading-[24px] text-center align-middle">
            Let&apos;s Talk!
          </p>
          <div className="w-14 h-14 rounded-full bg-[hsla(210,100%,99%,1)]"></div>
        </div>
      </section>
      <footer className="mx-[16px] md:mx-[150px] justify-items-center mt-[27px] md:mt-[119px] mb-12">
        <div className="flex flex-col-reverse md:flex-row justify-between w-full p-12 gap-[45px] md:gap-[36px]">
          <div className="flex flex-col md:flex-row gap-[63px]">
            <div>
              <p>Work with us</p>
              <p>info@alpinfluence.com</p>
            </div>
            <div>
              <p>Follow Us</p>
              <div className="flex">
                <p>twitter</p>
                <p>Dribble</p>
                <p>linkedin</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Image src="/assets/logo.svg" width={48} height={48} alt="logo" />
            <div>
              <p className="font-normal text-[16px] leading-[32px] tracking-[-0.32px] align-middle text-[hsla(206,31%,42%,1)]">
                Portfolio
              </p>
              <p className="font-normal text-[16px] leading-[32px] tracking-[-0.32px] align-middle text-[hsla(206,31%,42%,1)]">
                Dev Test Alpinfluence
              </p>
            </div>
          </div>
        </div>
        Dev Test Alpinfluence
      </footer>
    </main>
  );
}
