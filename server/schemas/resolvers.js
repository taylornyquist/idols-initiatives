// const { User } = require('../models');
// const { AuthenticationError } = require('apollo-server-express');
// const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    helloWorld: () => {
      return 'Hello world!';
    }
  }
};

module.exports = resolvers;

// const resolvers = {
//   Query: {
//     me: async (parent, args, context) => {
//       if (context.user) {
//         const userData = await User.findOne({ _id: context.user._id })
//           .select('-__v -password')
//           .populate('thoughts')
//           .populate('friends');
    
//         return userData;
//       }
    
//         throw new AuthenticationError('Not logged in');
//       },
//     categories: async () => {
//         return await Category.find();
//       },
//     },
//     Mutation: {
//         addUser: async (parent, args) => {
//             const user = await User.create(args);
//             const token = signToken(user);
      
//             return { token, user };
//           },

//         login: async (parent, { email, password }) => {
//             const user = await User.findOne({ email });
      
//             if (!user) {
//               throw new AuthenticationError('Incorrect credentials');
//             }
      
//             const correctPw = await user.isCorrectPassword(password);
      
//             if (!correctPw) {
//               throw new AuthenticationError('Incorrect credentials');
//             }
      
//             const token = signToken(user);
      
//             return { token, user };
//           },
//         saveIdol: async (parent, { input }, context) => {
//            if (context.user) {
//                const updatedUser = await User.findByIdAndUpdate(
//                    { _id: context.user._id },
//                    { $addToSet: { idols: input } },
//                    { new: true }
//                );

//                return updatedUser;
//            }
//            throw new AuthenticationError('You need to be logged in!')
//            },
//     }
// };

// module.exports = resolvers;