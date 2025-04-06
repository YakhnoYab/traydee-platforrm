import type { NextApiRequest, NextApiResponse } from 'next'

interface CandleData {
  time: number
  open: number
  high: number
  low: number
  close: number
  volume: number
}

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { symbol, pairedWith, timeframe } = req.query as { symbol: string; pairedWith: string; timeframe: string }

  // Validate query parameters
  if (!symbol || !pairedWith || !timeframe) {
    return res
      .status(400)
      .json({ error: 'Missing required parameters: symbol, pairedWith, and timeframe are required' })
  }

  // Get API key from environment variables
  const apiKey = process.env.COINMARKETCAP_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'Server configuration error: API key not set' })
  }

  // CoinMarketCap API endpoint for historical OHLCV data
  const baseUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/ohlcv/historical'

  // Map your component's timeframe to CoinMarketCap's intervals
  const intervalMap: { [key: string]: string } = {
    '1m': '1m',
    '5m': '5m',
    '1h': '1h',
    '1d': 'daily',
    // Add more mappings if your component supports other timeframes
  }
  const interval = intervalMap[timeframe as string] || 'daily'

  // Construct query parameters
  const params = new URLSearchParams({
    symbol: symbol as string, // e.g., "BTC"
    convert: pairedWith as string, // e.g., "USDT"
    time_period: interval, // e.g., "daily"
    count: '1000', // Matches your MAX_CANDLES constant; adjust as needed
  })

  const url = `${baseUrl}?${params.toString()}`

  try {
    const response = await fetch(url, {
      headers: {
        'X-CMC_PRO_API_KEY': apiKey,
        Accept: 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`CoinMarketCap API error: ${response.status}`)
    }

    const data = await response.json()

    // Extract and transform the quotes array from the response
    const quotes = data.data.quotes
    if (!quotes || !Array.isArray(quotes)) {
      throw new Error('Invalid data format from CoinMarketCap')
    }

    const candleData: CandleData[] = quotes.map((quote: any) => ({
      time: Math.floor(new Date(quote.time_open).getTime() / 1000), // Unix timestamp in seconds
      open: parseFloat(quote.quote[pairedWith].open),
      high: parseFloat(quote.quote[pairedWith].high),
      low: parseFloat(quote.quote[pairedWith].low),
      close: parseFloat(quote.quote[pairedWith].close),
      volume: parseFloat(quote.quote[pairedWith].volume),
    }))

    // Return the transformed data
    res.status(200).json(candleData)
  } catch (error) {
    console.error('Error fetching data from CoinMarketCap:', error)
    res.status(500).json({ error: 'Failed to fetch historical data' })
  }
}
