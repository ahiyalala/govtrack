import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

$('.article-metadata__vote-list-toggle').click(function(e){
    e.preventDefault();
    var $parent = $(this).parent();
    var $root = $parent.parent();
    var $children = $root.children('.article-metadata__votes-item--is-toggled');
    $children.each(function(i, html){
        $(this).removeClass('article-metadata__votes-item--is-toggled');
    })
    $parent.toggleClass('article-metadata__votes-item--is-toggled');
})

$('.js-toggler').click(function(e){
    e.preventDefault();
    var $parent = $(this).parent();
    var $root = $parent.parent();
    var $children = $root.children('.is-toggled');
    $children.each(function(i, html){
        $(this).removeClass('is-toggled');
    })
    $parent.toggleClass('is-toggled');
})
