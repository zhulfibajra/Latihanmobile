import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Gap, Header, Link } from '../../components'
import { IconAddPhoto, ILNullPhoto } from '../../assets'
import { colors, fonts } from '../../utils'

const UploadPhoto = () => {
  return (
    <View style={styles.page}>
        <Header title="Upload Photo" />
    <View style={styles.content}>
         <View style={styles.profile}>
            <View style={styles.avatarWrapper}>
                <Image source={ILNullPhoto} style={styles.avatar} />
                <IconAddPhoto style={styles.addPhoto} />
            </View>
           
                  <Text style={styles.name}>Shayna Melinda</Text>
                <Text style={styles.profession}>Product Designer</Text>
            </View>
            <View>
                <Button title="Upload And Continue" />
                <Gap height={30} />
                <Link title="Skip for this" align="center" size={16} />
            </View>
    </View>
    </View>
  )
}

export default UploadPhoto

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    profile: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    avatar: {
        width: 110,
        height: 110,
    },
    content:{
        paddingHorizontal: 40,
        paddingBottom: 64,
        flex: 1,  
        justifyContent: 'space-between',
    }, 
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addPhoto: {
        position: 'absolute',
        bottom: 8,
        right: 8
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign: 'center'
    },
    profession: {
        fontSize: 18,
        fontFamily: fonts.primary.normal,
        textAlign: 'center',
    }

})