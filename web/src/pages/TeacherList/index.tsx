import React, { useState, FormEvent, useEffect, useContext } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import { Teacher } from '../../models/teacher';
import { Lesson } from '../../models/lesson';
import proffyIcon from '../../assets/images/icons/proffy.svg';

import api from '../../services/api';

import './styles.css';
import NavBar from '../../components/NavBar';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const TeacherList: React.FC = () => {
  const [fadeState, setFadeState] = useState('hidden');

  const [isSearched, setIsSearched] = useState(false);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [totalTeachers, setTotalTeachers] = useState<number>(0);

  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    setFadeState('visible');
    api.get<Lesson[]>('lesson').then((response) => {
      const lessons = response.data;
      setLessons(lessons);
    });

    api.get<number>('teacherinfo/count').then((response) => {
      const totalTeachersResponse = response.data;
      setTotalTeachers(totalTeachersResponse);
    });
  }, []);

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();
    setIsSearched(true);

    const response = await api.get<Teacher[]>('teacherinfo', {
      params: {
        subject,
        weekDay: +weekDay,
        time,
      },
    });
    console.log('teachers', response.data);
    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className={`container ${fadeState}`}>
      <NavBar pageTitle="Estudar" />
      <PageHeader
        title="Estes são os proffys disponíveis."
        icon={proffyIcon}
        textIcon={`Nós temos ${totalTeachers} professores.`}
        pageTitle="Estudar"
      >
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            options={lessons}
          />
          <Select
            name="week-day"
            label="Dia da semana"
            value={weekDay}
            onChange={(e) => setWeekDay(e.target.value)}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />

          <Input
            type="time"
            label="Hora"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
            name="time"
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>
      <main className={`container ${fadeState}`}>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem
            key={teacher.teacherID}
            teacher={teacher}
            fadeState={fadeState}
          />
        ))}

        {/*isSearched && teachers.length === 0 && (
            <p>Nenhum professor encontrado com sua pesquisa.</p>
          )*/}
      </main>
    </div>
  );
};

export default TeacherList;
