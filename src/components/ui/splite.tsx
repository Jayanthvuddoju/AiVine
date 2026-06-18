'use client'

import dynamic from 'next/dynamic'

// Use next/dynamic to completely disable SSR for the WebGL Spline component.
// This prevents strict React 18 hydration mismatch errors caused by browser extensions 
// (like Bitdefender's bis_skin_checked attribute) modifying the DOM before React loads.
const Spline = dynamic(() => import('@splinetool/react-spline'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <span className="loader"></span>
    </div>
  )
})

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Spline
      scene={scene}
      className={className}
    />
  )
}
