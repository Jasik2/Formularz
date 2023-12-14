$(document).ready(function() {
    $("#registrationForm").validate({
        rules: {
            firstName: "required",
            lastName: "required",
            birthDate: {
                required: true,
                date: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                digits: true,
                minlength: 9,
                maxlength: 9
            },
            province: "required",
            gender: "required"
        },
        messages: {
            firstName: "Proszę podać imię",
            lastName: "Proszę podać nazwisko",
            birthDate: {
                required: "Proszę podać datę urodzenia",
                date: "Nieprawidłowy format daty"
            },
            email: {
                required: "Proszę podać adres email",
                email: "Nieprawidłowy format adresu email"
            },
            phone: {
                required: "Proszę podać numer telefonu",
                digits: "Numer telefonu może zawierać tylko cyfry",
                minlength: "Numer telefonu musi zawierać 9 cyfr",
                maxlength: "Numer telefonu musi zawierać 9 cyfr"
            },
            province: "Proszę wybrać województwo",
            gender: "Proszę wybrać płeć"
        }
    });
});
