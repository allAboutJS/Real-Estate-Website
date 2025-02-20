import Input from "@/app/_components/Input";
import Select from "@/app/_components/Select";
import TextArea from "@/app/_components/TextArea";

export default function PropertyCreationForm() {
    return (
        <form>
            <Input name="name" id="name" label="Name" errorMessage="Name is required." />
            <div className="grid grid-cols-2 gap-4 mt-4">
                <Input name="address" id="address" label="Address" errorMessage="Address is required." />
                <Input name="price" id="price" label="Price" errorMessage="Price is required." />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <Select
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
                    name="description"
                    id="description"
                    label="Description"
                    errorMessage="Description is required."
                />
            </div>
            <div className="mt-4">
                <label htmlFor="images" className="block text-sm font-medium text-gray-700">
                    Images
                </label>
                <input
                    type="file"
                    name="images"
                    id="images"
                    className="mt-1 min-w-0 bg-slate-100 rounded-sm p-2 w-full"
                />
            </div>
            <div className="mt-4">
                <button className="px-4 py-2 bg-black text-white w-full">CREATE PROPERTY</button>
            </div>
        </form>
    );
}
