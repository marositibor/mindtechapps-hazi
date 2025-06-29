import { UserList } from "./components/UsertList";
import { UserProvider } from "./context/user.context";

function App() {
  return (
    <>
      <UserProvider>
        <UserList />
      </UserProvider>
    </>
  );
}

export default App;
