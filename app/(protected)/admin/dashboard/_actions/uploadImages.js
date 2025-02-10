"use server";

import { unlink, writeFile } from "node:fs/promises";
import transformImageDataTextToBinary from "../../../../_utils/transformImageDataTextToBinary";
import cloudinary from "@/app/_config/cloudinaryConfig";

const uploadImages = async (...args) => {
    const imagesBinaries = transformImageDataTextToBinary(...args);
    const localImagesUrl = [];
    const imagesUrl = [];

    try {
        for (let i = 0; i < imagesBinaries.length; i++) {
            const fileUrl = `./${Math.random()}.webp`;
            await writeFile(fileUrl, imagesBinaries[i]);

            const uploadRes = await cloudinary.uploader.upload(fileUrl);
            imagesUrl.push({ url: uploadRes.secure_url, id: uploadRes.asset_id, public_id: uploadRes.public_id });
            localImagesUrl.push(fileUrl);
        }

        return imagesUrl;
    } finally {
        for (let fileUrl of localImagesUrl) await unlink(fileUrl);
    }
};

export default uploadImages;
