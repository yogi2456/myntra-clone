import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './FakeStoreAllProducts.css'

const FakeStoreAllProducts = () => {
    const [allProducts, setAllProducts] = useState([]); // to just get products 20 -> 20
    const [filter, setFilter] = useState(data)
    //   console.log(allProducts, "allProducts");

    const [search, setSearch] = useState(""); // shose
    const [filterProducts, setFilterProducts] = useState([]); // [{},{} ] setting here // 20 -> 10 4

    const router = useNavigate();

    async function getProducts() {
        // api call
        // alert("Jiii")
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            // console.log(response, "response from fakestore api")
            if (response?.data.length) {
                setAllProducts(response.data);
                setFilterProducts(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    function redirect(id) {
        // alert(id) 1 2 3 4 5
        router(`/fake-store-single-product/${id}`);
    }

    function handleChange(event) {
        console.log(event.target.value);
        setSearch(event.target.value);

        let userword = event.target.value.toLowerCase();

        const filteredProduts = allProducts.filter((product) => { // 20 -> men
            // 20 -> 4 -> 4 result show
            return product.title.toLowerCase().includes(userword);
        });

        setFilterProducts(filteredProduts); // 20 -> 4

        console.log(filteredProduts, "filteredProduts");
    }

    useEffect(() => {
        getProducts();
    }, []);

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    return (
        <>
            <div className="home">
                <div className="home1">
                    <img style={{width: "100%", height: "100%"}} src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/2/1/7b00a2f0-2c8f-47f8-938d-85617a3e75e91706788625897-FLAT-400-Off-on-1st-Purchase-Strip-----3.jpg" alt=""/>
                </div>

                <div className="home2">
                    <div>
                        <img style={{width: "100%", height: "100%"}} src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/2/5/827b697d-155a-4895-92ad-75fbb07ca8a01707154477940-Desktop_Hp_01.jpg" alt="" />
                    </div>
                    <div>
                        <img style={{width: "100%", height: "100%"}} src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/2/5/f6857071-a235-49de-a659-1ab08bcd41d11707154477945-Desktop_Hp_02.jpg" alt=""/>
                    </div>
                </div>
            </div>
            <div>
                {/* <h1 style={{textAlign: "center", marginTop: "30px"}}>Fake Store All Products</h1> */}
                <div style={{ marginLeft: "42%", marginTop: "30px" }}>
                    <h2>Search Product:</h2>
                    <input style={{ marginRight: "80px", width: "200px" }} placeholder="Mens.." value={search} onChange={handleChange} />
                </div>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("electronics")}>Electronic</button>
                </div>
                {filterProducts?.length ? (
                    <div
                        style={{
                            marginTop: "100px",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-around",
                            marginBottom: "30px",
                        }}
                    >
                        {filterProducts.map((productObj) => (
                            <div
                                onClick={() => redirect(productObj.id)}
                                style={{
                                    width: "18%",
                                    border: "2px solid black",
                                    height: "270px",
                                    marginBottom: "30px",
                                    overflow: "hidden"
                                }}
                            >
                                <img
                                    style={{ height: "50%", width: "100%" }}
                                    src={productObj.image} alt=""
                                />
                                <p style={{ fontSize: "10px", textAlign: "center", marginTop: "10px" }}>{productObj.title}</p>
                                <h2 style={{fontSize: "14px", textAlign: "center", marginTop: "10px"}}>{productObj.price}</h2>
                                <button style={{backgroundColor: "blue", color: "white", textAlign: "center", marginTop: "10px", marginLeft: "30px", height: "30px", width: "100px", outline: "none", border: "none"}}>Add to cart</button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </>
    );
};

export default FakeStoreAllProducts;