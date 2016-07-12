import React from 'react';

class SidebarMenuSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initialValue,
    };
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
        action="#"
        className="sidebar-form"
        method="get"
        onSubmit={this.onSubmit.bind(this)}
      >
        <div className="input-group">
          <input
            className="form-control"
            name="q"
            onChange={this.onInput.bind(this)}
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
                <i className="fa fa-search"></i>
              </button>
            </span>
        </div>
      </form>
    );
  }
}

SidebarMenuSearch.propTypes = {
  initialValue: React.PropTypes.string,
  // value: React.PropTypes.object,
  onSearch: React.PropTypes.func.isRequired,
};

SidebarMenuSearch.defaultProps = {
  initialValue: '',
};

export default SidebarMenuSearch;
