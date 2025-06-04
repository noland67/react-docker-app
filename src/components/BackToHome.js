import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackToHome = () => {
  return (
    <Link to="/">
      <div className="absolute top-4 left-4 z-50 cursor-pointer pointer-events-auto" title="Back to Home">
        <ArrowLeft size={28} />
      </div>
    </Link>
  );
};

export default BackToHome;
