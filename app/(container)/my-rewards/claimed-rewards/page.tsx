import NoSignal from '@/components/NoSignal';
import ListClaimed from '@/views/Rewards/ListClaimed';
import React from 'react'

export default function ClaimReward() {
  return (
    <div className="mt-[74px]">
      <ListClaimed />
      <NoSignal />
  </div>
  )
}
