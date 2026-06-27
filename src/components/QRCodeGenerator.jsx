import React, { useState } from 'react'
import QRCode from 'qrcode.react'

const QRCodeGenerator = ({ value, size = 200 }) => {
  const [copied, setCopied] = useState(false)

  // Create AR-specific URL
  const arUrl = value ? `${value}/ar` : `${window.location.origin}/ar`

  const handleCopyLink = () => {
    navigator.clipboard.writeText(arUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="bg-white p-4 rounded-xl shadow-lg">
        <QRCode
          value={arUrl}  // QR code points to AR page
          size={size}
          bgColor="#ffffff"
          fgColor="#1a1a2e"
          level="H"
          includeMargin={true}
          renderAs="canvas"
        />
      </div>
      
      <div className="flex flex-col items-center space-y-2">
        <p className="text-sm text-gray-600 text-center max-w-xs">
          Scan this QR code to view the model in AR on your mobile device
        </p>
        
        <div className="flex space-x-2">
          <button
            onClick={handleCopyLink}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm transition-colors"
          >
            {copied ? '✓ Copied!' : 'Copy AR Link'}
          </button>
          
          <button
            onClick={() => window.open(arUrl, '_blank')}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors"
          >
            Open AR
          </button>
        </div>
      </div>
    </div>
  )
}

export default QRCodeGenerator