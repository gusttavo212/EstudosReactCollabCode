import styled from 'styled-components';

const Price = styled.h2`
    font-size: 100px;
    margin-bottom: var(--space-medium);
    & > Small {
        font-size: 0.5em;
        font-weight: lighter;
    }
`;

export default Price;