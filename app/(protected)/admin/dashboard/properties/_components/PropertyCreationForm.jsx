"use client";

import Input from "@/app/_components/Input";
import Select from "@/app/_components/Select";
import TextArea from "@/app/_components/TextArea";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function PropertyCreationForm() {
    const [images, setImages] = useState([]);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({ mode: "all" });

    useEffect(() => {
        const imageInput = document.querySelector("#images");
        const displayImages = (e) => {
            console.log("Running event listener");
            setImages((prev) => {
                for (let image of prev) URL.revokeObjectURL(image);
                return Array.from(e.target.files).map((file) => URL.createObjectURL(file));
            });
        };

        imageInput.addEventListener("change", displayImages);
        return () => imageInput.removeEventListener("change", displayImages);
    }, []);

    return (
        <form onSubmit={handleSubmit(console.log)}>
            <Input
                register={register}
                errors={errors}
                required
                name="name"
                id="name"
                label="Name"
                errorMessage="Name is required."
            />
            <div className="grid grid-cols-2 gap-4 mt-4">
                <Input
                    register={register}
                    errors={errors}
                    required
                    name="address"
                    id="address"
                    label="Address"
                    errorMessage="Address is required."
                />
                <Input
                    register={register}
                    errors={errors}
                    required
                    name="price"
                    id="price"
                    label="Price"
                    errorMessage="Price is required."
                />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <Select
                    register={register}
                    errors={errors}
                    validations={{ required: { value: true, message: "Select property type" } }}
                    setValue={setValue}
                    placeholder="Select type"
                    label="Property Type"
                    name="type"
                    options={[
                        { label: "Landed Properties", value: "land" },
                        { label: "Houses and Buildings", value: "building" },
                        { label: "Warehouse", value: "warehouse" },
                        { label: "Shop", value: "shop" },
                        { label: "Office", value: "office" },
                        { label: "Apartment", value: "apartment" }
                    ]}
                />
                <Select
                    register={register}
                    errors={errors}
                    validations={{ required: { value: true, message: "Select property availability status" } }}
                    setValue={setValue}
                    placeholder="Select type"
                    label="Availability Status"
                    name="availability_status"
                    options={[
                        { label: "Sale", value: "sale" },
                        { label: "Rent", value: "rent" }
                    ]}
                />
            </div>
            <div className="mt-4">
                <TextArea
                    register={register}
                    errors={errors}
                    validations={{ required: { value: true, message: "Property description is required" } }}
                    name="description"
                    id="description"
                    label="Description"
                    errorMessage="Description is required."
                />
            </div>
            <div className="mt-4">
                <div className="flex gap-1 flex-wrap">
                    {images.map((image) => (
                        <img key={image} src={image} className="h-12 w-auto rounded-md" />
                    ))}
                </div>
                <label htmlFor="images" className="block text-sm font-medium text-gray-700">
                    Images
                </label>
                <input
                    {...register("images", { required: { value: true, message: "Please select an image" } })}
                    type="file"
                    accept="image/*"
                    multiple
                    id="images"
                    className="mt-1 min-w-0 bg-slate-100 rounded-sm p-2 w-full"
                />
                {errors["images"] && <small className="text-red-600">{errors && errors["images"]?.message}</small>}
            </div>
            <div className="mt-4">
                <button className="px-4 py-2 bg-black text-white w-full">CREATE PROPERTY</button>
            </div>
        </form>
    );
}
