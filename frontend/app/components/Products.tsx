import { getServices } from '@/app/actions/services'
import { ProductCard } from './ProductCard'

export async function Products() {
  const services = await getServices()

  return (
    <section className="product block md:bg-secondary md:py-12 md:px-0">
      <div className="inner">
        <ProductCard services={services} />
      </div>
    </section>
  )
}
