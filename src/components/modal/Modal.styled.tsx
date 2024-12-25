import styled from 'styled-components';

export const SModal = styled.div<{ active: boolean }>`
    font-size: 20px;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    opacity: ${props => (props.active ? 1 : 0)};
    pointer-events: ${props => (props.active ? 'all' : 'none')};
`;

export const SModalContent = styled.div<{ active: boolean }>`
    font-size: 20px;
    padding: 20px;
    border-radius: 12px;
    background-color: white;
    width: 40vw;
    box-shadow: 1px 1px 5px 1px pink;

    transition: transform 0.3s ease; /* Плавный переход */
    transform: scale(${props => (props.active ? 1 : 0.5)});

    @media (max-width: 768px) {
        width: 70vw;
    }
`;
