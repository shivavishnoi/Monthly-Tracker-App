function Header(props) {
  return (
    <div className="header">
      <header>
        <h1 className="padding-2">Monthly Activity Tracker</h1>
        <form onSubmit={props.handleAddActivity} className="padding-3">
          <input
            type="text"
            value={props.inputValue}
            name="inputValue"
            id="search"
            onChange={props.handleInput}
            className="padding-3"
          />
          <input type="submit" value="Add Activity" className="padding-3" />
        </form>
      </header>
    </div>
  );
}
export default Header;
