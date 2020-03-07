const mongoose = require('mongoose');
const moment = require('moment');

const now = moment().format('LLLL');
console.log(now);
const commentSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    username: {
      type: String
    },
    email: {
      type: String
    },
    comment: {
      type: String
    },
    date: {
      type: String,
      default: `${now}`
    }
  },
  {
    collection: 'Comment'
  }
);

// commentSchema.pre('save', (next) => {
//   if (this.date === '') {
//     this.date = now;
//   } else {
//     this.date = {
//       type: Date,
//       default: Date.now
//     };
//   }
//   next();
// });

// commentSchema.pre('save', (next) => {
//   // const Fdate = this;
//   if (!this.date == '') {
//     return next();
//   }
//   this.date = now;
//   next();
// });

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
