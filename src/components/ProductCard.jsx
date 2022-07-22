import { generatePath, Link } from "react-router-dom"
import { PRODUCT_DETAIL_PATH } from "../constants/path"
import {currency} from "../utils/currency"
export default function ProductCard({product}) {
  const { name, real_price, price, images, slug } = product
    return (
            <div className="col-6 col-md-4">
                {/* Card */}
                <div className="card mb-7">
                    {/* Badge */}
                    <div className="badge badge-white card-badge card-badge-left text-uppercase">
                        New
                    </div>
                    {/* Image */}
                    <div className="card-img">
                        {/* Image */}
                        <Link className="card-img-hover" href="product.html" to={generatePath(PRODUCT_DETAIL_PATH, {slug})}>
                            <img className="card-img-top card-img-back" src="/img/products/product-120.jpg" alt="..." />
                            <img className="card-img-top card-img-front" src={images[0].thumbnail_url} alt="..." />
                        </Link>
                        {/* Actions */}
                        <div className="card-actions">
                            <span className="card-action">
                                <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct">
                                    <i className="fe fe-eye" />
                                </button>
                            </span>
                            <span className="card-action">
                                <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                    <i className="fe fe-shopping-cart" />
                                </button>
                            </span>
                            <span className="card-action">
                                <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                    <i className="fe fe-heart" />
                                </button>
                            </span>
                        </div>
                    </div>
                    {/* Body */}
                    <div className="card-body px-0">
                        {/* Category */}
                        <div className="font-size-xs">
                            <a className="text-muted" href="shop.html">Shoes</a>
                        </div>
                        {/* Title */}
                        <div className="font-weight-bold">
                            <Link className="text-body" to={generatePath(PRODUCT_DETAIL_PATH, {slug})}>
                                {/* Leather mid-heel Sandals */}
                                {name}
                            </Link>
                        </div>
                        {/* Price */}
                        <div className="font-weight-bold text-muted">
                            {/* $129.00 */}
                            {currency(real_price)}
                        </div>
                    </div>
                </div>
            </div>
    )
}
