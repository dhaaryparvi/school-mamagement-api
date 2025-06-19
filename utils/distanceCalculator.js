function getDistance(lat1,lon1,lat2,lon2){
    const toRead=(val)=>(val*Math.PI)/180;
    const R=6371;
    const dLat=toRoad(lat2-lat1);
    const dLon=toRead(lon2-lon1);
    const a=Math.sin(dLat/2)**2+Math.cos(toRead(lat1))*Math.cos(toRead(lat2))*Math.sin(dLon/2)**2;
    const c=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
    return R*c;
}
module.exports=getDistance