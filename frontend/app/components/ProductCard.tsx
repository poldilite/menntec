import Image from 'next/image'

interface Service {
  id: string
  name: string
  description: string
  image?: {
    url: string
  }
  new?: boolean
  exclusive?: boolean
}

interface ProductCardProps {
  services: Service[]
}

export function ProductCard({ services }: ProductCardProps) {
  return (
    <>
      {services.map((service, idx) => {
        const isOdd = idx % 2 === 1
        const showBadge = service.new || service.exclusive

        return (
          <div
            key={service.id}
            className="h-[29rem] mb-0 bg-primary overflow-hidden block md:h-[17rem] md:mb-[3.75rem] lg:h-[30rem]"
          >
            <a href="">
              <div className="h-full m-0 relative flex flex-wrap flex-row">
                {/* Banner Box */}
                <div className="absolute w-full h-full z-[2500] drop-shadow-[0px_13px_10px_rgba(0,0,0,0.35)]">
                  {showBadge && (
                    <div
                      className={`badge-ribbon absolute z-[3000] bg-accent text-secondary font-bold py-2 px-4 w-40 top-[45%] right-0 text-[0.6rem] md:top-0 md:w-32 md:h-40 md:p-0 md:text-base md:text-center md:flex md:items-center md:justify-center md:flex-col md:pt-4 md:[clip-path:polygon(0%_0%,100%_0%,100%_100%,50%_88%,0%_100%)] ${
                        isOdd
                          ? 'md:left-[7.5%] md:right-auto'
                          : 'md:right-[7.5%]'
                      }`}
                    >
                      {service.new && service.exclusive && 'Neu & Exklusiv'}
                      {service.new && !service.exclusive && 'Neu'}
                      {!service.new && service.exclusive && 'Exklusiv'}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div
                  className={`w-full h-1/2 p-[3.25rem_1.625rem] flex flex-wrap flex-row relative md:w-1/3 md:h-full md:p-[2rem_1.25rem] md:flex-col ${
                    isOdd ? 'md:order-1' : 'md:order-0'
                  }`}
                >
                  <div className="text-lg font-bold w-full md:text-sm">
                    {service.name}
                  </div>
                  <div className="text-lg text-text-gray w-full md:text-sm">
                    {service.description}
                  </div>
                </div>

                {/* Image */}
                {service.image && (
                  <div
                    className={`w-full h-1/2 p-0 relative flex-none md:w-2/3 md:h-full md:pl-[0.625rem] ${
                      isOdd ? 'md:order-0' : 'md:order-1'
                    }`}
                  >
                    <Image
                      src={service.image.url}
                      alt={service.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </a>
          </div>
        )
      })}
    </>
  )
}
