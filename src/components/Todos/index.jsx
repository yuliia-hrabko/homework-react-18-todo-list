import React, {useState, useMemo} from "react";
import {useSelector} from "react-redux";

import TodoItem from "./TodoItem";
import TodosPagination from "./TodosPagination"
import TodosSort from "./TodosSort";

import useFilterTodos from "../../hooks/useFilterTodos";
import useGetSortedList from "../../hooks/useGetSortedList";

import {useGetAllTodosQuery} from "../../store/api/todos";

import "./styles.scss";


const Todos = () => {
    useGetAllTodosQuery();
    const {items} = useSelector(state => state.todos);
    
    const [page, setPage] = useState(1);
    const [userSortId, setUserSortId] = useState('all');
    const [showOnlyCompleted, setShowOnlyCompleted] = useState(false);

    const onSelect = (e) => {
        setUserSortId(e.target.value);
        setPage(1);
    };

    const sortedList = useGetSortedList(showOnlyCompleted, items, userSortId);

    const filteredTodos = useFilterTodos(page, sortedList);

    const userIdArr = useMemo(() => new Set(items.map(t => t.userId)) ,[items]);
       
    return (
        <div className="todos">
            <div className="todos__header todos-header">
                <h1 className="todos-header__title">TODOS COUNT: {sortedList.length}</h1>
                <TodosSort {...{userSortId, onSelect, userIdArr}}/>
                <label>
                    <input type="checkbox" 
                           onChange={() => setShowOnlyCompleted(!showOnlyCompleted)} 
                           checked={showOnlyCompleted}/>
                    <span>Only completed</span>
                </label>
            </div>
            
            <div className="todos__list">
                {
                    filteredTodos.map((todo) => <TodoItem {...todo} key= {todo.id}/>)
                }
            </div>
            <TodosPagination {...{page, setPage, sortedList}}/>
        </div>
    );
};

export default Todos;
