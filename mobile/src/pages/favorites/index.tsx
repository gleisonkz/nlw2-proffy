import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, ScrollView, AsyncStorage } from 'react-native';

import PageHeader from '../../components/page-header';

import styles from './styles';
import TeacherItem, { Teacher } from '../../components/teacher-item';
import { useFocusEffect } from '@react-navigation/native';

function Favorites() {

    const [favorites, setFavorites] = useState<Teacher[]>([]);

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                setFavorites(favoritedTeachers)
            }
        })
    }

    useFocusEffect(() => {
        loadFavorites();
    })

    return (
        <View style={styles.container} >
            <PageHeader title={"Meus Proffys Favoritos"} />

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {
                    favorites.map((teacher) => {
                        return (
                            <TeacherItem
                                key={teacher.id}
                                teacher={teacher}
                                favorited
                            />)
                    })

                }

            </ScrollView>
        </View>
    )
}

export default Favorites;