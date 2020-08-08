import React, { useState, useEffect } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';

import PageHeader from '../../components/page-header';
import TeacherItem, { Teacher } from '../../components/teacher-item';

import api from '../../services/api';

import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';


function TeacherList() {


    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [isFiltersVisible, setIsFilterVisible] = useState(false);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');



    function handleToggleFiltersVisible() {
        setIsFilterVisible(!isFiltersVisible)
    }

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds =
                    favoritedTeachers.map((teacher: Teacher) => {
                        return teacher.id;
                    })
                setFavorites(favoritedTeachersIds)
            }
        })
    }

    useEffect(() => {
        setSubject('English');
        setWeekDay('1');
        setTime('8:00');
    }, [])

    async function handleFiltersSubmit() {
        loadFavorites();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });
        setTeachers(response.data);
        setIsFilterVisible(false);

    }


    return (
        <View style={styles.container} >
            <PageHeader title={"Proffys Disponíveis"} headerRight={(
                <BorderlessButton onPress={handleToggleFiltersVisible}>
                    <Feather name="filter" size={20} color="#FFF" />
                </BorderlessButton>
            )} >
                {isFiltersVisible &&
                    (
                        <View style={styles.searchForm}>
                            <Text style={styles.label}>Matéria</Text>
                            <TextInput
                                style={styles.input}
                                value={subject}
                                onChangeText={text => setSubject(text)}
                                placeholder={"Qual a matéria?"}
                                placeholderTextColor="#c1bccc"
                            />

                            <View style={styles.inputGroup} >
                                <View style={styles.inputBlock} >
                                    <Text style={styles.label}>Dia da semana</Text>
                                    <TextInput
                                        style={styles.input}
                                        value={week_day}
                                        onChangeText={text => setWeekDay(text)}
                                        placeholder={"Qual o dia?"}
                                        placeholderTextColor="#c1bccc"
                                    />
                                </View>
                                <View style={styles.inputBlock} >
                                    <Text style={styles.label}>Horário</Text>
                                    <TextInput
                                        style={styles.input}
                                        value={time}
                                        onChangeText={text => setTime(text)}
                                        placeholder={"Qual horário?"}
                                        placeholderTextColor="#c1bccc"
                                    />
                                </View>
                            </View>

                            <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                                <Text style={styles.submitButtonText}>Filtrar</Text>
                            </RectButton>
                        </View>
                    )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {teachers.map((teacher: Teacher) => (
                    <TeacherItem
                        key={teacher.id}
                        teacher={teacher}
                        favorited={favorites.includes(teacher.id)}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default TeacherList;