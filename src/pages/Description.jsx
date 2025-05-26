import React from 'react';
import FloatingParicles from '@/components/FloatingParicles';
import Nav from '@/components/Nav';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import sortingAlgorithms from '@/data/sortingAlgorithm';

const Description = () => {
  const navigate = useNavigate();

  const handleVisualize = (type) => {
    navigate(`/visualize/${type}`);
  };

  return (
    <div className="relative h-fit min-h-screen bg-black text-white overflow-x-hidden overflow-y-auto pb-12">
      <Nav />

      <div className="pt-32 text-center px-4 overflow-hidden">
        <h2 className="text-5xl font-bold font-mono mb-4">What is Sorting?</h2>
        <p className="text-gray-200 max-w-2xl mx-auto text-lg mb-12">
          Sorting is the process of arranging data in a particular order to make it more meaningful and efficient to work with. Here's how different algorithms do it:
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto z-10 relative">
          {sortingAlgorithms.map((algo) => (
            <Card key={algo.name} className="bg-transparent border-gray-700 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-white font-mono underline">{algo.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 text-sm mb-4">{algo.description}</p>
                <Button onClick={() => handleVisualize(algo.type)} variant="outline"
                    className="rounded-xl border-gray-700 text-white hover:bg-white/10">
                  Visualize
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <FloatingParicles />
    </div>
  );
};

export default Description;
