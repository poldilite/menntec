import Image from 'next/image'

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-primary z-50 gap-10">
      <div className="w-40 md:w-56">
        <Image
          src="/assets/img/MennTEC_logo_827x473px.png"
          alt="MennTEC"
          width={224}
          height={128}
          priority
          className="w-full"
        />
      </div>

      {/* Spinner */}
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-tertiary" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-accent animate-spin" />
      </div>
    </div>
  )
}
