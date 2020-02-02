import React from 'react'
import { Jumbotron } from '../common/jumbotron/Jumbotron';
import { TextWithArrow } from '../common/TextWithArrow/TextWithArrow';
import { Title } from '../common/Title/Title';
import { Layout } from '../common/Layout';
import { Row, Col } from 'react-bootstrap';
import capabilitiesImage from '../home/CapabilitiesSection/bunner.png';
import feed from './feed.png';
import detailed from './detailed.png';
import './Capabilities.scss';


export const Capabilities = (props) => (
  <div className='capabilities-wrapper'>
    <Jumbotron jumboClass='capabilities-slide' title='Capabilities'/>
    <Layout>
      <img src={capabilitiesImage} alt='OPTIMIZE_Capabilities' />
      <div className='capabilities-item'>
        <Title titleType='sub-title' title='Company Capability and Expertise' border='title-border' />
        <p className='capabilities-text'>OPTIMIZE capability to assist customers during all phases of Project Development, from preliminary Feasibility Studies and screening quality Cost Estimates through to Detailed Engineering Design, Contract Negotiations, Procurement support, Project Management and Commissioning. The services rendered include a full range of Process, Mechanical, Instrumentation, Electrical, Civil, Structural, Pipeline Dynamics, Safety and Environmental, engineering.</p>
        <p className='capabilities-text'>OPTIMIZE handles projects of all sizes from minor trouble-shooting exercises through to full Engineering, Procurement support and Construction Project Management (EPCM) of new facilities. It is particularly responsive to customer's needs and operates as an extension to the Customer's own organization. </p>
        <p className='capabilities-text'>We recognize the need to balance cost versus "value add" to deliver a cost-effective solution to our customers</p>
        <p className='capabilities-text'>OPTIMIZE increasing capability has supported solid growth, particularly in the Hydrocarbons sector. Our growing team is assigned to perform work for various customers in the region and across Africa. The recruitment and expansion strategies at our location are focused upon providing the right people to meet the needs of our customers.</p>
        <p className='capabilities-text'>OPTIMIZE team prides itself in being able to provide total solutions to meet customer’s requirements. In brief, OPTIMIZE is supported by an array of state-of-the-art management, engineering and construction services that provide our customers a top performance project.</p>
        <p className='capabilities-text'>OPTIMIZE shall use the Full project management, project controls, procurement support, quality assurance, HSE management, construction management supervision, commissioning and start up and cost ensures Expertise for all projects type.</p>
        <p className='capabilities-text'>Further discipline expertise exists in all engineering disciplines including Process engineering and process simulation and comply with equipment selection based on the customer requirements such as rotating and static mechanical equipment for design of pumps and tanks.</p>
        <p className='capabilities-text'>Every project’s success depends on the individuals who are members of the team, their supporting corporate infrastructure and the depth of partnership the team shares with its Client. We have committed personnel with excellent credentials whose experience has been strengthened on fast tracked projects OPTIMIZE has a proven record of achievement, having successfully completed a wide range of projects in this region.</p>
        <p className='capabilities-sub-title'>OPTIMIZE provides full engineering design and project management capabilities, covering the following areas:</p>
        <Row>
          <Col xs={12} md={6}>
            <TextWithArrow text='Onshore oil and gas facilities.' />
            <TextWithArrow text='Offshore structures and facilities.' />
            <TextWithArrow text='Offshore and Onshore Pipelines.' />
            <TextWithArrow text='Tank farms.' />
            <TextWithArrow text='Compressor stations.' />
            <TextWithArrow text='Distributed control systems.' />
            <TextWithArrow text='Refineries.' />
          </Col>
          <Col xs={12} md={6}>
          <TextWithArrow text='Communications systems including SCADA.' />
          <TextWithArrow text='Pumping stations.' />
          <TextWithArrow text='Metering stations.' />
          <TextWithArrow text='Electrical transmission lines.' />
          <TextWithArrow text='Security facilities.' />
          <TextWithArrow text='Petrochemical plant modifications.' />
          <TextWithArrow text='Firefighting and hydraulic analysis.' />
          </Col>
        </Row>
        <Title titleType='sub-title' title='Feasibility' border='title-border' />
        <p className='capabilities-sub-title'>Machine Learning and Data Science</p>
        <p className='capabilities-text'>OPTIMIZE Engineering with KAGERA has the capabilities to provide an integrated ML (Machine Learning) solutions. This bilateral cooperation entails data analytics, developing predictive models, deep learning and apply machine learning methods in oil and gas industry.</p>
        <TextWithArrow text='Advanced and dynamic modeling using ML (Machine Learning) tools.' />
        <TextWithArrow text='Refinery Linear Programming for the best return of investment using GEKKO Dynamics.' />
        <TextWithArrow text='Applying Machine Learning algorithm on production facilities to improve and optimize the operating conditions and predict the potential downtime.' />
        <TextWithArrow text='Supporting the predictive maintenance via clustering and classification methods.' />
        <TextWithArrow text='Predict the failure of rotating equipment using logistic regression method. ' />
        <p className='capabilities-sub-title'>Process Safety</p>
        <TextWithArrow text='Ability to conduct and lead HAZOP/ HAZID safety studies.' />
        <TextWithArrow text='Consequence modeling.' />
        <TextWithArrow text='Severity analysis.' />
        <TextWithArrow text='Risk Assessment.' />
        <TextWithArrow text='QRA (Quantitative Risk Assessment).' />
        <TextWithArrow text='LOPA and SIL Determination.' />
        <TextWithArrow text='SIL Verification.' />
        <p className='capabilities-sub-title'>Flow Assurance</p>
        <TextWithArrow text='Detailed thermal-hydraulic analysis.' />
        <TextWithArrow text='Sub-sea jumper thermal assessment.' />
        <TextWithArrow text='Production profile management and field life cycle evaluation.' />
        <TextWithArrow text='Hydrodynamic and terrain slug assessment.' />
        <TextWithArrow text='Hydrate Assessment & Remedy.' />
        <TextWithArrow text='Erosion-Corrosion Assessment.' />
        <p className='capabilities-sub-title'>Process Engineering</p>
        <TextWithArrow text='Feasibility Studies and Techno-economic Evaluation.' />
        <TextWithArrow text='Project Evaluation and NPV (Net Present Value) Assessment.' />
        <TextWithArrow text='Field Trouble shooting and ad-hoc studies.' />
        <TextWithArrow text='Production increase and Real Time Optimization (RTO).' />
        <TextWithArrow text='Pressure surge (water hammer) analysis for pipeline and piping.' />
        <TextWithArrow text='Operator Training Simulation.' />
        <Title titleType='sub-title' title='Front-End Engineering Design' border='title-border' />
        <p className='capabilities-text'>OPTIMIZE’s skilled and experienced professionals are dedicated to providing first class service in executing FEED project in offshore processing, upstream GOSP, gas processing and refinery engineering.</p>
        <p className='capabilities-text'>Our structured way of working has enabled and empowered us to execute various FEED projects over the last 5 years in Oil & Gas industry.</p>
        <img src={feed} alt='OPTIMIZE_Capabilities' />
        <Title titleType='sub-title' title='Detailed Engineering' border='title-border' />
        <p className='capabilities-sub-title'>Detailed Engineering and Vendor Communication and technical bid evaluation</p>
        <p className='capabilities-text'>OPTIMIZE has the capabilities to technically evaluate vendors’ bid and assist the customer to make right decision for the most viable engineering options. OPTIMIZE process work flow in Detailed Engineering phase has been always appreciated from our customers.</p>
        <img src={detailed} alt='OPTIMIZE_Capabilities' />
        <Title titleType='sub-title' title='Construction Supervision' border='title-border' />
        <TextWithArrow text='OPTIMIZE supports the construction plans throughout the full lifecycle of the project to yield the greatest possible benefits to our customers.' />
        <TextWithArrow text='OPTIMIZE helps customers realize the maximum value of their project delivery by converting high-potential value options identified in the conceptual phase into fully defined, safe and successfully executed ones.' />
        <Title titleType='sub-title' title='OTS' border='title-border' />
        <p className='capabilities-text'>Operator Training Simulators (OTS) are advanced computer-based training tools that help give operators the skills they need to run a process or plant. Operators learn how to manage a refinery in this virtual computer through the use of dynamic simulation model that controls the plant responses. This provides trainees the opportunity to learn how to react appropriately when a similar situation occurs in the actual plant. The use of OPTIMIZE OTS solutions enables companies to address challenges before they occur in the real world, which helps them remain competitive in the global economy.</p>
        <p className='capabilities-text'>Functions included in OTS are as follows:</p>
        <p className='capabilities-sub-title'>Reduce Startup and Commissioning Times</p>
        <p className='capabilities-text'>Operator Training Simulators effectively train operators for controls checkout and plant startup to reduce commissioning times significantly. These systems help ensure faster startup times, quicker recovery from process upsets, fewer equipment stresses, and the ability to correct procedure errors prior to online production.</p>
        <p className='capabilities-sub-title'>Reduce Startup and Commissioning Times</p>
        <p className='capabilities-text'>Operator Training Simulators effectively train operators for controls checkout and plant startup to reduce commissioning times significantly. These systems help ensure faster startup times, quicker recovery from process upsets, fewer equipment stresses, and the ability to correct procedure errors prior to online production.</p>
        <Title titleType='sub-title' title='Software List' border='title-border' />
        <p className='capabilities-text'>The OPTIMIZE can use a full list of programs that support a good suit for Engineering and Practices as per Project request and needs, the following is our list of program and software but not limited to the below:</p>
        <Row>
          <Col xs={12} md={6}>
            <TextWithArrow text='Pipe-Phase' />
            <TextWithArrow text='Primavera' />
            <TextWithArrow text='Olga' />
            <TextWithArrow text='Flare-net' />
            <TextWithArrow text='Smart Plant' />
            <TextWithArrow text='Pipe-net' />
          </Col>
          <Col xs={12} md={6}>
          <TextWithArrow text='Auto-cad' />
          <TextWithArrow text='Hydraulics Analysis' />
          <TextWithArrow text='PDS Equipment 3D Modeling' />
          <TextWithArrow text='CAESAR II' />
          <TextWithArrow text='In-house Software' />
          </Col>
        </Row>
      </div>
    </Layout>
  </div>
)
