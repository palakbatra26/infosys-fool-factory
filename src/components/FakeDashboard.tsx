
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, Users, Award, Play } from 'lucide-react';

interface FakeDashboardProps {
  onPrankReveal: () => void;
}

const FakeDashboard = ({ onPrankReveal }: FakeDashboardProps) => {
  const [loadingModule, setLoadingModule] = useState(false);

  const handleModuleClick = () => {
    setLoadingModule(true);
    setTimeout(onPrankReveal, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMDA3Q0ZGIi8+Cjx0ZXh0IHg9IjYwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPklORk9TWVM8L3RleHQ+Cjwvc3ZnPgo=" 
                alt="Infosys" 
                className="h-8 w-24 object-contain"
              />
              <div className="text-sm text-gray-600">Training Portal</div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary">Trainee</Badge>
              <div className="text-sm text-gray-700">Welcome, New Joiner!</div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Infosys Training</h1>
          <p className="text-gray-600">Your journey to becoming an Infosys professional starts here!</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Modules</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Available for completion</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">Let's get started!</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Time Left</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">30</div>
              <p className="text-xs text-muted-foreground">Days remaining</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Batch Size</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45</div>
              <p className="text-xs text-muted-foreground">Trainees in your batch</p>
            </CardContent>
          </Card>
        </div>

        {/* Training Modules */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Training Modules</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={handleModuleClick}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Foundation Training</CardTitle>
                  <Badge variant="destructive">Not Started</Badge>
                </div>
                <CardDescription>
                  Introduction to Infosys culture, values, and basic technologies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Progress value={0} className="w-full" />
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>0 of 8 lessons completed</span>
                    <span>~6 hours</span>
                  </div>
                  <Button 
                    className="w-full" 
                    disabled={loadingModule}
                  >
                    {loadingModule ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Loading Module...</span>
                      </div>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Start Module
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="opacity-60">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Java Programming</CardTitle>
                  <Badge variant="outline">Locked</Badge>
                </div>
                <CardDescription>
                  Learn core Java concepts and object-oriented programming
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Progress value={0} className="w-full" />
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Complete Foundation Training first</span>
                    <span>~12 hours</span>
                  </div>
                  <Button className="w-full" disabled>
                    <Play className="w-4 h-4 mr-2" />
                    Locked
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-2">Important Information</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Training duration: 3 months intensive program</li>
            <li>• Attendance: Minimum 90% required</li>
            <li>• Assessment: Weekly tests and final evaluation</li>
            <li>• Support: 24/7 learning assistance available</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FakeDashboard;
