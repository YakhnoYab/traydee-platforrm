import { CandlestickData } from 'lightweight-charts'

// Moving Average (MA) calculation
export function calculateMA(data: CandlestickData[], period: number): { time: string; value: number }[] {
  return data.map((_, index, array) => {
    const slice = array.slice(Math.max(0, index - period + 1), index + 1)
    const sum = slice.reduce((acc, candle) => acc + candle.close, 0)
    return {
      time: array[index].time as string,
      value: sum / slice.length,
    }
  })
}

// Relative Strength Index (RSI) calculation
export function calculateRSI(data: CandlestickData[], period: number = 14): { time: string; value: number }[] {
  const changes = data.map((candle, index, array) => {
    if (index === 0) return 0
    return candle.close - array[index - 1].close
  })

  const gains = changes.map(change => (change > 0 ? change : 0))
  const losses = changes.map(change => (change < 0 ? -change : 0))

  const rsi = data.map((candle, index) => {
    if (index < period) return { time: candle.time as string, value: 0 }

    const avgGain = gains.slice(index - period + 1, index + 1).reduce((sum, gain) => sum + gain) / period
    const avgLoss = losses.slice(index - period + 1, index + 1).reduce((sum, loss) => sum + loss) / period

    if (avgLoss === 0) return { time: candle.time as string, value: 100 }

    const rs = avgGain / avgLoss
    return {
      time: candle.time as string,
      value: 100 - 100 / (1 + rs),
    }
  })

  return rsi
}

// Moving Average Convergence Divergence (MACD) calculation
export function calculateMACD(
  data: CandlestickData[],
  fastPeriod: number = 12,
  slowPeriod: number = 26,
  signalPeriod: number = 9,
): { time: string; macd: number; signal: number; histogram: number }[] {
  const fastEMA = calculateEMA(data, fastPeriod)
  const slowEMA = calculateEMA(data, slowPeriod)

  const macdLine = data.map((candle, index) => {
    return fastEMA[index].value - slowEMA[index].value
  })

  const signalLine = calculateEMAFromValues(macdLine, signalPeriod)

  return data.map((candle, index) => {
    const macd = macdLine[index]
    const signal = signalLine[index]
    return {
      time: candle.time as string,
      macd,
      signal,
      histogram: macd - signal,
    }
  })
}

// Bollinger Bands calculation
export function calculateBollingerBands(
  data: CandlestickData[],
  period: number = 20,
  stdDev: number = 2,
): { time: string; upper: number; middle: number; lower: number }[] {
  return data.map((candle, index, array) => {
    const slice = array.slice(Math.max(0, index - period + 1), index + 1)
    const sma = slice.reduce((sum, val) => sum + val.close, 0) / slice.length

    const squaredDiffs = slice.map(val => Math.pow(val.close - sma, 2))
    const standardDeviation = Math.sqrt(squaredDiffs.reduce((sum, val) => sum + val, 0) / slice.length)

    return {
      time: candle.time as string,
      upper: sma + stdDev * standardDeviation,
      middle: sma,
      lower: sma - stdDev * standardDeviation,
    }
  })
}

// Helper function to calculate EMA
function calculateEMA(data: CandlestickData[], period: number): { time: string; value: number }[] {
  const multiplier = 2 / (period + 1)
  let ema = data[0].close

  return data.map((candle, index) => {
    if (index === 0) {
      return { time: candle.time as string, value: ema }
    }

    ema = (candle.close - ema) * multiplier + ema
    return { time: candle.time as string, value: ema }
  })
}

// Helper function to calculate EMA from array of values
function calculateEMAFromValues(values: number[], period: number): number[] {
  const multiplier = 2 / (period + 1)
  let ema = values[0]

  return values.map((value, index) => {
    if (index === 0) return ema
    ema = (value - ema) * multiplier + ema
    return ema
  })
}
