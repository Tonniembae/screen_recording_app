'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const VideoCard = ({
  id,
  title,
  thumbnail,
  createdAt,
  userImg,
  username,
  views,
  visibility,
  duration
}: VideoCardProps) => {

  const date = new Date(createdAt);

  return (
    <Link href={`/video/${id}`} className='video-card'>
      <Image src={thumbnail} alt='Thumbnail' width={290} height={160} className='thumbnail' />
      <article>
        <div>
          <figure>
            <Image src={userImg || ''} alt=''  width={34} height={34} className='rounded-full aspect-square' />
            <figcaption>
              <h3>{username}</h3>
              <p>{visibility}</p>
            </figcaption>
          </figure>
          <aside>
            <div>
              <Image src='/assets/icons/eye.svg' alt='views' width={16} height={16} />
              <span>{views}</span>
            </div>
          </aside>
        </div>
        <h2>
              {title} -{' '}
              {date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
        </h2>
      </article>

      <button onClick={() => {}} className='copy-btn'>
        <Image src='/assets/icons/link.svg' alt='copy' width={18} height={18} />
      </button>

      {duration && (
        <div className='duration'>
          {`${Math.floor(duration / 60)}:${(duration % 60).toString().padStart(2, '0')}`}min
        </div>
      )}
    </Link>
  );
};

export default VideoCard;
