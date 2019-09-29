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
                        }
        },
        messages:
            {
                email_input:
                    {
                        required: 'Please enter an email address.',
                        email: 'Please enter a <em>valid </em> email address'
                    }
            }
    });
});

