import { MongoClient } from 'mongodb';

const connectdb = async () => {
    const db = await MongoClient.connect(process.env.DATABASE_URL);
    return {
        Posts: db.collection('posts')
    }
}

export default connectdb;