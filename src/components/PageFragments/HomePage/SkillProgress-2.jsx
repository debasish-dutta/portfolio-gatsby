import React from 'react';
import { Row, Col } from 'antd';

import ProgressBarB from '../../Progress/Progress';
import ProgressBarY from '../../Progress/ProgressY';

const SkillsProgress = () => (
  <div>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <h3>Technologies</h3>
        <ProgressBarY
          percent={80}
          text="Data Extraction and Transformation"
        />
        <ProgressBarY
          percent={95}
          text="Data Analysis, Wrangling and Visualization"
        />
        <ProgressBarY
          percent={85}
          text="Machine Learning"
        />
        <ProgressBarY
          percent={70}
          text="Deep/Transfer Learning"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <h3>Frameworks</h3>
        <ProgressBarB
          percent={90}
          text="Python"
        />
        <ProgressBarB
          percent={85}
          text="Mysql & MongoDB"
        />
        <ProgressBarB
          percent={68}
          text="Big Data"
        />
        <ProgressBarB
          percent={80}
          text="Gatsby"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
