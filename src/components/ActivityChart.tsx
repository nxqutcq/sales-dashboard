import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { faker } from '@faker-js/faker'

interface ActivityData {
  hour: string
  activity: number
}

const data: ActivityData[] = Array.from({ length: 24 }, (_, i) => ({
  hour: `${i}:00`,
  activity: faker.number.int({ min: 0, max: 500 }),
}))

const ActivityChart: React.FC = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="hour" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="activity" fill="#82ca9d" />
    </BarChart>
  </ResponsiveContainer>
)

export default ActivityChart
