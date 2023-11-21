import Image from "next/image";

const DATA = [
  {
    image: "/images/home/nft-cert-01.png",
    label: "Blockchain-Verified Recognition",
    description:
      "Your achievements are securely recorded on the blockchain, providing indisputable proof of completion.",
  },
  {
    image: "/images/home/nft-cert-02.png",
    label: "Real-Life Application",
    description:
      "Quizzes reviewed by experts & AI for the best quality and neutrality. Real-world examples and assignments provide learners with valuable hands-on knowledge.",
  },
  {
    image: "/images/home/nft-cert-03.png",
    label: "Gamification Learning Experience",
    description:
      "Enjoy your learning with our gamified approach. Achievements aren't just points; they are NFT Certificates - transparently recognizing and tracing your expertise.",
  },
];

const NFTCertSection = () => {
  return (
    <section className="container py-[60px]">
      <h3 className="text-[28px] leading-[40px] text-blue-100 font-bold">
        Blockademy NFT Certificate - <br /> Your Achievements is a Future-Proof!
      </h3>
      <p className="mt-4 text-xl text-[#616161]">
        Blockademy turns your educational milestones into valuable, verifiable
        assets on the blockchain.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[45px]">
        {DATA.map((z, i) => (
          <div
            key={i}
            className="bg-[#F5F8FF] border border-[#DDE8FF] rounded-2xl pt-[26px] pb-[18px] px-[24px]"
          >
            <Image src={z.image} alt={z.label} width={100} height={100} className="mx-auto" />
            <h6 className="text-xl text-blue-100 font-normal mt-6 mb-2 ">
              {z.label}
            </h6>
            <p className="text-base font-light text-[#616161]">
              {z.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NFTCertSection;
