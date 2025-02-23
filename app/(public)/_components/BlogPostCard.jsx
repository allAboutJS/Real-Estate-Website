import Image from "next/image";

export default function BlogPostCard() {
    const images = ["/images/skyscrapper.avif", "/images/handshake.jpg", "/images/people-business-meeting.jpg"];
    return (
        <article className="bg-white shadow-sm h-fit rounded-2xl p-4">
            <Image
                src={images[Math.floor(Math.random() * images.length)]}
                alt="Handshake"
                width={400}
                height={300}
                className="w-full block aspect-video rounded-xl"
            />
            <div>
                <p className="text-zinc-800 text-xs">
                    <i>Posted on 3rd January, 2024.</i>
                </p>
                <h3 className="text-lg">How To Be A Millionaire</h3>
                <p className="text-sm line-clamp-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat repudiandae veniam facere
                    non facilis, consequatur laudantium assumenda amet! Tempore, velit et! Assumenda, neque aliquid
                    aperiam dolorem delectus nemo enim.
                </p>
            </div>
        </article>
    );
}
