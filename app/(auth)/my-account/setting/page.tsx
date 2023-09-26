import Footer from "@/components/Footer";
import GiftHeader from "@/components/GiftHeader";
import NoSignal from "@/components/NoSignal";
import FormSettingAccount from "@/views/Accounts/FormSettingAccount";
import React from "react";

export default function SettingAccountPage() {
  return (
    <div className="m-auto max-w-[1152px] ">
      <GiftHeader />
      <FormSettingAccount />
      <NoSignal />
      <Footer />
    </div>
  );
}
