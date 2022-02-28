import useSWR from "swr";
import Link from "next/link";

import {VscSync} from "react-icons/vsc";

import {fetcher} from "@/script/swr_get";
import SetUserName from "@/components/SetUserName";


export default function DemoVideos() {
    SetUserName('Videos Demo')

    const {data, error} = useSWR(`/api/exp/video`, fetcher)

    if (!data) return <VscSync className={"animate-spin text-gray-900 dark:text-gray-200 w-1/3 h-1/3"}/>

    if (error) return <div className={"flex justify-center items-center h-full text-2xl text-gray-900 dark:text-gray-200"}>failed to load or not found.</div>

    return (
        <div className={"p-4 grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6 overflow-y-auto gap-4 text-gray-900 dark:text-gray-200"}>
            {data.map(({name, thumbnail, content}: { name: string, thumbnail: string, content: string }, index: number) => {
                return (
                    <div key={index} className={"rounded-md hover:ring-2 ring-gray-900 dark:ring-gray-200"}>
                        <Link key={index} href={`/exp/demo/videos/play?content=${encodeURIComponent(content)}`}>
                            <a target="_blank">
                                <div className={"aspect-video bg-center bg-cover rounded-md"} style={{backgroundImage: `url(${thumbnail})`}}/>
                                <div className={"truncate text-xl"}>{name}</div>
                            </a>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}