// export default function DataBindingComponent(){
//     var product={
//         Name:"Samsung Phone",
//         price:500653,
//         stock:true
//     }
//     return(
//         <div className="conatiner-fluid bg-primary mx-3">
//             <h2>Product Details</h2>
//             <dl>
//                 <dt>Name</dt>
//                 <dd>{product.Name}</dd>
//                 <dt>Price</dt>
//                 <dd>{product.price}</dd>
//                 <dt>Stock</dt>
//                 <dd>{(product.stock==true)?"Available":"Out of stock"}</dd>
//             </dl>

//         </div>
//     )
// }

export default function DataBindingComponent(){
    var cat=["tv","fridge","ac","cooler"];
    return(
        <div>
             <h2>Categories</h2>
             <ol>
                {
                    cat.map(val=>
                        <li key={val}>{val}</li>
                    )
                }
             </ol>
             <h2>Select Categories</h2>
             <select>
                {
                    cat.map(val=>
                        <option key={val} value={val}>{val}</option>
                    )
                }
             </select>
        </div>
    )
}