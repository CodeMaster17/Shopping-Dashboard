import React, { useEffect } from 'react'

// icons import
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft, BsFileDiffFill } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg'
import { Cart, Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../context/ContextProvider'


// button component which is called acording to the requirement
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <TooltipComponent content={title} position="BottomCenter">
        <button type="button" onClick={customFunc} style={{ color }} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
            <span style={{ background: dotColor }} className="absolute inline--fflex rounded---full h-2 w-2 right-2 top-2" />
            {icon}

        </button>
    </TooltipComponent>
)

const handleClick = () => { }

const Navbar = () => {
    const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor } = useStateContext();


    // for checking the size of the screen
    useEffect(() => {
        const handleReSize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleReSize)
        handleReSize();


        // to remove the event listener - every time you add an event listener, you need to remove it
        return () => window.removeEventListener('resize', handleReSize)
    }, []);

    // handling the opening and closing of the sidebar according to the size off the screen
    useEffect(() => {
        if (screenSize <= 900) {
            setActiveMenu(false)
        }
        else {
            setActiveMenu(true)
        }
    }, [screenSize]);



    return (
        <div className='flex justify-between p-2 md:mx-6 relative'>
            <NavButton title="Menu"
                customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color={currentColor}
                icon={<AiOutlineMenu />} />


            <div className="flex">
                <NavButton title="Cart"
                    customFunc={() => handleClick('cart')} color={currentColor}
                    icon={<FiShoppingCart />} />


                <NavButton title="Chat"
                    dotColor="#03C9D7"
                    customFunc={() => handleClick('chat')} color={currentColor}
                    icon={<BsChatLeft />} />

                <NavButton title="Notifications"
                    dotColor="#03C9D7"
                    customFunc={() => handleClick('notification')} color={currentColor}
                    icon={<RiNotification3Line />} />

                <TooltipComponent
                    content="Profile"
                    position="BottomCenter"
                >
                    <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={() => handleClick('userProfile')} >
                        <img className='rounded-full w-8 h-8' src={avatar} alt="" />
                        <p><span className='text-gray-400 text-14'>Hi</span>
                            {' '} <span className='text-gray-400 font-bold ml-1 text-14'>Michael</span>
                        </p>
                        <MdKeyboardArrowDown className='text-gray-400 text-14' />
                    </div>
                </TooltipComponent>


                {/* to display the contents of the section  when the button on the navbar is clicked */}
                {isClicked.cart && <Cart />}
                {isClicked.chat && <Chat />}
                {isClicked.notification && <Notification />}
                {isClicked.userProfile && <UserProfile />}


            </div>
        </div>
    )
}

export default Navbar
