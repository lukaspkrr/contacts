import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactDescription = ({label = '', content = '-'}) => {
    return (
        <View style={styles.detailContainer}>
            <View style={styles.line}>
                <Text style={[
                    styles.cell, 
                    styles.label, 
                    label.length > 8 ? styles.longLabel : null
                    ]}>{label}: </Text>
                <Text style={[styles.cell, styles.content]}>{ content }</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    detailContainer: {
        backgroundColor: '#ffeded',
        marginTop: 5,
        elevation: 1,
        borderRadius: 10
    },
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3
    },
    cell : {
        fontSize: 18,
        paddingLeft: 5
    },
    label: {
        fontWeight: 'bold',
        flex: 1
    },
    content: {
        flex: 4
    },
    longLabel: {
        fontSize: 10
    }
});

export default ContactDescription;