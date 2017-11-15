var jq = document.createElement('script');
    jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
    document.getElementsByTagName('head')[0].appendChild(jq);

$(function(){

    $(".image-container img").each(function() {
        const newSrc = $(this).attr("src") + '&hei=460';
        $(this).attr("src", newSrc);
    });
    $($(".products-item-grid ul")[0]).removeClass('medium-block-grid-1 large-block-grid-4 xlarge-block-grid-3 xxlarge-block-grid-4');
    $($(".products-item-grid ul")[0]).addClass('medium-block-grid-2 large-block-grid-4 xlarge-block-grid-5 xxlarge-block-grid-6');
    $(".product-info .product-info-details .product-name .product-name-truncated")
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
        .products-facets {
            display: none;
        }
        .products-item-grid .grid-header{
            display: none;
        }

        .product-info .image-container img{
            height: 460px;
        }
        .product-info{
            flex-direction: column;
            box-shadow: none;
            border: none;
            border-radius: 0;
            padding: 0px
        }
        .product-info .image-container{
            width:100%
        }
        .product-info .product-info-details{
            width:100%
        }
        .product-info .product-info-details .product-name .product-name-truncated{
            height: 2.375rem;
        }
        .products-item-grid ul.item-grid li{
            padding-right:5px;
        }
        .products-item-grid ul.item-grid.with-details li .product-info-details .product-name{
            font-size: 0.75rem;
            line-height: 1rem;
            margin-right: 0
        }
        .rating-wrapper {
            display: none;
        }
        .products-item-grid ul.item-grid.with-details li .product-info-details .product-prices-container .prices {
            font-size: 0.75rem;
        }
        .product-info .product-info-details .product-prices-container .prices span.range{
            font-size: 0.75rem;
        }
        .product-prices-container .original-price s:after{
            border-top: none;
        }
        .product-info .product-info-details .product-name .product-name-truncated {
            height: auto;
        }
    `;
    document.getElementsByTagName('head')[0].appendChild(style);
})