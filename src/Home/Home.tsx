import StoreFront from '/front.jpg'
import Wrap1 from '/wrap1.jpg'

function Home() {
  return (
    <>
      {/* title card */}
      <div className='
        flex
        flex-col
        justify-center
        items-center
        min-h-[300px]

      '>
        <h1 className='
          text-4xl
          font-semibold
          tracking-tight
          text-balance
          text-white
          sm:text-7xl
          italic
        '>
          SHAWARMA EMPIRE
        </h1>
        <p className='
          mt-8
          text-lg
          font-medium
          text-pretty
          text-red-500
          sm:text-xl/8
          font-mono
        '>
          AUTHENTIC PALESTINIAN CUISINE SINCE 2019
        </p>
      </div>
      {/* Content */}
      <div className='
        flex
        flex-col
        flex-grow
        gap-4
        bg-white/80
        lg:rounded-t-3xl
        p-8
        lg:p-16
      '>
        {/* Synopsis Section */}
        <div className='
          flex
          flex-col
          gap-6
          items-center
          mb-8
        '>
          <h2 className='
            text-2xl
            font-semibold
            text-gray-800
            mb-4
          '>
            Serving the Heart of Scarborough since 2019
          </h2>
          <p className='
            text-center
            text-gray-600
            text-lg
            leading-relaxed
            mb-6
          '>
            Discover the rich flavors of authentic Middle Eastern cuisine at Shawarma Empire. From our perfectly spiced shawarma to freshly prepared sides and desserts, we’re proud to serve food that’s made with tradition, care, and bold taste. Whether you’re dining in or taking out, satisfaction is always on the menu.
          </p>
          <div className='
            flex
          '>
            <img 
              src={Wrap1} 
              className='
                object-cover
                w-1/4
                flex-grow
                rounded-lg
                shadow-2xl
                -mr-4
                -mb-4
              '
            />
            <img 
              src={StoreFront} 
              className='
                object-cover
                w-1/4
                flex-grow
                rounded-lg
                shadow-2xl
                -mt-4
              '
            />
          </div>
        </div>

        {/* Hours Section */}
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
            <div>9:00 AM - 9:00 PM</div>
            <div className='font-medium text-gray-800 text-right'>Tuesday:</div>
            <div>9:00 AM - 9:00 PM</div>
            <div className='font-medium text-gray-800 text-right'>Wednesday:</div>
            <div>9:00 AM - 9:00 PM</div>
            <div className='font-medium text-gray-800 text-right'>Thursday:</div>
            <div>9:00 AM - 9:00 PM</div>
            <div className='font-medium text-gray-800 text-right'>Friday:</div>
            <div>9:00 AM - 9:00 PM</div>
            <div className='font-medium text-gray-800 text-right'>Saturday:</div>
            <div>10:00 AM - 10:00 PM</div>
            <div className='font-medium text-gray-800 text-right'>Sunday:</div>
            <div>Closed</div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className='
          flex
          flex-col
          items-center
        '>
          <h2 className='
            text-2xl
            font-semibold
            text-gray-800
            mb-4
          '>
            Reviews
          </h2>
          <div className='
            flex
            flex-col
            gap-4
            text-gray-600
            text-lg
            leading-relaxed
          '>
            <div className='
              bg-gray-100
              p-4
              rounded-lg
              shadow-sm
            '>
              <p>"This was the best dinner!! The salad is super fresh, rice was so flavourful, and the protein portions are generous. I also really liked their hot sauce. Highly recommend!!!"</p>
              <span className='
                text-sm
                text-gray-500
              '>– Stephanie via Google</span>
            </div>
            <div className='
              bg-gray-100
              p-4
              rounded-lg
              shadow-sm
            '>
              <p>"If you're craving authentic shawarma, this place is a must-visit!"</p>
              <span className='
                text-sm
                text-gray-500
              '>– Ramin via Google</span>
            </div>
            <div className='
              bg-gray-100
              p-4
              rounded-lg
              shadow-sm
            '>
              <p>"I’ve been here hundreds of times over a decade and not only is it hands down still the best shawarma and falafel, but don’t sleep on the lentil soup! Liquid gold I tell you."</p>
              <span className='
                text-sm
                text-gray-500
              '>– Alex via Google</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
