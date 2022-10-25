import { dbConnect } from 'utils/mongose';
import inventory from 'models/model_inventory';

dbConnect();

export default async (req, res) => {
	const {
		method,
		body,
		query: { id },
	} = req;
	switch (method) {
		case 'GET':
			const registoID = await inventory.findById(id);
			if (!registoID)
				return res.status(404).json({ msg: 'no encontrado' });
			return res.status(200).json(registoID);
		case 'PUT':
			const UpdateregistoID = await inventory.findByIdAndUpdate(
				id,
				body,
				{ new: true }
			);
			if (!UpdateregistoID)
				return res.status(404).json({ msg: 'no encontrado' });
			return res.status(200).json(UpdateregistoID);

		case 'DELETE':
			const deletregistoID = await inventory.findByIdAndDelete(id);
			if (!deletregistoID)
				return res.status(404).json({ msg: 'no encontrado' });
			return res.status(204).json();

		default:
			return res
				.status(400)
				.json({ msg: 'metodo is not supported ' });
	}
};
