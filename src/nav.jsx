import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import CartContext from "./CartContext";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import "./App.css";
const Nav = () => {
  const navigate=useNavigate()
  const {cart}=useContext(CartContext)
  return (
    <nav>
      <div className="navup">
        <div className="leftnavup">
          <p>Welcome Milano store!</p>
          <svg width="8" height="15" viewBox="0 0 8 15" fill="none">
            <path
              fill="currentColor"
              d="M1.7778 3.33336V5.00005H0V7.50004H1.7778V15H5.33333V7.50004H7.6978L8 5.00005H5.33333V3.54169C5.33333 2.86673 5.40445 2.50837 6.51553 2.50837H8V0H5.61781C2.77338 7.16144e-05 1.7778 1.25003 1.7778 3.33336Z"
            ></path>
          </svg>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              fill="currentColor"
              d="M12 0H2.99999C1.34315 0 0 1.34315 0 2.99999V12C0 13.6569 1.34315 15 2.99999 15H12C13.6569 15 15 13.6569 15 12V3.00005C15.0001 1.34315 13.6569 0 12 0ZM10.5 2.25001H12.75V4.50001H10.5V2.25001ZM7.5 4.50008C9.15684 4.50008 10.5 5.84322 10.5 7.50006C10.5 9.15691 9.15684 10.5001 7.5 10.5001C5.84316 10.5001 4.50001 9.15691 4.50001 7.50006C4.50001 5.84322 5.84316 4.50008 7.5 4.50008ZM13.5 12.0001C13.5 12.8285 12.8284 13.5001 12 13.5001H2.99999C2.17157 13.5001 1.49996 12.8285 1.49996 12.0001V6.75002H3.07495C2.62455 9.19416 4.24072 11.5407 6.68486 11.9911C9.129 12.4416 11.4755 10.8253 11.926 8.38121C11.9795 8.09065 12.0043 7.79552 12 7.50006C11.9963 7.24837 11.9712 6.99752 11.925 6.75008H13.5V12.0001H13.5Z"
            ></path>
          </svg>
          <svg width="14" height="15" viewBox="0 0 14 15" fill="none">
            <path
              fill="currentColor"
              d="M5.07645 15C3.73009 15 2.43888 14.4957 1.48686 13.5981C0.534838 12.7005 0 11.4831 0 10.2136C0 8.94421 0.534838 7.72678 1.48686 6.82917C2.43888 5.93155 3.73009 5.42727 5.07645 5.42727H6.31591V7.76318H5.07645C4.56156 7.76318 4.05824 7.90714 3.63013 8.17685C3.20202 8.44656 2.86834 8.8299 2.67131 9.27841C2.47427 9.72692 2.42271 10.2205 2.52316 10.6966C2.62361 11.1727 2.87155 11.6101 3.23563 11.9534C3.59971 12.2966 4.06358 12.5304 4.56857 12.6251C5.07356 12.7198 5.597 12.6712 6.07269 12.4854C6.54838 12.2997 6.95496 11.985 7.24102 11.5814C7.52707 11.1778 7.67975 10.7032 7.67975 10.2177V0H10.1572V1.16727C10.1572 1.81826 10.4315 2.44258 10.9197 2.9029C11.4079 3.36321 12.0701 3.62182 12.7605 3.62182H14V5.95364H12.7519C11.8343 5.95488 10.934 5.71907 10.1486 5.27182V10.2136C10.1474 11.482 9.6128 12.6982 8.66196 13.5955C7.71113 14.4927 6.4217 14.9978 5.07645 15Z"
            ></path>
          </svg>
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <path
              fill="currentColor"
              d="M19.5879 2.19067C19.3575 1.33405 18.6819 0.658786 17.8252 0.428126C16.2602 0 9.99977 0 9.99977 0C9.99977 0 3.73963 0 2.17456 0.411894C1.33435 0.64231 0.642335 1.33417 0.411866 2.19067C0 3.75525 0 7 0 7C0 7 0 10.2611 0.411866 11.8093C0.642579 12.6658 1.31787 13.3411 2.17469 13.5718C3.75611 14 10 14 10 14C10 14 16.2602 14 17.8252 13.5881C18.682 13.3576 19.3575 12.6823 19.5882 11.8258C19.9999 10.2611 19.9999 7.01648 19.9999 7.01648C19.9999 7.01648 20.0164 3.75525 19.5879 2.19067ZM8.00661 9.99761V4.00239L13.2124 7L8.00661 9.99761Z"
            ></path>
          </svg>
          <svg width="14" height="15" viewBox="0 0 14 15" fill="none">
            <path
              fill="currentColor"
              d="M6.90225 0C2.51602 0.000625009 0.18457 2.63504 0.18457 5.50758C0.18457 6.83947 0.978611 8.50137 2.25001 9.02825C2.61269 9.18138 2.56469 8.9945 2.87671 7.87574C2.90138 7.78261 2.88871 7.70198 2.8087 7.61511C0.991278 5.64445 2.45402 1.59315 6.6429 1.59315C12.7052 1.59315 11.5725 9.45701 7.69762 9.45701C6.6989 9.45701 5.95487 8.722 6.19021 7.81261C6.47556 6.72947 7.03426 5.56508 7.03426 4.78444C7.03426 2.81691 3.90743 3.10879 3.90743 5.71571C3.90743 6.52134 4.21144 7.0651 4.21144 7.0651C4.21144 7.0651 3.20539 10.8752 3.01872 11.587C2.7027 12.7921 3.06138 14.7427 3.09272 14.9108C3.11205 15.0033 3.22273 15.0327 3.28473 14.9565C3.38407 14.8346 4.60013 13.2083 4.94081 12.0327C5.06482 11.6045 5.57351 9.86701 5.57351 9.86701C5.90886 10.4345 6.87558 10.9095 7.90563 10.9095C10.9698 10.9095 13.1846 8.38449 13.1846 5.25132C13.1739 2.24753 10.4318 0 6.90225 0Z"
            ></path>
          </svg>
        </div>
        <div className="centernavup">
          <Swiper
            direction="horizontal"
            navigation={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{ delay: 2500 }}
            loop={true}
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <p>
                Sign up for 10% off your first order.<strong> Sign Up</strong>
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p>
                Coats—every Friday 75% Off.<strong> Shop Sale</strong>
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p>
                Summer sale discount off 50%.<strong> Shop Sale</strong>
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="rightnavup">
          <p>About Us</p>
          <p>Help Center</p>
          <div className="flag">
            <img
              src="//cdn.shopify.com/static/images/flags/us.svg"
              alt="United States"
              srcSet="//cdn.shopify.com/static/images/flags/us.svg?width=352 352w"
              height="100%"
              width="100%"
            />
          </div>
          <p>United States (USD $)</p>
        </div>
      </div>
      <div className="navdown">
        <div className="leftnavdown">
          <img
            src="//demo-milano.myshopify.com/cdn/shop/files/logo.png?v=1742650856&amp;width=330"
            sizes="90px"
            width="90"
            height="22"
            alt="Milano shopify theme (password: 1)"
          ></img>
        </div>
        <div className="centernavdown">
          <ul className="menu">
            <li className="items">
              <Link to="/">
                <p>Home</p>
                <i
                  className="nf nf-fa-chevron_down"
                  style={{
                    display: "inline-block",
                    marginTop: "2px",
                  }}
                ></i>
              </Link>
            </li>
            <li className="items">
              <Link to="/shop">
                <p>Shop</p>
                <i
                  className="nf nf-fa-chevron_down"
                  style={{
                    display: "inline-block",
                    marginTop: "2px",
                  }}
                ></i>
              </Link>
            </li>
            <li className="items">
              <Link to="/">
                <p>Products</p>
                <i
                  className="nf nf-fa-chevron_down"
                  style={{
                    display: "inline-block",
                    marginTop: "2px",
                  }}
                ></i>
              </Link>
            </li>
            <li className="items">
              <Link to="/">
                <p>Pages</p>
                <i
                  className="nf nf-fa-chevron_down"
                  style={{
                    display: "inline-block",
                    marginTop: "2px",
                  }}
                ></i>
              </Link>
            </li>
            <li className="items">
              <Link to="/">
                <p>Blog</p>
                <i
                  className="nf nf-fa-chevron_down"
                  style={{
  
                    display: "inline-block",
                    marginTop: "2px",
                  }}
                ></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="rightnavdown">
          <div>
            <i
              className="nf nf-fa-search"
              style={{
                width: "10px",
                height: "10px",
                fontSize: "18px",
                fontWeight: "100",
              }}
            ></i>
          </div>
          <div>
            <i
              className="nf nf-fa-user_o"
              style={{
                width: "10px",
                height: "10px",
                fontSize: "18px",
                fontWeight: "400",
              }}
            ></i>
          </div>
          <div>
            <i
              className="nf nf-oct-light_bulb"
              style={{
                width: "10px",
                height: "10px",
                fontSize: "18px",
                fontWeight: "500",
              }}
            ></i>
          </div>
          <div>
            <i
              className="nf nf-cod-heart"
              style={{
                width: "10px",
                height: "10px",
                fontSize: "18px",
                fontWeight: "600",
              }}
            ></i>
            </div>    
          <div style={{ position: "relative" }}>
  <i
    onClick={() => {
      navigate("/Cart");
    }}
    className="nf nf-md-cart_outline"
    style={{
      width: "10px",
      height: "10px",
      fontSize: "18px",
      fontWeight: "500",
    }}
  ></i>

  {/* Badge */}
  {cart.length > 0 && (
    <span
      style={{
        position: "absolute",
        top: "-5px",
        right: "-5px",
        background: "red",
        color: "white",
        fontSize: "10px",
        fontWeight: "bold",
        width: "14px",
        height: "14px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding:"1px"
      }}
    >
      {cart.reduce((acc, item) => acc + item.amount, 0)}
    </span>
  )}
</div>

        </div>
      </div>
    </nav>
  );
};

export default Nav;
