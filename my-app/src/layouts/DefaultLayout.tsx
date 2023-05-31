import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Hero />
      <Outlet />
    </div>
  );
}
