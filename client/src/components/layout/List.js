import styled from 'styled-components';

const StyledList = styled.ul`
display: flex;
flex-direction: ${props => props.column ? 'column' : 'row'};
justify-content: space-between;
align-items: center;
list-style: none;
background: ${props => props.background ? 'f6f6f6' : '#fff'};
height: auto;
width: 100%;
overflow: hidden;`

export const List = ({children, background, column}) => {
    return (
        <StyledList background={background} column={column}>
            {children}
        </StyledList>
    )
}