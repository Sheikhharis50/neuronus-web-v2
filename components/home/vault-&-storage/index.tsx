import Heading from "@/components/Heading";
import Description from "@/components/Description";
import Container from "@/components/Container";
import { vaultProducts } from "@/data/productCatalog";
import ProductCatalog from "@/components/ProductCatalog";
import Slider from "./Slider";

const Vault = () => {
  return (
    <section className="pb-20 pt-26 sm:py-32 lg:py-40">
      <Heading className="text-center mb-3">Vault & Storage</Heading>
      <Description
        className="text-center mb-16 sm:mb-20 lg:mb-32"
        text="A secure safe for files and passwords."
      />
      <Container
        left
        className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center mb-16 sm:mb-20 lg:mb-0"
      >
        <div className="flex flex-col gap-10 sm:gap-12 lg:pe-10">
          {vaultProducts.map((product) => (
            <ProductCatalog
              {...product}
              key={`access-network-product-${product.title}`}
            />
          ))}
        </div>
        <div className="hidden lg:block">
          <Slider />
        </div>
      </Container>
      <div className="lg:hidden">
        <Slider />
      </div>
    </section>
  );
};

export default Vault;
