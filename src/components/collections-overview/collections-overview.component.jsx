import React, { useContext } from "react";
import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";
import CollectionsContext from "../../context/collections/collections.context";

const CollectionsOverview = () => {
  let collections = useContext(CollectionsContext);
  const collectionsForPreview = Object.keys(collections).map(
    key => collections[key]
  );
  return (
    <div className="collections-overview">
      {collectionsForPreview.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
