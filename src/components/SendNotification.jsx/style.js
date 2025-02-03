import styled from "styled-components";

const Wrapper = styled.div`
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

export const Title = styled.h3`
    color: #333;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: 10px;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
`;

export const Button = styled.button`
    width: 100%;
    padding: 12px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    background: #000070;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: #0056b3;
    }
`;

export default Wrapper;
