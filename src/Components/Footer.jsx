// test

import Logo2 from './../Utilities/Images/Logo2.png'

function Footer () {
    return(
    <>
    <footer className='flex flex-col bg-black text-white h-[250px] border'>
        <div className='flex justify-center'>
        <a href="#" className="w-[300px] pt-3"><img src={Logo2} alt='Logo2'/></a>
        </div>
        <div>
            <ul className='flex justify-center pb-3 pt-3'>
                <li>
                    <a className='hover:text-red-600'href='#'>
                    T&C
                    </a>
                </li>
                <li className='pl-20'>
                    <a className='hover:text-red-600'href='#'>
                    About Us
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <ul className='flex justify-center'>
                <li>
                    <a className='hover:text-red-600'href='#'>
                    Instagram
                    </a>
                </li>
                <li className='pl-8'>
                    <a className='hover:text-red-600'href='#'>
                    Facebook
                    </a>
                </li>
                <li className='pl-8'>
                    <a className='hover:text-red-600'href='#'>
                    Youtube
                    </a>
                </li>
            </ul>
        </div>
    </footer>
    </>
    )
}

export default Footer