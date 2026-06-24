import styled from 'styled-components'
function Product(props) {
    return (
        <CONTAINER bgColor={props.bgColor} ctnclr={props.ctnclr} >
            <div onClick={props.onClick}>
                <img src={props.src} alt="" />
                <div>
                    <h3>{props.name}</h3>
                    <p>${props.price}</p>
                    <p className='rating'>
                        <span style={{ color: "#FFD700" }}>★</span> {props.rating}
                    </p>
                </div>
            </div>
            {/* <button onClick={() => {
                const existingProduct = props.cart.find(
                    (item) => item.id === props.id
                );
                if (existingProduct) {
                    props.setCart(
                        props.cart.map((item) => {
                            if (item.id === props.id) {
                                return {
                                    ...item,
                                    quantity: item.quantity + 1
                                };
                            }
                            return item;
                        })
                    );
                    return;
                }

                props.setCart((prev) => [...prev, {
                    "id": props.id,
                    "name": props.name,
                    "price": props.price,
                    "rating": props.rating,
                    "src": props.src,
                    "quantity": props.quantity
                }])
            }
            }>Add to Cart</button> */}
        </CONTAINER>
    )
}

const CONTAINER = styled.div`
display:flex;
flex-direction:column;
background-color:${(props) => props.ctnclr};
border-radius:10px;

img{
width:100%;
background-color:${(props) => props.bgColor || "transparent"};
border-radius:10px;
}


h3{
font-size:1rem;
color:rgba(99, 97, 97, 1);
}


div{
padding:5px;
display:flex;
flex-direction:column;
gap:5px;
justify-content:space-between;
flex:1;
}

p{
font-weight:900
}

.rating{
color:#FFD700;

}

button{
padding:10px 15px;
width:120px;
margin-left:10px;
border:none;
outline:none;
background-color: rgb(254, 100, 1);
color:white;
border-radius:6px;
font-weight:500;
margin-bottom:10px;
}

`

export default Product