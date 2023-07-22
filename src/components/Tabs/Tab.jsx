import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    let className = 'font-sans text-white font-normal tracking-wider capitalize text-lg leading-7 text-center sm:text-xl xl:text-2xl list-none px-4 sm:px-8 py-4 mr-50';

    if (activeTab === label) {
      className += ' bg-soi-green border-solid border-t border-x border-b-0 border-2 border-green-50 rounded-t-2xl';
    }

    return (
      <li
        className={className}
        onClick={onClick}
      >
        {label}
      </li>
    );
  }
}

export default Tab;