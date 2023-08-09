import { useState } from "react"
import { ReactFullscreenCarousel } from "react-fullscreen-carousel"


const data = [
  { img: './../Utilities/Images/Art for Adults.jpg'}
];


function Carousel() {

  const [open,setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  return(
    <div>
    <div>
      {open ? (
        <ReactFullscreenCarousel
        slides={data}
        handleClose={() => setOpen(false)}
        startSlideIndex={0}
        />
      ) : null}
      <button onClick={() => setOpen(true)}></button>
    </div>
    </div>
  )
}

export default Carousel