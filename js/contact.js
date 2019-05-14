$(document).ready(function(){
    /*
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");
    */
    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Please enter your name",
                    minlength: "Your name must contain at least 2 characters"
                },
                subject: {
                    required: "Please add a subject",
                    minlength: "Your subject must contain at least 4 characters"
                },
                number: {
                    required: "Please put your number",
                    minlength: "Your number must contain at least 5 characters"
                },
                email: {
                    required: "No email, no message"
                },
                message: {
                    required: "You need to type something to be sent.",
                    minlength: "Please add something more"
                }
            },
        })
    })
        
 })(jQuery)
//})