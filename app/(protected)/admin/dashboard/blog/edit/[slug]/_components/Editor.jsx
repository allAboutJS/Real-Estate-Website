"use client";

import { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import editorToolbar from "@/app/(protected)/admin/dashboard/blog/_lib/editorToolbar";
import updateBlogPost from "../_actions/updateBlogPost";
import { toast } from "sonner";
import extractArticleInformation from "@/app/(protected)/admin/dashboard/blog/_utils/extractArticleInformation";
import { useRouter } from "next/navigation";

export default function Editor({ title, body, assets, table, slug }) {
    const router = useRouter();
    const updateButtonRef = useRef(null);
    const titleInputRef = useRef(null);
    const [quillEditorRef, setQuillEditorRef] = useState(null);

    useEffect(() => {
        const _updateBlogPost = (e) => {
            e.target.disabled = true;
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

                                const blogInfo = await extractArticleInformation(
                                    quillEditorRef,
                                    titleInputRef,
                                    true,
                                    assets
                                );
                                const { success } = await updateBlogPost(slug, blogInfo, table);

                                if (success) {
                                    resolve(success);
                                    router.replace(
                                        `/admin/dashboard/blog/edit/${blogInfo.slug}${table ? `?table=${table}` : ""}`
                                    );
                                } else reject("Request failed!");
                            } catch (e) {
                                console.log(e);
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
                e.target.disabled = false;
            }
        };

        updateButtonRef.current?.addEventListener("click", _updateBlogPost);
        quillEditorRef?.editor.clipboard.dangerouslyPasteHTML(body);
        if (titleInputRef.current) titleInputRef.current.value = title;

        return () => {
            updateButtonRef.current?.removeEventListener("click", _updateBlogPost);
        };
    }, [updateButtonRef.current, quillEditorRef, titleInputRef.current]);

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
                    ref={updateButtonRef}
                    className="text-sm font-semibold px-4 py-2 rounded-sm bg-zinc-800 text-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                    UPDATE
                </button>
            </div>
        </>
    );
}
