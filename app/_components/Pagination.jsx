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
                        page === currentPage ? "bg-blue-800 text-white font-bold" : "hover:bg-blue-400"
                    } p-2 text-sm bg-slate-100 h-8 w-8 flex items-center justify-center rounded-lg`}
                    key={Math.random()}
                >
                    {page ? page : <FaEllipsis />}
                </button>
            ))}
        </div>
    );
}
