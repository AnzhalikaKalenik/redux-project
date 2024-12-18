import styled from 'styled-components';

export const SWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const SCard = styled.div`
    /* max-width: 400px; */
    min-height: 450px;
    margin: 10px;
    padding: 0 20px;
    border: 1px solid grey;
    border-radius: 5px;
    text-align: center;
    box-shadow: 5px 5px 8px 1px grey;
    :hover {
        box-shadow: 5px 5px 8px 1px pink;
    }
`;
export const STitle = styled.p`
    font-size: 20px;
    font-weight: 500;
`;
export const SImg = styled.img`
    max-width: 150px;
    max-height: 150px;
    padding: 5px;
`;
export const SPrice = styled.div`
    font-weight: 700;
    font-size: 14px;
    padding: 5px;
`;
export const SDescrip = styled.div`
    text-align: start;
    font-size: 14px;
    padding: 5px;
    margin-bottom: 10px;
`;
