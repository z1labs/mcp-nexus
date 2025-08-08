'use client'

import React, { useEffect, useRef, useState, memo } from 'react'
import CountUp from 'react-countup'
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts'
import dateFormat from 'dateformat'

import Title from '@/components/common/Title'
import InfoTooltip from '@/components/common/InfoTooltip'
import CustomActiveDot from '@/components/pages/nexus-dashboard/widgets/parts/CustomActiveDot'

import helpers from '@/lib/helpers'
import styles from './style.module.scss'
import { useSocket } from '@/logic/socket/useSocket'

const DailyActiveAgentsWidget = memo(function DailyActiveAgentsWidget({ data }) {
  const { total, chart } = data
  const [displayedTotal, setDisplayedTotal] = useState(total)
  const prevTotalRef = useRef(total)

  useEffect(() => {
    if (total !== displayedTotal) {
      prevTotalRef.current = displayedTotal
      setDisplayedTotal(total)
    }
  }, [total, displayedTotal])

  const start = prevTotalRef.current
  const end = displayedTotal
  const shouldAnimate = start !== end

  return (
    <div className={styles.widget}>
      <div className={styles.block}>
        <div className={styles.head}>
          <div className={styles.headline}>
            <Title type={2} size={5}>
              Daily Active Agents
            </Title>
            <InfoTooltip>
              Number of unique GPT agents that were interacted with in the past 24 hours.
            </InfoTooltip>
          </div>
          <div className={styles.value}>
            {shouldAnimate ? (
              <CountUp
                start={start}
                end={end}
                duration={2.5}
                delay={0.01}
                formattingFn={(num) => helpers.formatNumber(num, 2)}
              />
            ) : (
              helpers.formatNumber(end, 2)
            )}
          </div>
        </div>
        <div className={styles.chart}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chart}
              margin={{ top: 12, right: 0, bottom: 0, left: 0 }}
            >
              <defs>
                <linearGradient id="chart-daily-tx" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#55F89F" stopOpacity={0.08}/>
                  <stop offset="100%" stopColor="#55F89F" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ stroke: '#55F89F', strokeDasharray: '3 3' }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#55F89F"
                strokeWidth={2}
                fill="url(#chart-daily-tx)"
                dot={false}
                activeDot={(props) => <CustomActiveDot {...props} />}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
})

export default function ChartDailyActiveAgents() {
  const socketClient = useSocket(process.env.NEXT_PUBLIC_DASHBOARD_SOCKET_URI)
  const [data, setData] = useState({ total: 0, chart: [] })

  useEffect(() => {
    if (!socketClient) return
    const handler = (socketData) => {
      if (socketData?.total > 0 && socketData.total !== data.total) {
        setData(socketData)
      }
    }
    socketClient.on('DailyActiveAgents', handler)
    return () => {
      socketClient.off('DailyActiveAgents', handler)
    }
  }, [socketClient, data.total])

  return <DailyActiveAgentsWidget data={data} />
}

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    const { date, value } = payload[0].payload
    return date && (value || value === 0) ? (
      <div className={styles.tooltip}>
        <ul>
          <li>
            <span>Date</span>
            {dateFormat(date, 'HH:MM d mmm yyyy', true)}
          </li>
          <li>
            <span>Value</span>
            {helpers.formatNumber(value, 2)}
          </li>
        </ul>
      </div>
    ) : null
  }
  return null
}
