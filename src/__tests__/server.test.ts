import { connectDB } from '../server'
import db from '../config/db'

jest.mock('../config/db')

describe('connectDB', () => {
  it('should handle database connection error', async () => {
    jest.spyOn(db, 'authenticate')
      .mockRejectedValueOnce(new Error('Hubo un error de conexión'))

    const consoleSpy = jest.spyOn(console, 'log')
    await connectDB()

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Failed to connect to the database'))
  })
})