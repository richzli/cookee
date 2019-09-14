import React, { Component } from 'react';
import { Text } from 'react-native';

export function Profile() {
    const { username, email, phone, address} = this.state
    return (
        <Text>
            Username: {username}
            E-mail: {email}
            Phone: {phone}
            Address: {address}
        </Text>
    );
}