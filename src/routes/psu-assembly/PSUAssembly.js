
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PSUAssembly.css';
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';
import Link from '../../components/Link';

class PSUAssembly extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div>
              <h2>PSU Assembly</h2>
              <p><strong>WARNING</strong> These steps can be dangerous. Use extreme caution, do your research and don&rsquo;t do anything which is beyond your skill level.</p>
              <p>Your Clone should come w/ a PSU already assembled so these steps are for early adopters or DIY pioneers. EARTH is not responsible for your safety.</p>
              <h3>Step 1 Gather materials</h3>
              <h4>Tools</h4>
              <ul>
                <li>Flat Head screwdriver</li>
                <li>Wire Cutters</li>
                <li>Terminal Connectors</li>
                <li>General purpose replacement chord</li>
              </ul>
              <h4>Hardware</h4>
              <ul>
                <li>12V 20A PSU</li>
                <li>14 AWG</li>
              </ul>
              <img src='' />
              <hr />
              <h3>Step 2 Strip Wires</h3>
              <h4>Hardware</h4>
              <ul>
                <li>14 AWG</li>
              </ul>
              <img src='' />
              <ol>
                <li>Using the wire cutters strip both ends of the 14 AWG</li>
              </ol>
              <img src='' />
              <hr />
              <h3>Step 3 Cover end of wires</h3>
              <h4>Hardware</h4>
              <ul>
                <li></li>
              </ul>
              <img src='https://i.imgur.com/lNiRREX.jpg' />
              <ol>
                <li>Using the wire cutters crimp a terminal connector on each end of the 14 AWG.</li>
              </ol>
              <img src='' />
              <hr />
              <h3>Step 4 Cover end replacement chord</h3>
              <h4>Hardware</h4>
              <ul>
                <li></li>
              </ul>
              <img src='' />
              <ol>
                <li>Using the wire cutters crimp a terminal connector on each end of the replacement chord.</li>
              </ol>
              <img src='' />
              <hr />
              <h3>Step 5 Connect chords to PSU</h3>
              <h4>Hardware</h4>
              <ul>
                <li>Flat head screwdriver</li>
              </ul>
              <img src='' />
              <ol>
                <li>Black on the replacement chord to Live</li>
                <li>White to Neutral</li>
                <li>Green To Ground</li>
                <li>Two black AWG to Common</li>
                <li>Two red AWG to Positive</li>
              </ol>
              <img src='https://i.imgur.com/OXB4SJk.jpg' />
              <hr />
              <h3>All Done!</h3>
              <img src='https://i.imgur.com/hyvxmwj.jpg' />
              <ul>
                <li>Congratulations! Now on to the next step.</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(PSUAssembly);
