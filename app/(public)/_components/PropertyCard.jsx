import Image from "next/image";
import { CgPinBottom } from "react-icons/cg";

export default function PropertyCard(props) {
    const {
        thumbnail_ulr,
        name,
        price,
        location,
        dimensions,
        rooms_count,
        kitchen_count,
        toilets_count,
        boys_quarters_count
    } = props;

    return (
        <article>
            <Image width={320} height={240} src={thumbnail_ulr} placeholder="blur" blurDataURL="/" />
            <div>
                <div>
                    <div>
                        <div>
                            <h3>{name}</h3>
                            <address>
                                <CgPinBottom /> {location}
                            </address>
                        </div>
                    </div>
                    <div>{price}</div>
                </div>
                <div>
                    {dimensions && <span>{dimensions}</span>}
                    {rooms_count && (
                        <span>
                            {rooms_count} Room{rooms_count > 1 && "s"}
                        </span>
                    )}
                    {kitchen_count && (
                        <span>
                            {kitchen_count} Kitchen{rooms_count > 1 && "s"}
                        </span>
                    )}
                    {toilets_count && (
                        <span>
                            {toilets_count} Toilet{toilets_count > 1 && "s"}
                        </span>
                    )}
                    {boys_quarters_count && (
                        <span>
                            {boys_quarters_count} Boys Quarter{boys_quarters_count > 1 && "s"}
                        </span>
                    )}
                </div>
            </div>
        </article>
    );
}
