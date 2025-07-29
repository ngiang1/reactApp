import React, { Component } from 'react';
import './App.css'; import FilteredList from
'./FilteredList';
/*
This list of produce that is passed into the FilteredList component.
Notice that it is a list of javascript objects where {key: value}.
*/ const produce =
[
{name: "Apple", type: "Fruit", image:"https://www.seasonalfoodguide.org/img/fruit-apples-350x184.90338a51.jpg"},
{name: "Pineapple", type: "Fruit", image:"https://www.seasonalfoodguide.org/img/fruit-pineapple-350x184.8a3f54ef.jpg"} ,
{name: "Banana", type: "Fruit", image:"https://www.seasonalfoodguide.org/img/fruit-bananas-350x184.ae3412ef.jpg"},
{name: "Pear", type: "Fruit", image:"https://www.seasonalfoodguide.org/img/fruit-pears-350x184.e2955f6b.jpg"},
{name: "Strawberry", type: "Fruit", image:"https://www.seasonalfoodguide.org/img/fruit-strawberries-350x184.c543eb30.jpg"},
{name: "Orange", type: "Fruit", image:"https://www.seasonalfoodguide.org/img/fruit-oranges-350x184.61e6237b.jpg"},
{name: "Lettuce", type: "Vegetable", image:"https://www.seasonalfoodguide.org/img/vegetable-lettuce-350x184.2b78d434.jpg"},
{name: "Cucumber", type: "Vegetable", image:"https://www.seasonalfoodguide.org/img/vegetable-cucumbers-350x184.512dbcf7.jpg"},
{name: "Eggplant", type: "Vegetable", image:"https://www.seasonalfoodguide.org/img/vegetable-eggplant-350x184.9a59b6f0.jpg"},
{name: "Squash", type: "Vegetable", image:"https://www.seasonalfoodguide.org/img/vegetable-summer-squash-350x184.3570238d.jpg"},
{name: "Bell pepper", type: "Vegetable", image:"https://www.seasonalfoodguide.org/img/vegetable-peppers-350x184.69532f6a.jpg"},
{name: "Onion", type: "Vegetable", image:"https://www.seasonalfoodguide.org/img/vegetable-onions-350x184.cd92d786.jpg"},
];
class App extends Component { render() {
return (
<div className="App">
{/*
The list of produce will be passed into the FilteredList component the
items property.
*/}
<FilteredList items={produce} />
</div>
);
}
}
export default App;
