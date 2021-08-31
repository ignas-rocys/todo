import styled from 'styled-components';

const StyledRow = styled.div`
margin: 10px 0;
display: ${props => props.flex ? props.flex : null};
flex-direction: ${props => props.row ? props.row : null};
justify-content: ${props => props.flexEnd ? props.flexEnd : null};
`;

export const Row = ({children, flex, row, flexEnd}) => {
    return (
        <StyledRow flex={flex} row={row} flexEnd={flexEnd}>
            {children}
        </StyledRow>
    )
}