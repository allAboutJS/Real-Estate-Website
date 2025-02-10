import getNewAssets from "../edit/[slug]/_utils/getNewAssets";
import slugify from "./slugify";
import uploadImagesToImageDb from "./uploadImagesToDb";

const extractArticleInformation = async (quillEditorRef, titleInputRef, isUpdate, assets) => {
    assets = JSON.stringify(
        isUpdate ? await getNewAssets(assets, quillEditorRef) : await uploadImagesToImageDb(quillEditorRef)
    );
    const body = quillEditorRef.unprivilegedEditor.getHTML().replace(/&nbsp;/g, " ");
    const featuredImageUrl = quillEditorRef.editor.container.querySelector("img")?.src;

    return {
        title: titleInputRef.current?.value.trim(),
        body,
        summary: quillEditorRef.unprivilegedEditor.getText().trim().slice(0, 100),
        slug: slugify(titleInputRef.current?.value.trim()),
        assets,
        featuredImageUrl
    };
};

export default extractArticleInformation;
