import React from 'react';
import { TextWithArrow } from '../../common/TextWithArrow/TextWithArrow';
import { Title } from '../../common/Title/Title';
import './ServicesContent.scss';


export const ServicesContent = props => {
  return(
    <div className='services-content-wrapper'>
    {/* Services            */}
      <Title titleType='main-title' title='Services' border='title-border' />
      <p className='services-text'>OPTIMIZE provides consulting services to help companies to reduce the likelihood and consequences of release events, ensure operation stability and increase the profit margins. Our engineering services enable our clients to achieve their safety and security objectives more efficiently and effectively.</p>
      <p className='services-text'>OPTIMIZE can offer full discipline engineering services including:</p>

    {/* Engineering Level 1     */}
      <p className='services-title'>Engineering Services</p>

    {/* Machine Level 1.1       */}
      <p className='services-sub-title'>Machine Learning and Data Analytics</p>
      <p className='services-text'>OPTIMIZE Engineering with KAGERA has the capabilities to provide an integrated ML (Machine Learning) solutions. This bilateral cooperation entails data analytics, developing predictive models, deep learning and apply machine learning methods in oil and gas industry.</p>
      <TextWithArrow text='Advanced and dynamic modeling using ML (Machine Learning) tools.' />
      <TextWithArrow text='Refinery Linear Programming for the best return of investment using GEKKO Dynamics' />
      <TextWithArrow text='Applying Machine Learning algorithm on production facilities to improve and optimize the operating conditions and predict the potential downtime.' />
      <TextWithArrow text='Supporting the predictive maintenance via clustering and classification methods.' />
      <TextWithArrow text='Predict the failure of rotating equipment using logistic regression method.' />

    {/* Process Level 1.2       */}
        <p className='services-sub-title'>Process Modeling and Advanced Analysis</p>

    {/* Upstream Level 1.2.1       */}
        <p className='services-sub-sub-title'>UPSTREAM WELLS AMNAGEMNT</p>
        <TextWithArrow text='Multiphase flow for well shut it condition modeling.' />
        <TextWithArrow text='Piping transient analysis for pressure surge and un-balanced forces.' />
        <TextWithArrow text='Field lifecycle and integrated asset model.' />

      {/* Pipelines Level 1.2.2       */}
          <p className='services-sub-sub-title'>Pipelines</p>
          <TextWithArrow text='Pipeline dynamic modeling as start-up, shutdown, cool down, pigging and depressurization.' />
          <TextWithArrow text='Pressure surge assessment for Pipeline.' />

      {/* Gas gathering Level 1.2.3       */}
          <p className='services-sub-sub-title'>Gas gathering stations &amp; Gas processing plants</p>
          <TextWithArrow text='Steady state simulation and flowsheet optimization.' />
          <TextWithArrow text='What-if scenarios and case studies.' />
          <TextWithArrow text='Energy optimization for Pinch technology assessment and heat exchanger network optimization.' />
          <TextWithArrow text='Rigorous thermal rating of TEMA-type exchanger.' />
          <TextWithArrow text='Dynamic studies for start-up, shutdown and abnormal assessment.' />
          <TextWithArrow text='Process Economic Analyzer for project economic evaluation.' />
          <TextWithArrow text='Blowdown assessment for adiabatic and non-adiabatic (fire) depressurization.' />

        {/* Refinery Level 1.2.4       */}
            <p className='services-sub-sub-title'>Refinery Units: Modeling &amp; optimization for the following unit operation.</p>
            <TextWithArrow text='Vacuum tower and heat integration.' />
            <TextWithArrow text='Crude distillation column optimization.' />
            <TextWithArrow text='Fluid catalytic cracking modeling, tuning and optimization.' />
            <TextWithArrow text='Delayed Coker modeling.' />
            <TextWithArrow text='Visbreaker modeling.' />
            <TextWithArrow text='Naphtha hydrotreater modeling.' />
            <TextWithArrow text='Preheat train modeling.' />

        {/* Advanced Level 1.2.5       */}
            <p className='services-sub-sub-title'>Advanced Analysis Group within OPTIMIZE Engineering can support and provide the following domains.</p>
            <TextWithArrow text='Anti-surge compressor modeling.' />
            <TextWithArrow text='Hydrodynamic analysis for distillation column.' />
            <TextWithArrow text='Pressure surge assessment and surge mitigation.' />
            <TextWithArrow text='Weightage score for options assessment and option selection.' />
            <TextWithArrow text='Quantitative Risk Assessment.' />
            <TextWithArrow text='Computation Fluid Dynamics.' />
            <TextWithArrow text='Reservoir to Facilities ™.' />
            <TextWithArrow text='Integrated Asset Modeling ™.' />
            <TextWithArrow text='Economics ™.' />

        {/* Mechanical Level 1.3       */}
            <p className='services-sub-title'>Mechanical Engineering</p>
            <TextWithArrow text='Mechanical design criteria.' />
            <TextWithArrow text='Equipment List.' />
            <TextWithArrow text='Specifications.' />
            <TextWithArrow text='Data sheets.' />
            <TextWithArrow text='Technical notes and reports.' />
            <TextWithArrow text='Requisitions.' />
            <TextWithArrow text='Mechanical drawings.' />
            <TextWithArrow text='Partition plans.' />
            <TextWithArrow text='Equipment model.' />
            <TextWithArrow text='Ducting and Instrumentation Diagram (D&amp;IDs).' />
            <TextWithArrow text='MTO (Material Take-off).' />
            <TextWithArrow text='Supplier Data Management.' />
            <TextWithArrow text='Technical Bid Evaluation.' />

        {/* Piping Level 1.4       */}
            <p className='services-sub-title'>Piping Engineering</p>
            <TextWithArrow text='Piping and Layout Design Criteria.' />
            <TextWithArrow text='Pipe stress sketches.' />
            <TextWithArrow text='Plot Plan.' />
            <TextWithArrow text='3D Piping Model.' />
            <TextWithArrow text='Standard Pipe Support.' />
            <TextWithArrow text='Piping General Arrangement.' />
            <TextWithArrow text='Pipe support location plan.' />
            <TextWithArrow text='Design isometrics and demolition isometrics.' />
            <TextWithArrow text='MTO (Material Take-off).' />

        {/* Civil Level 1.5       */}
            <p className='services-sub-title'>Civil and Structural Engineering</p>
            <TextWithArrow text='Structural PDS model.' />
            <TextWithArrow text='Load plans.' />
            <TextWithArrow text='Primary structural framing/ details.' />
            <TextWithArrow text='MTO (Material Take-off).' />

        {/* Electrical Level 1.6       */}
            <p className='services-sub-title'>Electrical Engineering</p>
            <TextWithArrow text='Single line diagrams.' />
            <TextWithArrow text='ETAP studies.' />
            <TextWithArrow text='Develop specifications, calculations and data sheets for electric equipment andn etworks, including generators, motors, transformers, switchgear and other distribution equipment and control systems. TBE evaluation.' />

        {/* Instrumentation Level 1.7       */}
            <p className='services-sub-title'>Instrumentation</p>
            <TextWithArrow text='Instrument and control devices/equipment.' />
            <TextWithArrow text='Advanced process control (APC).' />
            <TextWithArrow text='distributed control systems (DCS).' />
            <TextWithArrow text='programmable logic controllers (PLC).' />
            <TextWithArrow text='Supervisory control and data acquisition (SCADA) with cooperation of other Engineering disciplines will develop /Modify control systems.' />
            <TextWithArrow text='Specifications.' />
            <TextWithArrow text='Datasheets, Selection, testing, purchasing equipment.' />
            <TextWithArrow text='maintaining and modifying existing systems.' />
            <TextWithArrow text='liaising with clients, suppliers, contractors.' />

        {/* FEED Level 1.8       */}
            <p className='services-sub-title'>FEED and Detailed Engineering</p>
            <TextWithArrow text='Scope of work preparation.' />
            <TextWithArrow text='Value engineering, feasibility and optimization studies.' />
            <TextWithArrow text='Techno-economic studies.' />
            <TextWithArrow text='Advanced analysis including pressure surge assessment, process dynamic modeling, compressor anti-surge protection, computational dynamic modeling, supply chain modeling, discrete event modeling and CFD.' />
            <TextWithArrow text='Developing basis of design, and design criteria.' />
            <TextWithArrow text='Licensor Evaluation and selection.' />
            <TextWithArrow text='PFD (including Material &amp; Heat Balance).' />
            <TextWithArrow text='PSD (Process safeguarding diagram).' />
            <TextWithArrow text='P&amp;ID s(including safety basic startup requirement).' />
            <TextWithArrow text='Utilities UFDs.' />
            <TextWithArrow text='Utility Summary.' />
            <TextWithArrow text='Datasheets Process, Mechanical, I&amp;C, Electrical.' />
            <TextWithArrow text='Cause &amp; Effect charts.' />
            <TextWithArrow text='Equipment sizing/calculations.' />
            <TextWithArrow text='Process safety studies (HAZOP, HAZID, risk assessment and QRA).' />
            <TextWithArrow text='Project Specifications and MRQ.' />
            <TextWithArrow text='Development of Plot plans.' />
            <TextWithArrow text='3D-Modeling.' />
            <TextWithArrow text='TBE (Technical bed evaluations).' />
            <TextWithArrow text='Design Review meetings.' />
            <TextWithArrow text='Chemical and lubricant and catalyst summary.' />
            <TextWithArrow text='Operating Manuals &amp; check lists.' />
            <TextWithArrow text='Troubleshooting and failure analysis, Root cause analysis.' />

        {/* Safety Level 2       */}
            <p className='services-title'>Process Safety Management &amp; HSE</p>
            <p className='services-text'>OPTMIZE Engineering provides consulting services to help companies that use hazardous materials to reduce the likelihood and consequences of release events. Our services and products enable our clients to achieve their risk, safety and security objectives more efficiently and effectively.</p>
            <TextWithArrow text='PHA.' />
            <TextWithArrow text='HAZOP and HAZID Safety Studies.' />
            <TextWithArrow text='Process Safety Management.' />
            <TextWithArrow text='Risk Management Plan.' />
            <TextWithArrow text='Bow-Tie Analysis.' />
            <TextWithArrow text='Consequence Modeling.' />
            <TextWithArrow text='Probability Modeling.' />
            <TextWithArrow text='Facilities Siting.' />
            <TextWithArrow text='Quantitative Risk Assessment (QRA).' />
            <TextWithArrow text='Layers of Protection Analysis (LOPA).' />

        {/* Project Level 3    */}
          <p className='services-title'>Project Management</p>
          <p className='services-text'>Our team is committed to:</p>
          <TextWithArrow text='Provide any unique combination of services to suit our Client&#39;s requirements.' />
          <TextWithArrow text='Applying best practices, based on the Project Management Body of Knowledge (PMBOK).' />
          <TextWithArrow text='Understanding our Client&#39;s value chain, systems and procedures, thus enabling us to manage and mitigate risk on any given project, irrespective of the drive behind the project (e.g. legislative reasons, economic gain or strategic value).' />
          <TextWithArrow text='Striving to set new benchmarks through innovation.' />
          <p className='services-text'>OPTIMIZE through proper project management control pays specific attention to integrating all project management sectors. By sectors we are referring to:</p>
          <TextWithArrow text='Overall project management.' />
          <TextWithArrow text='Project administration.' />
          <TextWithArrow text='Engineering Design.' />
          <TextWithArrow text='Inspection &amp; testing of equipment.' />
          <TextWithArrow text='Configuration management.' />
          <TextWithArrow text='Contract interface management.' />
          <TextWithArrow text='Maintenance.' />
          <TextWithArrow text='Construction and Completion.' />
          <TextWithArrow text='Plant start-up and testing.' />
          <TextWithArrow text='Plant operations.' />
          <TextWithArrow text='Enabling cooperation among all participants in the project, OPTIMIZE employs proven, effective project management tools to control the project consistent with plan.' />

      {/* Supervision Level 4    */}
        <p className='services-title'>Construction Supervision</p>
        <p className='services-text'>OPTIMIZE supports the construction plans throughout the full lifecycle of the project to yield the greatest possible benefits to our customers.</p>
        <p className='services-text'>OPTIMIZE helps customers realize the maximum value of their project delivery by converting high-potential value options identified in the conceptual phase into fully defined, safe and successfully executed ones.</p>
        <p className='services-sub-title'>Procurement and Expediting</p>
        <TextWithArrow text='Vendors contacts and negotiations.' />
        <TextWithArrow text='Selecting best scenario for combining local and overseas fabrication &amp; Packaging.' />
        <TextWithArrow text='TBE (Technical Bid Evaluation).' />
    
    </div>
  );
};
