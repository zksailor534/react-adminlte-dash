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
        method="get"
        className="sidebar-form"
        onSubmit={this.onSubmit.bind(this)}
      >
        <div className="input-group">
          <input
            type="text"
            name="q"
            className="form-control"
            placeholder="Search..."
            onChange={this.onInput.bind(this)}
          />
            <span className="input-group-btn">
              <button
                type="submit"
                name="search"
                id="search-btn"
                className="btn btn-flat"
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
