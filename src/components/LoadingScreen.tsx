
import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Connecting to Infosys Training Portal...');

  const loadingSteps = [
    'Connecting to Infosys Training Portal...',
    'Verifying credentials...',
    'Loading training modules...',
    'Preparing your dashboard...',
    'Almost ready...'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 2;
        
        // Update loading text based on progress
        if (newProgress >= 20 && newProgress < 40) {
          setLoadingText(loadingSteps[1]);
        } else if (newProgress >= 40 && newProgress < 60) {
          setLoadingText(loadingSteps[2]);
        } else if (newProgress >= 60 && newProgress < 80) {
          setLoadingText(loadingSteps[3]);
        } else if (newProgress >= 80 && newProgress < 100) {
          setLoadingText(loadingSteps[4]);
        }

        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return newProgress;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center">
      <div className="text-center space-y-8 max-w-md mx-auto px-6">
        <div className="space-y-4">
          <img 
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjMDA3Q0ZGIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JTkZPU1lTPC90ZXh0Pgo8L3N2Zz4K" 
            alt="Infosys Logo" 
            className="mx-auto w-48 h-20 object-contain"
          />
          <h1 className="text-3xl font-bold text-white">Training Portal</h1>
          <p className="text-blue-200">Welcome to your learning journey</p>
        </div>
        
        <div className="space-y-4">
          <Progress value={progress} className="w-full h-3" />
          <p className="text-white font-medium">{loadingText}</p>
          <p className="text-blue-300 text-sm">{progress}% Complete</p>
        </div>
        
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
