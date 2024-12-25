import styled from 'styled-components';

export const SWrapperPortal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const SContentPortal = styled.div`
    text-align: center;
    max-height: 100vh;
    overflow-y: auto;
    scrollbar-width: none;
    font-size: 20px;
    border: 1px solid white;
    border-radius: 12px;
    background-color: white;

    min-width: 50vw;
    position: relative;
    box-shadow: 2px 2px 8px 1px pink;
    padding-bottom: 20px;

    @media (max-width: 768px) {
        width: 100vw;
        height: 100vh;
    }
`;
export const SButtonPortalClose = styled.button`
    position: absolute;
    top: 25px;
    right: 20px;
    cursor: pointer;
    border: 1px solid white;
    background-color: white;
    font-size: 30px;
`;
