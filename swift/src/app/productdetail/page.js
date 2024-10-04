import ProductDetail from "./productDetailHero"; // Adjust the path if needed
import ProductDetailsTabs from "./productdetailstab";
import SimilarItems from "./similaritems";

export const metadata = {
	title: "Product detail",
	description: "A platform to sell digital products",
	icons: {
		icon: "/images/logo.png",
	},
};
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
