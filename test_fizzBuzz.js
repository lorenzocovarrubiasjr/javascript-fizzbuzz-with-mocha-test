const expect = require('chai').expect;

describe('fizzBuzz', function(){

    it('should return "Fizz" with multiples of 3', function(){
        const fizzBuzz = require('./fizzBuzz.js');
        expect(fizzBuzz.fizzBuzz(3).pop()).to.equal('Fizz');
        expect(fizzBuzz.fizzBuzz(6).pop()).to.equal('Fizz');
        expect(fizzBuzz.fizzBuzz(99).pop()).to.equal('Fizz');
        expect(fizzBuzz.fizzBuzz(381).pop()).to.equal('Fizz');
        expect(fizzBuzz.fizzBuzz(999999).pop()).to.equal('Fizz');
    });

    it('should return "Buzz" with multiples of 5', function(){
        const fizzBuzz = require('./fizzBuzz.js');
        expect(fizzBuzz.fizzBuzz(5).pop()).to.equal('Buzz');
        expect(fizzBuzz.fizzBuzz(10).pop()).to.equal('Buzz');
        expect(fizzBuzz.fizzBuzz(560).pop()).to.equal('Buzz');
        expect(fizzBuzz.fizzBuzz(5095).pop()).to.equal('Buzz');
    });

    it('should return "FizzBuzz" with multiples of 3 & 5', function(){
        const fizzBuzz = require('./fizzBuzz.js');
        expect(fizzBuzz.fizzBuzz(15).pop()).to.equal('FizzBuzz');
        expect(fizzBuzz.fizzBuzz(30).pop()).to.equal('FizzBuzz');
        expect(fizzBuzz.fizzBuzz(2775).pop()).to.equal('FizzBuzz');
    });

    it('should return the number when its not a multiple of 3 or 5', function(){ 
        const fizzBuzz = require('./fizzBuzz.js');
        expect(fizzBuzz.fizzBuzz(1).pop()).to.equal(1);
        expect(fizzBuzz.fizzBuzz(29).pop()).to.equal(29);
        expect(fizzBuzz.fizzBuzz(481).pop()).to.equal(481);
        expect(fizzBuzz.fizzBuzz(998).pop()).to.equal(998);
    })

    it('should return a message when less than 1', function(){  
        const fizzBuzz = require('./fizzBuzz.js');
        expect(fizzBuzz.fizzBuzz(0)).to.equal("Please input a number greater than 0!");
        expect(fizzBuzz.fizzBuzz(-9)).to.equal("Please input a number greater than 0!");
    })
});
