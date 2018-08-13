(function () {
validateForm();
function validateForm() {

    $(document).ready(function () {
        $("#login-form").validate({

            rules: {
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 5
                }
            },

            messages: {
                password: {
                    required: "Укажите пароль",
                    minlength: "Ваш пароль должен содержать не менее 5 символов"
                },
                email: "Укажите корректный email адрес"
            },

            submitHandler: function (form) {
                form.submit();
            }
        });


        $("#register-form").validate({

            rules: {
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 5
                },
                password_again: {
                    required: true,
                    equalTo: "#password"
                }
            },

            messages: {
                password: {
                    required: "Укажите пароль",
                    minlength: "Ваш пароль должен содержать не менее 5 символов"
                },
                password_again:
                    {
                        required: "Повторите пароль",
                        equalTo: "Пароли должны совпадать друг с другом"
                    },
                email: "Укажите корректный email адрес"
            },

            submitHandler: function (form) {
                form.submit();
            }
        });



        $("#fagot-form").validate({
            rules: {
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                required: "Укажите никнейм",
                email: "Укажите корректный email адрес"
            },

            submitHandler: function (form) {
                form.submit();
            }
        });







    });

}})();

