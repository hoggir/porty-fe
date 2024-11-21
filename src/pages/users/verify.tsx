import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Verify() {
  const router = useRouter();
  const { token } = router.query;
  const [message, setMessage] = useState('Verifying your email...');

  useEffect(() => {
    if (token) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/verify/${token}`, {
        })
        .then((response) => {
          if (response.status === 200) {
            setMessage('Your email has been successfully verified!');
          } else {
            setMessage('Verification failed. Please try again.');
          }
        })
        .catch((error) => {
          setMessage('Verification failed. Please try again.');
        });
    }
  }, [token]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-5">
      <div className="bg-black max-h-auto mx-auto max-w-xl p-5 inline-block w-full items-start">
        <div className="mb-8 space-y-3">
          <p className="text-xl font-semibold">Email Verification</p>
          <p className="text-gray-500">{message}</p>
        </div>
        <div className="text-center w-full">
          <button
            onClick={() => router.push('/login')}
            className="mt-4 text-blue-500"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}