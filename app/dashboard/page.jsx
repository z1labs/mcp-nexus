'use client'

import SectionHero from '@/components-new/pages/nexus-dashboard/SectionHero'
import ChartDailyActiveAgents from '@/components-new/pages/nexus-dashboard/widgets/ChartDailyActiveAgents'
import WidgetStats from '@/components-new/pages/nexus-dashboard/widgets/WidgetStats'
import WidgetAverageContextTokenCount
  from '@/components-new/pages/nexus-dashboard/widgets/trackers/WidgetAverageContextTokenCount'
import WidgetAverageSessionDuration
  from '@/components-new/pages/nexus-dashboard/widgets/trackers/WidgetAverageSessionDuration'
import WidgetAverageGPTCalls from '@/components-new/pages/nexus-dashboard/widgets/trackers/WidgetAverageGPTCalls'

import styles from '@/styles/pages/nexus-dashboard.module.scss'

export default function Page () {
  return (
    <>
      <SectionHero/>
      <div className="container">
        <div className={styles.top}>
          <ChartDailyActiveAgents />
          <WidgetStats/>
        </div>

        <div className={styles.middle}>
          <WidgetAverageContextTokenCount/>
          <WidgetAverageSessionDuration/>
          <WidgetAverageGPTCalls/>
        </div>
      </div>
    </>
  )
}
