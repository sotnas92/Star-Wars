'use strict';
var quoteOf = {};
var quoteIs = function(author) {
                return function(quote){
                  quoteOf[author] = quote;
                }
            };

var quotes = [{
  'author': 'Yoda',
  'quote': 'When 900 years old, you reach… Look as good, you will not.',
  'image': 'Yoda.jpeg'

}, {
  'author': 'Senator palpatine',
  'quote': 'The Dark Side of the Force is the pathway to many abilities some consider to be.. Unnatural.',
  'image': 'SenatorPalpatine.jpg'

}, {
  'author': 'Count Dooku',
  'quote': 'I sense great fear in you, Skywalker. You have hate… you have anger… but you don’t use them.',
  'image': 'CountDooku.jpg'

}, {
  'author': 'Darth vader',
  'quote': 'Luke, you can destroy the Emperor. He has foreseen this. It is your destiny. Join me, and together we can rule the galaxy as father and son.',
  'image':'DarkVador.jpg'
}, {
  'author': 'Princess leila',
  'quote': 'Aren\'t you a little short for a storm trooper?',
  'image': 'PrincesseLeila.jpg'

}, {
  'author': 'Yoda',
  'quote': 'Mmm. Lost a planet, Master Obi-Wan has. How embarrassing.',
  'image': 'Yoda.jpeg'

}, {
  'author': 'Qui-Gon Jinn',
  'quote': 'Your focus determines your reality',
  'image': 'Qui-GonJinn.jpg'

}, {
  'author': 'Yoda',
  'quote': 'Do. Or do not. There is no try.',
  'image': 'Yoda.jpeg'

}, {
  'author': 'Obi-Wan-Kenobi',
  'quote': 'In my experience there is no such thing as luck.',
  'image': 'Obi-Wan-Kenobi.jpg'

}, {
  'author': 'Yoda',
  'quote': 'If once you start down the dark side, forever will it dominate your destiney, consume you it will, as it did Obi-Wan\'s apprentice',
  'image': 'Yoda.jpeg'

}, {
  'author': 'Darth Vader',
  'quote': 'The Force is strong with this one.',
  'image':'DarkVador.jpg'
}];
