"use client";
import Button from "@/components/Common/Button";
import RewardItem from "@/components/Reward/RewardItem";
import { getRewardDetail } from "@/redux/features/reward/action";
import { selectReward } from "@/redux/features/reward/reducer";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useParams, useRouter } from "next/navigation";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import cn from "@/services/cn";
import jsPDF from "jspdf";
import { format } from "date-fns";

const RewardView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const params = useParams();
  const courseId = params.id;
  const rewardRx = useAppSelector(selectReward);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [viewCertificate, setViewCertificate] = useState(false);
  const token = useSelector((state: RootState) => state.auth.token);
  const authRx = useSelector((state: RootState) => state.auth);

  const wrapText = (
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number
  ) => {
    const words = text.split(" ");
    let line = "";

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + " ";
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;

      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, x, y);
        line = words[n] + " ";
        y += lineHeight;
      } else {
        line = testLine;
      }
    }

    ctx.fillText(line, x, y);
  };

  const loadImage = async (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.src = src;
    });
  };

  const loadFont = async (fontUrl: string): Promise<boolean> => {
    const font = new FontFace("Soleil", `url(${fontUrl})`);

    try {
      await font.load();
      document.fonts.add(font);
      return (
        document.fonts.check("16px Soleil") &&
        document.fonts.check("60px Soleil") &&
        document.fonts.check("40px Soleil")
      );
    } catch (error) {
      console.error("Font loading failed", error);
      return false;
    }
  };

  const genCert = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = await loadImage("/images/reward/certificate.svg");
    ctx.drawImage(img, 0, 0);

    const fontLoaded = await loadFont("/fonts/SoleilRegular.otf");

    if (fontLoaded) {
      ctx.fillStyle = "#000";
      ctx.font = "16px Soleil";
      ctx.fillText(
        format(new Date(rewardRx.rewardDetails.claim_at), "MMM dd, yyyy"),
        215,
        390
      );

      const name =
        rewardRx.rewardDetails.last_name && rewardRx.rewardDetails.first_name
          ? `${rewardRx.rewardDetails.last_name} ${rewardRx.rewardDetails.first_name}`
          : authRx.user?.email || "";
      ctx.font = "60px Soleil";
      wrapText(ctx, name, 215, 465, 649, 50);

      ctx.font = "40px Soleil";
      wrapText(ctx, rewardRx.rewardDetails.title, 215, 580, 649, 50);
    }
  };

  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });

    const imgData = canvas.toDataURL("image/png");

    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      pdf.internal.pageSize.getWidth(),
      pdf.internal.pageSize.getHeight()
    );

    pdf.save(`certificate.pdf`);
  };

  useEffect(() => {
    dispatch(getRewardDetail(courseId as string));
  }, []);

  useEffect(() => {
    genCert();
  }, [rewardRx.rewardDetails]);

  if (!isAuthenticated || !token) {
    router.back();
    return;
  }

  return (
    <div className="container mt-24 sm:mt-32 min-h-[55vh]">
      <div
        className={cn({
          hidden: viewCertificate,
          block: !viewCertificate,
        })}
      >
        <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
          <h1 className="text-black-100 font-bold md:text-4xl text-3xl">
            Reward
          </h1>
          <Button
            onClick={() => router.back()}
            className="!px-6 !py-2 w-full sm:w-auto"
          >
            Back To Courses
          </Button>
        </div>
        <div className="flex justify-center items-center lg:mt-10">
          <div className="w-full lg:w-1/3">
            <RewardItem
              rewardDetailLoading={rewardRx.rewardDetailLoading}
              data={rewardRx.rewardDetails}
              handleViewCertificate={() => setViewCertificate(true)}
            />
          </div>
        </div>
      </div>
      <div
        className={cn({
          hidden: !viewCertificate,
          block: viewCertificate,
        })}
      >
        <div className="flex justify-end mb-6 gap-2">
          <Button className="!py-2 !px-5" kind="secondary" onClick={download}>
            Export PDF
          </Button>
          <Button className="!py-2 !bg-[#E6C6FF] hover:opacity-75">
            <span className="text-[#7C0BA4] font-bold">Issue NFT</span>
          </Button>
        </div>
        <div className="flex justify-center">
          <canvas
            ref={canvasRef}
            className="max-w-[1000px]"
            width="1440"
            height="946"
          />
        </div>
      </div>
    </div>
  );
};

export default RewardView;
