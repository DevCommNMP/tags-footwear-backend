const Query = require('../../modals/query/query');
const Review = require('../../modals/review/review');

// Server-side (createQuery function)
const createQuery = async (req, res) => {
    try {
      const { name, email, message } = req.body; // Extract data from request body
      console.log(name, email, message); // Verify data received
  
      // Assuming Query is a model from your ORM or database library
      const query = await Query.create({ name: name, query: message, email: email });
      
      res.status(200).json({ success: true, error: false });
      // Further processing, if needed
    } catch (error) {
      res.status(203).json({ success: false, error: true, message: error.message }); // Handle error
    }
  };
  
  
  
// Controller function to get all reviews for a product


module.exports={
    createQuery
 
}
// Other controller functions for updating and deleting reviews can be added here
