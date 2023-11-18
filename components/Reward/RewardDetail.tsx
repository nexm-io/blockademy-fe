import { CourseDetail } from "@/redux/features/courses/type";
import { RootState } from "@/redux/store";
import api from "@/services/axios";
import { ASSIGNMENT_STATUS } from "@/utils/constants";
import slugifyText from "@/utils/slugifyText";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import InfoPopup from "../Popup/InfoPopup";
import cn from "@/services/cn";
import Button from "../Common/Button";
import { SpinnerIos } from "@styled-icons/fluentui-system-regular";
import { format, parseISO } from "date-fns";
import { PLACEHOLDER_BASE64 } from "@/utils/getLocalBase64";
import { Share } from "../Icon";

const RewardDetail = ({ courseDetail }: { courseDetail: CourseDetail }) => {
  const [certAssets, setCertAssets] = useState<any>({
    image: "",
    pdf: "",
    isClaimed: 0,
  });
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [getCerLoading, setGetCerLoading] = useState<boolean>(false);
  const [viewCertificate, setViewCertificate] = useState<boolean>(false);
  const accountRx = useSelector((state: RootState) => state.account);
  const [isGetCertLoading, setIsGetCertLoading] = useState<boolean>(true);
  const [isIssueLoading, setIsIssueLoading] = useState<boolean>(false);

  const handleGetCertificate = async () => {
    if (
      courseDetail?.assignment_status.slug === ASSIGNMENT_STATUS.PASSED &&
      !certAssets.isClaimed
    ) {
      setGetCerLoading(true);
      try {
        const { data } = await api.get(
          `/api/v10/claim-reward/${courseDetail.id}`
        );
        console.log(data);
        setCertAssets({
          image: data.data.certificate_image_url,
          pdf: data.data.certificate_pdf_url,
          isClaimed: 1,
        });
      } catch (error) {
        toast.warning("Something wrong...");
        return null;
      } finally {
        setGetCerLoading(false);
      }
    }
  };

  const exportPDF = () => {
    const assets = accountRx.data;
    const filename =
      assets?.first_name && assets.last_name
        ? slugifyText(
            `${assets?.first_name} ${assets?.last_name} ${courseDetail?.title}`
          )
        : slugifyText(`${assets?.email.split("@")[0]} ${courseDetail?.title}`);
    if (!assets) return;
    fetch(certAssets.pdf).then(function (t) {
      return t.blob().then((b) => {
        var a = document.createElement("a");
        a.href = URL.createObjectURL(b);
        a.setAttribute("download", `${filename}.pdf`);
        a.click();
      });
    });
  };

  const shareFacebook = () => {
    window.open(
      "http://www.facebook.com/sharer.php?u=" +
        encodeURIComponent(certAssets.image) +
        "&t=" +
        encodeURIComponent(
          accountRx.data?.first_name && accountRx.data?.last_name
            ? slugifyText(
                `${accountRx.data?.first_name} ${accountRx.data?.last_name} ${courseDetail?.title}`
              )
            : slugifyText(
                `${accountRx.data?.email.split("@")[0]} ${courseDetail?.title}`
              )
        ),
      "sharer",
      "toolbar=0,status=0,width=626,height=436"
    );
  };

  const shareTwitter = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?url=${certAssets.image}&text=`;
    window.open(tweetUrl, "_blank");
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
  }, [courseDetail]);

  // const issueNFT = async () => {
  //   setIsIssueLoading(true);
  //   try {
  //     const { data } = await api.post(`/api/v10/issue-nft/${courseDetail.id}`);
  //     console.log(data);
  //     setIsIssueLoading(false);
  //   } catch {
  //     setIsIssueLoading(false);
  //   }
  // };

  useEffect(() => {
    getCertificate();
  }, [getCertificate]);

  return (
    <>
      <div className="p-5 rounded-lg bg-blue-900 flex justify-between lg:flex-row flex-col items-center mt-10 gap-10">
        <div
          className="relative group cursor-pointer"
          onClick={() => setViewCertificate(true)}
        >
          {isGetCertLoading ? (
            <div className="skeleton bg-gray-400/20 h-[381px] w-[580px] max-w-full rounded"></div>
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
            <Button className="min-w-[184px]" disabled={isGetCertLoading}>
              Issue NFT
            </Button>
            <Button
              disabled={certAssets.isClaimed === 0}
              className="min-w-[184px] bg-blue-600 group hover:bg-blue-600/50 group !px-3"
              onClick={exportPDF}
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
          desc=""
          onClose={() => setShowSharePopup(false)}
          className="!gap-0"
        >
          <div className="flex gap-10 min-w-[300px] justify-center">
            <button
              type="button"
              className="inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg text-white-100"
              style={{ backgroundColor: "#1877f2" }}
              onClick={shareFacebook}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </button>
            <button
              type="button"
              className="inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg text-white-100 bg-black-100"
              onClick={shareTwitter}
            >
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 13.9983H14.4175C13.0855 13.9983 11.7532 13.9988 10.4208 13.9999C10.3558 13.9999 10.3169 13.9818 10.2803 13.9296C9.51658 12.8385 8.75183 11.7482 7.98609 10.6585C7.50478 9.97269 7.02316 9.28704 6.54122 8.6016C6.5319 8.58969 6.52196 8.57827 6.51142 8.56738L6.09896 9.03553C5.02398 10.2575 3.94905 11.4795 2.87417 12.7015C2.51143 13.114 2.14947 13.5269 1.78831 13.9404C1.7729 13.9602 1.75271 13.976 1.72955 13.9863C1.70639 13.9967 1.68097 14.0013 1.65555 13.9997C1.27715 13.9969 0.898743 13.9983 0.5 13.9983L5.9651 7.78338L0.503153 0.00724496C0.534687 0.00493275 0.556287 0.00184993 0.578046 0.00184993C1.91823 0.00184993 3.25841 0.00123318 4.59859 0C4.65913 0 4.68688 0.0265135 4.71605 0.0682876C5.14512 0.680254 5.5745 1.29171 6.0042 1.90265C6.71024 2.90769 7.41633 3.91278 8.12248 4.91793C8.17403 4.99146 8.22622 5.06483 8.28314 5.14545C8.39098 5.02352 8.49394 4.90791 8.59611 4.79184L11.9947 0.92689C12.2513 0.634935 12.5071 0.342362 12.7658 0.052102C12.7903 0.0245125 12.8245 0.00700027 12.8617 0.00308314C13.2374 -0.000308107 13.6131 0.000924999 13.989 0.00107915C14.0011 0.00107915 14.0134 0.00292884 14.0401 0.0050869L8.83151 5.92806L14.5 13.9983ZM2.18248 0.911476C2.19825 0.934906 2.2055 0.947392 2.21401 0.959262C2.90586 1.92721 3.59776 2.89495 4.28972 3.86248C5.51701 5.57969 6.74414 7.29684 7.97111 9.01394C8.93815 10.3671 9.90465 11.7204 10.8706 13.0739C10.9022 13.1181 10.9346 13.1312 10.9864 13.1312C11.5645 13.1299 12.1426 13.1299 12.7207 13.1312H12.806C12.7828 13.0969 12.7704 13.0776 12.7571 13.0588C11.9313 11.9038 11.1055 10.7487 10.2797 9.59354C9.44678 8.42726 8.61409 7.26098 7.7816 6.09469C6.94995 4.93088 6.11825 3.76732 5.28649 2.60402C4.89684 2.05936 4.50682 1.51471 4.11644 0.970052C4.09815 0.944618 4.06283 0.914096 4.03524 0.913942C3.42301 0.910705 2.81079 0.911476 2.18248 0.911476Z"
                  fill="inherit"
                />
              </svg>
            </button>
          </div>
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
