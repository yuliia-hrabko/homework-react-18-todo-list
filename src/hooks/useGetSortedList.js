import {useMemo} from "react";

const useGetSortedList = (showOnlyCompleted, items, userSortId) => {
    return useMemo(() => {
        const sortList = showOnlyCompleted ? items.filter(item => item.completed) : items;
    
        if(userSortId === 'all') {
            return sortList;
        }
        return sortList.filter(item => item.userId === +userSortId);
    }, [items, userSortId, showOnlyCompleted]);
}

export default useGetSortedList;