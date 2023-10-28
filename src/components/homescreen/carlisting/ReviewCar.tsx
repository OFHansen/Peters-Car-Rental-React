import React from "react";
import {Button, Text, View, Image, StyleSheet, TextInput} from "react-native";
import { GlobalStyles } from "../../../constants/GlobalStyles";
import { Header } from "../../../constants/Header";

export default function ReviewCar({route}){
const {item} = route.params;

    return (
        <View style={Header.header}>
            <Text style={Header.title}>Leave a review</Text>

             <View style={reviewStyleSheet.outerContainer}>
                <Text style={GlobalStyles.carTitle}>{item.year} {item.make} {item.model}</Text>
                <Image style={GlobalStyles.imageFormatting} source={require('../../../../assets/lada.jpg')}/>
                
                <Text style={reviewStyleSheet.subtitle}>Previous rentoids said the following:</Text>
                
                <View style={reviewStyleSheet.reviewContainer}>
                    <Text style={reviewStyleSheet.reviewTitle}>Best car in the buisness</Text>
                </View>
                
                <View style={reviewStyleSheet.reviewContainer}>
                    <Text>If you ever consider renting a car, then I strongly suggest renting this one. 
                    Why? Simply because I have used this car to commit numerous murders 
                    and I have yet to be caught. Furthermore, I’ve have on multiple occasions returned 
                    it completely covered in blood both inside and out. However, their no questions asked 
                    return policy has saved me a ton of money and work hours on having to clean it manually. 
                    </Text>
                </View>

                
                
                <View style={reviewStyleSheet.postReviewContainer}>
                    <Text>Leave your own review below:</Text>
                    <TextInput placeholder={'Review Title'} style={reviewStyleSheet.input}/>
                    <TextInput 
                        multiline={true}
                        numberOfLines={4}
                        placeholder={'Review'}
                        style={reviewStyleSheet.input}/>
                    <Button title="Post review!" onPress={()=> console.log("Review submitted")}/>
                </View>
                
            </View>
        </View>
       
    )
}

const reviewStyleSheet = StyleSheet.create({
    outerContainer:{
        flex: 1,
        backgroundColor: 'white',
        padding: 15
    },
    subtitle:{
      fontWeight: 'bold',
      fontSize: 20  
    },
    reviewContainer: {
        paddingTop: 5,
        borderWidth: 6,
        borderRadius: 1,
        borderColor: "rgba(0,0,0,0.0)",
        overflow: "hidden",
        elevation: 4,
        shadowColor: 'black'
    },
    reviewTitle:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    postReviewContainer: {
        marginTop: 40,
        display: 'flex',
        alignItems: "flex-start",
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        width: '100%',
        marginVertical: 4
    }
})