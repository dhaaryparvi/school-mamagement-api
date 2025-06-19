const db=require('../db');
const getDistance=require('../utils/distanceCalculator');
exports.addSchool=async(requestAnimationFrame,res)=>{
    const {name,address,latitude , longitude}=requestAnimationFrame.body;
    if(!name || !address || !latitude || !longitude){
        return res.status(400).json({error:"All fields are require"});
    }
    try{
        const query='INSERT INTO school(name , address , latitude , longitude) VALUES(?,?,?,?)';
        await db.execute(query,[name,address,latitude,longitude]);
        res.status(201).json({message:"school added successfully"});

    }catch(err){
        res.status(500).json({error:"database error",details:err.message});
    }
};
exports.listSchools = async (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ error: "Latitude and longitude are required" });
  }

  try {
    const [rows] = await db.execute('SELECT * FROM schools');
    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);

    const sorted = rows.map(school => {
      const distance = getDistance(userLat, userLon, school.latitude, school.longitude);
      return { ...school, distance };
    }).sort((a, b) => a.distance - b.distance);

    res.json(sorted);
  } catch (err) {
    res.status(500).json({ error: "Database error", details: err.message });
  }
};

