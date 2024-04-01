import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { /*Avatar,*/ Dropdown} from 'flowbite-react'
import { HiUserCircle } from 'react-icons/hi'
import { IoLogOut } from 'react-icons/io5'
import { RootState } from '../redux/store'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { signOut } from '../redux/user/userSlice'
import { getAvatarInitials } from '../utils/functions'

export default function Header() {
    const currentUser = useAppSelector((state: RootState) => state.user.currentUser)

    const dispatch = useAppDispatch()

    const handleLogout = async() => {
        try {
            await(fetch('/api/auth/logout'));
            dispatch(signOut());
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='bg-slate-200'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <h1 className='font-bold'>InvestWise</h1>
            <ul className='flex gap-4 items-center'>
                <Link to="/startseite">Startseite</Link>
                {currentUser ? 
                (
                    <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-400 text-white font-semibold">
                            <span id='username' className='flex items-center'>{getAvatarInitials(currentUser.benutzername)}</span>
                        </div>
                    } >

                    <Dropdown.Header>
                        <span className='block tx-sm font-semibold'>{currentUser.benutzername}</span> 
                        {/* {currentUser.benutzername} */}
                        
                    </Dropdown.Header>
                    <Link to="/profile">
                        <Dropdown.Item icon={HiUserCircle}>
                            Profil
                        </Dropdown.Item>
                    </Link>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout}><IoLogOut style={{marginRight: '18px'}}/>Abmelden</Dropdown.Item>
                    </Dropdown>
                 ) : (
                    <Link to="/"><li>Anmelden</li></Link>
                )} 
            </ul>
            <div id="dropdown" className='absolute top-16 right-20 z-10 hidden divide-y bg-gray-300 divide-gray-600 rounded-lg shadow w-44 dark:bg-gray-900'>
                <ul className='py-2 text-sm text-gray-700 dark:text-gray-200'>
                    <Link to="" className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                        <li>Profil</li>
                    </Link>
                    <Link to="" className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                        <li>Profil</li>
                    </Link>
                </ul>
            </div>
        </div>
    </div>
  )
}
