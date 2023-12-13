import Button from "@/components/Common/Button";
import InfoPopup from "@/components/Popup/InfoPopup";
import React from "react";

export const RegisterSuccessPopup = ({
  setShowPopup,
}: {
  setShowPopup: (params: boolean) => void;
}) => {
  return (
    <InfoPopup
      title="Congratulations!"
      desc={
        <div className="text-gray-700 text-center mb-4">
          <p>Thanks for joining the course.</p>
          <p>Please enjoy your journey, complete quiz and get certificate.</p>
        </div>
      }
      onClose={() => setShowPopup(false)}
      className="md:max-w-[359px]"
    >
      <Button
        type="button"
        onClick={() => setShowPopup(false)}
        className="mt-2 w-[184px]"
      >
        Yap, sure
      </Button>
    </InfoPopup>
  );
};
