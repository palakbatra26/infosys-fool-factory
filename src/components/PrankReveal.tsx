
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Confetti from 'react-confetti';
import { Share2 } from 'lucide-react';

const PrankReveal = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [shareStatus, setShareStatus] = useState('');

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationPhase(1), 1000);
    const timer2 = setTimeout(() => setAnimationPhase(2), 2000);
    const timer3 = setTimeout(() => setShowConfetti(false), 8000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: 'Infosys Training Prank! 😂',
      text: 'Yeh dekho kaisa ullu bana diya! Training ka wait kar rahe the? 🤣',
      url: window.location.href
    };

    try {
      // Check if Web Share API is supported and available
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
        setShareStatus('Share kiya gaya! 🎉');
      } else {
        // Fallback to clipboard
        await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
        setShareStatus('Link copy ho gayi! WhatsApp pe send karo! 📱');
      }
    } catch (error) {
      console.log('Share error:', error);
      try {
        // Fallback to clipboard if share fails
        await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
        setShareStatus('Link copy ho gayi! Ab doston ko bhejo! 😄');
      } catch (clipboardError) {
        console.log('Clipboard error:', clipboardError);
        // Final fallback - show link to copy manually
        setShareStatus('Link manually copy karo: ' + window.location.href);
      }
    }

    // Clear status after 3 seconds
    setTimeout(() => setShareStatus(''), 3000);
  };

  const messages = [
    "😂 ULLU BANA DIYA! 😂",
    "Sach mein laga tha Infosys training hai? 🤣",
    "Maza aa gaya na? Training wait karte raho! 😄"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 flex items-center justify-center p-4 relative overflow-hidden">
      {showConfetti && (
        <Confetti
          width={typeof window !== 'undefined' ? window.innerWidth : 300}
          height={typeof window !== 'undefined' ? window.innerHeight : 200}
          numberOfPieces={200}
          recycle={true}
        />
      )}
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <Card className="relative z-10 max-w-2xl mx-auto shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
        <CardContent className="p-8 text-center space-y-6">
          <div className="space-y-4">
            <div className="text-8xl animate-bounce">
              🎉
            </div>
            
            <div className={`transform transition-all duration-1000 ${animationPhase >= 0 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse">
                GOTCHA!
              </h1>
            </div>

            <div className={`transform transition-all duration-1000 delay-500 ${animationPhase >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {messages[0]}
              </p>
            </div>

            <div className={`transform transition-all duration-1000 delay-1000 ${animationPhase >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="space-y-3">
                <p className="text-lg md:text-xl text-gray-700 font-medium">
                  {messages[1]}
                </p>
                <p className="text-lg md:text-xl text-gray-700 font-medium">
                  {messages[2]}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-4xl animate-bounce">
            <span style={{ animationDelay: '0s' }}>😂</span>
            <span style={{ animationDelay: '0.2s' }}>🤣</span>
            <span style={{ animationDelay: '0.4s' }}>😆</span>
            <span style={{ animationDelay: '0.6s' }}>😄</span>
            <span style={{ animationDelay: '0.8s' }}>😁</span>
          </div>

          <div className="space-y-4 pt-6">
            <p className="text-gray-600 font-medium">
              Kya matlab "April Fool nahi hai"? 😏
            </p>
            <p className="text-sm text-gray-500">
              Dost ne bheja hai toh share kar de! 🔥
            </p>
          </div>

          {shareStatus && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded font-medium">
              {shareStatus}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.location.reload()} 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-full transform hover:scale-105 transition-all duration-200"
            >
              🔄 Phir Se Dekho
            </Button>
            <Button 
              variant="outline"
              onClick={handleShare}
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-bold py-3 px-6 rounded-full transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              <Share2 size={20} />
              📤 Share Karo
            </Button>
          </div>

          <div className="text-xs text-gray-400 mt-6">
            Made with ❤️ for pranking friends
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrankReveal;
