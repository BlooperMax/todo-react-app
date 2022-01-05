import './App.css';

const App = ()=>{
  return (
    <div className="App">
      <div className="app_container">
        <header className="app_header">
          <h1>To-Do List</h1>

          <form className="todo_form">

              <label className="label_form"> Description: </label>
              <input className="input_text" type="text" maxlength="50"/>
              <button className="form_button" >
                Submit
              </button>

          </form>

        </header>

        <article className="list_container">
          <div className="list_item">
            <input type="checkbox"/>
            <p>
              Todo Texto
            </p>
            <time>
              00:00
            </time>
          </div>
          <div className="list_item">
            <input type="checkbox"/>
            <p>
              Todo Texto
            </p>
            <time>
              00:00
            </time>
          </div>
        </article>

        <footer className="app_footer">
          <p>total: 0</p>
          <span>
            Filter by:
            <select className="app_select" name="select">
              <option value="all" selected>All</option>
              <option value="checked">Checked</option>
              <option value="unchecked">Unchecked</option>
            </select>
          </span>
        </footer>

      </div>

    </div>
  );
}

export default App;
