import React, {useMemo} from 'react'

const TodosPagination = ({page, setPage, sortedList}) => {

  const paginationNumbers = useMemo(() => sortedList?.length > 20 ? Math.round(sortedList.length / 20) : 1, [sortedList]);

  return (
    <div className="todos__pagination todos-pagination">
        {
            [...Array(paginationNumbers)].map((_, idx) => (
                <button key= {idx} 
                        className={`todos-pagination__item ${(page === idx + 1) && 'todos-pagination__item--active' }`}
                        onClick={() => setPage(idx + 1)}>
                    
                    <span className="todos-pagination__text">{idx + 1}</span>
                </button>
            ))
        }
    </div>
  )
}

export default TodosPagination