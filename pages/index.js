import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// import styles from '../styles/Home.module.css'
import { FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      <div className='flex flex-col max-w-screen-2xl mx-auto min-h-screen relative'>
        {/* Nav bar section */}
        <div className='bg-gray-800 sticky top-0 left-0 right-0 '>
          <div className='flex justify-center items-center text-white text-xs sm:text-base p-4 max-w-screen-lg mx-auto'>
            <div className='flex w-full justify-center space-x-2 sm:space-x-5 md:space-x-10 items-center max-w-lg mx-auto'>
              <Link href='#users'>
                <a className='px-4 py-2 ring-1 rounded-xl hover:bg-gray-400 hover:text-black transition duration-500 ease-in-out hover:font-bold'>
                  Users
                </a>
              </Link>

              <Link href='#posts'>
                <a className='px-4 py-2 ring-1 rounded-xl hover:bg-gray-400 hover:text-black transition duration-500 ease-in-out hover:font-bold'>
                  Posts
                </a>
              </Link>

              <Link href='#comments'>
                <a className='px-4 py-2 ring-1 rounded-xl hover:bg-gray-400 hover:text-black transition duration-500 ease-in-out hover:font-bold'>
                  Comments
                </a>
              </Link>
            </div>
            <Link href='https://github.com/hokagedemehin/active-navbar'>
              <a target='_blank' className='text-2xl'>
                {' '}
                <FaGithub />{' '}
              </a>
            </Link>
          </div>
        </div>
        {/* Content section */}
        <div className='flex flex-col mt-4'>
          {/* eight content that will wrap on different screens */}
          <div className='flex flex-col gap-4' id='users'>
            users are here
          </div>
          <div className='flex flex-col gap-4' id='posts'>
            posts are here
          </div>
          <div className='flex flex-col gap-4' id='comments'>
            comments are here
          </div>
        </div>
      </div>
    </div>
  );
}
