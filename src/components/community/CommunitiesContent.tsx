import React from 'react'
import { Users } from 'lucide-react'

interface CommunityCardProps {
  title: string;
  memberCount: number;
  description: string;
  projectCount: number;
  imageSrc: string;
  actionType: 'join' | 'request';
}

const CommunityCard: React.FC<CommunityCardProps> = ({
  title,
  memberCount,
  description,
  projectCount,
  imageSrc,
  actionType
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start mb-4">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500">{memberCount} members</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-6 line-clamp-3">{description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{projectCount} projects</span>
          
          {actionType === 'join' ? (
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors text-sm font-medium">
              Join
            </button>
          ) : (
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium">
              Request Access
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export const CommunitiesContent: React.FC = () => {
  const communities = [
    {
      id: '1',
      title: 'EcoTech Innovators',
      memberCount: 3,
      description: 'A community of developers, designers, and entrepreneurs building technology solutions for environmental sustainability.',
      projectCount: 2,
      imageSrc: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
      actionType: 'join' as const
    },
    {
      id: '2',
      title: 'AI Creators Collective',
      memberCount: 3,
      description: 'A collaborative community exploring the frontiers of artificial intelligence and machine learning applications.',
      projectCount: 1,
      imageSrc: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
      actionType: 'request' as const
    },
    {
      id: '3',
      title: 'Design Systems Guild',
      memberCount: 3,
      description: 'A professional community dedicated to advancing the practice of design systems and component-based design.',
      projectCount: 1,
      imageSrc: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
      actionType: 'join' as const
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Communities</h1>
        <p className="text-gray-600">Explore and join partner communities</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {communities.map(community => (
          <CommunityCard 
            key={community.id}
            title={community.title}
            memberCount={community.memberCount}
            description={community.description}
            projectCount={community.projectCount}
            imageSrc={community.imageSrc}
            actionType={community.actionType}
          />
        ))}
      </div>
    </div>
  )
}
