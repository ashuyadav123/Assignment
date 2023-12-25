import { useState,useEffect } from "react"
import axios from "axios"
import { Link } from 'react-router-dom';


const ShopperWebsite=()=>{

    const[categories,setCategories]=useState([]);
     const[products,setProducts]=useState([]);
     const[cardItems,setCardItems]=useState([]);
     const[cardCount,setcardCount]=useState(0);
     const[showToggle,setshowToggle]=useState({'display':'none'})

    function GetCategory(){
        axios.get("https://fakestoreapi.com/products/categories")
        .then(response=>{
            response.data.unshift("all")
            setCategories(response.data)
        })
    }
    function GetProducts(url){
        axios.get(url)
        .then(response=>{
            setProducts(response.data)
        })
    }

    function GetCardCount(){
        setcardCount(cardItems.length);
    }
    useEffect(()=>{
        GetCategory();
        GetProducts("https://fakestoreapi.com/products");
        GetCardCount();
    },[])


    function HandleCategoryChange(e) {
        const selectedCategory = e.target.value;
        console.log("Selected category:", selectedCategory);
    
        if (selectedCategory === "all") {
          GetProducts("https://fakestoreapi.com/products");
        } else {
          GetProducts(`https://fakestoreapi.com/products/category/${selectedCategory}`);
        }
      }
   
    function HandleAddToCart(e){
       axios.get(`https://fakestoreapi.com/products/${e.target.value}`)
       .then(response=>{
        cardItems.push(response.data);
        alert(`${response.data.title}\n Added to Cart`)
        GetCardCount();
       })
    }
    function HandleToggleClick(){
        setshowToggle({'display':'block'})
    }

    function handleRemoveClick(e) {
        const indexToRemove = parseInt(e.target.value);
      
        // Create a new array without the item to remove
        const newCardItems = cardItems.filter((_, i) => i !== indexToRemove);
        setcardCount(newCardItems?.length)
        setCardItems(newCardItems);
      }
      
    return(
        <div className="container-fluid">
        <header className="d-flex justify-content-around p-2 bg-dark text-white">
           <div> <h3>Shopper.</h3></div>
            <div>
                <span className="me-2">Home</span>
                <span className="me-2">Electronics</span>
                <span className="me-2">Jewelery</span>
                <span className="me-2">Men's Clothing</span>
                <span className="me-2">Women's Clothing</span>
            </div>
            <div>
                <button onClick={HandleToggleClick} className="btn btn-light postion-relative">
                    Your Cart
                    <span className="bi bi-cart4"></span>
                    <span className="badge position-absolute top-0 end-2 bg-danger rounded rounded-circle">{cardCount}</span>
                </button>
            </div>
            <div>
            <Link to="/Login" className="m-3">Sign-In</Link>
            <Link to="/Registration">Sign-Up</Link>
          </div>
        </header>
        <section className="mt-3 row" >
            <nav className="col-2">
           <div>
           <label className="form-label fw-bold">Select Category</label>
          
           <div>
            <select onChange={HandleCategoryChange}>
             {
                categories.map(category=>(
                    <option value={category} key={category}>{category.toUpperCase()}</option>
                ))
             }
            </select>
            </div>
           </div>
            </nav>
            <main className="col-8 d-flex flex-wrap overflow-auto" style={{height:"500px"}}>
             {
               products.map(product=>(
                <div className="card m-2 p-2" style={{width:'200px'}} key={product.id}>
                <img src={product.image} className="image-top" height='140' />
                <div className="card-header  overflow-auto" style={{height:'130px'}}>
                    <p>{product.title}</p>
                </div>
                <div className="card-body">
                    <dl>
                        <dt>Price</dt>
                        <dd>{product.price}</dd>
                        <dt>Rating</dt>
                        <dd>
                            {product.rating.rate}
                            <span className="bi bi-star-fill text-success"></span>
                            [{product.rating.count}]
                        </dd>
                    </dl>
                </div>
                <div className="card-footer">
                    <button value={product.id} onClick={HandleAddToCart} className="btn btn-danger w-100">
                        <span className="bi bi-cart4"></span> Add to Cart
                    </button>
                </div>
                </div>
               ))
             }
            </main>
            <aside className="col-2">
            <div style={showToggle}>
                <label className="fw-bold">Your Cart</label>
                <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Preview</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                {
                   cardItems.map((item, i) => (
                   <tr key={item.id}>
                   <td>
                    <img src={item.image} width="40" height="40" />
                   </td>
                   <td>{item.price}</td>
                  <td>
                  <button onClick={handleRemoveClick} value={i} className="btn btn-danger">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>
               </button>
               </td>
              </tr>
              ))
               }
                </tbody>
                </table>
            </div>
            </aside>

        </section>
        </div>
    )
}

export default ShopperWebsite