import NoSignal from '@/components/NoSignal';
import ListRewards from '@/views/Rewards/ListRewards';
import React from 'react'

export default function ClaimReward() {
  return (
    <div className="mt-[74px]">
      <ListRewards />
      <NoSignal />
  </div>
  )
}
