import "../App.css";
// TODO: create a component that displays a single bakery item

export default function BakeryItem(props) {

    function addToCart() {
        // for(let i = 0; i < length(props.cart); i ++) {}
        if (props.cart[0] === "Nothing here just yet!") {
            props.setCart(["1x ".concat(props.name), "Total: $".concat(props.price)])
        } 
        else {
            const cart_val = props.cart.map((x) => x)
            for(let i = 0; i < props.cart.length; i ++) {
                var num = props.cart[i].match(/\d+/)[0] // "3"
                var name = props.cart[i].match(/[\s](.*)/)[1]
                var cost = props.cart[props.cart.length-1].match(/^\D*(\d+(?:\.\d+)?)/)[1]
                if (name === props.name) {
                    // console.log(num)
                    var new_num = parseFloat(num) + 1
                    // console.log(new_num)
                    cart_val[i] = new_num.toString() + "x " + name

                    var new_cost = parseFloat(cost) + props.price
                    new_cost = Math.round(new_cost * 100) / 100

                    console.log(props.price)
                    cart_val[props.cart.length-1] = "Total: $".concat(new_cost)
                    break
                } 
                else if (i === props.cart.length-1) {
                    cart_val.splice(i, 0, "1x ".concat(props.name))

                    var new_cost = parseFloat(cost) + props.price
                    new_cost = Math.round(new_cost * 100) / 100
                    
                    cart_val[i+1] = "Total: $".concat(new_cost)
                }
            }
            
            props.setCart(cart_val)
        }
    }

    return (
        <div className="BakeryItem">
            <img src={props.image} alt={props.name}/>

            <div className="descriptors">
                <div>
                    <h4>{props.name}</h4>
                    <p>{props.description}</p>
                </div>
                <div className="priceCart">
                    <p>${props.price}</p>
                    <button onClick={() => addToCart()}>Add to Cart</button>
                </div>
            </div>
            
        </div>
    )
}