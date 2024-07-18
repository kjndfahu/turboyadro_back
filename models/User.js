import mongoose from 'mongoose'

const UserScheme = new mongoose.Schema({
    telegramName:{
        type: String,
        required: true
    },
    passwordHash:{
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('User', UserScheme)
