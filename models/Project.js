const { Schema, model } = require('mongoose');

const projectSchema = new Schema(
    {
        owner: {type: Schema.Types.ObjectId, ref: 'User'},
        title: String, 
        image: String,
        description: String,
    },
    {
        timestamps: true
    }
)

module.exports = model('Project', projectSchema)