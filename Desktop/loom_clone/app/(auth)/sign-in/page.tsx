'use client';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { authClient } from '@/lib/auth-client';

const Page = () => {
 
  return (
    <main className='sign-in'>
      <aside className='testimonial'>
        <Link href='/'>
          <Image src='/assets/icons/logo1.png' height={32} width={32} alt="Logo" className='' />
          <h1>ClipNova</h1>
        </Link>
        <div className='description'>
          <section>
            <figure>
              {Array.from({length: 5}).map((_, index) => (
                <Image
                  key={index}
                  src='/assets/icons/star.svg'
                  alt={`Testimonial ${index + 1}`}
                  width={20}
                  height={20}
                />
              ))}
            </figure>
            <h1>Record. Share. Shine.
                With ClipNova, your screen speaks louder.</h1>
            <p>Capture your screen in seconds and share with anyone, anywhere. Whether youre giving product demos, daily updates, or quick tutorials — ClipNova makes it fast, clear, and effortless.</p>
            <article>
              <Image src='/assets/images/dummy.jpg' alt="Jason's testimonial" width={64} height={64} className='rounded-full'/>
              <div>
                <h2>
                  Tonny Murithi
                </h2>
                <p>CEO, ClipNova</p>
              </div>
            </article>
          </section>
        </div>
        <p>© ClipNova {(new Date()).getFullYear()}</p>
      </aside>
      <aside className='google-sign-in'>
        <section>
          <Link href='/'>
          <Image src='/assets/icons/logo.svg' height={40} width={40} alt="Logo" className='' />
          <h1>ClipNova</h1>
        </Link>
        <p>Record. Share. Shine.
        With <span>ClipNova,</span> ClipNova, your screen speaks louder.</p>
      <button onClick={async()=>{
        return await authClient.signIn.social({
          provider:'google'
        })
      }} >
        <Image src='/assets/icons/google.svg' height={22} width={22} alt="Google Icon" />
        <span>Sign in with Google</span>
      </button>
        </section>
      </aside>
      <div className='overlay' />
    </main>
  )
}

export default Page