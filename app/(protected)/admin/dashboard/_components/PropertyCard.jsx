import Image from "next/image";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import { CgEye } from "react-icons/cg";

export default function PropertyCard({ name, property_type, address, availability_status, price, featured_image_url }) {
    return (
        <div className="bg-white shadow flex flex-col p-2 rounded-xl gap-2">
            <Image
                src={featured_image_url}
                alt={name}
                width={400}
                height={300}
                className="w-full block aspect-video flex-1 rounded-lg"
            />
            <div>
                <h3 className="text-lg capitalize font-semibold">{name}</h3>
                <p className="text-sm line-clamp-3">
                    <b>Property type: </b>
                    {property_type}
                </p>
                <p className="text-sm line-clamp-3">
                    <b>Price: </b>
                    {price ? `₦${price.toLocaleString()}` : "Not specified"}
                </p>
                <p className="text-sm line-clamp-3">
                    <b>For: </b>
                    {availability_status}
                </p>
                <p className="text-sm line-clamp-3">
                    <b>Location: </b>
                    {address}
                </p>
            </div>
            <div className="grid text-sm font-semibold gap-1 p-1 grid-cols-2">
                <button className="hover:bg-zinc-200 bg-zinc-100 flex justify-center items-center gap-1 p-2 rounded-lg">
                    View <CgEye />
                </button>
                <button className="hover:bg-zinc-200 bg-zinc-100 flex justify-center items-center gap-1 p-2 rounded-lg">
                    Edit <BiEdit />
                </button>
            </div>
        </div>
    );
}
