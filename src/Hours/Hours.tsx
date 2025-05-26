export default function Hours() {
  return (
    <>
      <div className='
        flex
        flex-col
        items-center
        mb-8
      '>
        <h2 className='
          text-2xl
          font-semibold
          text-gray-800
          mb-4
        '>
          Hours
        </h2>
        <div className='
          grid
          grid-cols-2
          gap-x-4
          gap-y-4
          text-gray-600
          text-md
          lg:text-lg
          leading-relaxed
          w-full
          max-w-md
        '>
          <div className='font-medium text-gray-800 text-right'>Monday:</div>
          <div>11:00 AM - 10:00 PM</div>
          <div className='font-medium text-gray-800 text-right'>Tuesday:</div>
          <div>11:00 AM - 10:00 PM</div>
          <div className='font-medium text-gray-800 text-right'>Wednesday:</div>
          <div>11:00 AM - 10:00 PM</div>
          <div className='font-medium text-gray-800 text-right'>Thursday:</div>
          <div>11:00 AM - 10:00 PM</div>
          <div className='font-medium text-gray-800 text-right'>Friday:</div>
          <div>11:00 AM - 12:00 AM</div>
          <div className='font-medium text-gray-800 text-right'>Saturday:</div>
          <div>11:00 AM - 12:00 AM</div>
          <div className='font-medium text-gray-800 text-right'>Sunday:</div>
          <div>11:00 AM - 10:00 PM</div>
        </div>
      </div>
    </>
  )
}