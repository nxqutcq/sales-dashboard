import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { faker } from '@faker-js/faker'

interface SalesData {
  month: string
  sales: number
}

const data: SalesData[] = Array.from({ length: 12 }, () => ({
  month: faker.date.month({ abbreviated: true }),
  sales: faker.number.int({ min: 5000, max: 20000 }),
}))

const SalesChart: React.FC = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="sales" stroke="#8884d8" />
    </LineChart>
  </ResponsiveContainer>
)

export default SalesChart
