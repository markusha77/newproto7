import React, { useState } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { OnboardingFlow } from './components/signin/OnboardingFlow'
import { Header } from './components/Header'
import ProfileForm from './components/profile/ProfileForm'
import Welcome from './components/profile/Welcome'
import ProjectList from './components/profile/ProjectList'
import ProjectForm from './components/profile/ProjectForm'
import ProfilePreview from './components/profile/ProfilePreview'
import CommunityPage from './components/community/CommunityPage'
import ProjectDetail from './components/community/ProjectDetail'
import LandingPage from './components/landing/LandingPage'
import ProfilePage from './components/profile/ProfilePage'
import SignUpPage from './components/auth/SignUpPage'
import SignInPage from './components/auth/SignInPage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  const handleOnboardingComplete = () => {
    setIsLoggedIn(true)
    console.log('Onboarding completed!')
  }

  const handleOnboardingCancel = () => {
    // Redirect to landing page on cancel
    navigate('/landing')
    console.log('Onboarding cancelled!')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Routes>
        {/* Make Community page the main landing page */}
        <Route path="/" element={<CommunityPage />} />
        
        {/* Keep the old landing page accessible via /landing */}
        <Route path="/landing" element={<LandingPage />} />
        
        {/* Auth routes */}
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        
        {/* Onboarding route - directly accessible after signup */}
        <Route path="/onboarding" element={
          <>
            <Header />
            <main className="flex-1 flex items-center justify-center p-4">
              <OnboardingFlow 
                onComplete={handleOnboardingComplete} 
                onCancel={handleOnboardingCancel} 
              />
            </main>
          </>
        } />
        
        <Route path="/profile" element={<ProfilePage />} />
        
        <Route path="/profile/edit" element={
          <>
            <Header />
            <main className="flex-1 py-8">
              <ProfileForm />
            </main>
          </>
        } />
        
        <Route path="/builder" element={
          <>
            <Header />
            <main className="flex-1 py-8">
              <Welcome />
            </main>
          </>
        } />
        
        {/* Project routes */}
        <Route path="/projects" element={
          <>
            <Header />
            <main className="flex-1 py-8">
              <ProjectList />
            </main>
          </>
        } />
        
        <Route path="/projects/new" element={
          <>
            <Header />
            <main className="flex-1 py-8">
              <ProjectForm />
            </main>
          </>
        } />
        
        <Route path="/projects/edit/:projectId" element={
          <>
            <Header />
            <main className="flex-1 py-8">
              <ProjectForm />
            </main>
          </>
        } />
        
        <Route path="/preview" element={
          <>
            <Header />
            <main className="flex-1 py-8">
              <ProfilePreview />
            </main>
          </>
        } />
        
        {/* Community routes */}
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/project/:projectId" element={<ProjectDetail />} />
        
        {/* Redirect home route to dashboard if logged in */}
        <Route path="/home" element={
          isLoggedIn ? <CommunityPage /> : <Navigate to="/onboarding" />
        } />
      </Routes>
    </div>
  )
}

export default App
