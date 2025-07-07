'use client';
import Link from "next/link";
import React from 'react';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      
      {/* Left - Testimonial / Info */}
      <aside className="flex flex-col justify-between p-8 bg-gray-950">
        <Link href="/" className="flex items-center gap-2 mb-6">
          <Image src="/assets/icons/logo1.png" height={32} width={32} alt="Logo" />
          <h1 className="text-xl font-bold">ClipNova</h1>
        </Link>

        <section className="space-y-4">
          <figure className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                src="/assets/icons/star.svg"
                alt={`Star ${index + 1}`}
                width={20}
                height={20}
              />
            ))}
          </figure>
          <h2 className="text-2xl font-semibold">
            Record. Share. Shine.
            <br />
            With ClipNova, your screen speaks louder.
          </h2>
          <p className="text-gray-300">
            Capture your screen in seconds and share with anyone, anywhere. Whether you&apos;re giving product demos, daily updates, or quick tutorials — ClipNova makes it fast, clear, and effortless.
          </p>

          <article className="flex items-center gap-4 mt-6">
            <Image src="/assets/images/dummy.jpg" alt="Jason's testimonial" width={64} height={64} className="rounded-full" />
            <div>
              <h3 className="font-bold text-lg">Tonny Murithi</h3>
              <p className="text-sm text-gray-400">CEO, ClipNova</p>
            </div>
          </article>
        </section>

        <p className="text-xs text-gray-500 mt-12">© ClipNova {new Date().getFullYear()}</p>
      </aside>

      {/* Right - Hero CTA + Google Sign-in */}
      <aside className="flex items-center justify-center p-8 relative">
        <section className="text-center max-w-xl">
          <Link href="/" className="flex justify-center items-center gap-2 mb-4">
            <Image src="/assets/icons/logo.svg" height={40} width={40} alt="Logo" />
            <h1 className="text-2xl font-bold">ClipNova</h1>
          </Link>

          <p className="mb-6 text-lg text-gray-300">
            Record. Share. Shine. <br />
            With <span className="text-indigo-400 font-medium">ClipNova</span>, your screen speaks louder.
          </p>

          <button
            onClick={async () => {
              await authClient.signIn.social({ provider: 'google' });
            }}
            className="flex items-center justify-center gap-3 bg-white text-gray-800 font-semibold py-3 px-6 rounded-xl hover:bg-gray-200 transition duration-300"
          >
            <Image src="/assets/icons/google.svg" height={22} width={22} alt="Google Icon" />
            <span>Sign in with Google</span>
          </button>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/record"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
            >
              Start Recording
            </Link>
            <Link
              href="/dashboard"
              className="bg-white text-indigo-700 font-semibold py-3 px-6 rounded-xl border border-indigo-400 hover:bg-gray-100 transition duration-300"
            >
              Go to Dashboard
            </Link>
          </div>
        </section>

        <div className="overlay absolute inset-0 pointer-events-none"></div>
      </aside>
    </main>
  );
}
