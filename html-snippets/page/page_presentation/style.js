export default class Style{
    content(){ return `
    
    <style>

    :host {
        width: 100%;
        height: 100%;
        background-color: black;
    }

    .sizeBox {
        max-width: 1000px;
        margin-left: 30px;
        margin-right: 30px;

    }

   

    .centerBox {
        justify-content: center;
        width: 100%;
        overflow: hidden;
        height: 200px;

    }
    
    p{
        font-family: Arial, sans-serif;
        color: white !important;
    }

    h1{
        font-family: Arial, sans-serif;
        color: white !important;
    }

    h2{
        font-family: Arial, sans-serif;
        color: white !important;
    }

    h3{
        font-family: Arial, sans-serif;
        color: white !important;
    }
    li{
        font-family: Arial, sans-serif;
        color: white !important;
    }

   
    .image {
        object-fit: cover;
        object-position: 0% 50%;
        width: 100%;
        height: 300px;
    }



.project {
    display: flex;
    padding: 20px auto;
    background-color: #fff;
    padding: 20px;
    background-color: rgb(52, 53, 65);
    justify-content: center;



}
.project img {
    max-width: 100%;
    border-radius: 5px;
    margin-bottom: 20px;
}
.project h2 {
    color: #333;
}
.project p {
    color: #666;
    line-height: 1.6;
}
.project-details {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
.project-details div {
    flex: 1;
    padding: 10px;
    text-align: center;
    border-right: 1px solid #ccc;
}
.project-details div:last-child {
    border-right: none;
}
footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px;
}
.img{
    height:500px;
}
.centerBox{
    display: flex;
    justify-content: center;
}







    </style>
    `
    }
}
