import styled from "styled-components";

export const TodoListContainer = styled.div`
    .list-item{
        display: flex;
        height: 36px;
        padding: 0 8px;
    }
    .list-item .hand{
        display: none;
    }
    .list-item:hover {
        .hand{
            display: block;
        }
        background-color: lightblue;
    }
`