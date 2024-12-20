import styled from 'styled-components';

export const SButton = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: fixed;
    bottom: 40px;
    right: 40px;
    font-size: 25px;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 30px;
        height: 30px;
        top: 10px;
        right: 20px;
    }
`;
