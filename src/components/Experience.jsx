import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience(props) {
    return (
        <div className="text-gunmetal">
            <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(47, 50, 58)', color: '#2F323A' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(47, 50, 58)' }}
                        date="August 2023"
                        iconStyle={{ background: 'rgb(47, 50, 58)', color: '#2F323A' }}
                    >
                    <div className="text-gunmetal-50">
                        <h3 className="vertical-timeline-element-title">Bass Connections Fellow</h3>
                        <h4 className="vertical-timeline-element-subtitle">Durham, NC</h4>
                        <p> This semester, I've had the privilege to join a groundbreaking research project 
                            aimed at addressing the global burden of alcohol use disorders. Our team 
                            is dedicated to developing innovative solutions to tackle this public 
                            health issue. Our research involves the development and trans-cultural 
                            adaptation of a multilingual computer application designed to assess patients'
                            alcohol use behaviors, known as the <a href="https://bassconnections.duke.edu/project-teams/alcohol-use-behavioral-phenotyping-test-global-populations-2023-2024" className="underline hover:text-navylg">
                                 Alcohol Use Behavioral Phenotyping Test (AUBPT)</a>. </p>
                        <p>
                            My responsibilities on the team have included the creation of gamified tasks in 
                            the Unity framework and the integration of a robust 
                            log-in and data management system using Firebase. Through this project, I continue to 
                            gain hands-on experience in interdisciplinary research, collaborating with 
                            international partners, and developing skills in study design, data collection, 
                            and statistical analysis.
                        </p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="May - August 2023"
                    contentStyle={{ background: 'rgb(194, 199, 209)'}}
                    iconStyle={{ background: 'rgb(194, 199, 209)', color: '#2F323A' }}
                >
                     <div className="text-gunmetal">
                        <h3 className="vertical-timeline-element-title">IT Analyst Intern</h3>
                        <h4 className="vertical-timeline-element-subtitle">Chicago, IL</h4>
                        <p>
                        This past summer, I had the opportunity to intern at Oak Street Health, 
                        a revolutionary healthcare provider dedicated to delivering high-quality 
                        primary care for older adults. During my time with Oak Street Health, 
                        I played a pivotal role in implementing essential security controls, 
                        roles, profiles, and permission sets in Salesforce CRM, ensuring data 
                        security and compliance with HIPAA regulations. Additionally, I applied 
                        Agile methodologies to redesign critical business processes, resulting 
                        in an impressive increase in efficiency related to the creation and 
                        maintenance of company-wide data access policies.
                        </p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className=""
                    date=""
                    contentStyle={{ background: 'rgb(47, 50, 58)', color: '#f7f7f5' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(47, 50, 58)' }}
                    iconStyle={{ background: 'rgb(47, 50, 58)', color: '#f7f7f5' }}
                    >
                    <div className="text-gunmetal-50">
                        <h3 className="vertical-timeline-element-title">First React.js Website</h3>
                        <p>In [date], I created my first React.js portfolio </p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(194, 199, 209)', color: '#2F323A' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(175, 196, 227)' }}
                    iconStyle={{ background: 'rgb(194, 199, 209)', color: '#2F323A' }}
                    date="August 2023"
                >
                     <div className="text-navy">
                        <h3 className="vertical-timeline-element-title">Undergraduate Teaching Assistant</h3>
                        <h4 className="vertical-timeline-element-subtitle">Durham, NC</h4>
                        <p> For the last three semesters, I have had the rewarding experience of
                            working as a teaching assistant with the Duke Statistics Department.
                            In this role, I engage with a cohort of over 300 students each semester
                            for an introductory data science course, supporting students in learning and
                            applying the R programming language. My responsibilities involve leading a discussion
                            section of ~30 students, providing feeback on lab 
                            and homework assignments, and 
                            offering dedicated office hours to ensure that every student had the support they 
                            needed to thrive. 
                        </p>   
                        <p> 
                            Collaboration has been key, as I've worked closely with professors 
                            and graduate teaching assistants to continuously evaluate student progress and develop 
                            tailored strategies for improvement. This experience has not only deepened my own 
                            understanding of data science but has also allowed me to inspire and empower the 
                            next generation of data scientists. It's been a rewarding journey, and I look 
                            forward to further contributions in the dynamic realm of data science and education.
                        </p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement    
                    className="vertical-timeline-element--work"
                    date="August 2021 - present"
                    contentStyle={{ background: 'rgb(47, 50, 58)'}}
                    iconStyle={{ background: 'rgb(47, 50, 58)', color: '#f7f7f5' }}
                >
                     <div className="text-gunmetal-50">
                        <h3 className="vertical-timeline-element-title">B.S. Computer Science at Duke University</h3>
                        <h4 className="vertical-timeline-element-subtitle">Durham, NC</h4>
                        {/* <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p> */}
                    </div>
                </VerticalTimelineElement>
                {/* <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="May 2019 - August 2021"
                    contentStyle={{ background: 'rgb(214, 198, 154)'}}
                    iconStyle={{ background: 'rgb(214, 198, 154)', color: '#fff' }}
                >
                     <div className="text-navy">
                        <h3 className="vertical-timeline-element-title">Barista</h3>
                        <h4 className="vertical-timeline-element-subtitle">Redmond, WA</h4>
                        <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </div>
                </VerticalTimelineElement> */}
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(47, 71, 74)', color: '#fff' }}
                />
            </VerticalTimeline>
        </div>
    )
}
