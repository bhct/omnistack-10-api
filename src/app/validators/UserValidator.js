const Yup = require('yup')

class UserValidator {
    validation(body, role) {
        let validationConfig;

        switch (role) {
            case 'store':
                validationConfig = Yup.object().shape({
                    username: Yup.string().required(),
                    password: Yup.string().required().min(6),
                
                });
                break;

            case 'update':
                validationConfig = Yup.object().shape({
                    username: Yup.string(),
                    password: Yup.string().min(6),
                
                });
                break;
        }

        return validationConfig.isValid(body);
    }
}

module.exports = new UserValidator().validation
