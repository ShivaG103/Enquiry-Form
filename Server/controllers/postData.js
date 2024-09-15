const UserData = require('../models/UserData')

exports.postData = async (req, res) => {
    
    try {
        
        const {name, contact, email, propertyType, possession, city, area, budget, comments} = req.body;
    
        if(!name || !contact || !propertyType || !possession || !city || !area) {
			return res.status(400).json({
                success:false,
                message:"Please fill up all the Required Fields",
            });
        }

        const userData = await UserData.create({
            name, contact, email, propertyType, possession, city, area, budget, comments 
        });
        
            res.status(200).json({
                success:true,
                userData,
                message:"Submit Success",
            });
        

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success:false,
            message:"Invalid Request",
        });
    }
};


exports.get = async (req, res) => {

    try {
        const allData = await UserData.find({});
        return res.status(200).json({
            success: true,
            data: allData,
        });
    
    } catch (error) {
        console.error(error);
        return res.status(404).json({
            success:false,
            message:"Cannot fetch data",
            error:error.message,
        });
    }
}