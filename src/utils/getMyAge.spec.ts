import { describe, expect, it, vi } from 'vitest'

import getMyAge from './getMyAge'

describe('Get My Age', () => {
  it('should get my age correctly some months before my birthday', () => {
    vi.useFakeTimers().setSystemTime(new Date('2024-01-01'))
    const age = getMyAge()

    expect(age).toBe(21)
  })

  it('should my get age correctly some days before my birthday', () => {
    vi.useFakeTimers().setSystemTime(new Date('2024-04-15'))
    const age = getMyAge()

    expect(age).toBe(21)
  })

  it('should my get age correctly on my birthday', () => {
    vi.useFakeTimers().setSystemTime(new Date('2024-04-17'))
    const age = getMyAge()

    expect(age).toBe(22)
  })

  it('should my get age correctly some days after my birthday', () => {
    vi.useFakeTimers().setSystemTime(new Date('2024-04-20'))
    const age = getMyAge()

    expect(age).toBe(22)
  })

  it('should my get age correctly some months after my birthday', () => {
    vi.useFakeTimers().setSystemTime(new Date('2024-06-20'))
    const age = getMyAge()

    expect(age).toBe(22)
  })
})
