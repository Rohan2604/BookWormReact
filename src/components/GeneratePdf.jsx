import React from 'react';
import jsPDF from 'jspdf';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";



function GeneratePDF() {
    const [ invoice,setinvoice ] = useState({});
    const { invdtlid } = useParams();
    useEffect(() => {
        fetch("url" + invdtlid)
        .then(res => res.json())
        .then((result) => { setinvoice(result);}
        );
    },{});

    const doc = new jsPDF();
    doc.text("Invoice Id : ", 10, 10);
    doc.text(invoice.invoiceid,15,10);
    doc.text("Date : ",150,10);
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var datestring = day + "/" + month + "/" + year;
    doc.setFontSize(13);
    doc.text(datestring,167,10);
    doc.setFontSize(50)
    doc.text("Invoice",70,30);
    doc.setTextColor("black");
    doc.setFontSize(13);
    
    doc.text("BookWorm.com ",10,60);
    doc.text("Gulmohar Road, Mhada Colony,",10,66);
    doc.text("Vile Parle -  West,",10,71);
    doc.text("Mumbai - 400049",10,76);
    doc.text("Phone Number : 90294xxxx35",10,81);
    
    
    doc.setFont("courier","bold").setFontSize(17);
    doc.text("Product",10,100);
    doc.text("Qty",120,100);
    doc.text("Price",170,100);

    doc.setFont("courier").setFontSize(12);
    doc.text("Product 1",10,120);
    doc.text("1",120,120);
    doc.text("100",170,120);
    doc.text("Product 2",10,140);
    doc.text("1",120,140);
    doc.text("100",170,140);
    doc.text("Product 3",10,160);
    doc.text("1",120,160);
    doc.text("100",170,160);

    doc.setFont("courier","bold").setFontSize(17);
    doc.text("Total",10,180);
    doc.setFont("courier").setFontSize(12);
    doc.text("300",170,180);


    {invoice.map((item) => (
        c=c+20,
        doc.text(item.customername,10,c),
        doc.text(item.quantity,120,c),
        doc.text(item.sellingprice,120,c)
    ));}

    doc.save("Invoice.pdf");
    
    return (
      <div class="container-fluid">
          <button onClick={GeneratePDF}>Click me!</button>
      </div>
      );
  }

  export default GeneratePDF;