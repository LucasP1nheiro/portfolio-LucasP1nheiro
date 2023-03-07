import { useContext } from 'react'
import Project from '../components/Project'

import { StageContext } from '../context/StageContext'

const Projects = () => {
    const {setStage} = useContext(StageContext)
    
    setStage('Projects')

  return (
      <div className="h-full w-full flex flex-col items-center justify-center gap-12 xl:gap-24 pb-24">
          
      <Project name="MyMDB" />
      <Project name="PomodoroApp" />
      <Project name="Portfolio" />
      <Project name="Coming Soon" />
    
    </div>
  )
}

export default Projects