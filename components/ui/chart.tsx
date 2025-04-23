import type React from "react"

export const BarChart = ({ children }: { children: React.ReactNode }) => {
  return <div data-testid="bar-chart">{children}</div>
}

export const Bar = () => {
  return <div data-testid="bar"></div>
}

export const XAxis = () => {
  return <div data-testid="x-axis"></div>
}

export const YAxis = () => {
  return <div data-testid="y-axis"></div>
}

export const CartesianGrid = () => {
  return <div data-testid="cartesian-grid"></div>
}

export const ResponsiveContainer = ({ children }: { children: React.ReactNode }) => {
  return <div data-testid="responsive-container">{children}</div>
}
