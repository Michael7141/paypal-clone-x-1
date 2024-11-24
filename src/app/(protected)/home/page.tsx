import BanksAndCards from '@/app/components/home/BanksAndCards';
import FavoriteCharities from '@/app/components/home/FavoriteCharities';
import FundraisersCard from '@/app/components/home/FundraisersCard';
import MoneyRequestCard from '@/app/components/home/MoneyRequestCard';
import MoneyWaitingCard from '@/app/components/home/MoneyWaitingCard';
import PayPalRewardsCard from '@/app/components/home/PayPalRewardsCard';
import PopularCashBackDeals from '@/app/components/home/PopularCashBackDeals';
import QuickActions from '@/app/components/home/QuickActions';
import RecentActivity from '@/app/components/home/RecentActivity';
import SendAgain from '@/app/components/home/SendAgain';


export default function Home() {
  return (
    <div className='grid grid-cols-12 gap-6 '>
      <div className='col-span-7 space-y-6 '>
        <PayPalRewardsCard />
        <MoneyRequestCard />
        <FundraisersCard />
        <MoneyWaitingCard />
        <RecentActivity />
        <PopularCashBackDeals />
      </div>
      <div className='col-span-5 space-y-6'>
        <QuickActions />
        <SendAgain />
        <BanksAndCards />
        <FavoriteCharities />
      </div>
    </div>
  );
}
