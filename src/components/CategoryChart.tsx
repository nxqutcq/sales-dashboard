import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { faker } from '@faker-js/faker'

interface CategoryData {
  name: string
  value: number
}

const data: CategoryData[] = [
  {
    name: 'Electronics',
    value: faker.number.int({ min: 1000, max: 5000 }),
  },
  { name: 'Fashion', value: faker.number.int({ min: 1000, max: 5000 }) },
  { name: 'Home', value: faker.number.int({ min: 1000, max: 5000 }) },
  { name: 'Beauty', value: faker.number.int({ min: 1000, max: 5000 }) },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const CategoryChart: React.FC = () => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
)

export default CategoryChart
