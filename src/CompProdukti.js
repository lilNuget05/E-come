import "./styles.css";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function CompProdukti(props1) {
  const categoryData = [
    { id: 1, name: "Apģērbi" },
    { id: 2, name: "Apavi" },
    { id: 3, name: "Sports" },
    { id: 4, name: "Aksesuāri" },
    { id: 5, name: "Rotaļlietas" }
  ];

  const sizeData = [
    { id: 1, name: "XXS" },
    { id: 2, name: "XS" },
    { id: 3, name: "S" },
    { id: 4, name: "M" },
    { id: 5, name: "L" },
    { id: 6, name: "XL" }
  ];

  const brandData = [
    { id: 1, name: "Nike" },
    { id: 2, name: "Adidas" },
    { id: 3, name: "Reebook" },
    { id: 4, name: "Gucci" }
  ];

  const cartData = {
    totalPrice: 1555.09,
    totalQuantity: 33,
    items: [
      { productId: 1, price: 20.5, quantity: 3 },
      { productId: 2, price: 10.5, quantity: 10 }
    ]
  };

  const produkti = [
    {
      id: 1,
      name: "Botes",
      imgSource:
        "https://www.weekendshoes.lv/media/catalog/product/cache/e20e41eb1f3453e9d53158e4a36630f2/1/-/1-9972517.jpg",
      price: 15.99,
      size: [1, 2],
      kategorija: [1, 2, 3],
      brand: 1
    },
    {
      id: 2,
      name: "Kedas",
      imgSource:
        "data:image/jpeg;base64,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REQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA/9k=",
      price: 16.99,
      size: [1],
      kategorija: [1, 2],
      brand: 2
    },
    {
      id: 3,
      name: "Zābaki",
      imgSource:
        "https://liberi.lv/media/products/main/bm9458_053_3.jpg.900x900_q85.jpg",
      price: 19.99,
      size: [3],
      kategorija: [1, 2],
      brand: 3
    },
    {
      id: 4,
      name: "Pufaika",
      imgSource:
        "https://euro.montbell.com/products/prod_img/zoom/z_2301368_bric.jpg",
      price: 29.99,
      size: [4],
      kategorija: [1],
      brand: 4
    },
    {
      id: 5,
      name: "vējaka",
      imgSource:
        "https://contents.mediadecathlon.com/p2027849/k$c26eb7ded66c4150e194e2384173a99b/men-s-softshell-windproof-warm-jacket-trek-100-windwarm-black.jpg?format=auto&quality=40&f=452x452",
      price: 24.99,
      size: [3, 4],
      kategorija: [1, 3],
      brand: 1
    },
    {
      id: 6,
      name: "Džinsi",
      imgSource:
        "https://www.apc.fr/media/catalog/product/cache/5f20f1917254e6a5a23af6773e8ed099/c/o/coguj-h09121iab_00_1674492323.jpg",
      price: 20.99,
      size: [5],
      kategorija: [1],
      brand: 2
    },
    {
      id: 7,
      name: "soma",
      imgSource:
        "https://images.sportsdirect.com/images/imgzoom/70/70104203_xxl.jpg",
      price: 9.99,
      size: [1, 5],
      kategorija: [3, 4],
      brand: 3
    },
    {
      id: 8,
      name: "brilles",
      imgSource:
        "https://cdn.shopify.com/s/files/1/0352/4571/9597/products/River_Black_Front_S_close-up.jpg?v=1670428447",
      price: 4.99,
      size: [1, 3],
      kategorija: [4],
      brand: 4
    }
  ];

  return (
    <>
      <div className="produkti-grid">
        {produkti &&
          produkti.length > 0 &&
          produkti.map((item, index) => {
            if (
              props1.data.ap === true &&
              item.kategorija.some((element) => {
                if (element === "Apģērbs") return true;
                else return false;
              }) === true
            ) {
              return (
                <Card className="CardStyle">
                  <img
                    className="imgStyle"
                    src={item.imgSource}
                    alt="nav bildes"
                  />
                  <div>
                    <div className="nameStyle">{item.name}</div>
                    <div className="price-size-style">
                      {item.price} € | size: {item.size}
                    </div>
                    <div>
                      <Button className="buttonStyle" variant="contained">
                        Likt grozā
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            } else if (
              props1.data.sp === true &&
              item.kategorija.some((element) => {
                if (element === "sports") return true;
                else return false;
              }) === true
            ) {
              return (
                <Card className="CardStyle">
                  <img
                    className="imgStyle"
                    src={item.imgSource}
                    alt="nav bildes"
                  />
                  <div>
                    <div className="nameStyle">{item.name}</div>
                    <div className="price-size-style">
                      {item.price} € | size: {item.size}
                    </div>
                    <div>
                      <Button className="buttonStyle" variant="contained">
                        Likt grozā
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            } else if (
              props1.data.ku === true &&
              item.kategorija.some((element) => {
                if (element === "kurpes") return true;
                else return false;
              }) === true
            ) {
              return (
                <Card className="CardStyle">
                  <img
                    className="imgStyle"
                    src={item.imgSource}
                    alt="nav bildes"
                  />
                  <div>
                    <div className="nameStyle">{item.name}</div>
                    <div className="price-size-style">
                      {item.price} € | size: {item.size}
                    </div>
                    <div>
                      <Button className="buttonStyle" variant="contained">
                        Likt grozā
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            } else if (
              props1.data.ak === true &&
              item.kategorija.some((element) => {
                if (element === "Aksesuāri") return true;
                else return false;
              }) === true
            ) {
              return (
                <Card className="CardStyle">
                  <img
                    className="imgStyle"
                    src={item.imgSource}
                    alt="nav bildes"
                  />
                  <div>
                    <div className="nameStyle">{item.name}</div>
                    <div className="price-size-style">
                      {item.price} € | size: {item.size}
                    </div>
                    <div>
                      <Button className="buttonStyle" variant="contained">
                        Likt grozā
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            }
          })}
      </div>
    </>
  );
}
