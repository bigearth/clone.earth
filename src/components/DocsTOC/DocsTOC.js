
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DocsTOC.css';
import Link from '../../components/Link';

class DocsTOC extends React.Component {

  static propTypes = {
    selected: PropTypes.string.isRequired,
  };

  static toc = {
    'hardware': [
      {
        'text': '.stl files for 3D printed parts',
        'href': 'https://github.com/bigearth/clone-stls',
        'external': true
      },
      {
        'text': 'Y axis assembly',
        'href': '/y-axis-assembly',
        'external': false
      },

      {
        'text': 'X axis assembly',
        'href': '/x-axis-assembly',
        'external': false
      },
      {
        'text': 'Z axis assembly',
        'href': '/z-axis-assembly',
        'external': false
      },
      {
        'text': 'Extruder assembly',
        'href': '/extruder-assembly',
        'external': false
      },
      {
        'text': 'LCD assembly',
        'href': '/lcd-assembly',
        'external': false
      },
      {
        'text': 'Heatbed assembly',
        'href': '/heatbed-assembly',
        'external': false
      },
      {
        'text': 'Electronics assembly',
        'href': '/electronics-assembly',
        'external': false
      },
      {
        'text': 'Credits',
        'href': '/credits',
        'external': false
      }
    ]
  };

  goToLink(toc) {
    if(toc.external) {
      window.open(toc.href);
    } else {
      window.location.href=toc.href;
    }
  }

  goToLinkSelect(ev) {
    var link = ev.currentTarget[ev.currentTarget.selectedIndex].value;
    console.log(typeof(ev.currentTarget[ev.currentTarget.selectedIndex].dataset.external));
    if(ev.currentTarget[ev.currentTarget.selectedIndex].dataset.external === 'true') {
      window.open(link)
    } else {
      window.location.href = link;
    }
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className="hidden-xs hidden-sm">
            <div className={s['list-group']}>
              {DocsTOC.toc.hardware.map(function(toc, i) {
                var selectedClass = (this.props.selected === toc.href) ? 'list-group-item active' : 'list-group-item';
                var linkage = (toc.external) ? <span className="glyphicon glyphicon-link" aria-hidden="true"></span> : '';
                return (
                  <button type="button" className={selectedClass} key={i} onClick={() => this.goToLink(toc)}>{toc.text} {linkage}</button>
                );
              }, this)}
            </div>
          </div>
          <div className="hidden-md hidden-lg form-inline">
            <label className="inline">Docs:</label>
            <select className="form-control" onChange={(ev) => this.goToLinkSelect(ev)} defaultValue={this.props.selected}>
              {DocsTOC.toc.hardware.map(function(toc, i) {
                return (
                  <option key={i} value={toc.href} data-external={toc.external}>{toc.text}</option>
                );
              }, this)}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(DocsTOC);