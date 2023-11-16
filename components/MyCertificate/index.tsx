import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { ASSIGNMENT_STATUS } from "@/utils/constants";
import Button from "../Common/Button";
import { selectReward } from "@/redux/features/reward/reducer";
import { getRewardDetail } from "@/redux/features/reward/action";
import api from "@/services/axios";
import { toast } from "react-toastify";
import CertPopup from "../Popup/CertPopup";
import { SpinnerIos } from "@styled-icons/fluentui-system-regular";

const MyCertificate = ({ courseId }: { courseId: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [certAssets, setCertAssets] = useState<null | any>(null);
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const { rewardDetailLoading, rewardDetails } = useAppSelector(selectReward);
  const dispatch = useAppDispatch();

  const onViewCert = async () => {
    if (rewardDetails.assignment_status.slug === ASSIGNMENT_STATUS.PASSED) {
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
          await dispatch(getRewardDetail(courseId));
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
    }
  };

  useEffect(() => {
    dispatch(getRewardDetail(courseId));
  }, [dispatch, courseId]);

  return (
    <div>
      <Button
        disabled={rewardDetailLoading || isLoading}
        onClick={onViewCert}
        className="!px-6 bg-orange-100 group hover:bg-orange-100/50 w-full"
      >
        {rewardDetailLoading || isLoading ? (
          <SpinnerIos className={`animate-spin text-orange-200`} size={20} />
        ) : (
          <span className="text-orange-200 group-hover:text-orange-200/80 font-bold transition-all">
            My Certificate
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
