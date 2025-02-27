"use server";

import { unlink, writeFile } from "node:fs/promises";
import transformImageDataTextToBinary from "../../../../_utils/transformImageDataTextToBinary";
import cloudinary from "@/app/_config/cloudinaryConfig";

const uploadImages = async (...args) => {
    const imagesBinaries = transformImageDataTextToBinary(...args);
    const localImagesUrl = [];

    try {
        const imagesUrl = await Promise.all(
            imagesBinaries.map(async (imageBinary) => {
                const fileUrl =
                    process.env.NODE_ENV === "production" ? `/tmp/${Math.random()}.webp` : `./${Math.random()}.webp`;

                await writeFile(fileUrl, imageBinary);

                const uploadRes = await cloudinary.uploader.upload(fileUrl);

                localImagesUrl.push(fileUrl);
                return { url: uploadRes.secure_url, id: uploadRes.asset_id, public_id: uploadRes.public_id };
            })
        );

        return imagesUrl;
    } catch (err) {
        for (let fileUrl of localImagesUrl) await unlink(fileUrl);
        throw err;
    } finally {
        for (let fileUrl of localImagesUrl) await unlink(fileUrl);
    }
};

export default uploadImages;
