// Step 1: get DOM elements using jQuery
let $nextDom = $('#next');
let $prevDom = $('#prev');

let $carouselDom = $('.carousel');
let $sliderDom = $carouselDom.find('.list');
let $thumbnailBorderDom = $carouselDom.find('.thumbnail');
let $thumbnailItemsDom = $thumbnailBorderDom.find('.item');
let timeRunning = 3000;
let timeAutoNext = 7000;

// Append the first thumbnail to the end of the thumbnail container
$thumbnailBorderDom.append($thumbnailItemsDom.first());

// Set up the automatic next slide
let runNextAuto = setTimeout(function() {
    $nextDom.trigger('click');
}, timeAutoNext);

// Event listener for the next button
$nextDom.on('click', function() {
    showSlider('next');    
});

// Event listener for the previous button
$prevDom.on('click', function() {
    showSlider('prev');    
});

let runTimeOut;

function showSlider(type) {
    let $sliderItemsDom = $sliderDom.find('.item');
    let $thumbnailItemsDom = $thumbnailBorderDom.find('.item');
    
    if (type === 'next') {
        $sliderDom.append($sliderItemsDom.first());
        $thumbnailBorderDom.append($thumbnailItemsDom.first());
        $carouselDom.addClass('next');
    } else {
        $sliderDom.prepend($sliderItemsDom.last());
        $thumbnailBorderDom.prepend($thumbnailItemsDom.last());
        $carouselDom.addClass('prev');
    }

    // Remove classes after animation completes
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(function() {
        $carouselDom.removeClass('next prev');
    }, timeRunning);

    // Reset the auto-next timer
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(function() {
        $nextDom.trigger('click');
    }, timeAutoNext);
}
