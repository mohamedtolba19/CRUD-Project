var productNameInput = document.getElementById('productNameInput');
var productPriceInput = document.getElementById('productPriceInput');
var productCategoryInput = document.getElementById('productCategoryInput');
var productDescInput = document.getElementById('productDescInput');
var productsContainer ;
var addBtn = document.getElementById("addBtn");
var ubdateBtn = document.getElementById("ubdateBtn");
var ubdated ;
var errors = [];
var nameError = document.getElementById('nameError');
var priceError = document.getElementById('priceError');
var categoryError = document.getElementById('categoryError');
var descError = document.getElementById('descError');
productDescInput.value = '';




 
if(localStorage.getItem('myProducts')!= null)
{
    productsContainer = JSON.parse( localStorage.getItem('myProducts'));
    displayProducts(productsContainer);
}
else
{
    productsContainer = [];
}



function addProduct()
{


    if(validateName()!=undefined & validatePrice()!=undefined  & validateCategory() !=undefined &  validateDesc() != undefined )
    {
 
        var result = confirm("Are you sure to Add this product ? ")
        if(result == true)
        {
    
  
var product = {

    name:productNameInput.value , 
    price : productPriceInput.value ,
    category : productCategoryInput.value ,
    Desc : productDescInput.value 
}
productsContainer.push(product);
JSON.stringify

localStorage.setItem("myProducts" , JSON.stringify( productsContainer))


clearForm();
productNameInput.classList.remove('is-valid');
productPriceInput.classList.remove('is-valid');
productCategoryInput.classList.remove('is-valid');
productDescInput.classList.remove('is-valid');
displayProducts(productsContainer);
        }

   }
   else if (validateName()== " " )

   {
    productNameInput.value = validateName();
   }
   else if (validatePrice()== " " )

   {
    productPriceInput.value = validatePrice();
   }
   else if (validateCategory()== " " )

   {
    productCategoryInput.value = validateCategory();
   }
   else if (validateDesc()== " " )

   {
    productDescInput.value = validateDesc();
   }
   else if (validateName()== " " && validatePrice()== " " )
   {
    productNameInput.value = validateName();
    productPriceInput.value = validatePrice();
   }
   else if (validateName()== " " && validateCategory()== " " )
   {
    productNameInput.value = validateName();
    productCategoryInput.value = validateCategory();
   }
   
   else if (validateName()== " " && validateDesc()== " " )
   {
    productNameInput.value = validateName();
    productDescInput.value = validateDesc();
   }
   else if (validatePrice()== " " && validateCategory()== " " )
   {
    productPriceInput.value = validatePrice();
    productCategoryInput.value = validateCategory();
   }
   else if (validatePrice()== " " && validateDesc()== " " )
   {
    productPriceInput.value = validatePrice();
    productDescInput.value = validateDesc();
   }
   else if (validateCategory()== " " && validateDesc()== " " )
   {
    productCategoryInput.value = validateCategory();
    productDescInput.value = validateDesc();
   }
   else if (validateName() == " " && validatePrice () == " "  && validateCategory() == " ")
   {
    productNameInput.value = validateName();
    productPriceInput.value = validatePrice();
    productCategoryInput.value = validateCategory();
   }
   else if (validateName() == " " && validatePrice () == " "  && validateDesc() == " ")
   {
    productNameInput.value = validateName();
    productPriceInput.value = validatePrice();
    productDescInput.value = validateDesc();
   }
   else if (validateName() == " " && validateCategory() == " " && validateDesc() == " ")
   {
    productNameInput.value = validateName();
    productCategoryInput.value = validateCategory();
    productDescInput.value = validateDesc();
   }
   else if (validatePrice() == " " && validateCategory() == " "() && validateDesc() == " "())
   {
    productPriceInput.value = validatePrice();
    productCategoryInput.value = validateCategory();
    productDescInput.value = validateDesc();
   }

 if(errors[0]!="")
 {
    nameError.innerHTML = errors[0] ;
    nameError.classList.replace('d-none' , 'd-block');
 }
 else
 {
    nameError.innerHTML = "" ;
    nameError.classList.add('d-none');
 }
 
 if(errors[1]!="")
 {
    priceError.innerHTML = errors[1] ;
     priceError.classList.replace('d-none' , 'd-block');
 }
 else
 {
     priceError.innerHTML = "" ;
     priceError.classList.add('d-none');
 }
 if(errors[2]!="")
 {
    categoryError.innerHTML = errors[2] ;
     categoryError.classList.replace('d-none' , 'd-block');
 }
 else
 {
     categoryError.innerHTML = "" ;
     categoryError.classList.add('d-none');
 }
 
 if(errors[3]!="")
 {
    descError.innerHTML = errors[3] ;
     descError.classList.replace('d-none' , 'd-block');
 }
 else
 {
     descError.innerHTML = "" ;
     descError.classList.add('d-none');
 }
 


}

function clearForm()
{
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescInput.value = "";
}

function displayProducts(productList)
{
    var cartona = ``;
for (var i = 0 ; i<productList.length ; i++)
{

   cartona+= `
   <tr>
   <td>${i+1}</td>
   <td>${productList[i].name}</td>
   <td>${productList[i].price}</td>
   <td>${productList[i].category}</td>
   <td>${productList[i].Desc}</td>
   <td> <button onclick = "fillForm(${i})" class="btn btn-outline-warning">ubdate</button></td>
   <td> <button onclick = "deleteProduct(${i})" class="btn btn-outline-danger">delete</button></td>

</tr>
   

   `
}

document.getElementById('tableBody').innerHTML = cartona ;


}

function searchProducts (searchTerm)
{
    var searchContainer = [];
    for (var i = 0 ; i<productsContainer.length ; i++)
    {

if(productsContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase()))
{
   searchContainer.push(productsContainer[i]);
}

    } 


    displayProducts(searchContainer);

}

function deleteProduct(deletdindex)

{
    var result = confirm("Are you sure to delete this product ? ")
    if(result == true)
    {
        productsContainer.splice(deletdindex,1);
        localStorage.setItem("myProducts" , JSON.stringify( productsContainer));
        displayProducts(productsContainer);
    }


}

function fillForm(ubdatedIndex)
{

    productNameInput.value = productsContainer[ubdatedIndex].name ;
    productPriceInput.value = productsContainer[ubdatedIndex].price ;
    productCategoryInput.value = productsContainer[ubdatedIndex].category ;
    productDescInput.value = productsContainer[ubdatedIndex].Desc ;
    productNameInput.classList.remove('is-valid');
    productNameInput.classList.remove('is-invalid');
    productPriceInput.classList.remove('is-valid');
    productPriceInput.classList.remove('is-invalid');
    productCategoryInput.classList.remove('is-valid');
    productCategoryInput.classList.remove('is-invalid');
    productDescInput.classList.remove('is-valid');
    productDescInput.classList.remove('is-invalid');
    addBtn.classList.add('d-none');
    ubdateBtn.classList.replace('d-none' , 'd-inline-block')
    ubdated = ubdatedIndex ;
    

}

function ubdate ()
{
    if(validateName()!=undefined & validatePrice()!=undefined  & validateCategory() !=undefined &  validateDesc() != undefined )
    {

        var result = confirm("Are you sure to ubdate this product ? ")
        if(result == true)
        {
 
        productsContainer[ubdated].name = productNameInput.value ;
        productsContainer[ubdated].price = productPriceInput.value ;
        productsContainer[ubdated].category = productCategoryInput.value ;
        productsContainer[ubdated].Desc = productDescInput.value ;
     
        localStorage.setItem("myProducts" , JSON.stringify( productsContainer));
        displayProducts(productsContainer);
  

        

clearForm();

productNameInput.classList.remove('is-valid');
productPriceInput.classList.remove('is-valid');
productCategoryInput.classList.remove('is-valid');
productDescInput.classList.remove('is-valid');

addBtn.classList.replace('d-none' , 'd-inline-block');
ubdateBtn.classList.add('d-none')
displayProducts(productsContainer);

        }

   }
   else if (validateName()== " " )

   {
    productNameInput.value = validateName();
   }
   else if (validatePrice()== " " )

   {
    productPriceInput.value = validatePrice();
   }
   else if (validateCategory()== " " )

   {
    productCategoryInput.value = validateCategory();
   }
   else if (validateDesc()== " " )

   {
    productDescInput.value = validateDesc();
   }
   else if (validateName()== " " && validatePrice()== " " )
   {
    productNameInput.value = validateName();
    productPriceInput.value = validatePrice();
   }
   else if (validateName()== " " && validateCategory()== " " )
   {
    productNameInput.value = validateName();
    productCategoryInput.value = validateCategory();
   }
   
   else if (validateName()== " " && validateDesc()== " " )
   {
    productNameInput.value = validateName();
    productDescInput.value = validateDesc();
   }
   else if (validatePrice()== " " && validateCategory()== " " )
   {
    productPriceInput.value = validatePrice();
    productCategoryInput.value = validateCategory();
   }
   else if (validatePrice()== " " && validateDesc()== " " )
   {
    productPriceInput.value = validatePrice();
    productDescInput.value = validateDesc();
   }
   else if (validateCategory()== " " && validateDesc()== " " )
   {
    productCategoryInput.value = validateCategory();
    productDescInput.value = validateDesc();
   }
   else if (validateName() == " " && validatePrice () == " "  && validateCategory() == " ")
   {
    productNameInput.value = validateName();
    productPriceInput.value = validatePrice();
    productCategoryInput.value = validateCategory();
   }
   else if (validateName() == " " && validatePrice () == " "  && validateDesc() == " ")
   {
    productNameInput.value = validateName();
    productPriceInput.value = validatePrice();
    productDescInput.value = validateDesc();
   }
   else if (validateName() == " " && validateCategory() == " " && validateDesc() == " ")
   {
    productNameInput.value = validateName();
    productCategoryInput.value = validateCategory();
    productDescInput.value = validateDesc();
   }
   else if (validatePrice() == " " && validateCategory() == " "() && validateDesc() == " "())
   {
    productPriceInput.value = validatePrice();
    productCategoryInput.value = validateCategory();
    productDescInput.value = validateDesc();
   }

 if(errors[0]!="")
 {
    nameError.innerHTML = errors[0] ;
    nameError.classList.replace('d-none' , 'd-block');
 }
 else
 {
    nameError.innerHTML = "" ;
    nameError.classList.add('d-none');
 }
 
 if(errors[1]!="")
 {
    priceError.innerHTML = errors[1] ;
     priceError.classList.replace('d-none' , 'd-block');
 }
 else
 {
     priceError.innerHTML = "" ;
     priceError.classList.add('d-none');
 }
 if(errors[2]!="")
 {
    categoryError.innerHTML = errors[2] ;
     categoryError.classList.replace('d-none' , 'd-block');
 }
 else
 {
     categoryError.innerHTML = "" ;
     categoryError.classList.add('d-none');
 }
 
 if(errors[3]!="")
 {
    descError.innerHTML = errors[3] ;
     descError.classList.replace('d-none' , 'd-block');
 }
 else
 {
     descError.innerHTML = "" ;
     descError.classList.add('d-none');
 }
 


}




function validateName()
{
    if(productNameInput.value!= "")
    {
    var regex = /^[A-Z][a-z,\s,\d]{3,12}$/ ;

   if(regex.test(productNameInput.value)  == true )
   {

    productNameInput.classList.replace('is-invalid',"is-valid");
   productNameInput.placeholder = "";
   errors[0] = "";
    return productNameInput.value ;
   }
   else
   {
    productNameInput.classList.add('is-invalid');
    errors[0] =  "invalid name please start with capital character then add small character in range (3:8)";
   

    
   }
}
else
{
    productNameInput.classList.add('is-invalid');
    productNameInput.input = "";
    productNameInput.placeholder = "please add name " ;
    errors[0] = "";
   
}

}

function validatePrice()
{
    if(productPriceInput.value != "")
    {
    var regex = /^[1-9][0-9]{3,5}$/ ;

   if(regex.test(productPriceInput.value)  == true )
   {

    productPriceInput.classList.replace('is-invalid',"is-valid");
    errors[1]= "";
    productPriceInput.placeholder = "";
    return productPriceInput.value ;
   }
   else
   {
    productPriceInput.classList.add('is-invalid');
     errors[1]= "price is not valid price has limit from 1000 " ; 
    }
}
else
{
    productPriceInput.classList.add('is-invalid');
    productPriceInput.placeholder = "please add price " ; 
    errors[1]= "";
    
}

}

function validateCategory()
{
    if(productCategoryInput.value!= "")
    {
    var regex = /^[A-Z][a-z,\s]{4,10}$/ ;

   if(regex.test(productCategoryInput.value)  == true )
   {

    productCategoryInput.classList.replace('is-invalid',"is-valid");
    errors[2] = "";
    productCategoryInput.placeholder = "";
    return productCategoryInput.value ;
   }
   else
   {
    productCategoryInput.classList.add('is-invalid');
    errors[2] =  "invalid category please start with capital character then add small character in range (4:10)";
  
   }
}
else
{
    productCategoryInput.classList.add('is-invalid');
    productCategoryInput.placeholder = "please add category" ;
    errors[2] = "";
   
}

}

function validateDesc()
{
    if(productDescInput.value!='')
    {

    
    var regex = /[a-z,\s]{3,12}$/ ;

   if(regex.test(productDescInput.value)  == true )
   {

    productDescInput.classList.replace('is-invalid',"is-valid");
    errors[3] = "";
    productDescInput.placeholder = "";
    return productDescInput.value ;
   }
   else
   {
    productDescInput.classList.add('is-invalid');
    errors[3] = "Desc is not valid it has limit from 3 to 12 character ";
   }
}
else
{
    productDescInput.classList.add('is-invalid');
    productDescInput.placeholder = "please add description";
    errors[3] = "";
}

}



