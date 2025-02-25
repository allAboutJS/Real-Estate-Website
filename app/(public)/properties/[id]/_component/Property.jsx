"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { CgEditBlackPoint } from "react-icons/cg";
import { FaLocationPin, FaNairaSign, FaQuestion, FaWhatsapp } from "react-icons/fa6";

export default function Property({ success, data }) {
    const router = useRouter();

    if (!success) return router.replace("/properties"), null;
    return (
        <div className="max-w-screen-md mx-auto bg-white p-6 space-y-6">
            <div className="snap-x snap-mandatory max-w-full overflow-auto flex h-max items-center">
                {data.assets.map((asset) => (
                    <div key={asset.url} className="snap-always snap-end flex-1 min-w-full h-fit">
                        <Image
                            width={800}
                            height={600}
                            src={asset.url}
                            alt={data.name}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                ))}
            </div>
            <div className="text-zinc-800 space-y-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-end">
                    <p className="capitalize">
                        <FaLocationPin className="text-blue-600 inline" /> <b>Address:</b> {data.address}
                    </p>
                    <p>
                        <FaNairaSign className="text-green-600 inline" /> <b>Price:</b> {data.price.toLocaleString()}
                    </p>
                    <p className="capitalize">
                        <FaQuestion className="text-yellow-600 inline" /> <b>For:</b> {data.availability_status}
                    </p>
                    <p className="capitalize">
                        <CgEditBlackPoint className="text-red-600 inline" /> <b>Type:</b> {data.property_type}
                    </p>
                </div>
                <div>
                    <p className="whitespace-pre-wrap">
                        <b>Description:</b> <br /> {data.description}
                    </p>
                </div>
                <a
                    target="_blank"
                    className="flex items-center justify-center gap-1 py-2 px-4 bg-green-600 text-white rounded-md"
                    href={`https://wa.me/2348036748057/?text=${encodeURIComponent(
                        `Good day sir.\nI want to make an enquiry on this property I found on your website:\n*${data.name}*`
                    )}`}
                >
                    <FaWhatsapp /> Contact the Admin
                </a>
            </div>
        </div>
    );
}
