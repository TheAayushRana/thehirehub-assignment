import {
  IoHomeOutline,
  IoBriefcaseOutline,
  IoPersonOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import { BarChartIcon } from 'lucide-react';

const sidebarItems = [
  {
    icon: <IoHomeOutline size={20} />,
    label: 'Home',
    href: '/',
  },
  {
    icon: <IoBriefcaseOutline size={20} />,
    label: 'Jobs',
    href: '/jobs',
  },
  {
    icon: <IoPersonOutline size={20} />,
    label: 'Candidates',
    href: '/candidates',
  },
  {
    icon: <BarChartIcon size={20} />,
    label: 'Analytics',
    href: '/analytics',
  },
  {
    icon: <IoSettingsOutline size={20} />,
    label: 'Settings',
    href: '/settings',
  },
];

const Sidebar = () => {
  return (
    <div className='hidden md:flex flex-col gap-5 px-2 py-10 bg-white overflow-hidden shadow-md shadow-secondary-light'>
      <div className='flex flex-col gap-3'>
        {sidebarItems.map((item, index) => {
          const { icon } = item;
          return (
            <div
              key={index}
              className='flex items-center gap-2 cursor-pointer hover:bg-secondary-light rounded-md p-2 transition-all duration-300'
            >
              {icon}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
