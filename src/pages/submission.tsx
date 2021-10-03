import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';

const Submission = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/?success=true');
  }, [router]);
  return null;
};

export default Submission;
