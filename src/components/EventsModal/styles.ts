import styled from 'styled-components'

export const Container = styled.form`
    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;
        
        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: #A9A9A9;
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
            width: 100%;
            padding: 0 1.5rem;
            height: 4rem;
            margin-top: 1.5rem;
            background: #000;
            color: #FFF;
            border: 1;
            border-color: #836FFF;
            font-size: 1rem;
            border-radius: 0.25rem;
            font-weight: 500;

            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.9);
            }
        }
`