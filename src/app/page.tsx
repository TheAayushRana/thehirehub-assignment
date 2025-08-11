import { CiFlag1 } from 'react-icons/ci';
import { TiUserAddOutline } from 'react-icons/ti';
import { FaRegStar } from 'react-icons/fa';
import { IoTrophyOutline } from 'react-icons/io5';
import ChatbotWidget from '@/components/ChatbotWidget';
import ActiveJobsTable from '@/components/ActiveJobs';
import ApplicationTrends from '@/components/ApplicationTrends';
import ApplicationBreakdown from '@/components/ApplicationBreakdown';

export default function Home() {
  const metricsCards = [
    {
      title: 'Active Job Posts',
      value: 100,
      icon: <CiFlag1 />,
    },
    {
      title: 'Total Candidates',
      value: 100,
      icon: <TiUserAddOutline />,
    },
    {
      title: 'Recommended by AiRA',
      value: 100,
      icon: <FaRegStar />,
    },
    {
      title: 'AiRA Top Rankers',
      value: 100,
      icon: <IoTrophyOutline />,
    },
  ];

  return (
    <main className='space-y-4'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {metricsCards.map((card, index) => {
          const { title, icon, value } = card;
          return (
            <div
              key={index}
              className='flex flex-col gap-2 border border-gray-200 rounded-[8px] p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:cursor-pointer'
            >
              <div className='flex items-center gap-2'>
                <span className='text-primary text-2xl'>{icon}</span>
                <span className='text-lg font-bold'>{title}</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-primary text-3xl'>{value}</span>
              </div>
            </div>
          );
        })}
      </div>
      <section className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <ChatbotWidget />
        <div className='border rounded-sm col-span-2 grid grid-cols-1 md:grid-cols-5 bg-white overflow-hidden'>
          <div className='col-span-1 md:col-span-3'>
            <ApplicationTrends />
          </div>
          <div className='col-span-1 md:col-span-2'>
            <ApplicationBreakdown />
          </div>
        </div>
      </section>
      <ActiveJobsTable />
    </main>
  );
}
