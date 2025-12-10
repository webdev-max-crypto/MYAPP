import React, { useState } from 'react';
import { Picker, SectionList, StyleSheet, Text, TextInput, View } from 'react-native';

const App = () => {
  const [tempFilter, setTempFilter] = useState('');
  const [filterType, setFilterType] = useState('below'); // 'below' or 'above'

  const data = [
    {
      title: 'Punjab',
      data: [
        { city: 'Lahore', temp: 35 },
        { city: 'Faisalabad', temp: 33 },
        { city: 'Rawalpindi', temp: 32 },
        { city: 'Multan', temp: 36 },
      ],
    },
    {
      title: 'Sindh',
      data: [
        { city: 'Karachi', temp: 30 },
        { city: 'Hyderabad', temp: 31 },
        { city: 'Sukkur', temp: 34 },
      ],
    },
    {
      title: 'KPK',
      data: [
        { city: 'Peshawar', temp: 33 },
        { city: 'Abbottabad', temp: 28 },
        { city: 'Mardan', temp: 32 },
      ],
    },
  ];

  // Filter based on temp and filterType
  const filteredData = data
    .map(section => ({
      ...section,
      data: section.data.filter(item => {
        if (!tempFilter) return true; // no filter
        if (filterType === 'below') return item.temp <= parseInt(tempFilter);
        if (filterType === 'above') return item.temp >= parseInt(tempFilter);
        return true;
      }),
    }))
    .filter(section => section.data.length > 0);

  return (
    <View style={{ flex: 1 }}>
      {/* Temp Filter Input */}
      <View style={styles.filterContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter temperature..."
          value={tempFilter}
          keyboardType="numeric"
          onChangeText={text => setTempFilter(text)}
        />

        {/* Picker for Above / Below */}
        <Picker
          selectedValue={filterType}
          style={styles.picker}
          onValueChange={value => setFilterType(value)}
        >
          <Picker.Item label="Below" value="below" />
          <Picker.Item label="Above" value="above" />
        </Picker>
      </View>

      <SectionList
        sections={filteredData}
        ListHeaderComponent={() => (
          <Text style={styles.listHeader}>Pakistan Provinces & Cities</Text>
        )}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.city} - {item.temp}°C
          </Text>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={(item, index) => item.city + index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  picker: {
    height: 40,
    width: 120,
    marginLeft: 10,
  },
  listHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 15,
    backgroundColor: '#eee',
    textAlign: 'center',
  },
  sectionHeader: {
    padding: 10,
    backgroundColor: '#ccc',
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginHorizontal: 10,
  },
});

export default App;
//djfhsjkDHFjkSDHfjkhSJKDFhjklSDGHjklSDHGljkSHGlkjsHGjklsHGjklsHGlkjhgljkSH
//jkxhgjkkSJKGjksGjksH Gh sg fgfs jksFJKDFJKhsGJKLJKH
//laibajgjhgthg