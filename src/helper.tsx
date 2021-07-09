export const paginationData = (data: Array<any>, currentPage: number, perPageCount = 5) => {
    const indexOfLastCard = currentPage * perPageCount;
    const indexOfFirstCard = indexOfLastCard - perPageCount;
    const paginatedData = data.slice(indexOfFirstCard, indexOfLastCard);
    const totalPageCount = Math.ceil(data?.length / perPageCount);
    return { paginatedData, totalPageCount }
}