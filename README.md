#Isotope Filtering How-to
http://isotope.metafizzy.co/

####See commented out html and css
- mock-portfolio.html
- scripts.js

#####HTML: 
* Link the isotope CDN in your html.
```
<script src="https://unpkg.com/isotope-layout@3.0.1/dist/isotope.pkgd.min.js"></script>
```
* Create buttons for filtering. Include the following in the button tag:
  1. An ID for the filter, ideally the same name as what you’re filtering by
  2. Include data-filter=“.class-name-to-filter”
    - Isotope uses this to identify which elements to filter with the specified class name
* Create the divs/elements to be filtered:
  1. First, create a div that wraps around all the elements. Give it a class name. You will need this class name to initiate isotope.
  2. Inside the wrapper div, create a separate div/element for each item to be filtered. Include the following for each element:
    - A class to identify that this element is to be used by isotope to be filtered. This class will be the same for EACH div/element.
    - A class to identify what filters apply to the div/element.
#####JAVASCRIPT
* Initiate isotope.
  1. You’ll need to include the class name of the wrapper div, and the class name of the elements to be filtered (the class that is the same for all elements)
```
$('.grid').isotope({
     itemSelector: '.grid-item',
     layoutMode: 'fitRows'
});
```
* Add click listeners for each button, which will then run isotope functions

```
$('#javascript').click(function(){
     $('.grid').isotope({
     filter: '.javascript',
     });
})
```
