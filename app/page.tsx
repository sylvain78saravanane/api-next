'use client'

import { useEffect, useState } from 'react'

export default function UserDashboard() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <header className={`bg-primary text-primary-foreground shadow-md transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
        <div className="container mx-auto px-4 py-6">
          <h1 className={`text-3xl font-bold transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Tableau Utilisateur
          </h1>
        </div>
      </header>
    </div>
  )
}
