import mongoose from 'mongoose';

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI || '');
  } catch (error) {
    console.error('エラー:', error); //追加
    console.log('DB接続に失敗しました');
    throw new Error();
  }
};
