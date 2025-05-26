export default function Location() {

  return (
    <>
      <div className='
        flex
        flex-col
        items-center
        gap-4
        w-full
      '>
        <h3 className='
          text-3xl
          font-semibold
          text-gray-800
          text-center
        '>
          Location
        </h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.4336029040733!2d-79.30601462263033!3d43.74309184661054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cdf70f4cdef5%3A0x3eacda5091123b64!2sShawarma%20Empire!5e0!3m2!1sen!2sca!4v1747862048045!5m2!1sen!2sca" loading="lazy" className='
          rounded-lg
          w-full
          h-[400px]
        '></iframe>
      </div>
    </>
  )
}