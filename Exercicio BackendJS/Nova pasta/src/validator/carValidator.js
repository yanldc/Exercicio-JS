const {checkSchema} = require('express-validator')

module.exports = {
    postCarAction: checkSchema({
        model:{
            notEmpty: true,
            trim: true,
            isLength:{
                options:{min:2}
            },
            errorMessage: "Modelo precisa de pelo menos 2 caracteres"
        },

        year: {
            notEmpty: true,
            isInt: {
            options: { min: 1900, max: 2025 }
        },
            errorMessage: "Ano precisa ser um número entre 1900 e 2025"
        },

       color:{
            notEmpty: true,
            trim: true,
        }, 

        fuel:{
            notEmpty: true,
            trim: true,
        }, 

        air:{
            notEmpty: true,
            isBoolean: true,
            errorMessage: "O campo precisa ser verdadeiro ou falso"
        },

        eletricWindow:{
            notEmpty: true,
            isBoolean: true,
            errorMessage: "O campo precisa ser verdadeiro ou falso"
        },

        userId: {
            notEmpty: true,
            isMongoId: {
            errorMessage: 'ID do usuário inválido'
        },
            errorMessage: 'userId é obrigatório'
}
    }),
     
    editCarAction: checkSchema({
        model:{
            optional: true,
            trim: true,
            isLength:{
                options:{min:2}
            },
            errorMessage: "Modelo precisa de pelo menos 2 caracteres"
        },

        year: {
            optional: true,
            isInt: {
            options: { min: 1900, max: 2025 }
        },
            errorMessage: "Ano precisa ser um número entre 1900 e 2025"
        },

       color:{
            optional: true,
            trim: true,
        }, 

        fuel:{
            optional: true,
            trim: true,
        }, 

        air:{
            optional: true,
            isBoolean: true,
            errorMessage: "O campo precisa ser verdadeiro ou falso"
        },

        eletricWindow:{
            optional: true,
            isBoolean: true,
            errorMessage: "O campo precisa ser verdadeiro ou falso"
        },

        userId: {
            optional: true,
            isMongoId: {
            errorMessage: 'ID do usuário inválido'
        },
}
    }),


}