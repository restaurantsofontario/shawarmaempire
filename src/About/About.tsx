import StockBackground from '/stock-background.jpg'
import Ahed from '/ahed.jpg'
import Fresh from '/fresh.jpg'

function About() {

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
          Our Story
        </h1>
      </div>
      {/* Content */}
      <div className='
        flex
        flex-col
        flex-grow
        gap-4
        bg-white/70
        lg:rounded-t-3xl
        p-8
        lg:p-16
      '>
        <div className='
          flex
          flex-col
          gap-32
          py-8
          items-center
          w-full
          mb-8
        '>
          <div className='
            flex
            flex-col
            md:flex-row
            gap-4
          '>
            <div className='
              flex
              flex-col
              flex-grow
              md:w-1/4
              gap-4
            '>
              <h3 className='
                text-3xl
                font-semibold
                text-gray-800
                text-center
              '>
                Authentic Food in your Neighbourhood
              </h3>
              <p className='
                text-center
                text-gray-600
                text-lg
                leading-relaxed
                flex-grow
              '>
                Ahed started this place with a passion for sharing the food he grew up with in the West Bank. From day one, he's been hands-on, making sure every dish that leaves the kitchen reflects the same quality and care he's always believed in. People come here for the shawarma, but they come back for the warmth and heart we put into everything. It's that mix of tradition, flavor, and generosity that's made Shawarma Empire a Scarborough staple.
              </p>
            </div>
            <img 
              src={Ahed} 
              className='
                object-cover
                rounded-lg
                shadow-2xl
                md:w-1/4
                flex-grow
              '
            />
          </div>

          <div className='
            flex
            flex-col-reverse
            md:flex-row
            gap-4
          '>
            <img 
              src={Fresh} 
              className='
                object-cover
                rounded-lg
                shadow-2xl
                md:w-1/4
                flex-grow
              '
            />
            <div className='
              flex
              flex-col
              flex-grow
              md:w-1/4
              gap-4
            '>
              <h3 className='
                text-3xl
                font-semibold
                text-gray-800
                text-center
              '>
                Never less than Fresh
              </h3>
              <p className='
                text-center
                text-gray-600
                text-lg
                leading-relaxed
                flex-grow
              '>
                At Shawarma Empire, fresh ingredients are at the heart of everything we make. Every morning, we prep our veggies by hand — crisp lettuce, juicy tomatoes, crunchy cucumbers, and bright parsley, all chopped fresh daily. Our meats are marinated in-house with a blend of traditional Middle Eastern spices, then slow-cooked to lock in flavor and tenderness. We don’t cut corners — from our creamy hummus to our tangy pickled turnips, everything is made with care using real, quality ingredients. It’s that commitment to freshness that keeps our food tasting bold, vibrant, and true to its roots.
              </p>
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
            '></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
