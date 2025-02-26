"use client";

import { useEffect, useRef, useState } from "react";
import uploadBlogPost from "../_actions/uploadBlogPost";
import extractArticleInformation from "../../_utils/extractArticleInformation";
import { toast } from "sonner";
import ReactQuill from "react-quill";
import editorToolbar from "../../_lib/editorToolbar";
import { useRouter } from "next/navigation";

export default function Editor() {
    const publishButtonRef = useRef(null);
    const draftButtonRef = useRef(null);
    const titleInputRef = useRef(null);
    const [quillEditorRef, setQuillEditorRef] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const uploadBlog = (asDraft = false) => {
            draftButtonRef.current.disabled = true;
            publishButtonRef.current.disabled = true;

            try {
                toast.promise(
                    () =>
                        new Promise(async (resolve, reject) => {
                            try {
                                if (
                                    !titleInputRef.current.value.trim() ||
                                    !quillEditorRef.unprivilegedEditor.getText().trim()
                                )
                                    reject("Make sure to provide a title and body for your article!");
                                const postInfo = await extractArticleInformation(quillEditorRef, titleInputRef, false);
                                const { success } = await uploadBlogPost(postInfo, asDraft);
                                if (success) {
                                    resolve();
                                    quillEditorRef.editor.setText("");
                                    titleInputRef.current.value = "";
                                    router.refresh();
                                } else reject("Request failed!");
                            } catch {
                                reject("Request failed!");
                            }
                        }),
                    {
                        loading: "Uploading post...",
                        success: "Post uploaded successfully!",
                        error: (e) => e
                    }
                );
            } finally {
                draftButtonRef.current.disabled = false;
                publishButtonRef.current.disabled = false;
            }
        };

        const publishBlogPost = async () => {
            uploadBlog();
        };

        const saveBlogAsDraft = async () => {
            uploadBlog(true);
        };

        publishButtonRef.current?.addEventListener("click", publishBlogPost);
        draftButtonRef.current?.addEventListener("click", saveBlogAsDraft);

        return () => {
            publishButtonRef.current?.removeEventListener("click", publishBlogPost);
            draftButtonRef.current?.removeEventListener("click", saveBlogAsDraft);
        };
    }, [router, quillEditorRef]);

    return (
        <>
            <div className="space-y-2">
                <div className="input-field">
                    <label className="font-semibold text-sm" htmlFor="title">
                        Title
                    </label>
                    <input
                        className="min-w-0 py-2 px-4 border border-zinc-300 capitalize bg-white shadow"
                        type="text"
                        placeholder="RES 101 - Introduction To Real Estate"
                        id="title"
                        ref={titleInputRef}
                    />
                </div>
                <div>
                    <label className="font-semibold text-sm" htmlFor="body">
                        Body
                    </label>
                    <div className="bg-white shadow">
                        <ReactQuill
                            theme="snow"
                            modules={{ toolbar: editorToolbar }}
                            ref={(e) => setQuillEditorRef(e)}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-end gap-2">
                <button
                    ref={publishButtonRef}
                    className="text-sm font-semibold px-4 py-2 rounded-sm bg-blue-800 text-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                    PUBLISH
                </button>
                <button
                    ref={draftButtonRef}
                    className="text-sm font-semibold px-4 py-2 rounded-sm bg-blue-200 text-blue-950 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    SAVE AS DRAFT
                </button>
            </div>
        </>
    );
}
