import styled from "styled-components";
const {motion} = require('framer-motion');

export const HomePageStyles = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Lexend', sans-serif;
    margin-top: 3rem;
    h1{
        font-size: 4rem;
        font-family: 'Syne', sans-serif;
        color: #300D38;
        margin-bottom: 1rem;
    }
`;

export const FormStyles = styled(motion.form)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .text-inputs {
        margin: 1rem;
        padding: 1rem 0rem;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2), 
                    0px 20px 40px rgba(0, 0, 0, 0.2);
        border-radius: 1rem;
        width: 100%;
        font-size: 2rem;
        text-align: center;
        background: #F9F8F9;
        :hover {
            animation: shake 0.75s ease-in forwards;
        }
    }
    label{
        font-size: 1.5rem;
    }
    select{
        font-family: 'Lexend', sans-serif;
        background: #FFA900;
        padding: 0.75rem;
        border-radius: 1rem;
        margin: 0.5rem 0rem 0.5rem 0rem;
        font-size: 1rem;
        cursor: pointer;
    }
    .submitBtn{
        cursor: pointer;
        padding: 1rem 3rem;
        font-family: 'Lexend', sans-serif;
        border-radius: 1rem;
        border: none;
        margin-top: 1.2rem;
        margin-bottom: 1.2rem;
        background: #F9F8F9;
        :hover{
            background: #FFA900;
            animation: shake 0.75s ease-in forwards;
        }
    }

    @keyframes shake {
        0% { 
            transform: rotate(0deg);
        }
        30% {
            transform: rotate(2deg);
        }
        50% {
            transform: rotate(-3deg);
        }
        70% {
            transform: rotate(3deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }

    @media screen and (max-width: 425px) {
        .text-inputs{
            font-size: 1.2rem;
        }
    }
`;

export const ImgContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 60%;
        height: auto;
        margin-bottom: 3rem;
    }
`