import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

function Contact() {

  return (
    <>
      {/* title card */}
      <div className='
        flex
        flex-col
        justify-center
        items-center
        min-h-[200px]

      '>
        <h1 className='
          text-4xl
          font-semibold
          tracking-tight
          text-balance
          text-white
          sm:text-7xl
        '>
          Contact Us
        </h1>
      </div>
      {/* Content */}
      <div className='
        flex
        flex-col
        flex-grow
        gap-16
        bg-white/70
        lg:rounded-t-3xl
        p-8
        md:p-16
      '>
        {/* Contact Details */}
        <div className='
          flex
          md:flex-row
          flex-col
          gap-4
          w-full
          justify-center
          md:gap-24
          gap-16
          text-2xl
          text-gray-800
        '>
          <div className='
            flex
            flex-row
            justify-center
            gap-4
          '>
            <FontAwesomeIcon icon={faPhone} /><a href="tel:+14162851337" className='underline hover:text-blue-500'>+1 416 285 1337</a>
          </div>
          <div className='
            flex
            flex-row
            justify-center
            gap-4
          '>
            <FontAwesomeIcon icon={faEnvelope} /><a href="mailto:example@example.com" className='underline hover:text-blue-500'>example@example.com</a>
          </div>
        </div>
        {/* Location */}
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
            rounded-lg
          '></iframe>
        </div>
      </div>
    </>
  )
}

export default Contact
