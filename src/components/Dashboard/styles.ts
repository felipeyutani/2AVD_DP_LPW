import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    margin-top: 60px;
    flex-direction: center;
    margin-left: 100px;
    text-decoration: none;
    justify-content: left;
    margin-bottom: 100px;

    li h2 {
        font-size: 21;
        font-family: 'Roboto', sans-serif;
        margin-bottom: 10px;
        color: #1C1C1C;
        padding: 10px;
    }

    li a button{
        width: 100px;
    }

    ul li {
        background: #fff;
        border-bottom: 1px solid #ddd;
        margin-top: 30px;
        list-style: none;

        span {
            font-size: 20;
            margin-left: 10px;
            margin-bottom: 20px;
            display: flex;
        }

        button {
            cursor: pointer;
            border-radius: 6px;
            padding: 8px;
            background: green;
            border: none;
            color: #FFF;
            font-weight: bold;
            margin-left: 5px;
            margin-top: 20px;
            justify-content: center;
        }

        button + button {
            margin-left: 4px;
            background: red;
            border: none;
            color: #FFF;
            font-weight: bold;
            width: 25;
        }

        button:hover {
            color: #4F4F4F;
        }
    }
`