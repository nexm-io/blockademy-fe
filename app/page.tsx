"use client";

import { useAppSelector, useAppDispatch } from "@/redux/hook";
import { selectExample } from "@/redux/features/example/reducer";
import { update } from "@/redux/features/example/action";

export default function Home() {
  const exampleRx = useAppSelector(selectExample);

  const dispatch = useAppDispatch();

  return (
    <main className="">
      {/* <button onClick={() => dispatch(update(1))}>test</button>
      {exampleRx.value} */}
      Home
    </main>
  );
}
