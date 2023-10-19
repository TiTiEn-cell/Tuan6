import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function Screen1({ navigation }) {
    return ( 
        <View style = { styles.container } >
            <Image
                source={require("../Image/vs_blue.png")}
                style = {styles.imagePhone}
            />
            <View style = {styles.body}>
                <Text style = {styles.textIFP}>
                    Điện Thoại Vsmart Joy 3 - Hàng chính hãng
                </Text>

                <View style = {styles.rating}>
                <Image source ={require("../Image/star.png")} style = {styles.imageStart}/>
                <Image source ={require("../Image/star.png")} style = {styles.imageStart}/>
                <Image source ={require("../Image/star.png")} style = {styles.imageStart}/>
                <Image source ={require("../Image/star.png")} style = {styles.imageStart}/>
                <Image source ={require("../Image/star.png")} style = {styles.imageStart}/>          
                <Text style = {styles.textRating}>(Xem 828 đánh giá)</Text>     
                </View>
                
                <View style = {styles.price}>
                    <Text style = {styles.textPrice}>1.790.000 đ</Text>
                    <Text style = {styles.textPrice}><del>1.790.000 đ</del></Text>
                </View>

                <View style = {styles.refund}>
                    <Text style = {styles.refundText}>Ở đâu rẻ hơn hoàn tiền</Text>
                    <Image source ={require("../Image/Group 1.png")} style = {styles.imageQuestion}/>            
                </View>

                <View >
                    <TouchableOpacity style = {styles.buttonChonMau} onPress = {()=> navigation.navigate('screen2')} >
                        <Text style  = {styles.textChonMau}>4 màu-chọn loại</Text>
                        <Image source={require('../Image/Vector.png')} style = {styles.imageChonMau}/>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style = {styles.buttonChonMua}>
                        <Text style = {styles.textChonMua}>CHỌN MUA</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    imagePhone:{
        width: 301,
        height: 361,
        marginBottom: 15,
    },
    textIFP:{
        fontSize: 18,
    },
    imageStart:{
        width: 23,
        height: 25,
    },
    rating:{
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    }, 
    textRating:{
        fontSize: 15,
        marginLeft: 70,
    },
    price:{
        flexDirection: 'row',
        marginBottom: 10,
    },
    textPrice:{
        paddingRight: 30,
        fontSize: 20,
    },
    refund:{
        flexDirection: 'row',
        marginBottom: 10,
    },
    refundText:{
        marginRight: 10,
        color: 'red',
    },
    imageQuestion:{
        width: 20,
        height: 20
    },
    buttonChonMau:{
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5,
        height: 35,
       
    },
    textChonMau:{
        textAlign: 'center',
        lineHeight: 30,
        fontSize: 20,
    },
    imageChonMau:{
       position: 'absolute',
        width: 11.5,
        height: 14,    
        right: 20,
        marginTop: 8,  
    },
    buttonChonMua:{     
        backgroundColor: 'red',
        borderRadius: 5,
        height: 40,
        marginTop: 60,
    },
    textChonMua:{
        textAlign: 'center',
        color: 'white',
        lineHeight: 40,
        fontSize: 20,
    }

});