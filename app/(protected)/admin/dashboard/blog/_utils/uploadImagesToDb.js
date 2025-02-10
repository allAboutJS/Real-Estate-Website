import uploadImages from "../../_actions/uploadImages";

const uploadImagesToImageDb = async (quillEditorRef) => {
    const editor = quillEditorRef.editor.container;
    let images = editor.querySelectorAll("img");

    if (!images.length) return null;

    images = Array.from(images).filter((image) => /^data:image\/[a-z]+;base64,/.test(image.src));
    const imageDataArray = await uploadImages(
        ...images.map((image) => image.src.replace(/^data:image\/[a-z]+;base64,/, ""))
    );

    for (let i = 0; i < imageDataArray.length; i++) images[i].src = imageDataArray[i].url;
    return imageDataArray;
};

export default uploadImagesToImageDb;
