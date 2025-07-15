import React from 'react'

export default function Tag({children, className}: {children: React.ReactNode, className?: string}) {
  return (
    <div className={`text-[#004E93] font-light ${className}`}>
        {children}
    </div>
  )
}
