
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ZAxisAssembly.css';
import { Grid, Row, Col } from 'react-bootstrap';
import Link from '../../components/Link';

class ZAxisAssembly extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div>
              <h2>Z Axis Assembly</h2>
              <h3>Step 1 Gather materials</h3>
              <h4>Tools</h4>
              <ul>
                <li>Adjustable wrench</li>
                <li>3.6mm flathead screwdriver</li>
                <li>Needle-nose pliers</li>
                <li>2.5 and 1.5mm Hex key</li>
              </ul>
              <h4>3D printed parts</h4>
              <ul>
                <li>Z-axis-top-left</li>
                <li>Z-axis-top-right</li>
                <li>Z-axis-bottom-left</li>
                <li>Z-axis-bottom-right</li>
              </ul>
              <h4>Hardware</h4>
              <ul>
                <li>M3x10 screw x20</li>
                <li>M3x10 washer x8</li>
                <li>M3 locknut x10</li>
                <li>Stepper motor x2</li>
                <li>8M Lead screw x2</li>
                <li>Lead screw bushing x2</li>
                <li>5M to 8M flex coupler x2</li>
                <li>Chrome rod x2</li>
              </ul>
              <hr />
              <h3>Step 2 Attach Z axis tops and bottoms</h3>
              <h4>Hardware</h4>
              <ul>
                <li>M3x10 screw x10</li>
                <li>M3 locknut x10</li>
              </ul>
              <img src='https://i.imgur.com/6RwYwlD.jpg' />
              <ol>
                <li>Place parts on the frame</li>
                <li>Use 2.5mm Hex key to tighten the parts to the frame.</li>
                <li>Tighten them gently.</li>
              </ol>
              <img src='https://i.imgur.com/UJp7kiF.jpg' />
              <hr />
              <h3>Step 3 Attach the Z axis motors</h3>
              <h4>Hardware</h4>
              <ul>
                <li>Stepper motor x2</li>
                <li>M3x10 screw x8</li>
                <li>M3x10 washer x8</li>
              </ul>
              <img src='https://i.imgur.com/BBEQ2L9.jpg' />
              <ol>
                <li>Place the Z motors on the frame.</li>
                <li>Place washers and screws in place.</li>
                <li>Use 2.5mm Hex key to tighten the motor to the printed part.</li>
              </ol>
              <img src='https://i.imgur.com/GrNVl4v.jpg' />
              <hr />
              <h3>Step 4</h3>
              <h4>Hardware</h4>
              <ul>
                <li>8M Lead screw x2</li>
                <li>Lead screw bushing x2</li>
                <li>5M to 8M flex coupler x2</li>
                <li>M3x10 screw x2</li>
              </ul>
              <img src='https://i.imgur.com/jHVyOU9.jpg' />
              <ol>
                <li>Screw the bushings on the lead screws</li>
                <li>Place the screws in the bushings</li>
                <li>Place the lead screw in the 8M side of the flex coupler and tighten.</li>
                <li>Place the motor shaft in the 5M side of the flex coupler and tighten.</li>
              </ol>
              <img src='https://i.imgur.com/IrU3Rs9.jpg' />
              <hr />
              <h3>Step 4 Attach the X Axis</h3>
              <h4>Hardware</h4>
              <ul>
                <li>Assembled X Axis</li>
                <li>Chrome rod x2</li>
              </ul>
              <img src='https://i.imgur.com/SSyZTMq.jpg' />
              <ol>
                <li>Remove Z Axis tops from frame.</li>
                <li>Remove lead screw bushings.</li>
                <li>Insert chrome rods and lead screws in to x axis.</li>
                <li>Screw lead screw bushings in to printed parts.</li>
                <li>Insert chrome rods in to z bottoms.</li>
                <li>Reattach z axis tops to frame.</li>
              </ol>
              <img src='https://i.imgur.com/LLkxEh2.jpg' />
              <hr />
              <h3>All Done!</h3>
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

export default withStyles(s)(ZAxisAssembly);
