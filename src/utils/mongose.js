import { connect, connection } from 'mongoose';

const conn = {
	isConnected: false,
};

export async function dbConnect() {
	if (conn.isConnected) return;

	const db = await connect(
		'mongodb+srv://gasper:xXltOK6EDwGJmj3X@cluster0.qwb4s.mongodb.net/databodega?retryWrites=true&w=majority'
	);

	conn.isConnected = db.connections[0].readyState;

	console.log(db.connection.db.databaseName);
}

connection.on('connected', () => {
	console.log('Mongodb connected to db');
});

connection.on('error', (err) => {
	console.error('Mongodb connected to', err.message);
});
