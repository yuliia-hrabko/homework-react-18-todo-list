import {useMemo} from "react";

const useFilterTodos = (page, sortedList) => {
    return useMemo(() => {
        const start = (page - 1) * 20;
        const end = start + 20;
        return sortedList.slice(start, end);
    }, [page, sortedList]);
};

export default useFilterTodos;