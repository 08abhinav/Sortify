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
        <p className="mb-4 text-gray-200 font-mono">{algorithm.description}</p>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 underline">Time Complexity:</h3>
          <table className="text-sm text-left w-full border-collapse">
            <tbody>
              <tr><td className=" text-gray-200 font-mono">Best Case:</td><td>{algorithm.complexities.best}</td></tr>
              <tr><td className=" text-gray-200 font-mono">Average Case:</td><td>{algorithm.complexities.average}</td></tr>
              <tr><td className=" text-gray-200 font-mono">Worst Case:</td><td>{algorithm.complexities.worst}</td></tr>
            </tbody>
          </table>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 font-mono underline">Bar States Guide:</h3>
          <ul className="space-y-1 text-sm">
            {algorithm.legend?.map((item, idx)=>(
              <li key={idx} className='font-mono'>
                <span className={`inline-block w-4 h-4 ${item.color} mr-2 rounded-sm`}></span>
                {item.label}
              </li>
            ))}           
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
