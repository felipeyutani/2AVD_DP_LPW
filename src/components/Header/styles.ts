import styled from "styled-components";

export const Container = styled.header`
    background: #808080;

`
export const Content = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px 10px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    transition: filter 0.2s;

    button {
        font: 1rem;
        color: black;
        background: #fff;
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        &:hover {
        filter: brightness(0.9);
        }
    }
`