import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search } from 'lucide-react'
import { ProjectFeed } from './ProjectFeed'
import { FilterBar } from './FilterBar'
import { HeroSection } from './HeroSection'
import { CATEGORIES } from '../../types'
import logo from '../../assets/logo.svg'
import { restoreScrollPosition } from '../../utils/scrollUtils'
import { HeroSection as SectionWelcoming } from './SectionWelcoming'
import { Navbar } from './Navbar'
import { CommunitiesContent } from './CommunitiesContent'

const CommunityPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [sortOption, setSortOption] = useState('Most Recent')
  const [activeTab, setActiveTab] = useState<'communities' | 'openspaces'>('communities')
  const location = useLocation()
  
  // Use direct scroll position restoration without animation
  useEffect(() => {
    const scrollPositionKey = `scrollPosition-${location.pathname}`
    
    // Use a small timeout to ensure the DOM is ready
    const timer = setTimeout(() => {
      restoreScrollPosition(scrollPositionKey);
    }, 0);
    
    return () => clearTimeout(timer);
  }, [location.pathname])

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value)
  }

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Use the Navbar component instead of inline header */}
      <Navbar />
      
      {/* Conditional rendering based on active tab */}
      {activeTab === 'communities' ? (
        <>
          <CommunitiesContent />
        </>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Open Spaces Content Coming Soon</h2>
            <p className="text-gray-600">This section will be implemented in the future.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default CommunityPage
