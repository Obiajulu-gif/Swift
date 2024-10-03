import ProductDetail from "./productDetailHero"; // Adjust the path if needed
import ProductDetailsTabs from "./productdetailstab";
import SimilarItems from "./similaritems";
const ProductDetailPage = () => {
	return (
		<div>
            <ProductDetail />
            <ProductDetailsTabs />
            <SimilarItems/>
		</div>
	);
};

export default ProductDetailPage;
