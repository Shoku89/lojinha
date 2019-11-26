import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import {
  ButtonToCart,
  ButtonContinue
} from "../components/ButtonscartComponent";

export default class DetailsComponent extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {value => {
            console.log(value.detailProduct);
            const { model, img, price, title, info } = value.detailProduct;
            return (
              <div className='container py-5'>
                <div className='row'>
                  <div
                    data-aos='fade-left'
                    data-aos-duration='3000'
                    className='col-10 mx-auto 
                                    text-center text-white text-uppercase pt-5 my-5'
                  >
                    <h1>{title}</h1>
                  </div>
                </div>
                {/*END TITLE*/}
                <div
                  data-aos='fade-up'
                  data-aos-duration='3000'
                  className='row'
                >
                  {/* product img*/}
                  <div className='col-10 col-md-6 my-3 text-capitalize'>
                    <img
                      src={img}
                      className='img-fluid img-size'
                      alt='product img'
                    />
                  </div>
                  {/* product text*/}
                  <div className='col-6 mx-auto col-md-6 my-3 text-capitalize text-white'>
                    <h2>{title}</h2>
                    <p className='text-uppercase font-weight-bold mt-3 mb-0'>
                      Informarções sobre o produto:
                    </p>
                    <p className='mt-3 text-muted lead'>{info}</p>
                    <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                      Coleção : {model}
                    </h4>
                    <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                      Preço : <span>R$</span>
                      {price}
                    </h4>
                    <ButtonContinue /> <ButtonToCart />
                  </div>
                </div>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}
