import { useRouter } from 'next/router';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
  return (
    <div>
       {router.pathname != "/" && <Navbar />}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
