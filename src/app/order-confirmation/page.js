"use client";

import { useEffect } from "react";

export default function OrderConfirmation() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];

    // Totals
    var shipping_price = "0.00";
    shipping_price = shipping_price.replace(",", ".");

    var total_price = "865.95";
    total_price = total_price.replace(",", ".");

    var tax_price = "0.00";
    tax_price = tax_price.replace(",", ".");

    var items = [];

    items.push({
      item_id: "",
      item_name: "The 3D Modeled Snowboard",
      price: 865.95,
      quantity: 1,
    });

    const eventData = {
      event: "purchase",
      ecommerce: {
        transaction_id: "5664230637869",
        currency: "USD",
        value: total_price,
        shipping: shipping_price,
        tax: tax_price,
        items: items,
      },
    };

    console.log(eventData);

    window.dataLayer.push(eventData);
    console.log(window.dataLayer);
  });

  return (
    <div>
      <h1>ORDER CONFIRMATION</h1>
      <body className="">
        <div id="__next" data-reactroot="">
          <div className="theme-okl">
            <link rel="stylesheet" href="https://use.typekit.net/oeh4dxv.css" />
            <div className="CheckoutHeader_main__eoLHF">
              <div className="CheckoutHeader_desktopContainerSpacing__fsRnb flex">
                <div className="CheckoutHeader_desktopLogo__V_9AW">
                  <img
                    alt="One Kings Lane"
                    src="https://assets.onekingslane.com/m/2a3672007ee7fa59/original/OKL-logo-reg.png"
                  />
                </div>
              </div>
            </div>
            <div className="OrderConfirmation_orderConfirmationContainer__uwXvj">
              <div>
                <img
                  height="1"
                  width="1"
                  border="0"
                  src="https://api.bounceexchange.com/capture/convert2.gif?website_id=3212&amp;order_id=160298&amp;email=dehan@shoptoken.com&amp;amount=2887.92&amp;currency=USD&amp;goal=purchase"
                  style={{ display: "none" }}
                />
              </div>
              <div className="OrderConfirmation_orderConfirmation__eEv1c">
                <h2 className="h2 mb-4">
                  DD, <span>thank you for your order</span>
                </h2>
                <p className="text-body-md-normal">
                  We’ve sent you a confirmation email with a tracking link to
                  dehan@shoptoken.com which should arrive shortly. Below you’ll
                  find the details of your order.
                </p>
                <div className="grid grid-cols-3 gap-x-4 gap-y-4 border-b mt-4 mb-6 pb-6">
                  <div className="col-span-2">
                    <div className="grid grid-cols-1 gap-x-2 gap-y-2">
                      <p className="text-body-md-bold">
                        Order Number:
                        <span className="ml-1 inline">160298</span>
                      </p>
                      <p className="text-body-md-bold">
                        Customer ID: <span className="ml-1 inline">156793</span>
                      </p>
                      <p className="text-body-md-bold">
                        Completed On:
                        <span className="ml-1 inline">Tue, Dec 19, 2023</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-span-1 ml-auto">
                    <button role="button">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjEyNSA0LjAwMzEzVjAuNUgyLjg3NVY0LjAwMzEzQzIuMjM0NjYgNC4wMzU5NCAxLjYzMTM0IDQuMzEzMjMgMS4xODk0NCA0Ljc3NzgxQzAuNzQ3NTM2IDUuMjQyMzkgMC41MDA3NiA1Ljg1ODgyIDAuNSA2LjVWMTIuNUgyLjYyNVYxMS41SDEuNVY2LjVDMS41MDA0NSA2LjEwMjMxIDEuNjU4NjMgNS43MjEwNCAxLjkzOTgzIDUuNDM5ODNDMi4yMjEwNCA1LjE1ODYzIDIuNjAyMzEgNS4wMDA0NSAzIDVIMTNDMTMuMzk3NyA1LjAwMDQ1IDEzLjc3OSA1LjE1ODYzIDE0LjA2MDIgNS40Mzk4M0MxNC4zNDE0IDUuNzIxMDQgMTQuNDk5NiA2LjEwMjMxIDE0LjUgNi41VjExLjVIMTMuMTI1VjEyLjVIMTUuNVY2LjVDMTUuNDk5MiA1Ljg1ODgyIDE1LjI1MjUgNS4yNDIzOSAxNC44MTA2IDQuNzc3ODFDMTQuMzY4NyA0LjMxMzIzIDEzLjc2NTMgNC4wMzU5NCAxMy4xMjUgNC4wMDMxM1pNMTIuMTI1IDRIMy44NzVWMS41SDEyLjEyNVY0WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEyLjM3NSA2LjI1SDEzLjM3NVY3LjI1SDEyLjM3NVY2LjI1WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTMuNjI1IDguMjVIMi4zNzVWOS4yNUgzLjYyNVYxNS41SDEyLjEyNVY5LjI1SDEzLjM3NVY4LjI1SDMuNjI1Wk0xMS4xMjUgMTQuNUg0LjYyNVY5LjI1SDExLjEyNVYxNC41WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="
                        className="inline mr-2"
                        alt="print"
                      />
                      <h3
                        className="h3 inline font-normal align-middle"
                        role="button"
                        type="link"
                        label="print"
                      >
                        Print
                      </h3>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-4 my-6 pb-6 border-b">
                  <div className="col-span-1">
                    <h3 className="h3 mb-4">Billing Address</h3>
                    <p className="AddressSummary_addressContainer__NLzRk text-body-md-normal">
                      DD dd
                      <br />
                      3909 Witmer Road
                      <br />
                      Niagara Falls, NY, 14305
                    </p>
                  </div>
                  <div className="col-span-1">
                    <h3 className="h3 mb-4">Payment Method</h3>
                    <p className="flex items-center text-body-md-normal">
                      Credit Card
                    </p>
                    <p className="flex items-center text-body-md-normal">
                      ************4242
                    </p>
                  </div>
                  <div className="col-span-1">
                    <h3 className="h3 mb-4">Order Status</h3>
                    <p className="flex items-center text-body-md-normal">
                      Awaiting Fulfillment
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-2 border-b pb-4">
                  <h3 className="h3">review shipping &amp; delivery</h3>
                  <div className="grid grid-cols-1 gap-x-4 gap-y-2">
                    <div className="col-span-1">
                      <p className="text-body-md-normal"></p>
                      <p className="AddressSummary_addressContainer__NLzRk text-body-md-normal">
                        DD dd, 3909 Witmer Road, Niagara Falls, NY, 14305
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-1 gap-x-2 gap-y-2 py-4 border-b w-full">
                    <h4 className="py-0 h4">
                      SHIPMENT 1 OF 1 - FURNITURE SHIPPING
                    </h4>
                  </div>
                  <div>
                    <div>
                      <div className="flex">
                        <div className="ItemSummary_leftSummary__HmpQS relative">
                          <div className="ItemSummary_productImage__Dd_9Y">
                            <img src="https://assets.onekingslane.com/m/8d64f02edd67d35/Product_Square-Product_NMF10437_Image_1.jpg" />
                          </div>
                        </div>
                        <div className="w-full">
                          <div className="flex">
                            <div className="ItemSummary_productDetails__OjKbU">
                              <div className="grid grid-cols-1 gap-x-4 gap-y-2">
                                <div className="col-span-1">
                                  <a
                                    className="no-underline mb-1 underline cursor-pointer hover:text-accent-2"
                                    href="/p-ogden-P77087257?sku=77087258"
                                    target="_parent"
                                  >
                                    <p className="leading-md text-body-md-bold">
                                      Ogden Linen Panel Bed, Ivory - King,
                                      Ivory, Oak
                                    </p>
                                  </a>
                                  <p className="capitalize pt-2 text-body-sm-normal">
                                    SKU - 77087258
                                  </p>
                                  <p className="hidden md:block pt-2 text-body-sm-normal">
                                    <span className="text-body-sm-bold"></span>
                                    <span className="text-body-sm-bold">
                                      Est. Arrival:
                                    </span>
                                    <span className="inline-block ml-1 text-body-sm-normal">
                                      Jan 8 - Jan 23
                                    </span>
                                  </p>
                                  <p className="md:hidden pt-2 text-body-sm-normal">
                                    <span className="text-body-sm-bold"></span>
                                    <span className="text-body-sm-bold">
                                      Est. Arrival:
                                    </span>
                                    <span className="inline-block ml-1 text-body-sm-normal">
                                      Jan 8 - Jan 23
                                    </span>
                                  </p>
                                  <p className="pt-2 text-body-sm-normal">
                                    This item is returnable within 30 days of
                                    delivery
                                  </p>
                                </div>
                                <p className="text-body-sm-normal"></p>
                              </div>
                            </div>
                            <div className="ItemSummary_priceSummary__FnE2N">
                              <p
                                className="text-body-sm-bold"
                                data-testid="price"
                              >
                                <span className="ItemSummary_price__NWbON pt-0">
                                  $2,495.00
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-t"></div>
                  </div>
                  <div className="py-4 border-b">
                    <form role="radiogroup" aria-label="Shipment Options">
                      <div className="grid grid-cols-12 gap-x-4 gap-y-4">
                        <div className="col-span-9">
                          <p className="normal-case text-body-sm-normal">
                            Entryway delivery
                            <svg
                              width="1em"
                              height="1em"
                              fill="none"
                              viewBox="0 0 64 64"
                              className="fill-current w-5 h-5 inline-block ml-2"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M32 0C14.3286 0 0 14.3286 0 32C0 49.6714 14.3286 64 32 64C49.6714 64 64 49.6714 64 32C64 14.3286 49.6714 0 32 0ZM32 58.5714C17.3286 58.5714 5.42857 46.6714 5.42857 32C5.42857 17.3286 17.3286 5.42857 32 5.42857C46.6714 5.42857 58.5714 17.3286 58.5714 32C58.5714 46.6714 46.6714 58.5714 32 58.5714Z"
                                clip-rule="evenodd"
                              ></path>
                              <path
                                fill-rule="evenodd"
                                d="M28 17.1837C28 18.2554 28.4214 19.2832 29.1716 20.041C29.9217 20.7988 30.9391 21.2245 32 21.2245C33.0609 21.2245 34.0783 20.7988 34.8284 20.041C35.5786 19.2832 36 18.2554 36 17.1837C36 16.112 35.5786 15.0842 34.8284 14.3264C34.0783 13.5686 33.0609 13.1429 32 13.1429C30.9391 13.1429 29.9217 13.5686 29.1716 14.3264C28.4214 15.0842 28 16.112 28 17.1837ZM34 26.6122H30C29.6333 26.6122 29.3333 26.9153 29.3333 27.2857V50.1837C29.3333 50.5541 29.6333 50.8571 30 50.8571H34C34.3667 50.8571 34.6667 50.5541 34.6667 50.1837V27.2857C34.6667 26.9153 34.3667 26.6122 34 26.6122Z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </p>
                        </div>
                        <div className="col-span-3 h-full pt-1">
                          <p className="float-right text-body-sm-bold">
                            $179.00
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div role="dialog" className="hidden">
                    <div className="bg-primary-dark self-center w-min mx-auto z-50 outline-none focus:outline-none max-w-full border-modal-border shadow-modal relative my-10 min-w-320">
                      <div className="p-4">
                        <button
                          type="button"
                          className="absolute right-4 top-4 no-underline"
                        >
                          <svg
                            width="1em"
                            height="1em"
                            fill="none"
                            viewBox="0 0 64 64"
                            className="var(--color-primary) w-5 h-5"
                            style={{ fill: "var(--color-primary)" }}
                          >
                            <path
                              fill-rule="evenodd"
                              d="M32 33.94l29.384 29.386c.371.37.767.582.88.47l1.532-1.533c.112-.112-.1-.507-.47-.878L33.94 32 63.325 2.616c.371-.372.583-.767.47-.88L62.264.205c-.112-.112-.508.1-.878.47L32 30.06 2.615.675c-.37-.371-.766-.583-.878-.47L.204 1.736c-.112.112.1.507.47.878L30.06 32 .674 61.385c-.37.37-.582.766-.47.878l1.533 1.533c.112.112.507-.1.878-.47L32 33.94z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                        <div className="ShippingOptionModal_modalContainer__ArWRV"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="OrderConfirmation_orderSummary__ZUZ0H">
                <div className="OrderSummary_orderSummary__9hz93 undefined">
                  <div className="grid grid-cols-12 gap-x-2 gap-y-2">
                    <div className="col-span-8 self-end">
                      <h2 className="h2">Order Summary</h2>
                    </div>
                    <div className="col-span-4"></div>
                    <div className="col-span-12 OrderSummary_valuesSection__QzYj1">
                      <div className="grid grid-cols-1 gap-x-4 gap-y-2">
                        <div className="grid grid-cols-12 gap-x-4 gap-y-4">
                          <div className="col-span-6">
                            <p className="text-body-md-normal">
                              Subtotal: 1 item
                            </p>
                          </div>
                          <div className="col-span-6">
                            <p className="OrderSummary_price__J0WPi text-body-md-normal">
                              $2,495.00
                            </p>
                          </div>
                        </div>
                        <div className="grid grid-cols-12 gap-x-4 gap-y-4">
                          <div className="col-span-6">
                            <p className="text-body-md-normal">
                              Shipping &amp; Delivery:
                            </p>
                          </div>
                          <div className="col-span-6">
                            <p className="OrderSummary_price__J0WPi text-body-md-normal">
                              $179.00
                            </p>
                          </div>
                        </div>
                        <div className="grid grid-cols-12 gap-x-4 gap-y-4">
                          <div className="col-span-6">
                            <p className="text-body-md-normal">Tax:</p>
                          </div>
                          <div className="col-span-6">
                            <p className="OrderSummary_price__J0WPi text-body-md-normal">
                              $213.92
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div className="grid grid-cols-12 gap-x-4 gap-y-2 mb-1 border-t border-b pt-3 pb-2">
                        <div className="col-span-8">
                          <p className="text-body-lg-bold">Order Total:</p>
                        </div>
                        <div className="col-span-4">
                          <p className="OrderSummary_price__J0WPi text-body-lg-bold">
                            $2,887.92
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div className="grid grid-cols-12 gap-x-4 gap-y-2 mb-1"></div>
                    </div>
                  </div>
                  <div></div>
                </div>
                <div className="my-4">
                  <div></div>
                  <div className="MobileStickyButton_mobileStickyButton__f6DD3">
                    <button
                      aria-label="Continue Shopping"
                      className="max-w-full primary-button-default primary-button-primary text-primary-button-default text-primary-button-primary"
                      type="submit"
                      tabindex="0"
                      id="continueShopping"
                    >
                      <div>Continue Shopping</div>
                    </button>
                    <div className="MobileStickyButton_loginActions__3vifp">
                      <a
                        className="no-underline underline cursor-pointer hover:text-accent-2"
                        href="tel:3323336412"
                        target="_self"
                        label="Need Help"
                      >
                        <p className="tracking-xl text-body-sm-normal">
                          Need Help?
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div id="shoptoken-banner"></div>
              </div>
            </div>
          </div>
        </div>

        <div id="ltk-snippet" style={{ display: "none" }}></div>
      </body>
    </div>
  );
}
