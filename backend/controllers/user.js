const users = require("../models/users");
const login = async (req, res) => {
  const { email, password } = req.query;
  if (!email || !password)
    return res.status(200).json({
      message: "Email and Password are required",
      success: false,
    });

  //checking user is already
  const data = await users.find({ email: email, password: password });
  if (data.length>0) {
    return res.status(200).json({
      message: "User login success",
      success: true,
      data: data
    });
  }

  return res.status(200).json({
    message: "Email or password is incorrect",
    success: false,
  });
};

const logout = (req, res) =>
{
  return res.status(200).json({
    message: 'Logged out successfully',
    success : true,
  })
}

const register = async (req, res) => {
  const { email, password, username } = req.query;

  if (!email || !username || !password)
    return res.status(200).json({
      message: "All fields are mandatory",
      success: false,
    });

  const user = await users.findOne({ email: email });
  if (user) {
    return res.status(200).json({
      message: "User already exists",
      success: false,
    });
  }

  const data = await users.create({
    username,
    email,
    password,
  });
  if (data) {
    return res.status(200).json({
      message: "Registration Successful!",
      success: true,
      data:  data,
    });
  }

  return res.status(200).json({
    message: "Email or password is invalid",
    success: false,
  });
};

const deleteUser = async (req, res) => {
  try {
    const { email, password } = req.query;
    const user = await users.deleteOne({ email: new RegExp("^"+email+"$"), password: password });
    if (user.deletedCount > 0) {
      return res.status(200).json({
        message: "User deleted successfully",
        success: true,
      });
    }
    return  res.status(200).json({
      message:"No such User found" ,
      success :false
    });
  } catch (error) {
    console.log("Error in deleting the user");
  }
};

const allUsers = async (req, res) => {
  try 
  {
    const allUsers = await users.find();
    if(allUsers)
    {
        return res.status(200).json(
            {
                message: 'All Users fetched successfully',
                success: true,
                data: allUsers
            }
        )
    }
    return res.status(200).json(
        {
            message: 'Something went wrong',
            success: false,
        }
    )
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  login,
  logout,
  register,
  deleteUser,
  allUsers,
};
