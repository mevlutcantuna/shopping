import ContentLoader from "react-content-loader";

const ProductLoader = () => (
  <ContentLoader
    speed={2}
    width={130}
    height={180}
    viewBox="0 0 130 180"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="5" y="129" rx="2" ry="2" width="100" height="8" />
    <rect x="5" y="144" rx="2" ry="2" width="60" height="8" />
    <rect x="5" y="2" rx="0" ry="0" width="120" height="120" />
    <rect x="5" y="159" rx="2" ry="2" width="120" height="16" />
  </ContentLoader>
);

export default ProductLoader;
