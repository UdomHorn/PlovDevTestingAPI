import thumnailimage from '../../assets/Tumnailimage.png'

export default function CourseCard({ data }) {
  return (
    <>
      <div className='m-12 w-[209px] h-[350px] border-1 border-gray-300 rounded-lg relative bg-white'>
        <div className='relative'>
          <div className=''>
            <img
              className='rounded-lg'
              src={"https://i.pinimg.com/736x/8e/5d/86/8e5d86a7639eb6d9e18d6787489724d6.jpg"}
              alt={data.title}
            />
          </div>
          <div className='absolute bottom-8 left-3 bg-black text-white px-4 text-sm'>
            {data.duration}
          </div>
        </div>
        <div className='bg-white w-[207px] h-[30px] top-[60%] absolute'></div>
        <div className='p-4 '>
          <div className='text-orange-500 text-sm text-bold font-bold'>
            {data.category}
          </div>
          <div className='text-sm'>{data.title}</div>

          <div className='flex justify-between items-center'>
            <div className='text-[8px] text-orange-500 flex gap-1'>
              {data.rating}
              <div>⭐⭐⭐⭐⭐</div>
              <div className='text-gray-400'>{data.student}</div>
            </div>
            <div className='flex items-center gap-1'>
              <div className='font-bold text-sm'>{data.price}</div>
              <div className='text-[8px] text-red-900'>{data.oldPrice}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
