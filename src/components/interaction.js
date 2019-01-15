import React from 'react';
import propTypes from 'prop-types';

function isNewClass(isNew) {
  if (isNew) {
    return 'is-new';
  }
  return '';
}

export default class Interaction extends React.Component {
  static propTypes = {
    info: propTypes.shape({
      focus: propTypes.shape({
        isNew: propTypes.bool.isRequired,
        overview: propTypes.string.isRequired,
        items: propTypes.array.isRequired,
      }),
    }).isRequired,
  };

  overviewParagraphs() {
    const { info } = this.props;
    const { focus } = info;
    const { overview } = focus;
    const paragraphs = overview.split('  ');

    return paragraphs.map(p => <p key={p}>{p}</p>);
  }

  itemsList() {
    const { info } = this.props;
    const { focus } = info;
    const { items } = focus;

    if (items && items.length === 0) {
      return null;
    }

    const list = items.map(item => (
      <li key={item.overview.slice(0, 4)} className={isNewClass(item.isNew)}>
        {item.overview}
      </li>
    ));

    return <ul key="items-list" className="items-list">{list}</ul>;
  }

  render() {
    const { info } = this.props;
    const { focus } = info;
    const { isNew } = focus;

    return [
      <div key="interaction" id="interaction" className={isNewClass(isNew)}>
        {this.overviewParagraphs()}
      </div>,
      this.itemsList(),
    ];
  }
}
