// Tiago start
var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
    #logo-wrapper a, #product-tab-menu, .x-close-container, .favorite-icon {
        display: none;
    }

    #product {
        top: 20px;
    }

    #product-top {
        background-color: #f4f4f4;
        height: 405px;
    }
    
    .slick-arrow {
        visibility: hidden;
    }

    .image-carousel.slick-slider .slick-dots {
        bottom: 0;
    }

    .slick-slider .slick-dots li.slick-active button:before {        
        background: red;
    }

    .slick-slider .slick-dots li button:before {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: white;
        border: 1px solid grey;
    }

    #product-top-left, #product-top-right {
        width: 30%;
        position: relative;
        height: 405px;
    }

    #product-top-center {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
        height: 450px;
        width: 40%;
    }

    h1#product-title {        
        margin-top: 100px;
        font-weight: 400;
    }

    #product-name {
        font-weight: 300;
    }

    .product-prices-container {
        font-size: 22px;
        font-weight: 300;
        margin-top: 20px;
    }

    #product-rating {
        position: absolute;
        bottom: 0;
        background: red;
        padding: 10px;
        height: 60px;
    }    

    .rating-wrapper .rating-count {
        color: white;
        font-weight: 500;
        display: block;
        clear: left;
        text-align: center;
        width: 100%;
        margin-top: 5px;
    }

    #product-selection-container {
        margin-top: 80px;
    }

    .component-wrapper.component-select .component-current {
        display: block;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        position: relative;
    }    

    #product-selection-container > *.product-colors-container .component-current div img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 0;
        position: absolute;
        left: 4px;
        top: 4px;
    }

    #product-selection-container > *.product-colors-container .component-current div div {
        display: none;
    }

    .product-sizes-container {
        display: block;
        float: left;
    }

    .product-qty-container {
        clear: both;
        float: left;
    }

    #product-selection-container > *.add-to-bag-wrapper {
        position: absolute;
        bottom: 20px;
        right: 0;
    }

    .add-to-bag-wrapper button.addToBagButton {
        background: red;
        font-weight: 400;
        border-radius: 50%;
        width: 100px;
        height: 100px;
        font-size: 13px;
        padding: 0;    
    }

    #product-selection-container > .trait-label {
        font-size: 14px;
        float: left;
        clear: both;
        margin-left: 18px;
        margin-top: -8px;
    }    

    #product-bottom {
        background: white;
        height: 330px;
        padding: 10px;
    }

    #product-bottom span {
        padding: 0 5px;
        float: right;
        min-width: 120px;
    }

    #product-bottom .social-number {
        font-size: 16px;
        text-align: center;
        font-weight: 400;
    }

    #product-bottom .social-message {
        font-size: 13px;
        text-align: center;
    }

    #product-bottom .social-icon {
        margin: 0 auto;
        margin-top: 20px;
        width: 40px;
    }

`;
document.getElementsByTagName('head')[0].appendChild(style);

setTimeout(() => {    
    let $productTopCenter = $('<div id="product-top-center">');
    $('#product-top-left').after($productTopCenter);
    $('.image-carousel-wrapper').first().appendTo($productTopCenter);

    let $productTopLeft = $('#product-top-left');
    let $productTitle = $('#product-title');
    $productTitle.appendTo($productTopLeft);

    let title = $productTitle.text();
    $productTitle.text('bar III');
    $productTitle
        .after($('.product-prices-container').first())
        .after($(`<h5 id="product-name">${title.replace('Bar III', '')}</h5>`));
    
    let $productRating = $('#product-rating');
    $productRating.appendTo($productTopLeft);

    $('.addToBagButton').text('buy now')

    $('.product-sizes-container').first().after($('.product-colors-container').first());
    $('.product-colors-container').after($(`
        <div class= "product-qty-container component-wrapper component-select component-ready" > <select class="product-sizes" style="display: none;">
            <option value="1"  selected="">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>
        <div class="component-current" style="display: block;"><div class="component-current-label">1</div></div>
        <div class="component-content">
            <div class="option current" data-value="1">1</div>
            <div class="option" data-value="2">2</div>
            <div class="option" data-value="3">3</div>
            <div class="option" data-value="4">4</div>
            <div class="option" data-value="5">5</div>
            <div class="option" data-value="6">6</div>
        </div></div>
    `));

    $('.product-colors-container').after('<div class="trait-label">color</div>');
    $('.product-sizes-container').after('<div class="trait-label">size</div>');
    $('.product-qty-container').after('<div class="trait-label">qty</div>');

    $('#product').append($(`
        <section id="product-bottom">
        <span>
            <img src="https://photorankmedia-a.akamaihd.net/media/4/2/m/42mm584/mobile.jpg"></img>
        </span>
        <span>
            <img src="https://z3photorankmedia-a.akamaihd.net/media/s/m/j/smj2484/mobile.jpg"></img>
        </span>
        <span>
            <img src="https://z3photorankmedia-a.akamaihd.net/media/4/6/i/46ia584/mobile.jpg"></img>
        </span>
        <span>
            <img src="https://z3photorankmedia-a.akamaihd.net/media/z/w/8/zw8d484/mobile.jpg"></img>
        </span>
        <span>
            <div class="social-icon">
                <!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19.4 16.6" enable-background="new 0 0 19.4 16.6" xml:space="preserve">
                    <path fill="#929497" stroke="#929497" stroke-linejoin="round" stroke-miterlimit="10" d="M18.7,5.4c0-2.5-2.1-4.6-4.7-4.6
          	c-1.8,0-3.4,1-4.2,2.5C9,1.8,7.4,0.7,5.5,0.7c-2.6,0-4.7,2.1-4.7,4.6c0,0,0,0,0,0c0,0.5,0,5.4,9,10.4l0,0c0,0,0,0,0,0c0,0,0,0,0,0
          	l0,0C19.2,10.5,18.7,5.4,18.7,5.4z"></path>
                </svg>
            </div>
            <div class="social-number">103</div>
            <div class="social-message">people like it</div>
            <div class="social-icon">
                <!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 65 65" style="enable-background:new 0 0 65 65;" xml:space="preserve">
                <g>
                    <g>                        
                            <path id="XMLID_4_" style="fill:none;stroke:#919495;stroke-width:2.3586156;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" d="
                            M51.1512794,60.4971848H13.8487206c-0.8994923,0-1.6354399-0.7359467-1.6354399-1.6354408V21.5591869
                            c0-0.8994904,0.7359476-1.6354389,1.6354399-1.6354389h37.3025589c0.8994904,0,1.635437,0.7359486,1.635437,1.6354389v37.3025589
                            C52.7867165,59.7612381,52.0507698,60.4971848,51.1512794,60.4971848z"></path>
                    </g>
                    
                        <path style="fill:none;stroke:#919495;stroke-width:2.3586156;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" d="
                        M42.9179306,15.367775c0-9.03162-7.5259056-10.864954-10.4178963-10.864954
                        c-2.8919945,0-10.4178982,1.8333335-10.4178982,10.864954"></path>
                </g>
                </svg>
            </div>
            <div class="social-number">103</div>
            <div class="social-message">people bought it</div>
        </span>
        </section>
    `));

}, 100);
// Tiago end