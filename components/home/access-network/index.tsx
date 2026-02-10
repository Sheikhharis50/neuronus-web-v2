import Heading from "@/components/Heading";
import Description from "@/components/Description";
import Container from "@/components/Container";
import { accessNetworkProducts } from "@/data/productCatalog";
import ProductCatalog from "@/components/ProductCatalog";
import Slider from "./Slider";

const AccessNetwork = () => {
  return (
    <Container className="pt-10 lg:pt-0 pb-16 md:pb-24 -mt-5">
      <Heading className="text-center mb-3">Access & Network</Heading>
      <Description
        className="text-center mb-10 md:mb-16"
        text="The Foundation. Tools that guarantee connection anonymity."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-0">
        <div className="flex flex-col lg:justify-between mt-8 gap-14 lg:gap-0 pe-8">
          {accessNetworkProducts.map((product) => (
            <ProductCatalog
              {...product}
              key={`access-network-product-${product.title}`}
            />
          ))}
        </div>
        <div>
          <Slider />
        </div>
      </div>
    </Container>
  );
};

export default AccessNetwork;
