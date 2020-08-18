import React from 'react';
import {
  Affix, Layout, Row, Col,
} from 'antd';
import FeatherIcon from 'feather-icons-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { globalHistory } from '@reach/router';
import style from './sidebar.module.less';
import { useWindowSize } from '../../../utils/hooks';
import Config from '../../../../config';

const { Content } = Layout;
const {
  facebook, github, linkedin, twitter, kaggle,
} = Config.social;

const DomContent = () => (
  <aside>
    <div className={style.profileAvatar} />
    <div className={`${style.name} centerAlign`}>
      <div className={`${style.boxName} centerAlign`}>
        <h2>
          <span>Debasish</span>
          {' '}
          <span>Dutta</span>
        </h2>
      </div>
      <div className={`${style.badge} ${style.badgeGray}`}>Budding Data Scientist</div>
      <div className="centerAlign box">
        <a href={facebook} target="_blank" label="button" rel="noopener noreferrer"><img alt="ddmasterdon | Facebook" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/facebook.svg" style={{ marginLeft: '10px' }} /></a>
        <a href={twitter} target="_blank" label="button" rel="noopener noreferrer"><img alt="ddmasterdon | Twitter" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" style={{ marginLeft: '10px' }} /></a>
        <a href={github} target="_blank" label="button" rel="noopener noreferrer"><img alt="ddmasterdon | Github" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg" style={{ marginLeft: '10px' }} /></a>
        <a href={linkedin} target="_blank" label="button" rel="noopener noreferrer"><img alt="ddmasterdon | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" style={{ marginLeft: '10px' }} /></a>
        <a href={kaggle} target="_blank" label="button" rel="noopener noreferrer"><img alt="ddmasterdon | Kaggle" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.4.0/icons/kaggle.svg" style={{ marginLeft: '10px' }} /></a>
      </div>
      <ul className={`box ${style.badge} contactBlock`}>
        <li className={`${style.contactBlockItem}`}>
          <span>
            <FeatherIcon size="19" icon="calendar" />
            {' '}
          </span>
&nbsp; &nbsp; Aug 20,1997
        </li>
        <li className={`${style.contactBlockItem}`}>
          <span><FeatherIcon size="19" icon="inbox" /></span>
          {' '}
&nbsp; &nbsp;
          <a
            href="https://www.ddtechblog.com"
            target="_top"
          >
            <span>www.ddtechblog.com</span>
          </a>
        </li>
        <li className={`${style.contactBlockItem}`}>
          <span><FeatherIcon size="19" icon="mail" /></span>
          {' '}
&nbsp; &nbsp;
          <a
            href="mailto:&#114;&#111;&#108;&#119;&#105;&#110;&#109;&#111;&#110;&#116;&#101;&#105;&#114;&#111;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
            target="_top"
          >
            <span className={style.emailHider}>@</span>
          </a>
        </li>
        <li className={`${style.contactBlockItem}`}>
          <span><FeatherIcon size="19" icon="smartphone" /></span>
          {' '}
&nbsp; &nbsp; +91 8472084923
        </li>
      </ul>
      <div className={style.resumeDownload}>
        <a href="../resume.pdf" download target="_blank">Download CV</a>
      </div>
    </div>
  </aside>
);


const Sidebar = (props) => {
  const [width] = useWindowSize();
  const { children } = props;
  const { pathname } = globalHistory.location;
  let domContent = <DomContent />;
  if (width > 997) {
    domContent = (
      <Affix offsetTop={0}>
        <DomContent />
      </Affix>
    );
  }
  if (width < 768) {
    domContent = <></>;
    if (pathname === '/') {
      domContent = <DomContent />;
    }
  }
  return (
    <>
      <Layout>
        <Content className={`${style.content} ${style.background}`}>
          <Row>
            <Col sm={24} md={9} lg={6} className={style.sidebarContent}>
              { domContent }
            </Col>
            <Col sm={24} md={15} lg={18}>
              <Layout className={`${style.background} ${style.boxContent} borderRadiusSection`}>
                { children }
              </Layout>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export const Sidebar404 = (props) => {
  const { children } = props;
  return (
    <Layout>
      <Content className={`${style.content} ${style.background} `}>
        <Row>
          <Col sm={24} md={24} lg={24}>
            <Layout className={`${style.background} ${style.boxContent} ${style.sideBar404Radius}`}>
              {children}
            </Layout>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Sidebar;
