import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

export default function AuthSuccess() {
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    if (token) {
      // Store the token in cookies or local storage
      Cookies.set('token', token as string);
      // Redirect to the home page
      router.push('/');
    }
  }, [token, router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-5">
      <p className="text-white">Logging you in...</p>
    </div>
  );
}