import React, { Component } from 'react';
import { Text } from 'react-native';

export function Profile() {
    const { username, email, phone, address} = this.state
    const d = new Date();

    return (
        <Text>
            Username: {username + "\n"}
            E-mail: {email + "\n"}
            Phone: {phone + "\n"}
            Address: {address + "\n"}
            Date-Test: {`${d.getMonth()+1}-${d.getDate()}-${d.getFullYear()}`}
        </Text>
    );
}