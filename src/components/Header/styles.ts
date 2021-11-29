import styled from "styled-components";

export const Container = styled.header`
    background: #808080;
`
export const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 10px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    transition: filter 0.2s;

    img:hover {
        filter: brightness(0.8);
    }
`