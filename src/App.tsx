
import Routes from "./routes";
import PostProvider from "./Providers/PostProvider";

import "./App.css";
import "./assets/stylesheet/_common.sass"
function App() {
  return (
    <div className="App">
        <PostProvider >
          <Routes />
        </PostProvider>

    </div>
  );
}

export default App;
