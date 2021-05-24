import React, {useState, useEffect} from 'react';
import { Text, View, Button} from 'react-native';
import {globalStyles} from '../styles/global';
import axios from 'axios'

export default function Details({navigation, route}){
    const { id, title, body } = route.params;
    const [isLoading, setIsLoading] = useState(false);
    const [item, setItem] = useState([]);
    const [post, setPost] = useState([]);

    const getPost = () => {
      setIsLoading(true);
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          console.log(res.data);
          setPost(res.data);
          setIsLoading(false);
        })
        .catch(() => {
          alert("Error Fetch Data");
          setIsLoading(false);
        });
    };
  
    useEffect(() => {
      //Function Get Post
      getPost();
    }, []);

    const deletePost = () => {
        
        axios
        .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          console.log(res.data);
          setPost(res.data);
          setIsLoading(false);
        })       
        .catch(() => {
          alert("Error Fetch Data");
          
        });
      };
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.detailContainer}>
                <Text style={globalStyles.titleText}>{title}</Text>
                <Text style={globalStyles.bodyText}>{body}</Text>
                <Button title='delete' onPress={deletePost}/>
            </View>            
        </View>
    )
}
