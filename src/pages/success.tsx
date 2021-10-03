import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Submission = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/?success=true');
  }, [router]);

  return <div />;
};

export default Submission;
