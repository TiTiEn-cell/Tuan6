import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Switch, TouchableOpacity } from 'react-native-web';

const colorList = [
    {mau: "#C5F1FB", img: require('../Image/vs_silver.png')},
    {mau: "#F30D0D", img: require('../Image/vs_red.png')},
    {mau: "#000000", img: require('../Image/vs_black.png')},
    {mau: "#234896", img: require('../Image/vs_blue.png')},
    
]

export default function Screen2({ navigation }) {
    const [anh, setAnh] = useState(require('../Image/vs_blue.png'));
    
    const getAnh = (anh) =>{
        setAnh(anh)
    }

    return ( <
        View style = { styles.container } >
            <View style = {styles.infoPhone}>
            <Image source={anh} style = {styles.imagePhone}/>
            <Text style = {styles.textPhone}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
            </View>

            <View style = {styles.colorChoose}>
                <Text style = {styles.textColor}>Chọn một màu bên dưới:</Text>

                {colorList.map((color) =>
                <TouchableOpacity
                key = {color}
                style = {[styles.imageColor, {backgroundColor:color.mau}]}
                onPress = {()=>getAnh(color.img)}
                ></TouchableOpacity>
                )}
                
               
                <TouchableOpacity style = {styles.buttonXong} 
                onPress = {()=> navigation.navigate('screen1', {setAnh: anh})}
                >              
                <Text style = {styles.textXong}>Xong</Text>
                </TouchableOpacity>
                

                

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    infoPhone:{
        flexDirection: 'row',
    },
    imagePhone:{
        width: 112,
        height: 132,
        left: 4,
    },
    textPhone:{
        fontSize: 15,
        marginLeft: 20,
        marginTop: 15,
        width: 160,
    },
    colorChoose:{
        marginTop: 20,
        flex:1,
        alignItems: 'center',
        backgroundColor: 'grey',
    },
    textColor:{
        marginRight: 140,
        fontSize: 20,
    },
    imageColor:{
        borderWidth:1,
        width: 85,
        height: 80,
        marginVertical: 8,     
    },
    buttonXong:{
        marginTop: 50,
        borderWidth: 1,
        width: 360,
        height: 40,
        borderRadius: 8,
        borderColor: '#CA1536',
        backgroundColor: '#1952E294',
    },
    textXong:{
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        lineHeight: 35,
    }


});