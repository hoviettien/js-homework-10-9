var id = 0;
function sell() {
    id++;
    var product_name = form.product_name.value;
    var quantity = form.quantity.value;
    var unit_price = form.unit_price.value;
    var discount = form.discount.value;
    var subtotal ="$" + quantity * unit_price * (1-discount/100);
    var row = "<tr>";
    row += "<td>" + id + "</td>";
    row += "<td>" + product_name + "</td>";
    row += "<td>" + quantity + "</td>";
    row += "<td>" + "$" + unit_price + "</td>";
    row += "<td>" + discount + "</td>";
    row += "<td>" + subtotal + "</td>";
    row += "</tr>";
    document.getElementById("table").innerHTML += row;
}
function cancel() {
    form.product_name.value = "";
    form.quantity.value = "";
    form.unit_price.value = "";
    form.discount.value = "";
}
