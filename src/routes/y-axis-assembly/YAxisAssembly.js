
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './YAxisAssembly.css';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import DocsTOC from '../../components/DocsTOC';

class YAxisAssembly extends React.Component {
  render() {
    return (
      <Grid bsClass={s['container-fluid']}>
        <Row>
          <Col xs={12} sm={12} md={2} lg={2} >
            <DocsTOC selected="/y-axis-assembly" />
          </Col>
          <Col xs={12} sm={12} md={10} lg={10}>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h2>Y Axis Assembly</h2>
                <h3 id='step1'>Step 1 Gather materials</h3>
                <h4>Tools</h4>
                <ul>
                  <li>Adjustable wrench x2</li>
                  <li>Needle nose pliers x1</li>
                  <li>2 and 1.5mm Hex keys</li>
                </ul>
                <h4>3D printed parts</h4>
                <ul>
                  <li>Y axis corners x4</li>
                  <li>Y motor holder x1</li>
                  <li>Y idler x1</li>
                  <li>Y belt holder x1</li>
                </ul>
                <h4>Hardware</h4>
                <ul>
                  <li>
                    Rods
                    <ul>
                      <li>M10 threaded rod 35 cm x2</li>
                      <li>M8 Chrome rod 33 cm x2</li>
                      <li>M8 threaded rod 20 cm x4</li>
                    </ul>
                  </li>
                  <li>
                    Nuts &amp; Bolts
                    <ul>
                      <li>M3x10 screw x2</li>
                      <li>M3x12 screw x2</li>
                      <li>M3x16 screw x2</li>
                      <li>M3x25 screw x1</li>
                      <li>M10 nuts x14</li>
                      <li>M10 washers x12</li>
                      <li>M8 nuts x22</li>
                      <li>M8 washers x22</li>
                      <li>Idler Bearing x1 </li>
                      <li>M3 locknut x3</li>
                      <li>M3 washer x2</li>
                      <li>GT2 pulley x1</li>
                      <li>Linear bearings x3</li>
                    </ul>
                  </li>
                  <li>
                    Electronics
                    <ul>
                      <li>Y axis endstop x1</li>
                      <li>Nema 17 stepper motor x1</li>
                    </ul>
                  </li>
                  <li>
                    Miscellaneous
                    <ul>
                      <li>Y axis carriage x1</li>
                      <li>Zip tie 10 cm x4</li>
                      <li>GT2 belt 97 cm x1</li>
                    </ul>
                  </li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <p>
                  <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/hardware.jpg'>
                    <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/hardware.jpg' />
                  </a>
                </p>
                <p>Watch how this is assembled.</p>
                <ul>
                  <li>
                    <a href='https://www.youtube.com/watch?v=dEyroKoFHkw'>Clone Y Axis Assembly pt 1</a>
                  </li>
                  <li>
                    <a href='https://www.youtube.com/watch?v=lSSVv5N3OVk'>Clone Y Axis Assembly pt 2</a>
                  </li>
                  <li>
                    <a href='https://www.youtube.com/watch?v=mc5PCTaUUeY'>Clone Y Axis Assembly pt 3</a>
                  </li>
                  <li>
                    <a href='https://www.youtube.com/watch?v=De_r0noNFU'>Clone Y Axis Assembly pt 4</a>
                  </li>
                  <li>
                    <a href='https://www.youtube.com/watch?v=UCKhUHuvsJs'>Clone Y Axis Assembly pt 5</a>
                  </li>
                  <li>
                    <a href='https://www.youtube.com/watch?v=WLLdzBGMX2A'>Clone Y Axis Assembly pt 6</a>
                  </li>
                </ul>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='step2'>Step 2 Assemble the Y-axis rods</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>M10 threaded rod 35 cm x2</li>
                  <li>M10 washers x12</li>
                  <li>M10 nuts x14</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-2-a.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-2-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Place the nuts, washers and y corners on the threaded rod.</li>
                  <li className={s.blueHighlight}>Tighten the 2 nuts against each other counter-nut.</li>
                  <li className={s.redHighlight}>Confirm that there is 10 cm distance between the counter nuts and the y axis corner.</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-2-b.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-2-b.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='step3'>Step 3 Assemble the Y-axis stage rear</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>M8 threaded rod 20 cm x2</li>
                  <li>M8 washers x8</li>
                  <li>M8 nuts x4</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-3-a.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-3-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Screw the nuts and place washers and Y-motor-holder on threaded rod.</li>
                  <li>Y-motor-mount should be somewhere in the middle of the threaded rod. The precise position doesn&rsquo;t matter at this time.</li>
                  <li>Ensure the correct orientation of Y-motor-holder.</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-3-b.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-3-b.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='step4'>Step 4 Assemble the Y-axis stage front</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>M8 threaded rod x2</li>
                  <li>M8 washers x8</li>
                  <li>M8 nuts x6</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-4-a.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-4-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Screw the nuts and place washers and Y-idler on threaded rod.</li>
                  <li>Y-idler should be somewhere in the middle of the threaded rod. The precise position doesn&rsquo;t matter at this time.</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-4-b.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-4-b.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='step5'>Step 5 Fully assemble the Y-axis stage</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>M8 washers x8</li>
                  <li>M8 nuts x8</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-5-a.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-5-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Insert Y-axis stage front and back into Y-axis side elements and lock it with washers and nuts.</li>
                  <li>Ensure the correct placement. Y-axis rear stage has to be closer to the double-nuts.</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-5-b.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-5-b.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='step6'>Step 6 Prepare for the Y-axis stage</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>Aluminum Frame x1</li>
                  <li>Y axis stage from previous steps</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-6-a.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-6-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Insert the Y-axis stage into the frame as close to Y-corners as possible.</li>
                  <li>Adjust and tighten the M8n nuts.</li>
                  <li>Rotate the Y-axis stage and repeat.</li>
                  <li>After adjusting, the Y-axis stage should cause minimum movement while inserted into the frame.</li>
                  <li>Tighten the M8n nuts gently or you&squo;ll risk damaging the 3D printed parts.</li>
                  <li>It is incredibly important that the axis is perfectly rectangular at this stage of construction, all rods need to be perfectly straight and level. If not, you&rsquo;ll have troubles calibrating later on.</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-6-b.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-6-b.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='step7'>Step 7 Assemble the Y carriage</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>Y Carriage x1</li>
                  <li>Zip ties x3</li>
                  <li>Linear bearings x3</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-7-a.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-7-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Insert zipties into the Y-carriage as shown on the picture.</li>
                  <li>Place the linear bearings in cutouts.</li>
                  <li>On side with two bearings slide bearings to the center, towards each other as close as possible.</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-7-b.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-7-b.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='step8'>Step 8 Assemble the Y idler</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>M3x25 screw x1</li>
                  <li>M3 washer x2</li>
                  <li>bearing housing x1</li>
                  <li>M3 lock nut x1</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-8-a.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-8-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>To tighten the Y-idler, use the pliers and 2mm Hex key.</li>
                  <li>Tighten the screw gently, just half turn max after the washers touch the 3D printed part.</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-8-b.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-8-b.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='step9'>Step 9 Y axis motor</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>Stepper motor x1</li>
                  <li>M3x10 screw x2</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-9-a.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-9-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Using the 2mm Hex key, secure the motor to the 3D printed part. Motor cables must be facing threaded rods.</li>
                  <li>Tighten the motor gently to avoid damage to the 3D printed part.</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-9-b.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-9-b.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='step10'>Step 10 Y Endstop</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>M3x16 screw x2</li>
                  <li>Endstop x1</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-10-a.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-10-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>To tighten the Y-endstop use 1.5mm Hex key.</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-10-b.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-10-b.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='step11'>Step 11 Y belt holder</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>M3x12 screw x2</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-11-a.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-11-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Place Y-belt holder on the Y-carriage.</li>
                  <li>Be aware of the orientation of Y-belt holder (belt entry should face towards single bearing).</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-11-b.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-11-b.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='step12'>Step 12 Y carriage rods</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>Chrome rod 33 cm x2</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href=''>
                </a>
                <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-12-a.jpg' />
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Insert the 8mm smooth rods into the linear bearings on Y-carriage.</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-12-b.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-12-b.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='step13'>Step 13 Assemble the Y axis stage</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>Assembled y carriage</li>
                  <li>Assembled y stage</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-13-a.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-13-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Insert the assembled Y-carriage into the Y-axis stage.</li>
                  <li>Insert zipties into holes in Y-corners.</li>
                  <li>Using pliers, tighten the zipties as shown in the picture.</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-13-b.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-13-b.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='step14'>Step 14 Add Y motor pulley</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>Assembled y motor</li>
                  <li>GT2 pulley x1</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-14-a.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-14-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Add pulley to motor shaft and tighten.</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-14-b.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-14-b.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='step15'>Step 15 Add belt to y axis</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>Pulley timing belt x1</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-15-a.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-15-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Run around y idler.</li>
                  <li>Run around y motor</li>
                  <li>Loop around y carriage holder.</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-15-b.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-15-b.jpg' />
                </a>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-15-c.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-15-c.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='allDone'>All Done!</h3>
                <p>Congratulations! Now on to the next step.</p>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/done.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/done.jpg' />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(YAxisAssembly);
