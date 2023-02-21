import mongoose from 'mongoose';

mongoose.set('strictQuery', false);
const connectDB = (url) =>
    mongoose.connect(url).then(console.log('Database Connected'));

export default connectDB;
