import React from "react";
import ContentLoader from "react-content-loader";

const FilterLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={218}
      height={200}
      viewBox="0 0 218 200"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="38" y="18" rx="2" ry="2" width="200" height="19" />
      <rect x="0" y="17" rx="3" ry="3" width="22" height="22" />
      <rect x="0" y="51" rx="3" ry="3" width="22" height="22" />
      <rect x="0" y="85" rx="3" ry="3" width="22" height="22" />
      <rect x="0" y="122" rx="3" ry="3" width="22" height="22" />
      <rect x="38" y="52" rx="2" ry="2" width="200" height="19" />
      <rect x="38" y="86" rx="2" ry="2" width="200" height="19" />
      <rect x="38" y="124" rx="2" ry="2" width="200" height="19" />
      <rect x="0" y="160" rx="3" ry="3" width="22" height="22" />
      <rect x="38" y="161" rx="2" ry="2" width="200" height="19" />
    </ContentLoader>
  );
};

export default FilterLoader;
