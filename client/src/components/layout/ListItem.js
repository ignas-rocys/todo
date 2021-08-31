import styled from 'styled-components';


const StyledListItem = styled.li`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 65px;`;

export const ListItem = ({children}) => {
    return (
        <StyledListItem>
            {children}
        </StyledListItem>
    )
}