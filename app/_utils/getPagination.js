const getPagination = (currentPage, limit, totalPages) => {
    if (limit < 3) throw new Error("Limit cannot be less than 3");
    if (currentPage > totalPages) throw new Error("Current page cannot be greater than the total number of pages.");
    if (totalPages <= limit) return Array.from({ length: totalPages }, (_, index) => index + 1);

    const isCloseToEnd = totalPages - currentPage < limit - 2;
    const isCloseToStart = currentPage - 1 < limit - 2;
    const pagination = new Array(limit).fill(null);

    if (isCloseToStart) {
        for (let i = 0; i < limit - 2; i++) pagination[i] = i + 1;
        pagination[limit - 1] = totalPages;
    } else if (isCloseToEnd) {
        for (let i = 2, j = totalPages - (limit - 3); i < limit; i++, j++) pagination[i] = j;
        pagination[0] = 1;
    } else {
        for (let i = 2, j = currentPage; i < limit - 2; i++, j++) pagination[i] = j;
        pagination[0] = 1;
        pagination[limit - 1] = totalPages;
    }

    return pagination;
};

export default getPagination;
