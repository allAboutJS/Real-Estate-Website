"use server";

import cloudinary from "@/app/_config/cloudinaryConfig";

const deleteAssets = async (...assets) => {
    await Promise.all(assets.map(async (asset) => await cloudinary.uploader.destroy(asset.public_id)));
};

export default deleteAssets;
