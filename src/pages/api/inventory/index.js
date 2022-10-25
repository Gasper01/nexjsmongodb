import { dbConnect } from 'utils/mongose';
import inventory from 'models/model_inventory';

dbConnect();

export default async function handler(req, res) {
	const { method, body } = req;

	switch (method) {
		case 'GET':
			const inventorys = await inventory.find();
			return res.status(200).json(inventorys);

		case 'POST':
			const newResgitroinventory = new inventory(body);
			const saveResgitroinventory = await newResgitroinventory.save();
			return res.status(201).json(saveResgitroinventory);

		default:
			return res
				.status(400)
				.json({ msg: 'metodo is not supported ' });
	}
}
