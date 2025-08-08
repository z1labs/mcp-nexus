'use client'

import { useState, useEffect } from 'react'
import {
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'
import CountUp from 'react-countup'
import { InView } from 'react-intersection-observer'
import dateFormat from 'dateformat'

import Title from '@/components/common/Title'
import CustomActiveDot from '@/components/pages/nexus-dashboard/widgets/parts/CustomActiveDot'

import helpers from '@/lib/helpers'
import { useSocket } from '@/logic/socket/useSocket'

import styles from '../style.module.scss'

export default function WidgetStorageSize () {
  const [totalValue, setTotalValue] = useState(0)
  const [data, setData] = useState([])

  const socketClient = useSocket(process.env.NEXT_PUBLIC_DASHBOARD_SOCKET_URI)

  useEffect(() => {
    if (socketClient !== null) {
      try {
        socketClient.on('AverageSessionDuration', (socketData) => {

          if (socketData?.total > 0) {
            setTotalValue(socketData?.total)
          }

          if (socketData?.chart.length) {
            setData(socketData?.chart)
          }

        })
      } catch (e) {
        console.log(e)
      }
    }
  }, [socketClient])

  function getRandomInt (min, max) {
    return Math.random() * (max - min + 1) + min
  }

  const data1 = [
    { date: '2024-11-15T00:00:00.000Z', value: 3.5 },
    // { date: "2024-11-15T00:30:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T01:00:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T01:30:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T02:00:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T02:30:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T03:00:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T03:30:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T04:00:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T04:30:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T05:00:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T05:30:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T06:00:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T06:30:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T07:00:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T07:30:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T08:00:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T08:30:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T09:00:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T09:30:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T10:00:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T10:30:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T11:00:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T11:30:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T12:00:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T12:30:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T13:00:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T13:30:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T14:00:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T14:30:00.000Z", value: getRandomInt(3.5, 6.5) },
    // { date: "2024-11-15T15:00:00.000Z", value: getRandomInt(3.5, 6.5) },
  ]
  // console.log(data);
  // const loadData = () => {
  //   setEndValue(4.47);
  // };
  //
  // useEffect(() => {
  //   // Load current counter value
  //   loadData();
  // }, []);

  return (
    <div className={styles.block}>
      {/*
      <div className={styles.head}>
        <div className={styles.headline}>
          <Title type={3} size={5}>
            Average Session Duration (min)
          </Title>
          <div className={styles.date}>
            {dateFormat("2024-11-15T00:00:00.000Z", "yyyy-mm-dd", true)}
            {dateTitle}
          </div>
        </div>
        <Value value={totalValue} />
      </div>
*/}
      <div className={styles.main}>
        <Title block size={5}>
          Average Session Duration (min)
        </Title>
        <Value value={totalValue}/>
        <InView threshold={0.75} triggerOnce>
          {({ ref, inView }) => (
            <div className={styles.chart} ref={ref}>
              {data && data.length > 0 && (
                <>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={data}
                      margin={{ top: 12, right: 10, bottom: 0, left: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="chart-storage-size"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#55F89F"
                            stopOpacity={0.08}
                          />
                          <stop
                            offset="100%"
                            stopColor="#55F89F"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <Tooltip
                        content={<CustomTooltip/>}
                        cursor={{ stroke: '#55F89F', strokeDasharray: '3 3' }}
                      />
                      <XAxis
                        dataKey="date"
                        tickFormatter={(value) =>
                          dateFormat(value, 'hh-MM', true)
                        }
                        tickLine={false}
                        stroke="#1E201E"
                        minTickGap={75}
                        dy={12}
                      />
                      <YAxis
                        dataKey="value"
                        tickFormatter={(value) => value.toFixed(1)}
                        axisLine={false}
                        tickLine={false}
                        orientation="right"
                        dx={10}
                        domain={([dataMin, dataMax]) => {
                          let divider = 0

                          if (dataMin < 100) {
                            divider = 1
                          } else if (dataMin < 1000) {
                            divider = 10
                          } else if (dataMin < 10000) {
                            divider = 100
                          } else if (dataMin < 100000) {
                            divider = 1000
                          } else if (dataMin < 1000000) {
                            divider = 10000
                          } else if (dataMin < 10000000) {
                            divider = 100000
                          }

                          dataMin =
                            Number((dataMin / divider).toFixed() * divider) -
                            divider * 2
                          dataMax =
                            Number((dataMax / divider).toFixed() * divider) +
                            divider * 2
                          if (dataMin < 0) dataMin = 0

                          return [dataMin, dataMax]
                        }}
                      />
                      <CartesianGrid
                        stroke="#1E201E"
                        horizontalCoordinatesGenerator={(props) => {
                          const start = props.offset.top
                          const end =
                            props.height -
                            props.offset.bottom -
                            props.offset.top
                          const array = []
                          for (let i = start; i < end; i += 24) {
                            array.push(i)
                          }
                          return array
                        }}
                        verticalCoordinatesGenerator={(props) => {
                          const start = props.offset.left + 1
                          const end =
                            props.width -
                            props.offset.left -
                            props.offset.right
                          const array = []
                          for (let i = start; i < end; i += 24) {
                            array.push(i)
                          }
                          return array
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#55F89F"
                        strokeWidth={2}
                        fill="url(#chart-storage-size)"
                        dot={false}
                        activeDot={(props) => <CustomActiveDot {...props} />}
                        isAnimationActive={inView}
                        hide={!inView}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </>
              )}
            </div>
          )}
        </InView>
      </div>
    </div>
  )
}

const Value = ({ value }) => (
  <div className={styles.value}>
    <InView threshold={1} triggerOnce>
      {({ ref, inView }) =>
        inView ? (
          <span ref={ref}>
            <CountUp
              start={0}
              end={value}
              duration={2.5}
              delay={0.01}
              suffix=" min"
              decimals={1}
            />
          </span>
        ) : (
          <span ref={ref}>0</span>
        )
      }
    </InView>
  </div>
)

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { date, value } = payload[0].payload
    return date && value ? (
      <div className={styles.tooltip}>
        <ul>
          <li>
            <span>Date</span>
            {dateFormat(date, 'HH:MM d mmm yyyy', true)}
          </li>
          <li>
            <span>Time</span>
            {helpers.formatNumber(value, 1)} min
          </li>
        </ul>
      </div>
    ) : null
  }

  return null
}
