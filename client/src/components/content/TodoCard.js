import styled from "styled-components";

// Layout
import { Column } from "../layout/Column";

const StyledTodoCard = styled.section`
  width: 300px;
  height: 50px;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #fff;
  padding: 8px 15px;
  border-radius: 1%;
  box-shadow: 6px 2px 23px -5px rgba(0,0,0,0.35);
`;

export const TodoCard = ({ handleClick, icon, description, important, id }) => {
  return (
    <StyledTodoCard>
      <Column width={'150px'}>
        <Column>{icon}</Column>
        <Column>
          <p>{description}</p>
        </Column>
      </Column>
      <Column>
        <input readOnly type="radio" checked={important} onClick={() => handleClick(id)} />
      </Column>
    </StyledTodoCard>
  );
};
