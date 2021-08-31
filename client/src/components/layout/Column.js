import styled from 'styled-components';

const StyledColumn = styled.section`
width: ${props => props.width ? props.width : null};
display: flex;
align-items: center;`;

export const Column = ({children, width}) => {
    return (
        <StyledColumn width={width}>
            {children}
        </StyledColumn>
    )
}