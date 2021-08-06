const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  
  excercises: [{
      name: {
        type: String,
        trim: true,
        required: "Name is Required"
      },
    
      type: {
          type: String,
          trim: true,
          enum: ["cardio, resistance"],
          description: 'Cardio or Resistance Training'
      },

      weight: Number,
      sets: Number,
      reps: Number,
      duration: Number,
      distance: Number
  }]
},

{ toJSON: {
    virtuals: true
}}

);

WorkoutSchema.virtual("totalDuration").get(
  function() {
  return this.exercises.reduce((total, exercise) => {
     return total + exercise.duration
  }, 0)
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;