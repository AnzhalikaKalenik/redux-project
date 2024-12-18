import styled from 'styled-components';

export const SWrapper = styled.div`
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap; */

    padding: 50px 150px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`;
