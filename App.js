import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'

const App = () => {

  const [coins, setCoins] = useState([])

  const loadData = async () => {

    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      const data = await res.json()
     setCoins(data)
  }


useEffect(() =>{
  console.log('loaded');
  loadData();
}, [])


  return (
    <View>
      <Text>HELLO BOTS</Text>

      <FlatList
        data={coins}
        renderItem={({item}) =>{
          
          return <Text>{item.name} </Text>
        }}
      />
    </View>
  )
}

export default App
