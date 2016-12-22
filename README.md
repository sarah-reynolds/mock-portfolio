<p>High level isotope steps for filtering<br />http://isotope.metafizzy.co/</p>
<p>See commented out html and css<br />- mock-portfolio.html<br />- scripts.js</p>
<ol>
<li>HTML: Link the isotope CDN in your html.<br />&lt;script src="https://unpkg.com/isotope-layout@3.0.1/dist/isotope.pkgd.min.js"&gt;&lt;/script&gt;</li>
<li>HTML: Create buttons for filtering. Include the following in the button tag:
<ol style="list-style-type: lower-alpha;">
<li>An ID for the filter, ideally the same name as what you&rsquo;re filtering by</li>
<li>Include data-filter=&ldquo;.class-name-to-filter&rdquo;
<ol style="list-style-type: lower-roman;">
<li>Isotope uses this to identify which elements to filter with the specified class name</li>
</ol>
</li>
</ol>
</li>
<li>HTML: Create the divs/elements to be filtered:
<ol style="list-style-type: lower-alpha;">
<li>First, create a div that wraps around all the elements. Give it a class name. You will need this class name to initiate isotope.</li>
<li>Inside the wrapper div, create a separate div/element for each item to be filtered. Include the following for each element:
<ol style="list-style-type: lower-roman;">
<li>A class to identify that this element is to be used by isotope to be filtered. This class will be the same for EACH div/element.</li>
<li>A class to identify what filters apply to the div/element.</li>
</ol>
</li>
</ol>
</li>
<li>JAVASCRIPT: Initiate isotope.
<ol style="list-style-type: lower-alpha;">
<li>You&rsquo;ll need to include the class name of the wrapper div, and the class name of the elements to be filtered (the class that is the same for all elements)</li>
<li>$('.grid').isotope({<br />&nbsp; &nbsp; &nbsp;itemSelector: '.grid-item',<br />&nbsp; &nbsp; &nbsp;layoutMode: 'fitRows'<br /> });</li>
</ol>
</li>
<li>JAVASCRIPT: Add click listeners for each button, which will then run isotope functions
<ol style="list-style-type: lower-alpha;">
<li>$('#javascript').click(function(){<br />&nbsp; &nbsp; &nbsp;$('.grid').isotope({<br />&nbsp; &nbsp; &nbsp;filter: '.javascript',<br />&nbsp; &nbsp; &nbsp;});<br /> })</li>
</ol>
</li>
</ol>