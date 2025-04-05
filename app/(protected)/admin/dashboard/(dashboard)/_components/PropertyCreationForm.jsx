"use client";

import Input from "@/app/_components/Input";
import Select from "@/app/_components/Select";
import TextArea from "@/app/_components/TextArea";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import createProperty from "../_actions/createProperty";
import uploadImages from "../../_actions/uploadImages";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import deleteAssets from "../../_actions/deleteAssets";

export default function PropertyCreationForm({ defaultValues, isEditting }) {
  const router = useRouter();
  const [images, setImages] = useState(defaultValues?.assets?.map((asset) => asset.url) || []);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({ mode: "all" });

  useEffect(() => {
    const imageInput = document.querySelector("#images");
    const displayImages = (e) => {
      setImages((prev) => {
        for (let image of prev) URL.revokeObjectURL(image);
        return Array.from(e.target.files).map((file) => URL.createObjectURL(file));
      });
    };

    imageInput.addEventListener("change", displayImages);
    return () => imageInput.removeEventListener("change", displayImages);
  }, []);

  const readFileAsDataURL = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        resolve(e.target.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };

      fileReader.readAsDataURL(file);
    });
  };

  const parseFormAndSubmit = async (form) =>
    toast.promise(
      () =>
        new Promise(async (resolve, reject) => {
          setIsSubmitting(true);
          try {
            const imagesTextArr = await Promise.all(
              Array.from(form.images).map(async (file) => {
                const base64ImageUrl = await readFileAsDataURL(file);
                return base64ImageUrl.replace(/^data:image\/[a-z]+;base64,/, "");
              })
            );

            delete form.images;

            const imagesInfo = await uploadImages(...imagesTextArr);
            const { success } = await createProperty({
              ...form,
              assets: JSON.stringify(imagesInfo),
              featured_image_url: imagesInfo[0].url
            });
            if (success) {
              resolve();
              router.refresh();
            } else reject();
          } catch {
            reject();
          } finally {
            setIsSubmitting(false);
          }
        }),
      {
        loading: "Uploading property...",
        error: "Property creation failed!",
        success: "Property created successfully!"
      }
    );

  const handleUpdate = async (form) =>
    toast.promise(
      () =>
        new Promise(async (resolve, reject) => {
          try {
            if (form.images.length) {
              const imagesTextArr = await Promise.all(
                Array.from(form.images).map(async (file) => {
                  const base64ImageUrl = await readFileAsDataURL(file);
                  return base64ImageUrl.replace(/^data:image\/[a-z]+;base64,/, "");
                })
              );
              const imagesInfo = await uploadImages(...imagesTextArr);

              await deleteAssets(...defaultValues?.assets);
              form.images = imagesInfo;
            } else {
              form.images = defaultValues?.assets;
            }

            const { success } = await createProperty(
              {
                ...form,
                assets: JSON.stringify(form.images),
                featured_image_url: form.images[0].url,
                id: defaultValues?.id
              },
              true
            );
            if (success) {
              resolve();
              router.refresh();
            } else reject();
          } catch {
            reject();
          }
        }),
      {
        loading: "Updating property...",
        error: "Property update failed!",
        success: "Property updated successfully!"
      }
    );

  return (
    <form onSubmit={handleSubmit(isEditting ? handleUpdate : parseFormAndSubmit)} className="font-normal">
      <Input
        defaultValue={defaultValues?.name}
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
          defaultValue={defaultValues?.address}
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
          defaultValue={defaultValues?.price}
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
          defaultValue={defaultValues?.property_type}
          register={register}
          errors={errors}
          validations={{ required: { value: true, message: "Select property type" } }}
          setValue={setValue}
          placeholder="Select type"
          label="Property Type"
          name="type"
          options={[
            { label: "Landed Properties", value: "land" },
            { label: "Houses and Buildings", value: "house" },
            { label: "Warehouse", value: "warehouse" },
            { label: "Shop", value: "shop" },
            { label: "Office", value: "office" },
            { label: "Apartment", value: "apartment" }
          ]}
        />
        <Select
          defaultValue={defaultValues?.availability_status}
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
          defaultValue={defaultValues?.description}
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
          {...register("images", {
            required: { value: defaultValues?.assets ? false : true, message: "Please select an image" }
          })}
          type="file"
          accept="image/*"
          multiple
          id="images"
          className="mt-1 min-w-0 bg-slate-100 rounded-lg p-2 w-full"
        />
        {errors["images"] && <small className="text-red-600">{errors && errors["images"]?.message}</small>}
      </div>
      <div className="mt-4">
        <button
          disabled={isSubmitting}
          className="px-4 py-2 bg-black text-white w-full rounded-lg disabled:opacity-80 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "PLEASE WAIT..." : isEditting ? "SUBMIT" : "CREATE PROPERTY"}
        </button>
      </div>
    </form>
  );
}
