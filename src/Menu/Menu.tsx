import Wrap1 from '/wrap1.jpg'
import Plate1 from '/plate1.jpg'
import Menu1 from '/menu1.jpg'
import Menu2 from '/menu2.jpg'

function Menu() {

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
          Our Menu
        </h1>
      </div>
      {/* Content */}
      <div className='
        flex
        flex-col
        flex-grow
        gap-16
        bg-white/80
        lg:rounded-t-3xl
        p-8
        lg:p-16
      '>
        {/* Featured Section */}
        <div className='
          flex
          flex-col
          items-center
          gap-6
        '>
          <h2 className='
            text-4xl
            font-semibold
            text-gray-800
            text-center
          '>
            Scarborough's Favourites
          </h2>
          <div className='
            flex
            flex-col
            md:flex-row
            gap-4
          '>
            <h3 className='
              text-3xl
              font-semibold
              text-gray-800
              min-w-[200px]
            '>
              ▼ Chicken Shawarma Wrap - $7.49
            </h3>
            <p className='
              text-gray-600
              text-lg
              leading-relaxed
            '>
              The chicken shawarma wrap at Shawarma Empire is a flavorful blend of thinly sliced, marinated chicken, grilled to perfection and wrapped in a soft pita. It's layered with fresh veggies, tangy pickles, and creamy garlic and tahini sauce, delivering a bold, savory bite in every mouthful.
            </p>
          </div>
          <div className='
            flex
            flex-col
            md:flex-row
            gap-4
            md:my-8
          '>
            <img 
              src={Wrap1} 
              className='
                object-cover
                h-80
                flex-grow
                rounded-lg
                shadow-2xl
                md:-mt-8
              '
            />
            <img 
              src={Plate1} 
              className='
                object-cover
                h-80
                flex-grow
                rounded-lg
                shadow-2xl
                md:-mb-8
              '
            />
          </div>
          <div className='
            flex
            gap-4
            flex-col-reverse
            md:flex-row
          '>
            <p className='
              text-gray-600
              text-lg
              leading-relaxed
              text-right
            '>
              The beef shawarma plate at Shawarma Empire features tender, marinated strip loin beef, thinly sliced and served over a bed of seasoned rice. Accompanied by fresh salad and creamy hummus, this hearty dish offers a satisfying taste of authentic Middle Eastern cuisine.
            </p>
            <h3 className='
              text-3xl
              font-semibold
              text-gray-800
              min-w-[200px]
            '>
              ▲ Beef Shawarma Plate - $15.99
            </h3>
          </div>
        </div>

        {/* Reviews Section */}
        <div className='
          flex
          flex-col
          items-center
          gap-8
        '>
          <h2 className='
            text-4xl
            font-semibold
            text-gray-800
            text-nowrap
          '>
            Full Menu
          </h2>
          <a href="https://restaurantsofontario.github.io/shawarmaempire/menu1.jpg" target="_blank" rel="noopener noreferrer">
            <img src={Menu1} />
          </a>
          <a href="https://restaurantsofontario.github.io/shawarmaempire/menu2.jpg" target="_blank" rel="noopener noreferrer">
            <img src={Menu2} />
          </a>
        </div>
      </div>
    </>
  )
}

export default Menu
