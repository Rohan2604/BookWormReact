import React from 'react';
import { useState, useEffect } from "react";
export function ProductMaster(props) {
    const [ProductMaster, setProductMaster] = useState([]);
    useEffect(() => {
        fetch("https://localhost:7108/api/ProductMasters")
            .then(res => res.json())
            .then((result) => { setProductMaster(result); }
            );
    }, []);
    return (
        <div>
          <h2>ProductMaster</h2>
          <table>
            <thead>
              <tr>
                <th>ProductId</th>
                <th>ProductName</th>
                <th>ProductEnglishName</th>
                <th>ProductBasePrice</th>
                <th>ProductSellingPriceCost</th>
                <th>ProductOfferPrice</th>
                <th>ProductOfferPriceExpiryDate</th>
                <th>ProductDiscriptionShort</th>
                <th>ProductDiscriptionLong</th>
                <th>ProductISBN</th>
                <th>ProductAuthor</th>
                <th>IsRentable</th>
                <th>IsLibrary</th>
                <th>RentPerDay</th>
                <th>MinRentDays</th>
                <th>ProductImagePath</th>
                <th>TypeId</th>
                <th>LanguageId</th>
                <th>GenreId</th>
                
              
              </tr>
            </thead>
            <tbody>
              {ProductMaster.map(pro => (
                <tr key={pro.productId}>
                     <td>{pro.productId}</td>
                    <td>{pro.productName}</td>
                    <td>{pro.productEnglishName}</td>
                    <td>{pro.productBasePrice}</td>
                    <td>{pro.productSellingPriceCost}</td>
                    <td>{pro.productOfferPrice}</td>
                    <td>{pro.productOfferPriceExpiryDate}</td>
                    <td>{pro.productDescriptionShort}</td>
                    <td>{pro.productDescriptionLong}</td>
                    <td>{pro.productISBN}</td>
                    <td>{pro.productAuthor}</td>
                    <td>{pro.isRentable}</td>
                    <td>{pro.isLibrary}</td>
                    <td>{pro.rentPerDay}</td>
                    <td>{pro.minRentDays}</td>
                    <td>{pro.productImagePath}</td>
                    <td>{pro.typeId}</td>
                    <td>{pro.languageId}</td>
                    <td>{pro.genreId}</td>
                </tr>
              ))}
            </tbody>
          </table>
     </div>
      );
    }

    export default ProductMaster;
