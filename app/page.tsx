import Image from 'next/image';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillMail,
} from 'react-icons/ai';
import Me from '../public/Me.png';

export default function Home() {
  return (
    <div>
      <main className='px-10 bg-white'>
        <section className=' min-h-screen'>
          <nav className='py-10 mb-10 flex justify-between'>
            <h1 className='text-xl font-burtons'>sushavan.paul</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='text-2xl cursor-pointer' />
              </li>
              <li>
                <a
                  className='ml-8 text-white bg-gradient-to-r from-orange-600 to-orange-400 px-4 py-2 rounded-md'
                  href='#'
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl text-orange-600 font-medium py-2'>
              Sushavan Paul
            </h2>
            <h3 className='text-2xl py-2'>Developer & Charmer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>
              Hi! I am a developer during the day and a snack eating ninja by
              night. Pixel perfect UI and scalable solutions make me happy. If
              you have an opportunity for me, feel free to reach out.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 text-gray-600 py-3'>
            <a href='https://www.twitter.com/SushavanP'>
              <AiFillTwitterCircle />
            </a>
            <a href='https://www.linkedin.com/in/sushavan'>
              <AiFillLinkedin />
            </a>
            <a href='mailto:sushavan.paul.524@gmail.com'>
              <AiFillMail />
            </a>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-orange-600 mt-20 w-80 h-80 rounded-full overflow-hidden'>
            <Image
              src={Me}
              alt='photo of sushavan'
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
