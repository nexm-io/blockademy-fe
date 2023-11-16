import NoSignal from "@/components/NoSignal";
import PageContainer from "@/components/PageContainer";
import ListClaimed from "@/views/Rewards/ListClaimed";
import React from "react";

export default function ClaimReward() {
  return (
    <div className="mt-[74px]">
      <ListClaimed />
      <PageContainer>
        <NoSignal />
      </PageContainer>
    </div>
  );
}
