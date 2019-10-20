<!-- new method added for UK phone number s-->

jQuery.validator.addMethod('phoneUK', function(phone_number, element)
    {
        return this.optional(element) || phone_number.length > 9 && phone_number.match(/^(\(?(0|\+44)[1-9]{1}\d{1,4}?\)?\s?\d{3,4}\s?\d{3,4})$/);
    },
    'Please enter a valid UK phone number'
);

$(function()
    {
        $("#contact").validate(
            {
            rules:
                {
                    email_input:
                        {
                        required: true,
                        email: true
                        },
                    name_input:
                        {
                            required: true
                        },
                    phone_input:
                        {
                            required: true,
                            phoneUK: true
                        },
                    description_input:
                        {
                            required: true
                        },
                    terms_input:
                        {
                            required: true
                        }
        },
            messages:
                {
                    email_input:
                        {
                            required: 'Please enter an email address.',
                            email: 'Please enter a <em>valid </em> email address'
                        },
                    phone_input:
                        {
                            required: 'Please enter a phone number.',
                            email: 'Please enter a <em>valid </em> UK phone number'
                        },
                    terms_input:
                        {
                            required: ' '
                        }
                },
    });
});

