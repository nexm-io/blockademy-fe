import Button from "@/components/Common/Button";
import Image from "next/image";

const CertSection = () => {
  return (
    <section className="py-[60px]">
      <div
        className="py-[75px] bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(/images/home/cert-bg.png)`,
        }}
      >
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-[114px]">
          <Image
            src="/images/home/cert-example.png"
            alt="cert example"
            width={531}
            height={349}
            className="rounded-lg"
          />
          <div className="grid gap-6 content-center">
            <h3 className="text-[40px] leading-[48px] font-bold text-[#fff]">
              How to receive{" "}
              <span className="text-[#4786FF]">Certificate?</span>
            </h3>
            <div className="grid gap-4 text-[#fff] text-xl font-normal">
              <p>1. Complete Courses</p>
              <p>2. Receive NFT Certificate</p>
              <p>3. View On-chain Proof</p>
            </div>
            <div>
              <Button className="!bg-[#C6EAFF] group !hover:bg-[#C6EAFF]/50">
                <span className="text-[#0B76A4] group-hover:text-[#0B76A4]/80">
                  Learn for Free
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertSection;
