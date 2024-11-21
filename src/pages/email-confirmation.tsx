import { useRouter } from 'next/router';
import Link from 'next/link';

export default function EmailConfirmation() {
  const router = useRouter();
  const { email } = router.query;

  const openGmail = () => {
    window.open('https://mail.google.com', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-5">
      <div className="bg-black max-h-auto mx-auto max-w-xl">
        <div className="mb-8 space-y-3">
          <p className="text-xl font-semibold">Email Confirmation</p>
          <p className="text-gray-500">
            A confirmation email has been sent to <strong>{email}</strong>. Please check your inbox and follow the instructions to complete your registration.
          </p>
        </div>
        <div className="text-center flex items-center justify-center">
          <div className='flex-1'>
          <button
            onClick={openGmail}
            className="text-blue-500"
          >
            Open Mail
          </button>
          </div>
          <div className='flex-1'><Link legacyBehavior href="/login">
            <a className="text-blue-500">Back to Login</a>
          </Link></div>
        </div>
      </div>
    </div>
  );
}