import Head from 'next/head';
import Image from 'next/image';
import FirstPicture from '../public/image/picture-1.png';
import SecondPicture from '../public/image/picture-2.jpeg';

import { useRef } from 'react';

import type { NextPage } from 'next';
import type { IParallax } from '@react-spring/parallax';

const Home: NextPage = () => {
  const ref = useRef<IParallax | null>(null);

  return (
    <>
      <Head>
        <title>De Gitgit Agitya</title>
        <meta name='description' content='Resume for SPN' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='container mx-auto px-4 '>
        <article className='prose-sm lg:prose-xl'>
          <h2 className=''>Hello, my name is</h2>
          <h1>De Gitgit Agitya</h1>

          <h3>Introduction</h3>
          <hr />
          <p>I was born in Tasikmalaya, Indonesia and I&#8216;m Sundanese.</p>
          <p>I live in Bandung, Indonesia.</p>
          <p>I&#8216;m 23 years old.</p>
          <p>
            I&#8216;m a Tech Lead and Senior Software Engineer in{' '}
            <a className='underline' href='https://prosa.ai/'>
              Prosa.ai
            </a>
            . Currently, I&#8216;m working from anywhere.
          </p>
          <p>I have 2 older brothers.</p>

          <h3>Education</h3>
          <hr />
          <p>
            I was studying in Indonesia University of Education (Bachelor of
            Computer Science).
          </p>

          <h3>Career</h3>
          <hr />
          <p>You can take a look at my CV here</p>
          <a
            className='h-10 px-6 font-semibold rounded-md bg-black text-white py-2'
            href='/cv.pdf'
            target='degitgitagitya-cv'
          >
            My Professional CV
          </a>

          <h3>Physical</h3>
          <hr />
          <p>Height: &#177; 160cm</p>
          <p>Weight: &#177; 55kg</p>
          <p>Skin: Yellowish</p>

          <h3>Personal</h3>
          <hr />
          <p>
            I like reading books (Riyadus Salihin, Kitab Tauhid : Muhammad ibn
            Abdul Wahab syarh by Ustad Firanda, Bulugul Maram).
          </p>
          <p>Bear in mind, I don&#8216;t like music.</p>
          <p>I&#8216;m an easy going person, full of humor and active.</p>
          <p>I prefer to stay at home rather than going outside with people.</p>
          <p>In the meantime, I like to play some games</p>

          <h3>Criteria</h3>
          <hr />
          <p>I like an obedient and cheerful person.</p>
          <p>I don&#8216;t like a moody person.</p>

          <h3>Gallery</h3>
          <hr />
          <p>I don&#8216;t like taking pictures, but here are some.</p>

          <p className='prose-figcaption'>Me with my friend</p>
          <Image src={FirstPicture} alt='first-picture' />

          <p className='prose-figcaption'>
            Someone took a picture of me while I&#8216;m presenting
          </p>
          <Image src={SecondPicture} alt='second-picture' />
        </article>
      </div>
    </>
  );
};

export default Home;
