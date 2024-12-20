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
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
