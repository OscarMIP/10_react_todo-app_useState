import "./App.module.css";
import { Header } from "./Header";
import { HeaderWrapper } from "./HeaderWrapper";
import { ItemCard } from "./ItemCard";
import { ListHeader } from "./ListHeader";
import { Subheader } from "./Subheader";
import { ListContainer } from "./ListContainer";
import { ItemsList } from "./ItemsList";
import { taskList } from "./taskList";

function App() {
  return (
    <div>
      <HeaderWrapper> 
        <Header title="TodoApp" />
        <Subheader subtitle="Todo List Manager" />
        <ListHeader content="Todo List" />
      </HeaderWrapper>
      <ListContainer>
        <ItemsList itemsList={taskList}/>
      </ListContainer>
    </div>
  ); 
}

export default App;



