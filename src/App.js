import AppRouter from "./routes/AppRouter";
import "monday-ui-react-core/tokens";
import "monday-ui-style/dist/index.min.css";
import "../src/assets/css/style.css";

function App() {
  return (
    <>
      <div className="App dark-app-theme">
        <AppRouter />
      </div>
    </>
  );
}

export default App;
