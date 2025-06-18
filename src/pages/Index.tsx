
import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import LoginForm from '@/components/LoginForm';
import FakeDashboard from '@/components/FakeDashboard';
import PrankReveal from '@/components/PrankReveal';

const Index = () => {
  const [currentStage, setCurrentStage] = useState<'loading' | 'login' | 'dashboard' | 'prank'>('loading');

  const handleLoadingComplete = () => {
    setCurrentStage('login');
  };

  const handleLogin = () => {
    setCurrentStage('dashboard');
  };

  const handlePrankReveal = () => {
    setCurrentStage('prank');
  };

  switch (currentStage) {
    case 'loading':
      return <LoadingScreen onComplete={handleLoadingComplete} />;
    case 'login':
      return <LoginForm onLogin={handleLogin} />;
    case 'dashboard':
      return <FakeDashboard onPrankReveal={handlePrankReveal} />;
    case 'prank':
      return <PrankReveal />;
    default:
      return <LoadingScreen onComplete={handleLoadingComplete} />;
  }
};

export default Index;
