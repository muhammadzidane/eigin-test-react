// Redux toolkit
import { isRejectedWithValue } from '@reduxjs/toolkit'
import type { Middleware } from '@reduxjs/toolkit'

// Ant
import { notification } from 'antd'

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger: Middleware =
  () => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      const description = action.payload.data.message || 'Tejadi kesalahan'

      notification.error({
        message: 'Error',
        description
      })
    }

    return next(action)
  }
