const { Schema } = require('mongoose');

const reactionSchema = new Schema(
    {  
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: function(date){
                return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
            }
        }
    }
)