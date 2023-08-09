function Productcard() {
  return(
  <>
    <article className="w-[320px] aspect-[4/7] bg-neutral-950 max-w-sm rounded-lg overflow-hidden transform hover:-translate-y-1 hover:scale-102 transition-transform">
      <div className="h-[330px] bg-white">
        <img src="" />
      </div>
      <div>
        <div className="text-center text-neutral-500 montserratmedium">
          <p className="pt-[30px] pb-[5px] text-3xl montserratbold text-white">Event Name</p>
          <p className="pb-[4px] text-xs ">09 - march - 1999</p>
          <p className="pb-[4px] text-sm ">BSD, Indonesia</p>
          <p className="pb-[15px] text-sm ">$99.99</p>
          <button className="w-[130px] h-[40px] bg-white text-black montserratbold rounded-lg">
            Buy Ticket
          </button>
        </div>
      </div>
    </article>
  </>
  )
}

export default Productcard