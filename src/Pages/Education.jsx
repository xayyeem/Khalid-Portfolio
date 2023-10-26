import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';

const Education = () => {
  return (
    <div className='Education'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date='2017-2018' iconStyle={{background:'#3e497a' , color:'#fff'}}
        icon={<SchoolIcon/>}>
          <h3 className='vertical-timeline-element-title'>Ewing Christian Public School, Prayagraj Uttar Pradesh</h3>
          <p>HighSchool</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date='2018-2021' iconStyle={{background:'#3e497a' , color:'#fff'}}
        icon={<SchoolIcon/>}>
          <h3 className='vertical-timeline-element-title'>CDL Government Polytechnic Nathusari Chopta, Sirsa Haryana  </h3>
          <p>Diploma in Engineering</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date='2021-2024' iconStyle={{background:'#3e497a' , color:'#fff'}}
        icon={<SchoolIcon/>}>
          <h3 className='vertical-timeline-element-title'> Shambhunath Institute of Engineering and Technology, Prayagraj Uttar Pradesh</h3>
          <p>Bachelor of Technology</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Education