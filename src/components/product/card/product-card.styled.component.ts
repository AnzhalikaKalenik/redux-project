import styled from 'styled-components';

export const SWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const SCard = styled.div`
    max-width: 500px;
    margin: 10px;
    padding: 20px;
    border: 1px solid grey;
    border-radius: 5px;
    text-align: center;
`;
export const STitle = styled.p`
    font-size: 20px;
    font-weight: 500;
`;
export const SImg = styled.img`
    max-width: 150px;
    max-height: 200px;
    padding: 5px;
`;
export const SPrice = styled.div`
    font-weight: 700;
    font-size: 14px;
    padding: 5px;
`;
export const SDescrip = styled.div`
    text-align: start;
    padding: 5px;
    margin-bottom: 10px;
`;
