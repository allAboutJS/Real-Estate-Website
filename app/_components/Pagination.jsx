import { FaEllipsis } from "react-icons/fa6";
import getPagination from "../_utils/getPagination";

export default function Pagination(props) {
    const { currentPage, limit, totalPages } = props;
    const pagination = getPagination(currentPage, limit, totalPages);

    return (
        <div className="flex flex-wrap justify-center gap-1">
            {pagination.map((page) => (
                <button
                    className={`${
                        page === currentPage ? "bg-zinc-800 text-white font-bold" : "hover:bg-zinc-400"
                    } p-2 text-sm bg-slate-100 h-6 w-6 flex items-center justify-center`}
                    key={Math.random()}
                >
                    {page ? page : <FaEllipsis />}
                </button>
            ))}
        </div>
    );
}
