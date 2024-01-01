import AppRouter from "./routes/AppRouter";
import "monday-ui-react-core/tokens";
import { ThemeProvider } from "monday-ui-react-core";

function App() {
  return (
    <>
      <div className="App">
        <AppRouter />
      </div>
    </>
  );
}

export default App;
