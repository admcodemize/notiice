import mongoose, { Schema } from "mongoose";

import { IFileSchema } from "../types/models/Files";

export const fileSchema: Schema = new mongoose.Schema<IFileSchema>({

});

export const fileModel = mongoose.model<IFileSchema>("files", fileSchema);