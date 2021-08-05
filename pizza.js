menu_list_array = ["Veg Margherita Pizza", "Buffalo chicken pizza", "Cheese pizza", "Jalapeno pizza", "Pepperoni pizza", "Caluflower pizza"];
menu_list_sides=["Fries", "Breadsticks", "Garlic knots", "Chicken wings", "Potato wedges"];
menu_list_drinks["Bottled water", "Coke", "Diet coke", "Fanta", "Sprite", "Apple juice","Lemonade", "Orange juice", "Root beer", "Ginger ale"];
menu_list_desert["Chocklate fudge cake", "Brownie"]

function getmenu() {
    var htmldata;
    htmldata = ""
    menu_list_array.sort();
    for (var i = 0; i < menu_list_.length; i++) {
        htmldata = htmldata + '<li>' + menu_list_array[i] + '</li>'
    }
    htmldata = htmldata + "<ol>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}

function getmenu() {
    var htmldata;
    htmldata = ""
    menu_list_sides.sort();
    for (var i = 0; i < menu_list_.length; i++) {
        htmldata = htmldata + '<li>' + menu_list_array[i] + '</li>'
    }
    htmldata = htmldata + "<ol>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}

function add_item() {
    var htmldata;
    var item = document.getElementById("add_item").value;
    menu_list_array.sort();

    htmldata = htmldata + '<div class="card">'
        + '<img src="images/pizzaImg.png"/>'
        + menu_list_array[i] + '</div>'


    htmldata = htmldata + "</section>"
    document.getElementById("display_addmenu").innerHTML = htmldata;
}
function add_top() {
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item()
}