import React, {useEffect, useState} from 'react';
import { FlatList, Text, View, TouchableOpacity, Button } from 'react-native';
import {globalStyles} from '../styles/global';
import Post from '../components/post';
import Header from '../components/header';
import axios from 'axios';

export default function Home({navigation}){

  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

    const handlePress = (item) => {
        navigation.navigate('Details', item)
    }


    const deletePost = async (id) => {
      await axios
        .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .catch(() => {
          alert("Error Fetch Data");
          
        });
      getPost();
      // axios
      // .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    //   const tempPost = post.filter(p => p.id !== id)
    //       setPost(tempPost)
    //       setIsLoading(false)
    //   // .then((res) => {
    //   //   console.log(res.data);
    //   //   setPost(res.data);
    //   //   setIsLoading(false);
    //   // })
    };

    return (
        <View style={globalStyles.container}>        
            <View style={globalStyles.content}>        
              <View style={globalStyles.list}>
                <FlatList keyExtractor={(item) => item.id.toString()} data={post} refreshing={isLoading} onRefresh={getPost} renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                    <View style={globalStyles.item}>
                      <Text style={globalStyles.title}>{item.title}</Text>
                      <Text style={globalStyles.body}>{item.body}</Text>
                      <Button title='delete' onPress={() => deletePost(item.id)}/>
                    </View>  
                    </TouchableOpacity>  
                )}/>
              </View>
            </View>
        </View>
    )
}
