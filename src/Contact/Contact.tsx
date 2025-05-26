import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Location from '../Location/Location'

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
        <Location />
      </div>
    </>
  )
}

export default Contact
