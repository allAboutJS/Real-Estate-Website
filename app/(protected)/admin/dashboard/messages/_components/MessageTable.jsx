export default function MessageTable({ data }) {
    return (
        <div className="overflow-auto max-w-full show-scrollbar">
            <table className="min-w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-4">Fullname</th>
                        <th className="p-4">Email</th>
                        <th className="p-4">Phone</th>
                        <th className="p-4">Message</th>
                        <th className="p-4">Created At</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((message) => (
                        <tr className="whitespace-nowrap [&:last-child_td]:border-none" key={message.id}>
                            <td className="border-b py-4 px-1">{message.fullname}</td>
                            <td className="border-b py-4 px-1">
                                <a href={`mailto:${message.email}`} className="underline" target="_blank">
                                    {message.email}
                                </a>
                            </td>
                            <td className="border-b py-4 px-1">
                                <a href={`tel:+${message.phone_number}`} className="underline" target="_blank">
                                    {message.phone_number}
                                </a>
                            </td>
                            <td className="border-b py-4 px-1">
                                <div className="max-w-xs text-ellipsis overflow-hidden">{message.message}</div>
                            </td>
                            <td className="border-b py-4 px-1">{new Date(message.created_at).toDateString()}</td>
                            <td className="border-b py-4 px-1">
                                <div className="flex gap-1 font-semibold">
                                    <button className="px-2 py-1 bg-black text-white">View</button>
                                    <button className="px-2 py-1 bg-red-600 text-white">Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
