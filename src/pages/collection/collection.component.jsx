import React from "react";
import {connect} from "react-redux";
import './collection.styles.scss';

import {selectCollection} from "../../redux/shop/shop.selector";

/*import CollectionItem from "../../components/collection-item/collection-item.component";*/

const CollectionPage = (collection) => {
  console.log(collection);
  return (
      <div className='category'>
        <h2>collection PAGE</h2>
      </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);