import { CourseDetail } from "@/redux/features/courses/type";
import api from "@/services/axios";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import InfoPopup from "../Popup/InfoPopup";
import cn from "@/services/cn";
import Button from "../Common/Button";
import { format, parseISO } from "date-fns";
import { PLACEHOLDER_BASE64 } from "@/utils/getLocalBase64";
import { Share } from "../Icon";
import { useAppDispatch } from "@/redux/hook";
import { getDetailCourseWithoutLoading } from "@/redux/features/courses/action";
import { useRouter } from "next/navigation";
import Facebook from "@/public/icons/facebook-fill.svg";
import Twitter from "@/public/icons/twitter.svg";

const RewardDetail = ({ courseDetail }: { courseDetail: CourseDetail }) => {
  const [certAssets, setCertAssets] = useState<any>({
    image: "",
    pdf: "",
    isClaimed: 0,
  });
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [viewCertificate, setViewCertificate] = useState<boolean>(false);
  const [isGetCertLoading, setIsGetCertLoading] = useState<boolean>(true);
  const [isIssueLoading, setIsIssueLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const shareFacebook = () => {
    const href = window.location.origin;
    const tags = encodeURIComponent("#Blockademy");
    const link = `http://www.facebook.com/sharer.php?u=${href}&hashtag=${tags}`;
    window.open(link, "sharer", "toolbar=0,status=0,width=626,height=436");
  };

  const shareTwitter = () => {
    const text = `🎓 ${encodeURIComponent(
      `Excited to receive my Certificate on "${courseDetail.title}" from @blockademy_ai!\n\n Ready for the next challenge at blockademy.ai\n\n`
    )}`;
    const tags = encodeURIComponent("Blockademy,NFTcertificate");
    const link = `https://twitter.com/intent/tweet?text=${text}&hashtags=${tags}`;
    window.open(link, "_blank");
  };

  const getCertificate = useCallback(async () => {
    setIsGetCertLoading(true);
    if (!courseDetail) return;
    try {
      if (!courseDetail?.is_claimed) {
        const { data } = await api.get(
          `/api/v10/claim-reward/${courseDetail.id}`
        );
        setCertAssets({
          image: data.data.certificate_image_url,
          pdf: data.data.certificate_pdf_url,
          isClaimed: 1,
        });
        await dispatch(getDetailCourseWithoutLoading(courseDetail?.id));
      } else {
        setCertAssets({
          image: courseDetail?.certificate_image_url,
          isClaimed: courseDetail?.is_claimed,
          pdf: courseDetail?.certificate_pdf_url,
        });
      }
      setIsGetCertLoading(false);
    } catch {
      setIsGetCertLoading(false);
    }
  }, [courseDetail, dispatch]);

  const issueNFT = async () => {
    setIsIssueLoading(true);
    try {
      await api.post(`/api/v10/issue-nft/${courseDetail.id}`);
      await dispatch(getDetailCourseWithoutLoading(courseDetail.id));
      setIsIssueLoading(false);
    } catch {
      toast.error("Something wrong!");
      setIsIssueLoading(false);
    }
  };

  const viewNFT = () => {
    window.open(
      `https://explorer.solana.com/address/${
        (courseDetail as any)?.issue_nft_address
      }?cluster=devnet`,
      "_blank"
    );
  };

  const downloadCertificate = () => {
    router.push(
      `/accomplishments/certificate/${(courseDetail as any)?.certificate_id}`
    );
  };

  useEffect(() => {
    getCertificate();
  }, [getCertificate]);

  return (
    <>
      <div className="p-5 rounded-lg bg-blue-900 grid grid-cols-1 lg:grid-cols-2 items-center mt-10 gap-10 lg:gap-[60px] justify-items-center">
        <div
          className="relative group cursor-pointer"
          onClick={() => setViewCertificate(true)}
        >
          {isGetCertLoading ? (
            <div className="skeleton bg-gray-400/20 h-[200px] sm:h-[300px] md:h-[381px] w-[580px] max-w-full rounded"></div>
          ) : (
            <Image
              src={certAssets.image}
              onError={() =>
                setCertAssets({
                  ...certAssets,
                  image: "/images/default-certificate.jpg",
                })
              }
              height={381}
              blurDataURL={PLACEHOLDER_BASE64}
              width={580}
              alt="blockademy-certificate"
            />
          )}

          <div
            className="group-hover:visible group-hover:opacity-100 invisible opacity-0 transition-all duration-500 ease-in-out absolute inset-0 flex justify-center items-center bg-black-300/50"
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%) / cover no-repeat",
            }}
          >
            <span className="bg-grey-300 p-[10px] rounded">
              <Image
                src="/icons/expand.svg"
                width={40}
                height={40}
                alt="expand icon"
              />
            </span>
          </div>
        </div>
        <div className="h-fit flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold text-blue-100">
              Congratulations on getting your certificate!
            </p>
            {courseDetail?.complete_assignment_at ? (
              <p className="text-xl text-grey-700">
                You completed this course on{" "}
                {format(
                  parseISO(courseDetail?.complete_assignment_at),
                  "MMM d, yyyy"
                )}
              </p>
            ) : null}

            <p className="text-xl text-grey-700">
              Grade Achieved: {courseDetail?.aissignment_grade || "--"}%
            </p>
          </div>
          <div className="flex items-center flex-wrap gap-4">
            {(courseDetail as any)?.issue_nft_status === "Committed" ? (
              <Button className="min-w-[184px]" onClick={viewNFT}>
                View NFT
              </Button>
            ) : (
              <Button
                className="min-w-[184px]"
                disabled={
                  isGetCertLoading ||
                  isIssueLoading ||
                  (courseDetail as any)?.issue_nft_status === "Processing"
                }
                onClick={issueNFT}
              >
                {isIssueLoading ||
                (courseDetail as any)?.issue_nft_status === "Processing"
                  ? `Processing`
                  : `Issue NFT`}
              </Button>
            )}

            <Button
              disabled={certAssets.isClaimed === 0 || isGetCertLoading}
              className="min-w-[184px] bg-blue-600 group hover:bg-blue-600/50 group !px-3"
              onClick={downloadCertificate}
            >
              <span className="text-blue-700 group-hover:text-blue-700/80transition-all">
                Download Certificate
              </span>
            </Button>
            <button
              disabled={certAssets.isClaimed === 0}
              className={cn({
                "cursor-pointer": certAssets.isClaimed === 1,
                "cursor-not-allowed opacity-50": certAssets.isClaimed === 0,
              })}
              onClick={() => setShowSharePopup(true)}
            >
              <Share />
            </button>
          </div>
        </div>
      </div>
      {showSharePopup && (
        <InfoPopup
          title="Share Certificate"
          desc={
            <div className="mt-4 flex flex-col gap-2">
              <p className="text-grey-700 font-normal">
                Share this achievement to your favorite social media account
              </p>
              <div className="flex gap-6 justify-center">
                <button
                  type="button"
                  className="inline-block rounded-full p-[10px] text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg text-white-100"
                  style={{ backgroundColor: "#1877f2" }}
                  onClick={shareFacebook}
                >
                  <Image
                    src={Facebook}
                    width={24}
                    height={24}
                    alt="Facebook Icon"
                  />
                </button>
                <button
                  type="button"
                  className="inline-block rounded-full p-[10px] text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg text-white-100 bg-black-100"
                  onClick={shareTwitter}
                >
                  <Image
                    src={Twitter}
                    width={24}
                    height={24}
                    alt="Twitter Icon"
                  />
                </button>
              </div>
            </div>
          }
          onClose={() => setShowSharePopup(false)}
          className="!gap-0"
        >
          <></>
          {/* <div className="mt-6 border-t border-t-grey-100 w-full flex flex-col gap-2">
            <p className="mt-4 text-grey-700 text-center">Or copy link</p>
          </div> */}
        </InfoPopup>
      )}
      <div
        className={cn({
          block: viewCertificate,
          hidden: !viewCertificate,
        })}
      >
        <div
          className="fixed top-0 left-0 w-full h-full bg-black-100 opacity-50 z-[998]"
          onClick={() => setViewCertificate(false)}
        ></div>
        <div
          className={`border border-gray-400 w-[90%] lg:w-[948px] fixed z-[999] bg-white-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
        >
          <Image
            src={certAssets.image}
            onError={() =>
              setCertAssets({
                ...certAssets,
                image: "/images/default-certificate.jpg",
              })
            }
            className="w-[90%] lg:w-[948px]"
            width={948}
            height={625}
            alt="blockademy certificate"
          />
        </div>
      </div>
    </>
  );
};

export default RewardDetail;
