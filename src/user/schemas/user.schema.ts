import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    id: Number,
    sessionId: String,
    username: String,
});