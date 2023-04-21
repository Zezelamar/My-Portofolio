import React from 'react'
import SchoolIcon from '@material-ui/icons/School'
import WorkIcon from '@material-ui/icons/Work'
import{
  VerticalTimeline,
  VerticalTimelineElement
}  from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import '../styles/Experience.css'



function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor='#0f2862'>
        <VerticalTimelineElement 
          className="vertical-timeline-ellement--education" 
          date="2012-2015"
          iconStyle={{background:"#0f2862", color:"black"}}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
           College Horizon, Bamako, Mali
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className="vertical-timeline-ellement--education" 
          date="2015-2018"
          iconStyle={{background:"#0f2862", color:"white"}}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
           University Zian Achour of Djelfa, Djelfa, Algeria
          </h3>
          <p>Bachelor of Computer Systems</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className="vertical-timeline-ellement--education" 
          date="2018-2022"
          
          iconStyle={{background:"red", color:"white"}}
          icon={<SchoolIcon />}
          //contentStyle={{background:"red", color:"white"}}
        >
          <h3 className='vertical-timeline-element-title'>
           University Belhadj Bouchaid of Ain Temouchent, Ain Temouchent, Algeria
          </h3>
          <p>Master of Network and Data Engineering</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement 
          className="vertical-timeline-ellement--work" 
          date="2023-present"
          contentStyle={{ background: '#0f2862', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #0f2862' }}
          iconStyle={{background:"#0f2862", color:"white"}}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
           Orange Mali, Bamako, Mali
          </h3>
          <p>Internship in Data Science & Data Analysis </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience