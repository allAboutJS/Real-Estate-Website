import Image from "next/image";
import { BiEdit } from "react-icons/bi";
import View from "../(dashboard)/_components/View";
import Edit from "../(dashboard)/_components/Edit";

export default function PropertyCard(props) {
    const { name, property_type, address, availability_status, price, featured_image_url } = props;
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
                <View {...props} />
                <Edit {...props} />
            </div>
        </div>
    );
}
