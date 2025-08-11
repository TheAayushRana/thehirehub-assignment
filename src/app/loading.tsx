import Skeleton from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <main className='space-y-4'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className='flex flex-col gap-2 border border-gray-200 rounded-[8px] p-4 bg-white'
          >
            <div className='flex items-center gap-2'>
              <Skeleton className='h-6 w-6 rounded-full' />
              <Skeleton className='h-4 w-28' />
            </div>
            <Skeleton className='h-6 w-16' />
          </div>
        ))}
      </div>

      <section className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='border rounded-[8px] bg-white overflow-hidden'>
          <div className='bg-gray-100 p-4'>
            <div className='flex items-center gap-2'>
              <Skeleton className='w-10 h-10 rounded-full' />
              <div className='flex-1'>
                <Skeleton className='h-4 w-40 mb-2' />
                <Skeleton className='h-3 w-28' />
              </div>
            </div>
          </div>
          <div className='p-4 space-y-3'>
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className='h-6 w-full' />
            ))}
          </div>
          <div className='p-4 border-t'>
            <Skeleton className='h-10 w-full rounded-xl' />
          </div>
        </div>
        <div className='border rounded-sm col-span-2 grid grid-cols-1 md:grid-cols-5 bg-white overflow-hidden'>
          <div className='col-span-1 md:col-span-3 p-5'>
            <Skeleton className='h-5 w-56 mb-4' />
            <Skeleton className='h-[300px] w-full' />
          </div>
          <div className='col-span-1 md:col-span-2 p-5'>
            <Skeleton className='h-5 w-56 mb-4' />
            <Skeleton className='h-[300px] w-full' />
          </div>
        </div>
      </section>
    </main>
  );
}


