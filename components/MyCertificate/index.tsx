import { useCallback, useEffect, useState } from "react";
import { ASSIGNMENT_STATUS } from "@/utils/constants";
import Button from "../Common/Button";
import api from "@/services/axios";
import { toast } from "react-toastify";
import CertPopup from "../Popup/CertPopup";
import { SpinnerIos } from "@styled-icons/fluentui-system-regular";
import { RewardDetails } from "@/redux/features/reward/type";
import cn from "@/services/cn";

const MyCertificate = ({
  courseId,
  btnClass = "",
  loadingClass = "",
  txtClass = "",
}: {
  courseId: string;
  btnClass?: string;
  loadingClass?: string;
  txtClass?: string;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [certAssets, setCertAssets] = useState<null | any>(null);
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [rewardDetails, setRewardDetails] = useState<RewardDetails | null>(
    null
  );

  const onViewCert = async () => {
    if (!rewardDetails) {
      toast.warning("You don't have a certificate!");
      return;
    }
    if (!rewardDetails.is_claimed) {
      setIsLoading(true);
      try {
        const { data } = await api.get(`/api/v10/claim-reward/${courseId}`);
        setCertAssets({
          image: data.data.certificate_image_url,
          pdf: data.data.certificate_pdf_url,
          courseName: data.data.course_title,
          firstName: data.data.first_name,
          lastName: data.data.last_name,
        });
        await getRewardDetail();
      } catch (error) {
        toast.warning("Something wrong...");
        return null;
      } finally {
        setIsLoading(false);
      }
    } else {
      setCertAssets({
        image: rewardDetails.certificate_image_url,
        pdf: rewardDetails.certificate_pdf_url,
        courseName: rewardDetails.title,
        firstName: rewardDetails.first_name,
        lastName: rewardDetails.last_name,
      });
    }

    setIsOpenPopup(true);
  };

  const getRewardDetail = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data: reward } = await api.get(
        `/api/v10/detail-reward-by-user/${courseId}`
      );
      setRewardDetails(reward.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setRewardDetails(null);
    }
  }, [courseId]);

  useEffect(() => {
    getRewardDetail();
  }, [getRewardDetail]);

  return (
    <div>
      <Button
        disabled={isLoading}
        onClick={onViewCert}
        className={cn(
          `!px-6 bg-orange-100 group hover:bg-orange-100/50 w-full`,
          btnClass
        )}
      >
        {isLoading ? (
          <SpinnerIos
            className={cn(`animate-spin text-orange-200`, loadingClass)}
            size={20}
          />
        ) : (
          <span
            className={cn(
              `text-orange-200 group-hover:text-orange-200/80 transition-all`,
              txtClass
            )}
          >
            View Certificate
          </span>
        )}
      </Button>
      {isOpenPopup ? (
        <CertPopup onClose={() => setIsOpenPopup(false)} assets={certAssets} />
      ) : null}
    </div>
  );
};

export default MyCertificate;
