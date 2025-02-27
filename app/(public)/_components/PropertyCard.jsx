import Image from "next/image";
import { FaLocationPin, FaNairaSign, FaQuestion } from "react-icons/fa6";
import { CgEditBlackPoint, CgEye } from "react-icons/cg";
import Link from "next/link";

export default function PropertyCard({
    id,
    featured_image_url,
    name,
    price,
    address,
    availability_status,
    property_type
}) {
    return (
        <div className="bg-white p-4 rounded-2xl space-y-2 shadow-sm flex flex-col gap-2">
            <Image
                className="w-full block aspect-video rounded-lg flex-1"
                width={320}
                height={240}
                src={featured_image_url}
                alt={name}
            />
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">{name}</h3>
                <div className="text-sm text-zinc-800 grid grid-cols-2 gap-2 items-end">
                    <p className="capitalize">
                        <FaLocationPin className="text-blue-600 inline" /> Address: <b>{address}</b>
                    </p>
                    <p>
                        <FaNairaSign className="text-green-600 inline" /> Price: <b>{Number(price).toLocaleString()}</b>
                    </p>
                    <p className="capitalize">
                        <FaQuestion className="text-yellow-600 inline" /> For: <b>{availability_status}</b>
                    </p>
                    <p className="capitalize">
                        <CgEditBlackPoint className="text-red-600 inline" /> Type: <b>{property_type}</b>
                    </p>
                </div>
                <Link
                    className="flex items-center justify-center w-full bg-blue-600 text-white p-2 rounded-lg gap-2"
                    href={`/properties/${id}`}
                >
                    <CgEye /> View
                </Link>
            </div>
        </div>
    );
}
