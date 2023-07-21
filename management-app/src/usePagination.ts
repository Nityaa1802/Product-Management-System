export function usePagination({totalPages,currentPage}:any) {
    // when there are less aor equal values then the pagination component
    // when we are on the value less than pagination component-2 i.e less than 5
    // when we want left dots when values are greator than total pages -4
    // from 5-totalpages-4 both side dots

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
 
            range(totalPages - 4, totalPages).map((i:any) => { pagesRange.push(i) });
          
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


