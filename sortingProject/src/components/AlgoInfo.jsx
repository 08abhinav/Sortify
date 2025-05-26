import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import sortingAlgorithms from '@/data/sortingAlgorithm';
import { Button } from '@/components/ui/button';

const AlgorithmInfo = ({onClose}) => {
  const { type } = useParams();
  const navigate = useNavigate();

  const algorithm = sortingAlgorithms.find((algo) => algo.type === type);

  useEffect(() => {
    if (!algorithm) navigate('/description');
  }, [type, algorithm]);

  if (!algorithm) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-zinc-900 rounded-2xl shadow-lg p-8 max-w-2xl text-white relative">
        <h2 className="text-3xl font-bold font-mono mb-4 underline">{algorithm.name}</h2>
        <p className="mb-6 text-gray-300">{algorithm.description}</p>

        {/* Optional: Legend */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Color Legend:</h3>
          <ul className="space-y-1 text-sm">
            <li><span className="inline-block w-4 h-4 bg-blue-400 mr-2"></span> Comparing</li>
            <li><span className="inline-block w-4 h-4 bg-green-400 mr-2"></span> Sorted</li>
            <li><span className="inline-block w-4 h-4 bg-yellow-400 mr-2"></span> Pivot (Quick Sort)</li>
            <li><span className="inline-block w-4 h-4 bg-red-400 mr-2"></span> Swapping</li>
          </ul>
        </div>

        <Button
          variant="outline"
          className="text-white border-gray-700 hover:bg-white/10"
          onClick={onClose}
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default AlgorithmInfo;
