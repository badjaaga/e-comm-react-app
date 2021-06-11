import React from "react";
import SHOP_DATA from "../../constants/shopData";
import CollectionPreview from "../../components/preview-collection/collection-preview.component";
import '../../components/preview-collection/collection-preview.component'

class ShopPage extends React.Component {
    constructor() {
        super();
        this.state = {
            collections:  SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return(
            (
                <div className='shop-page'>
                    {
                        collections.map(({ id, ...otherCollectionProps }) => (
                            <CollectionPreview key={id} {...otherCollectionProps}/>
                        ))
                    }
                </div>
            )
        )
    }
}

export default ShopPage;