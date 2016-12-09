import React from 'react';

class SidebarSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initialValue,
    };
    this._onSubmit = this.onSubmit.bind(this);
    this._onInput = this.onInput.bind(this);
  }

  onInput(e) {
    this.setState({
      value: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSearch(this.state.value);
  }

  render() {
    return (
      <form
        className="sidebar-form"
        method="get"
        onSubmit={this._onSubmit}
      >
        <div className="input-group">
          <input
            className="form-control"
            name="q"
            onChange={this._onInput}
            placeholder="Search..."
            type="text"
          />
          <span className="input-group-btn">
            <button
              className="btn btn-flat"
              id="search-btn"
              name="search"
              type="submit"
            >
              <i className="fa fa-search" />
            </button>
          </span>
        </div>
      </form>
    );
  }
}

SidebarSearch.propTypes = {
  initialValue: React.PropTypes.string,
  onSearch: React.PropTypes.func.isRequired,
};

SidebarSearch.defaultProps = {
  initialValue: '',
};

export default SidebarSearch;
