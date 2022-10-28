import React from "react";

const TodosSort = ({ userSortId, onSelect, userIdArr }) => {
    return (
        <select value={userSortId} onChange={onSelect}>
            <option value="all">All</option>
            {[...userIdArr].map((id) => (
                <option key={id} value={id}>userId: {id}</option>
            ))}
        </select>
    );
};

export default TodosSort;
