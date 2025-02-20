export default function PropertyCreationForm() {
    return (
        <form>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Address
                    </label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        Price
                    </label>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700">
                        Bedrooms
                    </label>
                    <input
                        type="text"
                        name="bedrooms"
                        id="bedrooms"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700">
                        Bathrooms
                    </label>
                    <input
                        type="text"
                        name="bathrooms"
                        id="bathrooms"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="area" className="block text-sm font-medium text-gray-700">
                        Area
                    </label>
                    <input
                        type="text"
                        name="area"
                        id="area"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    />
                </div>
            </div>
            <div className="mt-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                </label>
                <textarea
                    name="description"
                    id="description"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                ></textarea>
            </div>
            <div className="mt-4">
                <label htmlFor="images" className="block text-sm font-medium text-gray-700">
                    Images
                </label>
                <input
                    type="file"
                    name="images"
                    id="images"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
            </div>
            <div className="mt-4">
                <button className="px-4 py-2 bg-black text-white rounded-md">Create Property</button>
            </div>
        </form>
    );
}
