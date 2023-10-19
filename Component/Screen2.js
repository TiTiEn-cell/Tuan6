import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Switch, TouchableOpacity } from 'react-native-web';


export default function Screen2({ navigation }) {
    const [anh, setAnh] = useState(require('../Image/vs_blue.png'));
    switch(anh){
        case 'silver':
            return  require('../Image/vs_silver.png');
        case 'red':
            return require('../Image/vs_red.png');
        case 'black':
            return require('../Image/vs_black.png');
        
        case 'blue':
            return require('../Image/vs_blue.png');
    }



    return ( <
        View style = { styles.container } >
            <View style = {styles.infoPhone}>
            <Image source={anh} style = {styles.imagePhone}/>
            <Text style = {styles.textPhone}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
            </View>

            <View style = {styles.colorChoose}>
                <Text style = {styles.textColor}>Chọn một màu bên dưới:</Text>

                <TouchableOpacity
                onPress = {()=> setAnh('silver')}>
                <Image source={require('../Image/lineBlue.png')} style = {styles.imageColor}/>
                </TouchableOpacity>

                <TouchableOpacity
                onPress = {()=> setAnh('red')}
                >
                <Image source={require('../Image/Red.png')} style = {styles.imageColor}/>             
                </TouchableOpacity>

                <TouchableOpacity
                onPress = {()=> setAnh('black')}
                >              
                <Image source={require('../Image/black.png')} style = {styles.imageColor}/>              
                </TouchableOpacity>

                <TouchableOpacity
                onPress = {()=> setAnh('blue')}
                >               
                <Image source={require('../Image/Blue.png')} style = {styles.imageColor}/>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.buttonXong} 
                onPress = {()=> navigation.navigate('screen1')}
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