import { createChart, IChartApi, ISeriesApi, CandlestickData, CandlestickSeries } from 'lightweight-charts'
import { useEffect, useRef } from 'react'

interface ITradingChartProps {
  data: CandlestickData[]
}

export const TradingChart = ({ data }: ITradingChartProps) => {
  const chartContainerRef = useRef<HTMLDivElement>(null)
  const chartRef = useRef<IChartApi | null>(null)
  const lineSeriesRef = useRef<ISeriesApi<'Candlestick'> | null>(null)

  useEffect(() => {
    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, {
        autoSize: true,
        width: chartContainerRef.current.clientWidth,
        height: 300,
        layout: {
          background: { color: 'white' },
          textColor: 'green',
        },
      })

      const lineSeries = chart.addSeries(CandlestickSeries, {
        wickUpColor: 'rgb(54, 116, 217)',
        upColor: 'rgb(54, 116, 217)',
        wickDownColor: 'rgb(225, 50, 85)',
        downColor: 'rgb(225, 50, 85)',
        borderVisible: false,
      })
      lineSeries.priceScale().applyOptions({
        autoScale: false,
        borderColor: 'blue',
        scaleMargins: {
          top: 0.1,
          bottom: 0.1,
        },
      })
      lineSeries.setData(data)

      chartRef.current = chart
      lineSeriesRef.current = lineSeries
    }

    return () => chartRef.current?.remove()
  }, [data])

  return <div ref={chartContainerRef} />
}
