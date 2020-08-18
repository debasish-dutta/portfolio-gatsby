import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';
import ProgressBarG from '../../Progress/progressG';

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <h3>Data Science Skills</h3>
        <ProgressBar
          percent={95}
          text="Data Analysis, Wrangling"
        />
        <ProgressBar
          percent={80}
          text="Data Extraction & Transformation"
        />
        <ProgressBar
          percent={90}
          text="Data Visualization"
        />
        <ProgressBar
          percent={85}
          text="Machine Learning"
        />

        <ProgressBar
          percent={70}
          text="Deep/Transfer Learning"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <h3>Progamming Languages</h3>
        <ProgressBarG
          percent={90}
          text="Python"
        />
        <ProgressBarG
          percent={85}
          text="C"
        />
        <ProgressBarG
          percent={68}
          text="HTML & CSS"
        />
        <ProgressBarG
          percent={70}
          text="SQL"
        />
        <ProgressBarG
          percent={60}
          text="Javascript"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
