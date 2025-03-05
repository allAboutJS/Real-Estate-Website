import uploadImagesToImageDb from "@/app/(protected)/admin/dashboard/blog/_utils/uploadImagesToDb";
import deleteAssets from "@/app/(protected)/admin/dashboard/_actions/deleteAssets";

const getNewAssets = async (assets, quillEditorRef) => {
    const newAssets = await uploadImagesToImageDb(quillEditorRef);

    if (newAssets) {
        const imageSrcArray = Array.from(quillEditorRef.editor.container.querySelectorAll("img")).map(
            (image) => image.src
        );

        if (assets) {
            const unusedAssets = assets.filter((asset) => !imageSrcArray.includes(asset.url));
            const remainingAssets = assets.filter((asset) => imageSrcArray.includes(asset.url));
            await deleteAssets(...unusedAssets);
            newAssets.push(...remainingAssets);
        }
    } else {
        if (assets) await deleteAssets(...assets);
    }

    return newAssets;
};

export default getNewAssets;
