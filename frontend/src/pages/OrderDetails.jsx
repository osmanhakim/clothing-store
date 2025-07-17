import { Link, useParams } from "react-router-dom";

const OrderDetails = () => {
  const { id } = useParams();
  <h1>{id}</h1>;
  return (
    <main className="pt-90" style={{ paddingTop: "0px;" }}>
      <div className="mb-4 pb-4"></div>
      <section className="my-account container">
        <h2 className="page-title">Order's Details</h2>
        <div className="row">
          <div className="col-lg-10">
            <div className="wg-box mt-5 mb-5">
              <div className="row">
                <div className="col-6">
                  <h5>Ordered Details</h5>
                </div>
                <div className="col-6 text-right">
                  <Link className="btn btn-sm btn-danger" to="/profile/orders">
                    Back
                  </Link>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table table-striped table-bordered table-transaction">
                  <tbody>
                    <tr>
                      <th>Order No</th>
                      <td>10001</td>
                      <th>Mobile</th>
                      <td>1234567891</td>
                      <th>Pin/Zip Code</th>
                      <td>804401</td>
                    </tr>
                    <tr className="">
                      <th>Order Date</th>
                      <td>2024-07-11 00:54:14</td>
                      <th>Delivered Date</th>
                      <td>2024-07-07</td>
                      <th>Canceled Date</th>
                      <td>2024-07-07</td>
                    </tr>
                    <tr>
                      <th>Order Status</th>
                      <td colspan="5">
                        <span className="badge bg-danger">Canceled</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="wg-box wg-table table-all-user">
              <div className="row">
                <div className="col-6">
                  <h5>Ordered Items</h5>
                </div>
                <div className="col-6 text-right"></div>
              </div>
              <div className="table-responsive">
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th className="text-center">Price</th>
                      <th className="text-center">Quantity</th>
                      <th className="text-center">SKU</th>
                      <th className="text-center">Category</th>
                      <th className="text-center">Brand</th>
                      <th className="text-center">Options</th>
                      <th className="text-center">Return Status</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pname">
                        <div className="image">
                          <img
                            src="http://localhost:8000/uploads/products/thumbnails/1718066538.jpg"
                            alt=""
                            className="image"
                          />
                        </div>
                        <div className="name">
                          <a
                            href="http://localhost:8000/shop/product1"
                            target="_blank"
                            className="body-title-2"
                          >
                            Product1
                          </a>
                        </div>
                      </td>
                      <td className="text-center">$71.00</td>
                      <td className="text-center">1</td>
                      <td className="text-center">SHT01245</td>
                      <td className="text-center">Category1</td>
                      <td className="text-center">Brand1</td>
                      <td className="text-center"></td>
                      <td className="text-center">No</td>
                      <td className="text-center">
                        <a
                          href="http://localhost:8000/shop/product1"
                          target="_blank"
                        >
                          <div className="list-icon-function view-icon">
                            <div className="item eye">
                              <i className="fa fa-eye"></i>
                            </div>
                          </div>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="pname">
                        <div className="image">
                          <img
                            src="http://localhost:8000/uploads/products/thumbnails/1718066673.jpg"
                            alt=""
                            className="image"
                          />
                        </div>
                        <div className="name">
                          <a
                            href="http://localhost:8000/shop/product2"
                            target="_blank"
                            className="body-title-2"
                          >
                            Product2
                          </a>
                        </div>
                      </td>
                      <td className="text-center">$101.00</td>
                      <td className="text-center">1</td>
                      <td className="text-center">SHT99890</td>
                      <td className="text-center">Category2</td>
                      <td className="text-center">Brand1</td>
                      <td className="text-center"></td>
                      <td className="text-center">No</td>
                      <td className="text-center">
                        <a
                          href="http://localhost:8000/shop/product2"
                          target="_blank"
                        >
                          <div className="list-icon-function view-icon">
                            <div className="item eye">
                              <i className="fa fa-eye"></i>
                            </div>
                          </div>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex items-center justify-between flex-wrap gap10 wgp-pagination"></div>

            <div className="wg-box mt-5">
              <h5>Shipping Address</h5>
              <div className="my-account__address-item col-md-6">
                <div className="my-account__address-item__detail">
                  <p>Divyansh Kumar</p>
                  <p>Flat No - 13, R. K. Wing - B</p>
                  <p>ABC, DEF</p>
                  <p>GHT, </p>
                  <p>AAA</p>
                  <p>000000</p>
                  <br />
                  <p>Mobile : 1234567891</p>
                </div>
              </div>
            </div>

            <div className="wg-box mt-5">
              <h5>Transactions</h5>
              <div className="table-responsive">
                <table className="table table-striped table-bordered table-transaction">
                  <tbody>
                    <tr>
                      <th>Subtotal</th>
                      <td>$172.00</td>
                      <th>Tax</th>
                      <td>$36.12</td>
                      <th>Discount</th>
                      <td>$0.00</td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <td>$208.12</td>
                      <th>Payment Mode</th>
                      <td>cod</td>
                      <th>Status</th>
                      <td>
                        <span className="badge bg-success">Approved</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="wg-box mt-5 text-right">
              <form
                action="http://localhost:8000/account-order/cancel-order"
                method="POST"
              >
                <input
                  type="hidden"
                  name="_token"
                  value="3v611ELheIo6fqsgspMOk0eiSZjncEeubOwUa6YT"
                  autocomplete="off"
                />
                <input type="hidden" name="_method" value="PUT" />{" "}
                <input type="hidden" name="order_id" defaultValue="1" />
                <button type="submit" className="btn btn-danger">
                  Cancel Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OrderDetails;
