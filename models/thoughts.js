const { Schema, model } = require ('mongoose');
const reactionSchema = require('./reactions')

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: function(date){
                return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
            }
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
)

thoughtSchema.virtual("reactionCount").get(function() {
    return this.reactions.length
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought