import Image from "next/image";

const MasterSection = () => {
  return (
    <section className="container py-[60px]">
      <h3 className="text-black-400 text-[40px] leading-[48px] font-bold text-center">
        Anyone can master blockchain with Blockademy
      </h3>
      <p className="text-xl text-[#616161] font-normal mt-6 max-w-[806px] text-center mx-auto">
        Explore everything about blockchain through simple, enjoyable lessons
        designed for both beginners and enthusiasts.
      </p>
      <div className="mt-20 grid gap-[100px] lg:gap-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[189px]">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/images/home/master-01.png"
              alt="Easy, Simple, and Engaging"
              width={463}
              height={309}
            />
          </div>

          <div className="grid gap-2 content-center">
            <h6 className="text-[28px] leading-[36px] text-blue-100 font-bold">
              Easy, Simple, and Engaging
            </h6>
            <p className="text-[#616161] text-xl font-normal">
              Tailored courses to help you discover blockchain in an easy,
              simple, and engaging way. We break down complex topics, ensuring
              you grasp each concept effortlessly.
            </p>
          </div>
        </div>
        <div className="grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[189px] hidden lg:grid">
          <div className="grid gap-2 content-center">
            <h6 className="text-[28px] leading-[36px] text-blue-100 font-bold">
              Real-Life Application
            </h6>
            <p className="text-[#616161] text-xl font-normal">
              Quizzes reviewed by experts & AI for the best quality and
              neutrality. Real-world examples and assignments provide learners
              with valuable hands-on knowledge.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/home/master-02.png"
              alt="Real-Life Application"
              width={481}
              height={320}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[189px] lg:hidden">
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/home/master-02.png"
              alt="Real-Life Application"
              width={481}
              height={320}
            />
          </div>
          <div className="grid gap-2 content-center">
            <h6 className="text-[28px] leading-[36px] text-blue-100 font-bold">
              Real-Life Application
            </h6>
            <p className="text-[#616161] text-xl font-normal">
              Quizzes reviewed by experts & AI for the best quality and
              neutrality. Real-world examples and assignments provide learners
              with valuable hands-on knowledge.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[189px]">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/images/home/master-03.png"
              alt="Gamification Learning Experience"
              width={456}
              height={304}
            />
          </div>

          <div className="grid gap-2 content-center">
            <h6 className="text-[28px] leading-[36px] text-blue-100 font-bold">
              Gamification Learning Experience
            </h6>
            <p className="text-[#616161] text-xl font-normal">
              {`Enjoy your learning with our gamified approach. Achievements
              aren't just points; they are `}
              <span className="text-blue-100 font-bold">
                NFT Certificates -
              </span>{" "}
              transparently recognizing and tracing your expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterSection;
