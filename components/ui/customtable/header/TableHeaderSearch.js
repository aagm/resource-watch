import React from 'react';
import PropTypes from 'prop-types';
import { Autobind } from 'es-decorators';

// Next
import { Link } from 'routes';

// Components
import Icon from 'components/ui/Icon';

class TableHeaderSearch extends React.Component {
  /**
   * Event handler executed when the user search
   * @param {string} { value } Search keywords
   */
  @Autobind
  onSearch(e) {
    this.props.onSearch({ value: e.currentTarget.value });
  }

  render() {
    const { link, input } = this.props;

    return (
      <div className="c-table-header-search">
        <div className="c-field -fluid">
          <input
            className="-fluid"
            onKeyUp={this.onSearch}
            placeholder={input.placeholder}
          />
          <Icon name="icon-search" className="-small" />
        </div>
        <Link route={link.route} params={link.params}>
          <a className="c-button -secondary">{link.label}</a>
        </Link>
      </div>
    );
  }
}

TableHeaderSearch.propTypes = {
  input: PropTypes.object.isRequired,
  link: PropTypes.object.isRequired,
  onSearch: PropTypes.func.isRequired
};

TableHeaderSearch.defaultProps = {
  input: {},
  link: {}
};

export default TableHeaderSearch;