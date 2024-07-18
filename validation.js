import {body} from 'express-validator'

export const registerValidation = [
    body('telegramName', 'Укажите ваш ник в телеграмме').isString(),
    body('password', 'Пароль должен быть минимум 5 символов').isLength({min: 5})
]

export const loginValidation = [
    body('telegramName', 'Укажите ваш ник в телеграмме').isString(),
    body('password', 'Пароль должен быть минимум 5 символов').isLength({min: 5})
]