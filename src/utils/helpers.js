// Utility functions for the application

/**
 * Check if the device is mobile
 * @returns {boolean} True if device is mobile
 */
export const isMobileDevice = () => {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
}

/**
 * Get the current URL with protocol and host
 * @returns {string} Current URL
 */
export const getCurrentUrl = () => {
  return window.location.origin
}

/**
 * Check if WebXR is supported
 * @returns {boolean} True if WebXR is supported
 */
export const isWebXrSupported = () => {
  return 'xr' in navigator
}

/**
 * Format file size
 * @param {number} bytes - File size in bytes
 * @returns {string} Formatted file size
 */
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

/**
 * Debounce function for performance optimization
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}