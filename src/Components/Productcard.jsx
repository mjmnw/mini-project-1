
export default function Productcard(props) {
  return(
  <>
    <article key={props?.event?.id} className="w-[320px] aspect-[4/7] bg-neutral-950 max-w-sm rounded-lg overflow-hidden transform hover:-translate-y-1 hover:scale-102 transition-transform">
      <div className="h-[330px] bg-white ">
        <img src={props?.event?.images[0]} className="object-cover h-[330px] m-auto w-full "/>
      </div>
      <div>
        <div className="text-center text-neutral-500 montserratmedium">
          <div className="pt-[30px] pb-[5px] text-3xl montserratbold text-white">{props?.event?.name}</div>
          <div className="pb-[4px] text-xs "> {props.event.date}</div>
          <div className="pb-[4px] text-sm "> {props?.event?.location}</div>
          <div className="pb-[15px] text-sm "> {props.event.price}</div>
          <button className="w-[130px] h-[40px] bg-white text-black montserratbold rounded-lg">
            Buy Ticket
          </button>
        </div>
      </div>
    </article>
  </>
  )
}



