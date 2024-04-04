import { View,Text,TouchableOpacity,Image,Dimensions } from "react-native";

const {width,height} = Dimensions.get("window");

export default function index(){
    return(
        <TouchableOpacity>
            <Image style={{width:width*0.18,height:width*0.18,borderRadius:8}}  source={{ uri:'https://cdn.getir.com/cat/551430043427d5010a3a5c5e_1619242669958_1619242670038.jpeg'}}/>
            <Text>İndirimler</Text>
        </TouchableOpacity>
    )
}