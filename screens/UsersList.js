import React, {useEffect, useState} from 'react'
import { View, Text, Button } from "react-native"
import firebase from "../database/firebase"
import { ScrollView } from 'react-native-web'
import { ListItem, Avatar } from '@rneui/themed'

const UsersList = (props) => {

  const [users, setUsers] = useState([])

  return (
    <ScrollView>
      <Button title="Create User" onPress={()=> props.navigation.navigate("CreateUserScreen")}/>
      {
        users.map(user => {
          return (
            <ListItem 
              key={user.id}
              bottomDivider
              onPress={()=> {
                props.navigation.navigate("UserDetailScreen", {
                  userId: user.id
                })
              }}
            >
              <ListItem.Chevron />
              <Avatar 
                rounded
                source={{uri: "https://randomuser.me/api/portraits/men/36.jpg"}}
              />
              <ListItem.Content>
                  <ListItem.Title>
                    {user.name}
                  </ListItem.Title>
                  <ListItem.Subtitle>
                    {user.email}
                  </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )
        })
      }
    </ScrollView>
  )
}

export default UsersList