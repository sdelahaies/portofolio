// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';

function BlogCard({ blog }) {

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group"
    >
      <div className="w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <a href={blog.url}>
        <Image
          src={blog?.image}
          height={1080}
          width={1920}
          alt=""
          className='h-400 w-full group-hover:scale-110 transition-all duration-300'
          href={blog.url}
        />
        </a>
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        {/* <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <p>{timeConverter(blog.published_at)}</p>
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <BsHeartFill />
              <span>{blog.public_reactions_count}</span>
            </p>
            {blog.comments_count > 0 &&
              <p className="flex items-center gap-1">
                <FaCommentAlt />
                <span>{blog.comments_count}</span>
              </p>
            }
          </div>
        </div> */}
        <Link href={blog.url}>
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-orange-400 sm:text-xl font-medium hover:text-orange-600'>
            {blog.title}
          </p>
        </Link>
        {/* <p className='mb-2 text-sm text-[#16f2b3]'>
          {`${blog.reading_time_minutes} Min Read`}
        </p> */}
        <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6'>
        {/* <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'> */}
          {blog.description}
        </p>
        {/* <div className="">
          <Link target='_blank' href={blog.url}>
            <button className='bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs'>
              Read More
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default BlogCard;