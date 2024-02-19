import Link from 'next/link'
import Image from 'next/image'

export default async function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 flex items-start justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/moletom-never-stop-learning.png"
          className="transition-transform duration-500 group-hover:scale-105"
          width={920}
          height={920}
          alt=""
          quality={100}
        />

        <div className="absolute bottom-20 right-28 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm ">Moletom Never Stop Learning</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex items-start justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/moletom-java.png"
          className="transition-transform duration-500 group-hover:scale-105"
          width={920}
          height={920}
          alt=""
          quality={100}
        />

        <div className="absolute bottom-10 right-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm ">Moletom Never Stop Learning</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex items-start justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/moletom-ai-side.png"
          className="transition-transform duration-500 group-hover:scale-105"
          width={920}
          height={920}
          alt=""
          quality={100}
        />

        <div className="absolute bottom-10 right-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm ">Moletom Never Stop Learning</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>
    </div>
  )
}
