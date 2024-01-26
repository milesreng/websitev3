import React from 'react'
import Project from '../components/Project'
import Skill from '../components/Skill'
import StatifyImage from '../assets/wrapped.png'
import TodoAppImage from '../assets/todoapp.png'
import CaseStudy from '../assets/case-study-slide-deck.pdf'

const Portfolio = () => {
  return (
    <div className='md:px-auto'>
      <div className=''>
        <h1 className='text-4xl font-header tracking-wide md:pt-8 pb-4'>Skills</h1>
        <div className='flex flex-wrap'>
          <div className='basis-full md:basis-1/2 p-4'>
            <h1 className='pb-2 text-lg'>Languages</h1>
            <div className='flex flex-wrap bg-bluegray-50 shadow-lg gap-6 justify-around p-4 rounded-md'>
              <Skill lang='java' />
              <Skill lang='javascript' />
              <Skill lang='html5' />
              <Skill lang='css3' />
              <Skill lang='python' />
              <Skill lang='c' />
              <Skill lang='r' />
            </div>
          </div>
          <div className='basis-full p-4 md:basis-1/2'>
            <h1 className='pb-2 text-lg'>Technologies and Frameworks</h1>
            <div className='flex flex-wrap p-4  bg-bluegray-50 shadow-lg gap-6 justify-around rounded-md'>
              <Skill lang='react' />
              <Skill lang='nodejs' />
              <Skill lang='express' />
              <Skill lang='mongodb' />
              <Skill lang='postgresql' />
              <Skill lang='git' />
              <Skill lang='salesforce' />
            </div>
          </div>
        </div>
        
      </div>
      <div>
        <h1 className='text-4xl font-header tracking-wide pt-2 md:pt-8 pb-2'>Projects</h1> 
        <div className='flex flex-wrap'>
          <Project 
            title='Rideshare Matching Algorithms Case Study' 
            desc='A deep-dive into the algorithmic efficiency of passenger-to-driver matching on NYC app data.' 
            link={CaseStudy}
            img={TodoAppImage}
            languages={['python', 'r']}
            lightSkills={false}
          />
          <Project 
            title='Statify for Spotify' 
            desc='A web app that allows users to authenticate through the Spotify API and view a summary of their favorite tracks, artists, and genres.' 
            link='https://statifyforspotify.netlify.app'
            img={StatifyImage}
            languages={['react', 'nodejs', 'javascript']}
            lightSkills={false} />

          {/* <Project 
            title='RecipeBook' 
            desc='A recipe sharing platform where users can browse, upload, and rate recipes. Includes features for meal planning and grocery list generation.' 
            link='https://recipebook-platform.com'
            img='https://images.food52.com/t63vgy7FaQ3UqPDI37yP6frpzDc=/1200x1200/f3d3689f-7277-4957-a619-901b755567b9--Screen_Shot_2013-04-09_at_2.13.28_PM.png' 
            languages={['java', 'python']}
            lightSkills={true}
          />

          <Project 
            title='Fitness Tracker' 
            desc='A fitness app that tracks users’ workouts, provides exercise recommendations, and monitors progress. Integrated with wearable devices for real-time data.' 
            link='https://fitnesstracker-app.netlify.app'
            img='https://cdn.thewirecutter.com/wp-content/media/2023/06/fitnesstrackers-2048px-fitbitscreenshottriptych.jpg'
            languages={['java', 'python']}
            lightSkills={true}
          /> */}
        </div>
      </div>
    </div>
  )
}

export default Portfolio