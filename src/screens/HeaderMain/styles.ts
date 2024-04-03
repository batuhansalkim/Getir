import { StyleSheet,Dimensions } from "react-native";
const {height} = Dimensions.get("window");

const styles = StyleSheet.create({
    headerMain:{
        height:height*0.064,
        backgroundColor:"#F7D102"
    },
    headerOne:{
        height:height*0.064,
        width:"82%",
        backgroundColor:"white",
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:"4%",
        borderTopRightRadius:25,
        borderBottomRightRadius:25,
    },
    headerOneText:{
        fontWeight:"600",
        fontSize:16,
        
    },
    headerAdressText:{
        fontSize:11,
        color:"#6E7480",
        marginLeft:7,
        marginRight:1,
    },
    image:{
        width:30,
        height:30,
    },
    headerOneView:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft:8,
        paddingLeft:8,
        borderColor:"#F3F2FD",
        borderLeftWidth:2,
    },
    headerTwo:{
        // backgroundColor:"red",
        width:"28%",
        height:height*0.064,
        justifyContent:"center",
        alignItems:"center", 
        paddingLeft:4,
    },
    headerTwoText:{
        fontSize:10,
        fontWeight:"bold",
        color:"#5D3EBD",
        marginBottom:-4
    },
    headerTwoTimeText:{
        fontSize:20,
        fontWeight:"bold",
        color:"#5D3EBD",
    },
    headerTwoMinuteText:{
        fontSize:16,
        color:"#5D3EBD",
        
    }
}) 

export default styles;