import { Collapse } from "antd";

import cn from "@/services/cn";

export const DesktopLoading = ({ row = 10 }: { row?: number }) => {
    return (
        <>
            {" "}
            {Array(row)
                .fill(0)
                .map((z, i) => (
                    <tr
                        key={i}
                        className="h-12 text-light-100 text-base"
                    >
                        <td className="px-0">
                            <div
                                className={cn(
                                    `h-12 py-1 flex items-center justify-end bg-white-300 gap-2 transition-all animate-pulse`,
                                )}
                            ></div>
                        </td>
                        <td className="px-0">
                            <div
                                className={cn(
                                    "py-1 h-12 justify-center bg-white-300 transition-all flex items-center animate-pulse"
                                )}
                            ></div>
                        </td>
                        <td className="px-0">
                            <div
                                className={cn(
                                    `h-12 py-1 flex items-center gap-5 bg-white-300 transition-all line-clamp-1 animate-pulse`
                                )}
                            ></div>
                        </td>
                        <td className="px-0">
                            <div
                                className={cn(
                                    `h-12 py-1 flex items-center justify-center bg-white-300 transition-all animate-pulse`
                                )}
                            ></div>
                        </td>
                        <td className="px-0">
                            <div
                                className={cn(
                                    `h-12 py-1 flex items-center justify-center bg-white-300 transition-all animate-pulse`
                                )}
                            ></div>
                        </td>
                        <td className="px-0">
                            <div
                                className={cn(
                                    `h-12 py-1 flex items-center justify-center bg-white-300 transition-all hover:opacity-80 animate-pulse`
                                )}
                            ></div>
                        </td>
                        <td className="px-0">
                            <div
                                className={cn(
                                    `h-12 py-1 flex items-center justify-center bg-white-300 transition-all hover:opacity-80 animate-pulse`
                                )}
                            ></div>
                        </td>
                    </tr>
                ))}
        </>
    );
};
export const DesktopEmpty = () => {
    return (
        <>
            {Array(10)
                .fill(0)
                .map((z, i) => (
                    <tr
                        key={i}
                        className="group h-12 text-light-100 text-base"
                    >
                        <td className="px-0">
                            <div
                                className={cn(
                                    `h-12 py-1 flex items-center justify-end bg-white-700 group-hover:bg-opacity-50 gap-2 transition-all`,
                                )}
                            >
                                --
                            </div>
                        </td>
                        <td className="px-0">
                            <div
                                className={cn(
                                    "py-1 h-12 justify-center bg-white-700 group-hover:bg-opacity-50 transition-all flex items-center"
                                )}
                            >
                                --
                            </div>
                        </td>
                        <td className="px-0">
                            <div
                                className={cn(
                                    `h-12 py-1 flex items-center gap-5 bg-white-700 group-hover:bg-opacity-50 transition-all line-clamp-1`
                                )}
                            >
                                --
                            </div>
                        </td>
                        <td className="px-0">
                            <div
                                className={cn(
                                    `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all`
                                )}
                            >
                                --
                            </div>
                        </td>
                        <td className="px-0">
                            <div
                                className={cn(
                                    `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all`
                                )}
                            >
                                --
                            </div>
                        </td>
                        <td className="px-0">
                            <div
                                className={cn(
                                    `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all hover:opacity-80`
                                )}
                            >
                                --
                            </div>
                        </td>
                        <td className="px-0">
                            <div
                                className={cn(
                                    `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all hover:opacity-80`
                                )}
                            >
                                --
                            </div>
                        </td>
                    </tr>
                ))}
        </>
    );
};
export const MobileLoading = ({ row = 10 }: { row?: number }) => {
    return (
        <>
            {" "}
            {Array(row)
                .fill(0)
                .map((z, i) => (
                    <div className={cn(`h-[42px] p-[6px] animate-pulse flex items-center gap-2 mb-1 bg-white-700`)} key={i}>
                        <div className={cn(`animate-pulse w-[26px] h-[26px] bg-white-300`)}></div>
                        <div className={cn(`animate-pulse w-[26px] h-[26px] bg-white-300`)}></div>
                        <div className={cn(`animate-pulse w-full h-[26px] bg-white-300`)}></div>
                    </div>
                ))}
        </>
    );
};
export const MobileEmpty = () => {
    return (
        <>
            {Array(10)
                .fill(0)
                .map((z, i) => (
                    <Collapse
                        key={i}
                        accordion
                        className="leaderboard mb-1 rounded-none bg-white-700"
                        defaultActiveKey={""}
                        items={[
                            {
                                children: (
                                    <div className="text-light-100 text-base mt-1">
                                        <ul className="flex flex-col gap-1">
                                            <li className="flex items-center justify-between">
                                                <p className="w-full flex justify-start items-center px-3 min-h-[46px] text-light-400">
                                                    Point
                                                </p>
                                                <p className="w-full flex justify-end items-center px-3 min-h-[46px]">
                                                    --
                                                </p>
                                            </li>
                                            <li className="flex items-center justify-between">
                                                <p className="w-full flex justify-start items-center px-3 min-h-[46px] text-light-400">
                                                    Result
                                                </p>
                                                <div className="w-full flex justify-end items-center px-3 min-h-[46px]">
                                                    --
                                                </div>
                                            </li>
                                            <li className="flex items-center justify-between">
                                                <div className=" w-full flex justify-start items-center px-3 min-h-[46px] text-light-400">
                                                    <div className="relative inline-block">
                                                        Entered on
                                                    </div>
                                                </div>
                                                <p
                                                    className={`w-full flex justify-end items-center px-3 min-h-[46px]`}
                                                >
                                                    --
                                                </p>
                                            </li>
                                            <li className="flex items-center justify-between">
                                                <p className="w-full flex justify-start items-center px-3 min-h-[46px] text-light-400">
                                                    Completed Time
                                                </p>
                                                <div className="w-full flex justify-end items-center px-3 min-h-[46px]">
                                                    --
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                ),
                                label: (
                                    <div
                                        className={cn(
                                            `flex items-center font-normal !text-primary-100 gap-2`
                                        )}
                                    >
                                        <p className="flex items-center gap-2 h-[26px]">
                                            --
                                        </p>
                                        <div className="w-16 flex justify-start items-center flex-1 line-clamp-1">
                                            --
                                        </div>
                                    </div>
                                ),
                            },
                        ]}
                    />
                ))}
        </>
    );
};