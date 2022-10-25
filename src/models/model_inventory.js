import { Schema, model, models } from 'mongoose';

const inventorySchema = new Schema(
	{
		code: {
			type: String,
			require: [true, 'codigo is required'],
			unique: true,
			trim: true,
		},

		descripcion: {
			type: String,
			require: [true, 'descripción is required'],
			trim: true,
			maxlength: [300, ' maxlength is 300 '],
		},

		precentacion: {
			type: String,
			require: true,
			trim: true,
		},
		ubicacion: {
			type: String,
			require: [true, 'ubicación is required'],
			trim: true,
		},
		cantidad: {
			type: Number,
			require: [true, 'number is required'],
			trim: true,
		},

		foto: {
			type: String,
			require: [true, 'descripcion is required'],
			trim: true,
		},
	},

	{
		timestamps: true,
		versionKey: false,
	}
);
export default models.inventarios ||
	model('inventarios', inventorySchema);
