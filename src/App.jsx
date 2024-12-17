import "./App.css";
function App() {
  return (
    <>
      <div className="container mx-auto">
        <fieldset>
          <h1 id="title">Todo App</h1>
          <input type="text" aria-labelledby="title" />
          <button>Add Todo</button>
          <div>
            <label className="block">
              <input type="checkbox" />
              原稿を書く
            </label>
            <label className="block">
              <input type="checkbox" />
              校正する
            </label>
          </div>
        </fieldset>
      </div>
    </>
  );
}
export default App;
