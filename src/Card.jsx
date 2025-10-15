import React from "react";
import { useState } from "react";
import { useContext } from "react";
import CartContext from "./CartContext";
const Card = ({ e, handleimage, currentimg }) => {
    const [hover, sethover] = useState(null);
    const [fade, setFade] = useState(false);
    const { cart, setcart } = useContext(CartContext);
    const addtocart=(id,image,image2,price,title)=>{
        const foundindex=cart.findIndex((e)=>e.id==id)
        if(foundindex==-1){
            setcart([...cart,{id:id,amount:1,image:image,image2:image2,price:price,title:title}])
        }
        else{
            setcart((prev)=>prev.map((ele)=>{
                return ele.id==id?{...ele,amount:ele.amount+1}:{...ele}
            }))
        }
    }

  const changeImage = (img) => {
    setFade(true); // start fade-out
    setTimeout(() => {
      handleimage(e, img); // change image
      setFade(false); // fade back in
    }, 200); // match CSS transition time
  };
    return (
        <div
            className="item"
            onMouseEnter={() => {
                sethover(e.id);
            }}
            onMouseLeave={() => sethover(null)}
        >
            <img className={fade ? "fade" : ""} src={currentimg ? currentimg.image : e.image} alt={e.title} />
            <div className="overlay">
                <div
                    className="cardheart"
                    style={{
                        opacity: hover === e.id ? 1 : 0,
                        transform: hover === e.id ? "translateY(0)" : "translateY(-20px)",
                    }}
                >
                    <i className="nf nf-cod-heart"></i>
                </div>
                <button
                    onClick={()=>addtocart(e.id,e.image,e.image2,e.price,e.title)}
                    style={{
                        opacity: hover === e.id ? 1 : 0,
                        transform: hover === e.id ? "translateY(0)" : "translateY(20px)",
                    }}
                >
                    Add to Cart
                </button>
            </div>
            <div className="carddetails">
                <h3>{e.title}</h3>
                <div className="cardstars">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <i
                            key={star}
                            className="nf nf-fa-star"
                        ></i>
                    ))}
                </div>
            <h4>{e.price}</h4>
            <div className="change">
                <div
                    onClick={() => {
                        changeImage(e.image);
                    }}
                >
                    <img src={e.image} alt="image" height="100%" width="100%" />
                </div>
                {e.image2 == "" ? null : (
                    <div
                        onClick={() => {
                            changeImage(e.image2);
                        }}
                    >
                        <img src={e.image2} alt="image2" height="100%" width="100%" />
                    </div>
                )}
            </div>
            </div>
        </div>
    );
};

export default Card;
