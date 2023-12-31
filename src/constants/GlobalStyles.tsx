import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
    
  container: {
        flex: 1,
        backgroundColor:"white",
        alignItems: 'center',
        paddingTop: 50,
    }, 
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
    },

    button: {
      backgroundColor: '#1857CB',
      borderWidth: 1,
      borderColor: 'black',
      borderRadius:15,
      alignItems: 'center',
      padding: 8,
      margin: 10,
      width: 200,
  },
 
  confirmation: {
    backgroundColor: '#1857CB',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius:15,
    alignItems: 'center',
    padding: 8,
    margin: 10,
    width: 200,
    height: 60,
    fontWeight: 'bold',
},

confirmationText: {
  color: "#fff",
  fontSize: 30,
  textShadowColor: 'black',
  textShadowRadius: 2,
  textShadowOffset: { 
    width: 1,
    height: 1,
  },
  textAlign: 'center',
},
  button2: {
    backgroundColor: '#96cbfc',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius:15,
    alignItems: 'center',
    padding: 8,
    margin: 10,
    width: 100,
},

  buttonText: {
    color: "#fff",
    fontSize: 16,
    textShadowColor: 'black',
    textShadowRadius: 2,
    textShadowOffset: { 
      width: 1,
      height: 1,
    },
    textAlign: 'center',
  },
  buttonText2: {
    alignItems: 'center',
    color: "#fff",
    fontSize: 16,
    textShadowColor: 'black',
    textShadowRadius: 2,
    textShadowOffset: { 
      width: 1,
      height: 1,
    },

    },

  imageFormatting:{
    width: '100%',
    borderRadius: 12,
    marginTop: 6
  },

  carTitle:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },

  rentalContainer:{
    flex: 1,
    backgroundColor: "white",
    padding: 15,
    alignItems: "center",
  },

  listingsInput: {
    borderWidth: 1,
    borderColor: '#777',
    paddingLeft: 6,
    width: "100%",
    marginVertical: 4
}

});