import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container:{
padding:10,
flexDirection:"row",

    },

    image:{
        width:100,
        height:100,
        borderRadius:50
    },
inner_container:{
    padding:10,
    flex:1,
    justifyContent:"center",
},
    title:{
        fontWeight:"bold",
        fontSize:25
    },

    info_container:{
        flexDirection:"row",
        flex:1,alignItems:"center"
    },

    year:{
        marginLeft:10,
        color:"gray",
        fontWeight:"bold",
        fontSize:12,
        marginTop:2
    },


    soldout_container:{
    borderWidth:1,
    borderColor:"red",
    padding:2,
    borderRadius:6,
    justifyContent:"center",
    alignItems:"center"},


    soldout_tittle:{color:"red"},
    content_container:{
        flexDirection:"row",
    }

})