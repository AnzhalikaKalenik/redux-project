import styled from 'styled-components';

export const SWrapper = styled.div`
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap; */

    padding: 50px 150px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 1000px) {
        padding: 50px 100px;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }
    @media (max-width: 768px) {
        padding: 30px 50px;
        grid-template-columns: repeat(1, 1fr);
        gap: 10px;
    }
`;
