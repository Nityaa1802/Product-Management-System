export function usePagination({totalPages,currentPage}:any) {

    const paginationComponents = 7;
    var pagesRange:any=[];
    if (totalPages <= paginationComponents) {
        pagesRange = range(1, totalPages);
        return pagesRange;
    }
    else {
        if (currentPage <= 4) {
            pagesRange = range(1, 5);
            pagesRange.push(-1);
            pagesRange.push(totalPages);
        
            return pagesRange;
        }
    
        else if (currentPage > (totalPages - 4)) {
            pagesRange.push(1);
            pagesRange.push(-1);
            pagesRange.push(...range(totalPages - 4, totalPages));
            return pagesRange;
        }
        else {
            pagesRange.push(1);
            pagesRange.push(-1);
            pagesRange.push(currentPage - 1);
            pagesRange.push(currentPage);
            pagesRange.push(currentPage + 1);
            pagesRange.push(-1);
            pagesRange.push(totalPages);
            return pagesRange;
        }
    }
     
}
function range(start: number, end: number) {
    var arr: any = [];
    for (let i = start; i <= end; i++){
        arr.push(i);
    }
    return arr;
}


